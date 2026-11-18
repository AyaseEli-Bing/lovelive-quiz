// 成员资料依据萌娘百科条目整理（性格描述为自行改写），色值为按萌百色名调配的近似值。
export const GROUPS = {
  muse: {
    id: "muse",
    name: "μ's",
    subtitle: "音乃木坂学院校园偶像部",
    blurb: "九个人、三种小队。为了守住学校而站上屋顶的那群人。",
    units: ["Printemps", "lily white", "BiBi"],
  },
  aqours: {
    id: "aqours",
    name: "Aqours",
    subtitle: "浦之星女学院校园偶像部",
    blurb: "来自海边小镇的九个人，从「想要闪闪发光」开始重建社团。",
    units: ["CYaRon!", "AZALEA", "Guilty Kiss"],
  },
};

export const MEMBERS = {
  honoka: {
    group: "muse", nameJa: "高坂穂乃果", nameZh: "高坂穗乃果", romaji: "Kosaka Honoka",
    unit: "Printemps", color: "#EF8C38", colorName: "橙色", mono: "ほ", darkInk: false,
    birthday: "8月3日", blood: "O", grade: "2年级", song: "《愛は太陽じゃない？》",
    traits: ["先动起来再说", "乐观到有点迟钝", "爱吃也爱饿肚子", "把伙伴的情绪扛在自己身上"],
  },
  eli: {
    group: "muse", nameJa: "絢瀬絵里", nameZh: "绚濑绘里", romaji: "Ayase Eli",
    unit: "BiBi", color: "#6FC7DE", colorName: "水蓝色", mono: "え", darkInk: true,
    birthday: "10月21日", blood: "B", grade: "3年级（已毕业）", song: "BiBi 小队曲",
    traits: ["凡事先想清楚", "把责任感放在喜好前面", "怕黑但不承认", "全能背后的紧绷"],
  },
  kotori: {
    group: "muse", nameJa: "南ことり", nameZh: "南小鸟", romaji: "Minami Kotori",
    unit: "Printemps", color: "#C6CAD2", colorName: "银灰色", mono: "こ", darkInk: true,
    birthday: "9月12日", blood: "O", grade: "2年级", song: "Printemps 小队曲",
    traits: ["说话软、手更软", "把心意缝进衣服里", "天然的外表，早熟的心", "宁可自己吃亏"],
  },
  umi: {
    group: "muse", nameJa: "園田海未", nameZh: "园田海未", romaji: "Sonoda Umi",
    unit: "lily white", color: "#2F4B8C", colorName: "深蓝色", mono: "う", darkInk: false,
    birthday: "3月15日", blood: "A", grade: "2年级", song: "《私たちは未来の花》",
    traits: ["对规矩比对自己还严", "容易害羞，却硬撑着讲完", "认真到不懂变通", "传统事物的守护者"],
  },
  rin: {
    group: "muse", nameJa: "星空凛", nameZh: "星空凛", romaji: "Hoshizora Rin",
    unit: "lily white", color: "#F2CE3A", colorName: "黄色", mono: "り", darkInk: true,
    birthday: "11月1日", blood: "A", grade: "1年级", song: "lily white 小队曲",
    traits: ["身体先于头脑", "爱哭但马上就好", "重情义到不讲道理", "嘴上逞强，心里软"],
  },
  maki: {
    group: "muse", nameJa: "西木野真姫", nameZh: "西木野真姬", romaji: "Nishikino Maki",
    unit: "BiBi", color: "#D9382F", colorName: "红色", mono: "ま", darkInk: false,
    birthday: "4月19日", blood: "AB", grade: "1年级", song: "个人专辑《TRUE DIVA》",
    traits: ["嘴硬心软的典型", "才华是底气也是隔阂", "不擅长先开口示好", "习惯一个人扛"],
  },
  hanayo: {
    group: "muse", nameJa: "小泉花陽", nameZh: "小泉花阳", romaji: "Koizumi Hanayo",
    unit: "Printemps", color: "#4FA46A", colorName: "绿色", mono: "は", darkInk: false,
    birthday: "1月17日", blood: "B", grade: "1年级", song: "《孤独なHeaven》",
    traits: ["安静到容易被忽略", "对喜欢的东西异常专注", "习惯先反省自己", "为白米饭认真"],
  },
  nico: {
    group: "muse", nameJa: "矢澤にこ", nameZh: "矢泽妮可", romaji: "Yazawa Nico",
    unit: "BiBi", color: "#F2A0C8", colorName: "粉色", mono: "に", darkInk: true,
    birthday: "7月22日", blood: "A", grade: "3年级（已毕业）", song: "《にこぷり♡女子道》",
    traits: ["把可爱当作事业", "毒舌是关心的另一种说法", "努力从不给人看见", "家里孩子多，所以会照顾人"],
  },
  nozomi: {
    group: "muse", nameJa: "東條希", nameZh: "东条希", romaji: "Tojo Nozomi",
    unit: "lily white", color: "#8B6BB1", colorName: "紫色", mono: "の", darkInk: false,
    birthday: "6月9日", blood: "O", grade: "3年级（已毕业）", song: "个人专辑《ノゾミ♪カナエテ》",
    traits: ["用玩笑话讲真心", "相信直觉也相信占卜", "大姐姐式的距离感", "午睡与灵感同等重要"],
  },
  chika: {
    group: "aqours", nameJa: "高海千歌", nameZh: "高海千歌", romaji: "Takami Chika",
    unit: "CYaRon!", color: "#F2913F", colorName: "蜜柑色", mono: "ち", darkInk: false,
    birthday: "8月1日", blood: "B", grade: "2年级", song: "《ユメ語るよりユメ歌おう》",
    traits: ["先喊出来再想办法", "把别人的梦想也当回事", "天生的召集者", "念旧，海是她的原点"],
  },
  riko: {
    group: "aqours", nameJa: "桜内梨子", nameZh: "樱内梨子", romaji: "Sakurauchi Riko",
    unit: "Guilty Kiss", color: "#F4A9BC", colorName: "樱色", mono: "り", darkInk: true,
    birthday: "9月19日", blood: "A", grade: "2年级", song: "Guilty Kiss 小队曲",
    traits: ["表面冷静，内心慌张", "用音乐代替表达", "转学生的适应焦虑", "认真得容易自责"],
  },
  kanan: {
    group: "aqours", nameJa: "松浦果南", nameZh: "松浦果南", romaji: "Matsuura Kanan",
    unit: "AZALEA", color: "#63B87A", colorName: "草绿色", mono: "か", darkInk: false,
    colorNote: "萌百条目正文记为草绿色；官网口径（萌百「LoveLive!角色颜色」模板）记为エメラルドグリーン（祖母绿）",
    birthday: "2月10日", blood: "O", grade: "3年级（已毕业）", song: "《涙が雪になる前に》",
    traits: ["手上功夫比嘴上功夫快", "可靠到常被忽略", "怕高、怕鬼，但不会退", "把海当作日常"],
  },
  dia: {
    group: "aqours", nameJa: "黒澤ダイヤ", nameZh: "黑泽黛雅", romaji: "Kurosawa Dia",
    unit: "AZALEA", color: "#C0334A", colorName: "红色", mono: "だ", darkInk: false,
    birthday: "1月1日", blood: "A", grade: "3年级（已毕业）", song: "《真夏は誰のモノ？》",
    traits: ["先立规矩，再谈感情", "把家族期待背在身上", "严格其实是一种保护", "为妹妹破功"],
  },
  you: {
    group: "aqours", nameJa: "渡辺曜", nameZh: "渡边曜", romaji: "Watanabe You",
    unit: "CYaRon!", color: "#4FB8E8", colorName: "水蓝色", mono: "よ", darkInk: true,
    birthday: "4月17日", blood: "AB", grade: "2年级", song: "CYaRon! 小队曲",
    traits: ["想当船长的那种人", "行动力和酸味并存", "对海的了解超过对人", "练到底才肯罢休"],
  },
  ruby: {
    group: "aqours", nameJa: "黒澤ルビィ", nameZh: "黑泽露比", romaji: "Kurosawa Ruby",
    unit: "CYaRon!", color: "#D8A3D2", colorName: "粉紫色", mono: "る", darkInk: true,
    colorNote: "萌百条目正文记为粉紫色；官网口径记为粉色",
    birthday: "9月21日", blood: "A", grade: "1年级", song: "独唱曲（萌百未列具体曲名）",
    traits: ["容易慌张，容易道歉", "把姐姐当作标准", "羡慕别人的大胆", "一旦决定了就很稳"],
  },
  mari: {
    group: "aqours", nameJa: "小原鞠莉", nameZh: "小原鞠莉", romaji: "Ohara Mari",
    unit: "Guilty Kiss", color: "#B79BE0", colorName: "浅紫色", mono: "ま", darkInk: true,
    birthday: "6月13日", blood: "AB", grade: "3年级（已毕业）", song: "《Guilty Night, Guilty Kiss!》",
    traits: ["直球且热烈", "先把日子过得漂亮", "看似随便，其实看得很清", "舍得放手去追"],
  },
  yoshiko: {
    group: "aqours", nameJa: "津島善子", nameZh: "津岛善子", romaji: "Tsushima Yoshiko",
    unit: "Guilty Kiss", color: "#A8AEB8", colorName: "灰色·白色", mono: "や", darkInk: false,
    birthday: "7月13日", blood: "O", grade: "1年级", song: "Guilty Kiss 小队曲",
    traits: ["设定不能崩", "傲娇是防御机制", "怕被人看穿，又想被理解", "嘴上不承认，身体很诚实"],
  },
  hanamaru: {
    group: "aqours", nameJa: "国木田花丸", nameZh: "国木田花丸", romaji: "Kunikida Hanamaru",
    unit: "AZALEA", color: "#D9A21B", colorName: "深黄色", mono: "は", darkInk: true,
    colorNote: "萌百条目正文记为深黄色（腌萝卜色，由声优在广播节目里定下）；官网口径记为黄色",
    birthday: "3月4日", blood: "O", grade: "1年级", song: "AZALEA 小队曲",
    traits: ["用文字理解世界", "口癖和语尾是身份", "沉稳的外表，腹黑的小算盘", "为偶像下过苦功"],
  },
};

