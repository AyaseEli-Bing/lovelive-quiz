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
  nijigasaki: {
    id: "nijigasaki",
    name: "虹ヶ咲",
    subtitle: "虹咲学园校园偶像同好会",
    soon: true,
  },
  liella: {
    id: "liella",
    name: "Liella!",
    subtitle: "结丘女子高等学校校园偶像部",
    soon: true,
  },
  hasunosora: {
    id: "hasunosora",
    name: "莲之空",
    subtitle: "莲之空女学院校园偶像部",
    soon: true,
  },
};

export const MEMBERS = {
  honoka: {
    group: "muse", nameJa: "高坂穂乃果", nameZh: "高坂穗乃果", romaji: "Kosaka Honoka",
    unit: "Printemps", color: "#f38500", colorName: "橙色", mono: "ほ", darkInk: true,
    birthday: "8月3日", blood: "O", grade: "2年级",
    traits: ["你想到就会去做，行动总比犹豫快","你天生能把大家的情绪带起来","你不太记仇，难过也过得很快","你相信船到桥头自然直"],
  },
  eli: {
    group: "muse", nameJa: "絢瀬絵里", nameZh: "绚濑绘里", romaji: "Ayase Eli",
    unit: "BiBi", color: "#7aeeff", colorName: "水蓝色", mono: "え", darkInk: true,
    birthday: "10月21日", blood: "B", grade: "3年级",
    traits: ["你习惯先把事情想清楚再动手","你对自己要求高，不太允许自己出错","你看起来可靠，其实也会偷偷紧张","你嘴上理性，心里比谁都在意"],
  },
  kotori: {
    group: "muse", nameJa: "南ことり", nameZh: "南小鸟", romaji: "Minami Kotori",
    unit: "Printemps", color: "#cebfbf", colorName: "银灰色", mono: "こ", darkInk: true,
    colorNote: "LLWiki 色名记为「白色」，色值 #cebfbf 实为灰米色",
    birthday: "9月12日", blood: "O", grade: "2年级",
    traits: ["你说话温和，很少与人起冲突","你擅长照顾别人的感受","你看着随和，其实有自己的主意","你愿意为在意的人默默付出"],
  },
  umi: {
    group: "muse", nameJa: "園田海未", nameZh: "园田海未", romaji: "Sonoda Umi",
    unit: "lily white", color: "#1769ff", colorName: "深蓝色", mono: "う", darkInk: false,
    birthday: "3月15日", blood: "A", grade: "2年级",
    traits: ["你认真守规矩，也看不惯敷衍","你容易害羞，但该说的还是会说","你对自己比别人更严格","你重视传统和承诺"],
  },
  rin: {
    group: "muse", nameJa: "星空凛", nameZh: "星空凛", romaji: "Hoshizora Rin",
    unit: "lily white", color: "#fff832", colorName: "黄色", mono: "り", darkInk: true,
    birthday: "11月1日", blood: "A", grade: "1年级",
    traits: ["你精力充沛，闲不下来","你情绪来得快去得也快","你重感情，为朋友可以两肋插刀","你嘴上逞强，心里很软"],
  },
  maki: {
    group: "muse", nameJa: "西木野真姫", nameZh: "西木野真姬", romaji: "Nishikino Maki",
    unit: "BiBi", color: "#ff503e", colorName: "红色", mono: "ま", darkInk: true,
    birthday: "4月19日", blood: "AB", grade: "1年级",
    traits: ["你不太会把喜欢说出口","你对在意的事有自己的标准","你表面冷淡，其实比谁都认真","你需要独处来恢复能量"],
  },
  hanayo: {
    group: "muse", nameJa: "小泉花陽", nameZh: "小泉花阳", romaji: "Koizumi Hanayo",
    unit: "Printemps", color: "#6ae673", colorName: "绿色", mono: "は", darkInk: true,
    birthday: "1月17日", blood: "B", grade: "1年级",
    traits: ["你安静，但对喜欢的事异常专注","你习惯先反省自己","你容易被忽略，却一直在默默努力","你对热爱的事物毫无抵抗力"],
  },
  nico: {
    group: "muse", nameJa: "矢澤にこ", nameZh: "矢泽妮可", romaji: "Yazawa Nico",
    unit: "BiBi", color: "#ff4f91", colorName: "粉色", mono: "に", darkInk: true,
    birthday: "7月22日", blood: "A", grade: "3年级",
    traits: ["你很在意自己呈现出来的样子","你用玩笑和毒舌掩饰认真","你比谁都努力，只是不让人看见","你渴望被认可，也值得被认可"],
  },
  nozomi: {
    group: "muse", nameJa: "東條希", nameZh: "东条希", romaji: "Tojo Nozomi",
    unit: "lily white", color: "#c455f6", colorName: "紫色", mono: "の", darkInk: true,
    birthday: "6月9日", blood: "O", grade: "3年级",
    traits: ["你看得透，却不说破","你喜欢用轻松的方式化解尴尬","你相信直觉，也愿意给人留余地","你是朋友里那个兜底的人"],
  },
  chika: {
    group: "aqours", nameJa: "高海千歌", nameZh: "高海千歌", romaji: "Takami Chika",
    unit: "CYaRon!", color: "#ff9547", colorName: "蜜柑色", mono: "ち", darkInk: true,
    birthday: "8月1日", blood: "B", grade: "2年级",
    traits: ["你想到就会喊出来，先做再说","你天生能把人聚到一起","你把别人的梦想也当回事","你认定了就不轻易放手"],
  },
  riko: {
    group: "aqours", nameJa: "桜内梨子", nameZh: "樱内梨子", romaji: "Sakurauchi Riko",
    unit: "Guilty Kiss", color: "#ff9eac", colorName: "樱色", mono: "り", darkInk: true,
    birthday: "9月19日", blood: "A", grade: "2年级",
    traits: ["你表面冷静，内心其实容易慌","你更习惯用作品而不是语言表达自己","你对新环境需要时间适应","你认真起来会忘了照顾自己"],
  },
  kanan: {
    group: "aqours", nameJa: "松浦果南", nameZh: "松浦果南", romaji: "Matsuura Kanan",
    unit: "AZALEA", color: "#27c1b7", colorName: "草绿色", mono: "か", darkInk: true,
    birthday: "2月10日", blood: "O", grade: "3年级",
    traits: ["你做得多说得少","你是大家默认可靠的那个","你也有害怕的东西，只是不退","你习惯把照顾别人当成日常"],
  },
  dia: {
    group: "aqours", nameJa: "黒澤ダイヤ", nameZh: "黑泽黛雅", romaji: "Kurosawa Dia",
    unit: "AZALEA", color: "#db0839", colorName: "红色", mono: "だ", darkInk: false,
    birthday: "1月1日", blood: "A", grade: "3年级",
    traits: ["你先把规矩立起来再谈感情","你对自己和身边人都要求高","你的严格其实是一种保护","你在在意的人面前会破功"],
  },
  you: {
    group: "aqours", nameJa: "渡辺曜", nameZh: "渡边曜", romaji: "Watanabe You",
    unit: "CYaRon!", color: "#66c0ff", colorName: "水蓝色", mono: "よ", darkInk: true,
    birthday: "4月17日", blood: "AB", grade: "2年级",
    traits: ["你行动力强，想到就出发","你爽朗，但也会吃醋","你对热爱的事有使不完的劲","你嘴上大大咧咧，心里有数"],
  },
  ruby: {
    group: "aqours", nameJa: "黒澤ルビィ", nameZh: "黑泽露比", romaji: "Kurosawa Ruby",
    unit: "CYaRon!", color: "#ff6fbe", colorName: "粉紫色", mono: "る", darkInk: true,
    birthday: "9月21日", blood: "A", grade: "1年级",
    traits: ["你容易紧张，习惯先道歉","你羡慕别人的大胆","你依赖信任的人，但也在慢慢独立","你一旦决定了就很稳"],
  },
  mari: {
    group: "aqours", nameJa: "小原鞠莉", nameZh: "小原鞠莉", romaji: "Ohara Mari",
    unit: "Guilty Kiss", color: "#c252c6", colorName: "浅紫色", mono: "ま", darkInk: false,
    birthday: "6月13日", blood: "AB", grade: "3年级",
    traits: ["你直接热烈，不绕弯子","你舍得放手去追想要的","你看着随便，其实看得很清","你擅长把日子过得漂亮"],
  },
  yoshiko: {
    group: "aqours", nameJa: "津島善子", nameZh: "津岛善子", romaji: "Tsushima Yoshiko",
    unit: "Guilty Kiss", color: "#c1cad4", colorName: "灰色·白色", mono: "や", darkInk: true,
    colorNote: "LLWiki 色名记为「白色」，色值 #c1cad4 实为浅蓝灰",
    birthday: "7月13日", blood: "O", grade: "1年级",
    traits: ["你用设定和玩笑保护自己","你怕被看穿，又希望被理解","你嘴上不承认，身体很诚实","你中二的外表下是认真的心"],
  },
  hanamaru: {
    group: "aqours", nameJa: "国木田花丸", nameZh: "国木田花丸", romaji: "Kunikida Hanamaru",
    unit: "AZALEA", color: "#ffd010", colorName: "深黄色", mono: "は", darkInk: true,
    birthday: "3月4日", blood: "O", grade: "1年级",
    traits: ["你安静，但心里有自己的小算盘","你用文字和书理解世界","你看着朴素，其实很有想法","你对喜欢的事会下苦功"],
  },
};

