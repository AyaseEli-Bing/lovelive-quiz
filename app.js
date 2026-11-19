import { DIMENSIONS, GROUPS, MEMBERS, QUESTIONS } from "./data.js";
import { CHANGELOG } from "./changelog.js";

const app = document.getElementById("app");

const root = document.documentElement;
const themeBtn = document.querySelector("[data-theme-toggle]");
const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
const THEME_KEY = "ll-theme";

function storedTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch { return null; }
}

function applyTheme(theme, persist) {
  root.dataset.theme = theme;
  if (persist) { try { localStorage.setItem(THEME_KEY, theme); } catch {} }
  if (!themeBtn) return;
  const dark = theme === "dark";
  themeBtn.textContent = dark ? "浅色" : "深色";
  themeBtn.setAttribute("aria-pressed", String(dark));
  themeBtn.setAttribute("aria-label", dark ? "切换到浅色模式" : "切换到深色模式");
}

applyTheme(root.dataset.theme === "dark" ? "dark" : "light", false);

themeBtn?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
});

darkMedia.addEventListener("change", (event) => {
  if (!storedTheme()) applyTheme(event.matches ? "dark" : "light", false);
});

const membersOf = (gid) => Object.keys(MEMBERS).filter((id) => MEMBERS[id].group === gid);

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// seed 为 null 时保持原始顺序（兼容旧链接）；否则按种子打乱题目与选项。
function buildOrder(gid, seed) {
  if (seed == null) return QUESTIONS[gid];
  const rng = mulberry32(seed);
  return shuffled(QUESTIONS[gid], rng).map((q) => ({ ...q, opts: shuffled(q.opts, rng) }));
}

const newSeed = () => (Math.random() * 0x7fffffff) | 0;

function hashFor(gid, seed, answers, verb) {
  const pre = seed == null ? `#/${verb}/${gid}/` : `#/${verb}/${gid}/s${seed}/`;
  return pre + answers.join(",");
}

function parseHash() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter((s) => s !== "");
  if (parts.length === 0) return { view: "menu" };
  if (parts[0] === "log") return { view: "log" };
  const [verb, gid, seg3, seg4] = parts;
  if (!QUESTIONS[gid] || (verb !== "quiz" && verb !== "result")) return { view: "menu" };
  let seed = null, raw;
  if (typeof seg3 === "string" && /^s\d+$/.test(seg3)) { seed = parseInt(seg3.slice(1), 10); raw = seg4; }
  else { raw = seg3; }
  const order = buildOrder(gid, seed);
  const answers = [];
  for (const token of (raw || "").split(",")) {
    if (token === "") continue;
    const n = Number(token);
    if (!Number.isInteger(n) || n < 0 || n >= order[answers.length].opts.length) return { view: "menu" };
    answers.push(n);
    if (answers.length >= order.length) break;
  }
  return { view: answers.length >= order.length ? "result" : "quiz", gid, seed, answers };
}

function userVec(gid, answers, seed) {
  const qs = buildOrder(gid, seed);
  const v = [0, 0, 0, 0, 0, 0];
  qs.forEach((question, qi) => {
    const vec = question.opts[answers[qi]].vec;
    for (let d = 0; d < 6; d++) v[d] += vec[d];
  });
  return v;
}