export const QUESTIONS = {
  muse: [
    { q: "学园祭的表演形式临时要改，你的第一反应是？", opts: [
      { text: "先冲出去找人商量，边做边改", hit: [["honoka", 3], ["kotori", 1]] },
      { text: "列出三个方案的利弊，再决定用哪个", hit: [["eli", 3], ["hanayo", 1]] },
      { text: "担心准备不足，把整段流程重背一遍", hit: [["umi", 3], ["rin", 1]] },
      { text: "嘴上说“随便”，其实心里早有主意", hit: [["maki", 3], ["nico", 1]] }] },
    { q: "放学后的时间，你多半花在哪里？", opts: [
      { text: "缝纫台前，给社团赶制新演出服", hit: [["kotori", 3], ["nozomi", 1]] },
      { text: "操场或屋顶，练完才肯走", hit: [["rin", 3], ["honoka", 1]] },
      { text: "图书室角落，戴着耳机翻偶像资料", hit: [["hanayo", 3], ["eli", 1]] },
      { text: "对着镜子练自我介绍，一句念二十遍", hit: [["nico", 3], ["umi", 1]] }] },
    { q: "社团里有人中途退出，你会？", opts: [
      { text: "先起一卦，再私下找她聊聊", hit: [["nozomi", 3], ["umi", 1]] },
      { text: "把空出来的位置拆成任务重排", hit: [["eli", 3], ["kotori", 1]] },
      { text: "忍不住哭出来，然后说“我陪你练”", hit: [["rin", 3], ["nico", 1]] },
      { text: "先怀疑是自己哪里做得不够好", hit: [["hanayo", 3], ["maki", 1]] }] },
    { q: "练习到深夜，撑着你的是？", opts: [
      { text: "饿了，先吃掉便当再说", hit: [["honoka", 3], ["hanayo", 1]] },
      { text: "弹到满意为止，不想半途而废", hit: [["maki", 3], ["rin", 1]] },
      { text: "相信明天的占卜会写“大吉”", hit: [["nozomi", 3], ["eli", 1]] },
      { text: "包里缝了给伙伴的护身符", hit: [["kotori", 3], ["umi", 1]] }] },
    { q: "新队员第一次排练就唱错词，你会？", opts: [
      { text: "当场停下，把规矩重讲一遍", hit: [["umi", 3], ["eli", 1]] },
      { text: "先笑一句“真是的”，再手把手教", hit: [["nico", 3], ["nozomi", 1]] },
      { text: "喊“没事没事，来第二遍！”", hit: [["honoka", 3], ["maki", 1]] },
      { text: "陪她一起唱错，把尴尬盖过去", hit: [["rin", 3], ["kotori", 1]] }] },
    { q: "难得的假期，你怎么过？", opts: [
      { text: "排好作息表，顺便学点新语言", hit: [["eli", 3], ["kotori", 1]] },
      { text: "把城里好吃的米饭料理试个遍", hit: [["hanayo", 3], ["umi", 1]] },
      { text: "独自练琴，把沿路的街景听完", hit: [["maki", 3], ["rin", 1]] },
      { text: "睡到自然醒，晚上替人占卜", hit: [["nozomi", 3], ["honoka", 1]] }] },
    { q: "你觉得“努力”和“天赋”哪个更重要？", opts: [
      { text: "重要的是不丢下同伴一起练", hit: [["kotori", 3], ["rin", 1]] },
      { text: "努力到底，才有资格谈天赋", hit: [["umi", 3], ["maki", 1]] },
      { text: "没有天赋就得用努力补，我就是这么过来的", hit: [["nico", 3], ["honoka", 1]] },
      { text: "天赋太远了，先把今天的事做完", hit: [["hanayo", 3], ["eli", 1]] }] },
    { q: "被陌生人夸“你很可爱”，你心里其实是？", opts: [
      { text: "开心，立刻想回夸对方", hit: [["honoka", 3], ["nozomi", 1]] },
      { text: "怀疑对方是不是另有所图", hit: [["eli", 3], ["hanayo", 1]] },
      { text: "嘴角压不住，嘴上说“一般般吧”", hit: [["maki", 3], ["umi", 1]] },
      { text: "愣一下，然后“喵”地应答", hit: [["rin", 3], ["kotori", 1]] }] },
    { q: "队伍要定新口号，你在组里负责什么？", opts: [
      { text: "收集所有人的意见，最后再包装", hit: [["nozomi", 3], ["maki", 1]] },
      { text: "画海报、改队服这些交给我", hit: [["kotori", 3], ["rin", 1]] },
      { text: "坚持口号必须能被大声唱出来", hit: [["umi", 3], ["eli", 1]] },
      { text: "要带上自己的招牌台词，不接受反驳", hit: [["nico", 3], ["hanayo", 1]] }] },
    { q: "如果明天社团就必须解散，你会？", opts: [
      { text: "先抱住身边的人，再谈别的", hit: [["hanayo", 3], ["honoka", 1]] },
      { text: "把一直没说完的话一次说完", hit: [["maki", 3], ["eli", 1]] },
      { text: "不接受别人替我决定，我要继续", hit: [["nico", 3], ["kotori", 1]] },
      { text: "笑着说“那我们就再组一支”", hit: [["nozomi", 3], ["umi", 1]] }] },
  ],
  aqours: [
    { q: "社团只剩你们几个人，你的第一个念头是？", opts: [
      { text: "先喊出来：我们还能唱！", hit: [["chika", 3], ["kanan", 1]] },
      { text: "把规矩立起来，谁都不许散", hit: [["dia", 3], ["mari", 1]] },
      { text: "担心是自己拖了后腿，回家对着镜子练", hit: [["riko", 3], ["hanamaru", 1]] },
      { text: "去找一个还没人用过的舞台", hit: [["you", 3], ["yoshiko", 1]] }] },
    { q: "周末的清晨，你在做什么？", opts: [
      { text: "出海潜水，回来顺手修好引擎", hit: [["kanan", 3], ["chika", 1]] },
      { text: "在自家阳台上喝咖啡，安排下午的派对", hit: [["mari", 3], ["dia", 1]] },
      { text: "靠窗写小说，笔记里夹着口癖", hit: [["hanamaru", 3], ["riko", 1]] },
      { text: "躲在房间里背台词，怕被邻居听见", hit: [["ruby", 3], ["you", 1]] }] },
    { q: "陌生人搭话问“你是偶像吗”，你会？", opts: [
      { text: "先否认，再说自己是另一个身份", hit: [["yoshiko", 3], ["riko", 1]] },
      { text: "立刻邀请对方来看我们排练", hit: [["chika", 3], ["mari", 1]] },
      { text: "审视对方，先问是谁派来的", hit: [["dia", 3], ["ruby", 1]] },
      { text: "笑着替同伴回答，自己退半步", hit: [["kanan", 3], ["hanamaru", 1]] }] },
    { q: "排练卡住写不下去时，你的解法是？", opts: [
      { text: "坐到琴前，把手感找回来", hit: [["riko", 3], ["chika", 1]] },
      { text: "去读别人的三本书，等灵感自己上门", hit: [["hanamaru", 3], ["dia", 1]] },
      { text: "不管对错先大胆试，开心最重要", hit: [["mari", 3], ["you", 1]] },
      { text: "去问那个最可靠的人", hit: [["ruby", 3], ["yoshiko", 1]] }] },
    { q: "队里有人偷偷加练到受伤，你会？", opts: [
      { text: "先讲道理，再没收她的行程表", hit: [["dia", 3], ["kanan", 1]] },
      { text: "背她去医务室，路上骂她一顿", hit: [["you", 3], ["mari", 1]] },
      { text: "陪她练完，再开口劝", hit: [["chika", 3], ["yoshiko", 1]] },
      { text: "慌得不知怎么办，只会递水", hit: [["riko", 3], ["hanamaru", 1]] }] },
    { q: "只能在海边办一场 live，你想的是？", opts: [
      { text: "让所有人光脚踩浪，别管流程", hit: [["mari", 3], ["chika", 1]] },
      { text: "同伴在身边就够了", hit: [["ruby", 3], ["riko", 1]] },
      { text: "救生和音响必须提前安排妥当", hit: [["kanan", 3], ["you", 1]] },
      { text: "提前发通知，迟到一次都不行", hit: [["dia", 3], ["hanamaru", 1]] }] },
    { q: "比起失败，你更害怕哪件事？", opts: [
      { text: "写不出下一个句子", hit: [["hanamaru", 3], ["kanan", 1]] },
      { text: "精心维持的设定被同班同学撞见", hit: [["yoshiko", 3], ["dia", 1]] },
      { text: "重要的演出赶上末班船停运", hit: [["you", 3], ["ruby", 1]] },
      { text: "说好的梦想只有自己先放弃", hit: [["chika", 3], ["mari", 1]] }] },
    { q: "另一支队伍来邀请你加入，你会？", opts: [
      { text: "先问他们能坚持多久", hit: [["kanan", 3], ["chika", 1]] },
      { text: "看纪律，再看诚意", hit: [["dia", 3], ["you", 1]] },
      { text: "犹豫到自己都想笑", hit: [["riko", 3], ["hanamaru", 1]] },
      { text: "端起身段，装作早就料到", hit: [["yoshiko", 3], ["mari", 1]] }] },
    { q: "你希望自己的应援台词是什么感觉？", opts: [
      { text: "台下所有人都能一起喊", hit: [["chika", 3], ["dia", 1]] },
      { text: "安静一点，只有懂的人听得出", hit: [["riko", 3], ["kanan", 1]] },
      { text: "华丽些，最好带点海外的味道", hit: [["mari", 3], ["you", 1]] },
      { text: "小声点，别让更多人注意到我", hit: [["ruby", 3], ["hanamaru", 1]] }] },
    { q: "最后一天，你最想做的是？", opts: [
      { text: "收好队旗，说一句下次见", hit: [["you", 3], ["chika", 1]] },
      { text: "把这段写成小说的结尾", hit: [["hanamaru", 3], ["riko", 1]] },
      { text: "用一句台词收尾，转身就走", hit: [["yoshiko", 3], ["dia", 1]] },
      { text: "办一场只请自己人的告别会", hit: [["mari", 3], ["kanan", 1]] }] },
  ],
};
