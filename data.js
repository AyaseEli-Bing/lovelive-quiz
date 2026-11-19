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
  ],
};