function score(gid, answers, seed) {
  const qs = buildOrder(gid, seed);
  const LAM = 0.5, PRI = 3, SEC = 1;
  const v = userVec(gid, answers, seed);
  const nv = Math.hypot(...v);
  const got = {}, cap = {};
  const ids = membersOf(gid);
  for (const id of ids) { got[id] = 0; cap[id] = 0; }
  qs.forEach((question, qi) => {
    const prim = new Set(), secs = new Set();
    for (const o of question.opts) { prim.add(o.from); if (o.sec) secs.add(o.sec); }
    for (const id of ids) cap[id] += prim.has(id) ? PRI : (secs.has(id) ? SEC : 0);
    const chosen = question.opts[answers[qi]];
    got[chosen.from] += PRI;
    if (chosen.sec) got[chosen.sec] += SEC;
  });
  return ids
    .map((id) => {
      const p = MEMBERS[id].profile;
      const np = Math.hypot(...p);
      let dot = 0;
      for (let d = 0; d < 6; d++) dot += v[d] * p[d];
      const cos = nv > 0 && np > 0 ? dot / (nv * np) : 0;
      const blended = got[id] + LAM * (cos + 1) / 2;
      return { id, count: got[id], cos, blended, pct: Math.round((100 * blended) / (cap[id] + LAM)) };
    })
    .sort((x, y) => y.blended - x.blended || y.count - x.count);
}

const optKeys = ["1", "2", "3", "4"];

function menuView() {
  const seed = newSeed();
  const cards = Object.values(GROUPS).map((g) => {
    if (g.soon) {
      return `<div class="group-card is-soon">
      <h2>${g.name}</h2>
      <p class="group-sub">${g.subtitle}</p>
      <span class="chip soon-chip">题目制作中</span>
    </div>`;
    }
    const ids = membersOf(g.id);
    const swatches = ids.map((id) => `<span class="swatch" style="--member-color:${MEMBERS[id].color}"></span>`).join("");
    const units = g.units.map((u) => `<span class="chip">${u}</span>`).join("");
    return `<a class="group-card" href="#/quiz/${g.id}/s${seed}/">
      <h2>${g.name}</h2>
      <p class="group-sub">${ids.length} 位成员 · ${QUESTIONS[g.id].length} 道题 · ${g.subtitle}</p>
      <div class="swatch-row" aria-hidden="true">${swatches}</div>
      <div class="unit-row">${units}</div>
      <span class="group-cta">开始这个团的测试 →</span>
    </a>`;
  }).join("");
  return `<section>
    <h2 class="view-title" tabindex="-1">先选一个团体</h2>
    <p class="view-lead">选一个团体，答 20 道情境题，看看你最像谁。</p>
    <div class="group-menu">${cards}</div>
  </section>`;
}

function quizView(gid, answers, seed) {
  const order = buildOrder(gid, seed);
  const qi = answers.length;
  const question = order[qi];
  const total = order.length;
  const opts = question.opts.map((opt, i) => `<button class="opt" type="button" data-opt="${i}">
      <span class="opt-key" aria-hidden="true">${optKeys[i]}</span>
      <span>${opt.text}</span>
    </button>`).join("");
  const back = qi > 0
    ? `<button class="textlink" type="button" data-back>上一题</button>`
    : `<a class="textlink" href="#/">换回团体菜单</a>`;
  return `<section>
    <div class="quiz-head">
      <h2 class="view-title" tabindex="-1">${GROUPS[gid].name} · 情景问答</h2>
      <p class="quiz-count">第 ${qi + 1}/${total} 题</p>
    </div>
    <div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${qi + 1}"
         aria-label="答题进度">
      <div class="progress-fill" style="width:${(100 * qi) / total}%"></div>
    </div>
    <fieldset>
      <legend>${question.q}</legend>
      <div class="opts">${opts}</div>
    </fieldset>
    <div class="quiz-foot">${back}<span class="quiz-count">按 1–4 作答</span></div>
  </section>`;
}