export const QUESTIONS = {
  muse: [
    { q: "学园祭的表演形式临时要改，你的第一反应是？", opts: [
      { text: "先应下来，边做边看能不能圆回来", hit: [["honoka", 3], ["kotori", 1]] },
      { text: "先算清代价，再决定要不要改", hit: [["eli", 3], ["hanayo", 1]] },
      { text: "担心的是没准备好，而不是变不变", hit: [["umi", 3], ["rin", 1]] },
      { text: "嘴上不表态，心里已经有一套方案", hit: [["maki", 3], ["nico", 1]] }] },
    { q: "社团里最让你有成就感的时刻，更接近哪一种？", opts: [
      { text: "上次随手做的小东西，被人一直留着", hit: [["kotori", 3], ["nozomi", 1]] },
      { text: "练到某个动作突然顺了，身体比脑子先记住", hit: [["rin", 3], ["honoka", 1]] },
      { text: "把喜欢的东西整理成别人也看得懂的样子", hit: [["hanayo", 3], ["eli", 1]] },
      { text: "有人认真对待了你说过的话", hit: [["nico", 3], ["umi", 1]] }] },
    { q: "社团里有人中途退出，你会？", opts: [
      { text: "先不动声色地看一阵，再找她单独聊", hit: [["nozomi", 3], ["umi", 1]] },
      { text: "把剩下的事重新分工，先把缺口补上", hit: [["eli", 3], ["kotori", 1]] },
      { text: "情绪先上来，过后再想办法把人拉回来", hit: [["rin", 3], ["nico", 1]] },
      { text: "先反省是不是自己哪里没做好", hit: [["hanayo", 3], ["maki", 1]] }] },
    { q: "为一件事忙到很晚，撑着你的是？", opts: [
      { text: "想到结束后的夜宵，就觉得还能再来一轮", hit: [["honoka", 3], ["hanayo", 1]] },
      { text: "不满意的地方没解决，睡也睡不踏实", hit: [["maki", 3], ["rin", 1]] },
      { text: "总觉得再撑一下，事情会自己往好的方向走", hit: [["nozomi", 3], ["eli", 1]] },
      { text: "答应过别人的事，不想留一个半成品", hit: [["kotori", 3], ["umi", 1]] }] },
    { q: "新队员第一次排练就唱错词，你会？", opts: [
      { text: "当场停下，把标准再讲清楚一次", hit: [["umi", 3], ["eli", 1]] },
      { text: "先调侃一句缓和气氛，再私下帮她抠", hit: [["nico", 3], ["nozomi", 1]] },
      { text: "先说没关系，把第二遍当正式演出", hit: [["honoka", 3], ["maki", 1]] },
      { text: "跟着一起错一次，让她别太在意", hit: [["rin", 3], ["kotori", 1]] }] },
    { q: "难得的假期，你怎么过？", opts: [
      { text: "排一个大概的计划，但留出大块空白", hit: [["eli", 3], ["kotori", 1]] },
      { text: "找一件一直想弄明白的事钻进去", hit: [["hanayo", 3], ["umi", 1]] },
      { text: "关掉消息提醒，一个人待着回血", hit: [["maki", 3], ["rin", 1]] },
      { text: "睡到自然醒，剩下的时间临时决定", hit: [["nozomi", 3], ["honoka", 1]] }] },
    { q: "你觉得“努力”和“天赋”哪个更重要？", opts: [
      { text: "比起天赋，更在意有没有人一起练", hit: [["kotori", 3], ["rin", 1]] },
      { text: "努力是唯一能把控的部分", hit: [["umi", 3], ["maki", 1]] },
      { text: "嘴上不服，但会练到让别人无话可说", hit: [["nico", 3], ["honoka", 1]] },
      { text: "想太远没用，先把眼前这件做好", hit: [["hanayo", 3], ["eli", 1]] }] },
    { q: "被陌生人夸“你很可爱”，你心里其实是？", opts: [
      { text: "开心，也会顺手把对方夸回去", hit: [["honoka", 3], ["nozomi", 1]] },
      { text: "先想对方为什么这么说", hit: [["eli", 3], ["hanayo", 1]] },
      { text: "表面敷衍过去，回去偷偷高兴", hit: [["maki", 3], ["umi", 1]] },
      { text: "不知道怎么接，笑一下就走开", hit: [["rin", 3], ["kotori", 1]] }] },
    { q: "一群人要共同决定一件事，你通常负责什么？", opts: [
      { text: "听所有人说完，再挑一个能服众的说法", hit: [["nozomi", 3], ["maki", 1]] },
      { text: "把抽象的想法变成看得见的样子", hit: [["kotori", 3], ["rin", 1]] },
      { text: "确保最后的说法不尴尬、也不敷衍", hit: [["umi", 3], ["eli", 1]] },
      { text: "坚持留下一个只有我们懂的梗", hit: [["nico", 3], ["hanayo", 1]] }] },
    { q: "如果明天社团就必须解散，你会？", opts: [
      { text: "先什么都不说，等情绪过去", hit: [["hanayo", 3], ["honoka", 1]] },
      { text: "把该交代的事一件件交代清楚", hit: [["maki", 3], ["eli", 1]] },
      { text: "拒绝接受，先想办法拖住", hit: [["nico", 3], ["kotori", 1]] },
      { text: "开个玩笑，把话题岔到别处", hit: [["nozomi", 3], ["umi", 1]] }] },
    { q: "有人把功劳算到你头上，你更在意什么？", opts: [
      { text: "大家开心就好，名字写在前面还是后面无所谓", hit: [["honoka", 3], ["rin", 1]] },
      { text: "分工最好一开始就说清楚，省得以后别扭", hit: [["eli", 3], ["maki", 1]] },
      { text: "更在意那份心意有没有被对方接住", hit: [["kotori", 3], ["hanayo", 1]] },
      { text: "下次做到让人无话可说", hit: [["umi", 3], ["nico", 1]] }] },
    { q: "计划做到一半，发现方向可能是错的，你倾向？", opts: [
      { text: "先跑一段，跑起来才知道错在哪", hit: [["rin", 3], ["nozomi", 1]] },
      { text: "推翻重来，宁可从零开始", hit: [["maki", 3], ["honoka", 1]] },
      { text: "先收集更多信息，再决定要不要改", hit: [["hanayo", 3], ["eli", 1]] },
      { text: "嘴上抱怨两句，手上的活没停", hit: [["nico", 3], ["umi", 1]] }] },
    { q: "别人对你的评价，和你自己的判断不一致，你会？", opts: [
      { text: "先想想对方说的有没有道理", hit: [["honoka", 3], ["nozomi", 1]] },
      { text: "嘴上接受，回去按自己的方式改", hit: [["eli", 3], ["rin", 1]] },
      { text: "不太争辩，用结果说话", hit: [["kotori", 3], ["maki", 1]] },
      { text: "会认真难受一阵，然后变得更好强", hit: [["umi", 3], ["hanayo", 1]] }] },
    { q: "在一群人里，最让你不自在的是？", opts: [
      { text: "所有人都在等你先开口", hit: [["rin", 3], ["eli", 1]] },
      { text: "被安排做不擅长的事，还推不掉", hit: [["maki", 3], ["kotori", 1]] },
      { text: "明明有问题，却没人愿意点破", hit: [["nozomi", 3], ["umi", 1]] },
      { text: "热闹到听不见自己的声音", hit: [["honoka", 3], ["hanayo", 1]] }] },
    { q: "回头看自己做过的那些事，你最先想起？", opts: [
      { text: "没做到位的那一次", hit: [["eli", 3], ["hanayo", 1]] },
      { text: "被人认真说了一声「谢谢」的那一次", hit: [["kotori", 3], ["nico", 1]] },
      { text: "硬撑着、没让人看出来的那一次", hit: [["umi", 3], ["nozomi", 1]] },
      { text: "笑到停不下来的那一次", hit: [["rin", 3], ["honoka", 1]] }] },
  ],
  aqours: [
    { q: "社团只剩你们几个人，你的第一个念头是？", opts: [
      { text: "总会有办法，先把大家叫到一起", hit: [["chika", 3], ["kanan", 1]] },
      { text: "先把规则和分工定下来，不然做不成", hit: [["dia", 3], ["mari", 1]] },
      { text: "先担心自己会不会拖后腿", hit: [["riko", 3], ["hanamaru", 1]] },
      { text: "先去找一个别人没试过的做法", hit: [["you", 3], ["yoshiko", 1]] }] },
    { q: "周末的清晨，你更接近哪种状态？", opts: [
      { text: "早就醒了，先把身体活动开", hit: [["kanan", 3], ["chika", 1]] },
      { text: "把一天安排得松弛又体面", hit: [["mari", 3], ["dia", 1]] },
      { text: "抱着书或耳机，忘了时间", hit: [["hanamaru", 3], ["riko", 1]] },
      { text: "想再睡一会儿，又怕错过什么", hit: [["ruby", 3], ["you", 1]] }] },
    { q: "陌生人搭话问“你是偶像吗”，你会？", opts: [
      { text: "先否认，再换一种说法介绍自己", hit: [["yoshiko", 3], ["riko", 1]] },
      { text: "索性承认，还顺势邀请对方来看", hit: [["chika", 3], ["mari", 1]] },
      { text: "先判断对方是善意还是起哄", hit: [["dia", 3], ["ruby", 1]] },
      { text: "把话题引回同伴身上", hit: [["kanan", 3], ["hanamaru", 1]] }] },
    { q: "事情卡住、推进不下去时，你的解法是？", opts: [
      { text: "回到最熟悉的那件事上找状态", hit: [["riko", 3], ["chika", 1]] },
      { text: "去翻别人的东西，等灵感回来", hit: [["hanamaru", 3], ["dia", 1]] },
      { text: "先随便做一版，错的总比没有好", hit: [["mari", 3], ["you", 1]] },
      { text: "去问那个看起来最靠得住的人", hit: [["ruby", 3], ["yoshiko", 1]] }] },
    { q: "队里有人偷偷加练到受伤，你会？", opts: [
      { text: "先讲清后果，再替她做决定", hit: [["dia", 3], ["kanan", 1]] },
      { text: "直接行动，边处理边发火", hit: [["you", 3], ["mari", 1]] },
      { text: "先陪着，等她自己开口", hit: [["chika", 3], ["yoshiko", 1]] },
      { text: "慌得不知道做什么，只能守在旁边", hit: [["riko", 3], ["hanamaru", 1]] }] },
    { q: "只能在海边办一场 live，你想的是？", opts: [
      { text: "越不像常规舞台越好", hit: [["mari", 3], ["chika", 1]] },
      { text: "只要站在旁边的人是熟的就好", hit: [["ruby", 3], ["riko", 1]] },
      { text: "先把安全和流程确认一遍", hit: [["kanan", 3], ["you", 1]] },
      { text: "把该通知的人一个不漏地通知到", hit: [["dia", 3], ["hanamaru", 1]] }] },
    { q: "比起失败，你更害怕哪件事？", opts: [
      { text: "想表达的东西说不清楚", hit: [["hanamaru", 3], ["kanan", 1]] },
      { text: "认真的一面被人看见", hit: [["yoshiko", 3], ["dia", 1]] },
      { text: "因为犹豫错过本来能赶上的机会", hit: [["you", 3], ["ruby", 1]] },
      { text: "只剩自己一个人还在坚持", hit: [["chika", 3], ["mari", 1]] }] },
    { q: "另一支队伍来邀请你加入，你会？", opts: [
      { text: "先看他们能一起走多远", hit: [["kanan", 3], ["chika", 1]] },
      { text: "先看做事的方式合不合", hit: [["dia", 3], ["you", 1]] },
      { text: "反复权衡，迟迟做不了决定", hit: [["riko", 3], ["hanamaru", 1]] },
      { text: "表面不置可否，心里已经在想象新队伍", hit: [["yoshiko", 3], ["mari", 1]] }] },
    { q: "你希望别人记住你的方式，更接近哪一种？", opts: [
      { text: "谁都能跟着喊出口的那一句", hit: [["chika", 3], ["dia", 1]] },
      { text: "安静，但听过一次就记得", hit: [["riko", 3], ["kanan", 1]] },
      { text: "带点别人的味道，才好玩", hit: [["mari", 3], ["you", 1]] },
      { text: "声音小一点也没关系，被听见就行", hit: [["ruby", 3], ["hanamaru", 1]] }] },
    { q: "最后一天，你最想做的是？", opts: [
      { text: "把东西收好，像平常一样道别", hit: [["you", 3], ["chika", 1]] },
      { text: "把这段记下来，写点什么", hit: [["hanamaru", 3], ["riko", 1]] },
      { text: "说完该说的，不多停留", hit: [["yoshiko", 3], ["dia", 1]] },
      { text: "只叫上几个人，安静地结束", hit: [["mari", 3], ["kanan", 1]] }] },
    { q: "有人把功劳算到你头上，你更在意什么？", opts: [
      { text: "事情本身到底做成了没有", hit: [["kanan", 3], ["riko", 1]] },
      { text: "这个过程里有没有人吃亏", hit: [["you", 3], ["dia", 1]] },
      { text: "有没有被当成理所当然", hit: [["yoshiko", 3], ["ruby", 1]] },
      { text: "大家开心就好，记在谁名下都行", hit: [["chika", 3], ["mari", 1]] }] },
    { q: "计划做到一半，发现方向可能是错的，你倾向？", opts: [
      { text: "先停下来，问过所有人再动", hit: [["ruby", 3], ["chika", 1]] },
      { text: "干脆换个更大的做法，反正已经错了", hit: [["mari", 3], ["kanan", 1]] },
      { text: "先记下来，慢慢理清楚再说", hit: [["hanamaru", 3], ["you", 1]] },
      { text: "推翻重来，宁可从零开始", hit: [["riko", 3], ["yoshiko", 1]] }] },
    { q: "别人对你的评价，和你自己的判断不一致，你会？", opts: [
      { text: "先想想对方说的有没有道理", hit: [["kanan", 3], ["chika", 1]] },
      { text: "不解释，用下一次行动回答", hit: [["you", 3], ["riko", 1]] },
      { text: "嘴上不认，回去琢磨很久", hit: [["yoshiko", 3], ["mari", 1]] },
      { text: "把具体的分歧点找出来再谈", hit: [["dia", 3], ["hanamaru", 1]] }] },
    { q: "在一群人里，最让你不自在的是？", opts: [
      { text: "热闹到听不见自己的声音", hit: [["chika", 3], ["dia", 1]] },
      { text: "突然被点名，要即兴说点什么", hit: [["riko", 3], ["you", 1]] },
      { text: "有人明显难过，却没人去问", hit: [["kanan", 3], ["ruby", 1]] },
      { text: "明明有问题，却没人愿意点破", hit: [["hanamaru", 3], ["yoshiko", 1]] }] },
    { q: "回头看自己做过的那些事，你最先想起？", opts: [
      { text: "没做到位的那一次", hit: [["you", 3], ["kanan", 1]] },
      { text: "被人认真说了一声「谢谢」的那一次", hit: [["ruby", 3], ["dia", 1]] },
      { text: "笑到停不下来的那一次", hit: [["mari", 3], ["hanamaru", 1]] },
      { text: "硬撑着、没让人看出来的那一次", hit: [["yoshiko", 3], ["riko", 1]] }] },
  ],
};
