import { GROUPS, MEMBERS, QUESTIONS } from "./data.js";

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

function score(gid, answers, seed) {
  const qs = buildOrder(gid, seed);
  const tally = {};
  for (const id of membersOf(gid)) tally[id] = { score: 0, primaries: 0, ceiling: 0 };
  qs.forEach((question, qi) => {
    for (const id of membersOf(gid)) {
      let attainable = 0;
      for (const opt of question.opts) {
        const hit = opt.hit.find(([m]) => m === id);
        if (hit && hit[1] > attainable) attainable = hit[1];
      }
      tally[id].ceiling += attainable;
    }
    const chosen = question.opts[answers[qi]];
    for (const [id, w] of chosen.hit) {
      tally[id].score += w;
      if (w === 3) tally[id].primaries += 1;
    }
  });
  return membersOf(gid)
    .map((id) => ({ id, ...tally[id], pct: Math.round((100 * tally[id].score) / tally[id].ceiling) }))
    .sort((a, b) => b.pct - a.pct || b.primaries - a.primaries || b.score - a.score);
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
      <p class="group-blurb">${g.blurb}</p>
      <div class="swatch-row" aria-hidden="true">${swatches}</div>
      <div class="unit-row">${units}</div>
      <span class="group-cta">开始这个团的测试 →</span>
    </a>`;
  }).join("");
  return `<section>
    <h2 class="view-title" tabindex="-1">先选一个团体</h2>
    <p class="view-lead">已开放的团体各有一套独立情景题，每次打开题目与选项顺序都会重新打乱；答完得到该团内匹配度最高的成员，以及完整成员排行。</p>
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
    <div class="quiz-foot">${back}<span class="quiz-count">按 1–4 也可作答</span></div>
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
  const traits = m.traits.map((t) => `<li>${t}</li>`).join("");
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
    : `与第二名同分，按主问题命中数排在前面。`;
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
      <p class="match-line"><span class="match-pct">${top.pct}%</span><span class="match-label">匹配度 · 本团 ${membersOf(gid).length} 人中的最高分</span></p>
      ${meta}
      <div class="traits"><h3>像她的地方</h3><ul>${traits}</ul></div>
      <img class="result-watermark" src="./assets/avatars/${top.id}.png" alt="" aria-hidden="true"
           decoding="async" onerror="this.remove()">
    </article>
    <div class="ranking">
      <h3>${GROUPS[gid].name} 完整排行</h3>
      ${rows}
      <p class="rank-note">${lead} 匹配度按「本成员在这些题里能拿到的满分」折算，因此不同团、不同题量之间不可直接比较。</p>
    </div>
    <div class="actions">
      <button class="btn btn-primary" type="button" data-restart>再测一次</button>
      <button class="btn btn-ghost" type="button" data-again>改答案</button>
      <a class="btn btn-ghost" href="#/">换另一个团</a>
      <button class="btn btn-ghost" type="button" data-copy>复制结果链接</button>
    </div>
  </section>`;
}

function render() {
  const state = parseHash();
  if (state.view === "menu") {
    app.innerHTML = menuView();
    app.querySelector(".view-title").focus({ preventScroll: true });
    return;
  }
  app.innerHTML = state.view === "quiz"
    ? quizView(state.gid, state.answers, state.seed)
    : resultView(state.gid, state.answers, state.seed);
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