function resultView(gid, answers, seed) {
  const ranked = score(gid, answers, seed);
  const top = ranked[0];
  const m = MEMBERS[top.id];
  const runnerUp = ranked[1];
  const gap = top.pct - runnerUp.pct;
  const colorTitle = `色名：${m.colorName}${m.colorNote ? "。" + m.colorNote : ""}`;
  const colorMeta = `<span class="meta-color" title="${colorTitle}"><i aria-hidden="true"></i>#${m.color.slice(1).toUpperCase()}${m.colorNote ? "*" : ""}</span>`;
  const facts = [m.grade, m.birthday, m.blood ? m.blood + "型" : null].filter(Boolean).join(" · ");
  const meta = `<p class="meta-line">${facts} · ${colorMeta}</p>`;
  const traits = m.traits.slice(0,4).map((t) => `<li>${t}</li>`).join("");
  const uv = userVec(gid, answers, seed);
  const topDims = DIMENSIONS.map((d, i) => ({ d, s: uv[i] * m.profile[i] })).sort((x, y) => y.s - x.s).slice(0, 2)
    .map((x) => `<span class="chip">${x.s >= 0 ? x.d.pos : x.d.neg}</span>`).join("");
  const rows = ranked.map((r, i) => {
    const rm = MEMBERS[r.id];
    return `<div class="rank-row" style="--member-color:${rm.color}">
      <span class="rank-no">${i + 1}</span>
      <span class="rank-name">${rm.nameZh}<small>${rm.unit}</small></span>
      <span class="rank-bar"><i style="width:${r.pct}%"></i></span>
      <span class="rank-pct">${r.pct}%</span>
    </div>`;
  }).join("");
  const lead = gap > 0 ? `比第二名 ${runnerUp && MEMBERS[runnerUp.id].nameZh} 高 ${gap} 个百分点。`
    : `与第二名相似度持平，按性格维度距离排在前面。`;
  return `<section>
    <article class="result-card" style="--member-color:${m.color}">
      <span class="result-glow" aria-hidden="true"></span>
      <div class="result-top">
        <span class="portrait-frame">
          <img class="portrait" src="./assets/portraits/${top.id}.png" alt="${m.nameZh} 的头像"
               decoding="async" onerror="this.parentNode.remove()">
        </span>
        <div>
          <p class="result-eyebrow">${GROUPS[gid].name} · ${m.unit}</p>
          <h2 class="result-name" tabindex="-1">${m.nameZh}</h2>
          <p class="result-romaji">${m.nameJa} / ${m.romaji}</p>
        </div>
      </div>
      <p class="match-line"><span class="match-pct">${top.pct}%</span><span class="match-label">本团 ${membersOf(gid).length} 人中最契合</span></p>
      ${meta}
      <div class="traits"><h3>像她的地方</h3><ul>${traits}</ul></div>
      <div class="unit-row" aria-label="最契合的性格维度">${topDims}</div>
      <img class="result-watermark" src="./assets/avatars/${top.id}.png" alt="" aria-hidden="true"
           decoding="async" onerror="this.remove()">
    </article>
    <div class="ranking">
      <h3>${GROUPS[gid].name} 完整排行</h3>
      ${rows}
      <p class="rank-note">${lead} 匹配度＝加权得票比例（主选项 3、次选项 1），并以性格相似度微调，仅在本团内比较。</p>
    </div>
    <div class="actions">
      <button class="btn btn-primary" type="button" data-export>保存结果图</button>
      <button class="btn btn-ghost" type="button" data-restart>再测一次</button>
      <button class="btn btn-ghost" type="button" data-again>改答案</button>
      <a class="btn btn-ghost" href="#/">换另一个团</a>
      <button class="btn btn-ghost" type="button" data-copy>复制结果链接</button>
      <a class="btn btn-ghost" href="#/">主页</a>
    </div>
  </section>`;
}

function logView() {
  const entries = CHANGELOG.map((e) => `<section class="log-entry result-card">
    <p class="log-time">${e.time}</p>
    <h3>${e.title}</h3>
    ${e.items.length ? `<div class="traits"><ul>${e.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>` : ""}
  </section>`).join("");
  return `<section>
    <h2 class="view-title" tabindex="-1">更新日志</h2>
    <p class="view-lead">按时间倒序。</p>
    <div class="log-list">${entries}</div>
    <div class="actions"><a class="btn btn-ghost" href="#/">返回菜单</a></div>
  </section>`;
}


const EXPORT_FONT = '"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC",system-ui,sans-serif';
function hexA(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function loadImg(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}
async function exportResult(gid, answers, seed) {
  const ranked = score(gid, answers, seed);
  const top = ranked[0];
  const m = MEMBERS[top.id];
  const W = 900, H = 1200;
  const cv = document.createElement("canvas");
  cv.width = W; cv.height = H;
  const ctx = cv.getContext("2d");
  ctx.fillStyle = "#f7f4ef"; ctx.fillRect(0, 0, W, H);
  const grad = ctx.createRadialGradient(W * 0.12, 0, 0, W * 0.12, 0, W * 0.95);
  grad.addColorStop(0, hexA(m.color, 0.30)); grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
  roundRect(ctx, 60, 100, W - 120, H - 200, 32);
  ctx.fillStyle = "#fffdfa"; ctx.fill();
  ctx.strokeStyle = "#ded6cc"; ctx.lineWidth = 2; ctx.stroke();
  ctx.save(); ctx.beginPath(); ctx.rect(60, 100, 14, H - 200); ctx.clip();
  ctx.fillStyle = m.color; ctx.fillRect(60, 100, 14, H - 200); ctx.restore();

  const [sym, port] = await Promise.all([loadImg(`./assets/avatars/${top.id}.png`), loadImg(`./assets/portraits/${top.id}.png`)]);
  if (sym) { ctx.globalAlpha = 0.12; ctx.drawImage(sym, W - 340, H - 560, 280, 280); ctx.globalAlpha = 1; }
  const cx = 210, cy = 270, r = 78;
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.closePath(); ctx.clip();
  if (port) ctx.drawImage(port, cx - r, cy - r, r * 2, r * 2);
  else { ctx.fillStyle = m.color; ctx.fillRect(cx - r, cy - r, r * 2, r * 2); }
  ctx.restore();
  ctx.strokeStyle = m.color; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#6f6779"; ctx.font = `24px ${EXPORT_FONT}`;
  ctx.fillText(`${GROUPS[gid].name} · ${m.unit}`, 330, 232);
  ctx.fillStyle = "#241f2b"; ctx.font = `bold 64px ${EXPORT_FONT}`;
  ctx.fillText(m.nameZh, 330, 310);
  ctx.fillStyle = "#6f6779"; ctx.font = `26px ${EXPORT_FONT}`;
  ctx.fillText(`${m.nameJa} / ${m.romaji}`, 330, 356);

  ctx.fillStyle = m.color; ctx.font = `bold 104px ${EXPORT_FONT}`;
  ctx.fillText(`${top.pct}%`, 120, 540);
  ctx.fillStyle = "#6f6779"; ctx.font = `26px ${EXPORT_FONT}`;
  ctx.fillText(`相似度 · 本团 ${membersOf(gid).length} 人中最契合`, 330, 512);

  const facts = [m.grade, m.birthday, m.blood ? m.blood + "型" : null].filter(Boolean).join(" · ");
  ctx.fillStyle = "#241f2b"; ctx.font = `28px ${EXPORT_FONT}`;
  ctx.fillText(`${facts} · ${m.color.toUpperCase()}`, 120, 620);

  ctx.fillStyle = "#241f2b"; ctx.font = `bold 32px ${EXPORT_FONT}`;
  ctx.fillText("像她的地方", 120, 720);
  ctx.font = `28px ${EXPORT_FONT}`;
  m.traits.slice(0, 4).forEach((t, i) => ctx.fillText(`· ${t}`, 120, 782 + i * 50));

  ctx.fillStyle = "#6f6779"; ctx.font = `24px ${EXPORT_FONT}`;
  ctx.fillText("LoveLive 角色性格测试 · ayaseeli-bing.github.io/lovelive-quiz", 120, H - 130);

  const blob = await new Promise((res) => cv.toBlob(res, "image/png"));
  if (!blob) throw new Error("toBlob failed");
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `lovelive-result-${top.id}.png`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  window.dispatchEvent(new CustomEvent("resultexported", { detail: { w: W, h: H, bytes: blob.size, id: top.id } }));
}

const warnSeen = new Set();

function maybeWarn(gid, atStart) {
  if (!atStart || !GROUPS[gid] || warnSeen.has(gid)) return;
  warnSeen.add(gid);
  const box = document.createElement("div");
  box.className = "modal-overlay";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML = `<div class="modal">
    <h2>测试版提醒</h2>
    <p>${GROUPS[gid].name} 的题目仍在打磨，尚未完整测试，结果可能偏差较大，仅供娱乐参考。</p>
    <div class="modal-actions">
      <button class="btn btn-primary" type="button" data-warn-ok>继续答题</button>
      <a class="btn btn-ghost" href="#/" data-warn-home>返回主页</a>
    </div>
  </div>`;
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.closest("[data-warn-ok], [data-warn-home]")) box.remove();
  });
  document.body.appendChild(box);
  const ok = box.querySelector("[data-warn-ok]");
  if (ok) ok.focus();
}

function render() {
  document.querySelectorAll(".modal-overlay").forEach((n) => n.remove());
  const state = parseHash();
  if (state.view === "log") {
    app.innerHTML = logView();
    app.querySelector(".view-title").focus({ preventScroll: true });
    return;
  }
  if (state.view === "menu") {
    app.innerHTML = menuView();
    app.querySelector(".view-title").focus({ preventScroll: true });
    return;
  }
  app.innerHTML = state.view === "quiz"
    ? quizView(state.gid, state.answers, state.seed)
    : resultView(state.gid, state.answers, state.seed);
  if (state.view === "quiz") maybeWarn(state.gid, state.answers.length === 0);
  const anchor = app.querySelector(state.view === "quiz" ? ".quiz-head .view-title" : ".result-name");
  anchor.focus({ preventScroll: true });
}

app.addEventListener("click", (event) => {
  const state = parseHash();
  const opt = event.target.closest("[data-opt]");
  if (opt && state.view === "quiz") {
    const next = [...state.answers, Number(opt.dataset.opt)];
    const full = buildOrder(state.gid, state.seed).length;
    location.hash = hashFor(state.gid, state.seed, next, next.length >= full ? "result" : "quiz");
    return;
  }
  if (event.target.closest("[data-back]")) {
    location.hash = hashFor(state.gid, state.seed, state.answers.slice(0, -1), "quiz");
    return;
  }
  if (event.target.closest("[data-restart]")) {
    location.hash = `#/quiz/${state.gid}/s${newSeed()}/`;
    return;
  }
  if (event.target.closest("[data-again]")) {
    location.hash = hashFor(state.gid, state.seed, state.answers.slice(0, -1), "quiz");
    return;
  }
  if (event.target.closest("[data-export]") && state.view === "result") {
    exportResult(state.gid, state.answers, state.seed).catch((err) => console.error("export failed", err));
    return;
  }
  const copy = event.target.closest("[data-copy]");
  if (copy) {
    const url = location.href;
    const done = () => { copy.textContent = "已复制"; };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done, done);
    } else { done(); }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (document.querySelector(".modal-overlay")) return;
  const state = parseHash();
  if (state.view !== "quiz") return;
  const order = buildOrder(state.gid, state.seed);
  const index = optKeys.indexOf(event.key);
  if (index > -1 && index < order[state.answers.length].opts.length) {
    event.preventDefault();
    location.hash = hashFor(state.gid, state.seed, [...state.answers, index], "quiz");
  } else if (event.key === "Backspace") {
    event.preventDefault();
    location.hash = hashFor(state.gid, state.seed, state.answers.slice(0, -1), "quiz");
  }
});

window.addEventListener("hashchange", render);
render();
