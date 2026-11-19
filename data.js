export const DIMENSIONS = [
  {
    "key": "energy",
    "pos": "外向",
    "neg": "内向"
  },
  {
    "key": "drive",
    "pos": "行动",
    "neg": "思考"
  },
  {
    "key": "heart",
    "pos": "感性",
    "neg": "理性"
  },
  {
    "key": "lead",
    "pos": "主导",
    "neg": "配合"
  },
  {
    "key": "steady",
    "pos": "稳定",
    "neg": "敏感"
  },
  {
    "key": "open",
    "pos": "开放",
    "neg": "守成"
  }
];

export const GROUPS = {
  "muse": {
    "id": "muse",
    "name": "μ's",
    "subtitle": "音乃木坂学院校园偶像部",
    "blurb": "九个人、三种小队。为了守住学校而站上屋顶的那群人。",
    "units": [
      "Printemps",
      "lily white",
      "BiBi"
    ]
  },
  "aqours": {
    "id": "aqours",
    "name": "Aqours",
    "subtitle": "浦之星女学院校园偶像部",
    "blurb": "来自海边小镇的九个人，从「想要闪闪发光」开始重建社团。",
    "units": [
      "CYaRon!",
      "AZALEA",
      "Guilty Kiss"
    ]
  },
  "nijigasaki": {
    "id": "nijigasaki",
    "name": "虹ヶ咲",
    "subtitle": "虹咲学园校园偶像同好会",
    "blurb": "十二个人各自闪耀，也彼此照亮的同好会。",
    "units": [
      "A·ZU·NA",
      "DiverDiva",
      "QU4RTZ",
      "R3BIRTH"
    ]
  },
  "liella": {
    "id": "liella",
    "name": "Liella!",
    "subtitle": "结丘女子高等学校校园偶像部",
    "blurb": "从五个人开始，把「不可能」唱成可能的学园偶像。",
    "units": [
      "CatChu!",
      "KALEIDOSCORE",
      "5yncri5e!"
    ]
  },
  "hasunosora": {
    "id": "hasunosora",
    "name": "莲之空",
    "subtitle": "莲之空女学院校园偶像部",
    "blurb": "在 traditions 与青春之间，认真活过的少女们。",
    "units": [
      "Cerise Bouquet",
      "DOLLCHESTRA",
      "Mira-Cra Park!"
    ]
  }
};

export const MEMBERS = {
  "honoka": {
    "group": "muse",
    "nameJa": "高坂穂乃果",
    "nameZh": "高坂穗乃果",
    "romaji": "Kosaka Honoka",
    "unit": "Printemps",
    "color": "#f38500",
    "colorName": "橙色",
    "mono": "ほ",
    "darkInk": true,
    "birthday": "8月3日",
    "blood": "O",
    "grade": "2年级",
    "traits": [
      "想到就冲出去，边做边想办法",
      "总能把低落的气氛带起来",
      "大家犹豫时先喊「试试看」",
      "难过也睡一觉就过去",
      "相信船到桥头自然直",
      "闲不下来，总想找点事做",
      "把伙伴的情绪当成自己的事"
    ],
    "profile": [
      1,
      1,
      0.5,
      1,
      -0.5,
      0.5
    ]
  },
  "eli": {
    "group": "muse",
    "nameJa": "絢瀬絵里",
    "nameZh": "绚濑绘里",
    "romaji": "Ayase Eli",
    "unit": "BiBi",
    "color": "#7aeeff",
    "colorName": "水蓝色",
    "mono": "え",
    "darkInk": true,
    "birthday": "10月21日",
    "blood": "B",
    "grade": "3年级",
    "traits": [
      "凡事先想清楚再动手",
      "对自己要求高，不太允许出错",
      "看起来可靠，其实也会偷偷紧张",
      "嘴上理性，心里比谁都在意",
      "习惯把责任扛在前面",
      "计划被打乱时会明显不安",
      "冷静是练出来的，不是天生的"
    ],
    "profile": [
      0,
      -0.5,
      -0.5,
      1,
      1,
      0
    ]
  },
  "kotori": {
    "group": "muse",
    "nameJa": "南ことり",
    "nameZh": "南小鸟",
    "romaji": "Minami Kotori",
    "unit": "Printemps",
    "color": "#cebfbf",
    "colorName": "银灰色",
    "mono": "こ",
    "darkInk": true,
    "colorNote": "LLWiki 色名记为「白色」，色值 #cebfbf 实为灰米色",
    "birthday": "9月12日",
    "blood": "O",
    "grade": "2年级",
    "traits": [
      "说话温和，很少与人起冲突",
      "擅长照顾别人的感受",
      "看着随和，其实有自己的主意",
      "愿意为在意的人默默付出",
      "把心意缝进细节里",
      "被推到人前时会先往后缩",
      "安静地观察，再慢慢靠近"
    ],
    "profile": [
      -0.5,
      -0.5,
      1,
      -0.5,
      0.5,
      0
    ]
  },
  "umi": {
    "group": "muse",
    "nameJa": "園田海未",
    "nameZh": "园田海未",
    "romaji": "Sonoda Umi",
    "unit": "lily white",
    "color": "#1769ff",
    "colorName": "深蓝色",
    "mono": "う",
    "darkInk": false,
    "birthday": "3月15日",
    "blood": "A",
    "grade": "2年级",
    "traits": [
      "认真守规矩，看不惯敷衍",
      "容易害羞，但该说的还是会说",
      "对自己比别人更严格",
      "重视传统和承诺",
      "看不惯半途而废",
      "紧张时会把流程再背一遍",
      "守着一套不肯让步的标准"
    ],
    "profile": [
      -0.5,
      -0.5,
      -0.5,
      0.5,
      1,
      -1
    ]
  },
  "rin": {
    "group": "muse",
    "nameJa": "星空凛",
    "nameZh": "星空凛",
    "romaji": "Hoshizora Rin",
    "unit": "lily white",
    "color": "#fff832",
    "colorName": "黄色",
    "mono": "り",
    "darkInk": true,
    "birthday": "11月1日",
    "blood": "A",
    "grade": "1年级",
    "traits": [
      "精力充沛，闲不下来",
      "情绪来得快去得也快",
      "为朋友可以两肋插刀",
      "嘴上逞强，心里很软",
      "运动完才觉得活过来",
      "难过会直接哭出来，然后就好",
      "跟着直觉跑，很少犹豫"
    ],
    "profile": [
      1,
      1,
      1,
      -1,
      -0.5,
      0
    ]
  },
  "maki": {
    "group": "muse",
    "nameJa": "西木野真姫",
    "nameZh": "西木野真姬",
    "romaji": "Nishikino Maki",
    "unit": "BiBi",
    "color": "#ff503e",
    "colorName": "红色",
    "mono": "ま",
    "darkInk": true,
    "birthday": "4月19日",
    "blood": "AB",
    "grade": "1年级",
    "traits": [
      "把喜欢藏得很深，嘴上却不肯承认",
      "一个人练琴到深夜也不觉得苦",
      "被看穿心思时会突然慌乱",
      "朋友说你是外冷内热",
      "宁可自己扛也不愿开口求助",
      "对在意的事有一套不肯让步的标准",
      "独处时才觉得电量满格"
    ],
    "profile": [
      -1,
      -0.5,
      -0.5,
      0,
      0.5,
      0
    ]
  },
  "hanayo": {
    "group": "muse",
    "nameJa": "小泉花陽",
    "nameZh": "小泉花阳",
    "romaji": "Koizumi Hanayo",
    "unit": "Printemps",
    "color": "#6ae673",
    "colorName": "绿色",
    "mono": "は",
    "darkInk": true,
    "birthday": "1月17日",
    "blood": "B",
    "grade": "1年级",
    "traits": [
      "安静，但对喜欢的事异常专注",
      "习惯先反省自己",
      "容易被忽略，却一直在默默努力",
      "对热爱的事物毫无抵抗力",
      "人多的场合会先找角落",
      "谈到偶像就突然话多",
      "小小的仪式感能撑过一天"
    ],
    "profile": [
      -1,
      -0.5,
      0.5,
      -1,
      0,
      -0.5
    ]
  },
  "nico": {
    "group": "muse",
    "nameJa": "矢澤にこ",
    "nameZh": "矢泽妮可",
    "romaji": "Yazawa Nico",
    "unit": "BiBi",
    "color": "#ff4f91",
    "colorName": "粉色",
    "mono": "に",
    "darkInk": true,
    "birthday": "7月22日",
    "blood": "A",
    "grade": "3年级",
    "traits": [
      "很在意自己呈现出来的样子",
      "用玩笑和毒舌掩饰认真",
      "比谁都努力，只是不让人看见",
      "渴望被认可，也值得被认可",
      "人前活泼，人后偷偷用功",
      "被夸可爱会嘴上嫌弃心里开心",
      "镜头感是私下练了无数遍的"
    ],
    "profile": [
      0.5,
      0.5,
      0.5,
      0.5,
      -0.5,
      0.5
    ]
  },
  "nozomi": {
    "group": "muse",
    "nameJa": "東條希",
    "nameZh": "东条希",
    "romaji": "Tojo Nozomi",
    "unit": "lily white",
    "color": "#c455f6",
    "colorName": "紫色",
    "mono": "の",
    "darkInk": true,
    "birthday": "6月9日",
    "blood": "O",
    "grade": "3年级",
    "traits": [
      "看得透，却不说破",
      "喜欢用轻松的方式化解尴尬",
      "相信直觉，也愿意给人留余地",
      "是朋友里那个兜底的人",
      "午睡和灵感同等重要",
      "用玩笑话讲真心",
      "暗中把每个人的状态记在心里"
    ],
    "profile": [
      0.5,
      -0.5,
      0.5,
      0.5,
      1,
      0.5
    ]
  },
  "chika": {
    "group": "aqours",
    "nameJa": "高海千歌",
    "nameZh": "高海千歌",
    "romaji": "Takami Chika",
    "unit": "CYaRon!",
    "color": "#ff9547",
    "colorName": "蜜柑色",
    "mono": "ち",
    "darkInk": true,
    "birthday": "8月1日",
    "blood": "B",
    "grade": "2年级",
    "traits": [
      "想到就喊出来，先做再说",
      "天生能把人聚到一起",
      "把别人的梦想也当回事",
      "认定了就不轻易放手",
      "海风一吹就觉得又能行了",
      "难过也很快被下一件事冲走",
      "总想把「喜欢」传给更多人"
    ],
    "profile": [
      1,
      1,
      0.5,
      1,
      -0.5,
      0.5
    ]
  },
  "riko": {
    "group": "aqours",
    "nameJa": "桜内梨子",
    "nameZh": "樱内梨子",
    "romaji": "Sakurauchi Riko",
    "unit": "Guilty Kiss",
    "color": "#ff9eac",
    "colorName": "樱色",
    "mono": "り",
    "darkInk": true,
    "birthday": "9月19日",
    "blood": "A",
    "grade": "2年级",
    "traits": [
      "表面冷静，内心其实容易慌",
      "更习惯用作品而不是语言表达自己",
      "对新环境需要时间适应",
      "认真起来会忘了照顾自己",
      "人前镇定，人后反复复盘",
      "琴声比话语更能代表你",
      "容易把小事在心里放大"
    ],
    "profile": [
      -0.5,
      -0.5,
      0.5,
      -0.5,
      -0.5,
      0
    ]
  },
  "kanan": {
    "group": "aqours",
    "nameJa": "松浦果南",
    "nameZh": "松浦果南",
    "romaji": "Matsuura Kanan",
    "unit": "AZALEA",
    "color": "#27c1b7",
    "colorName": "草绿色",
    "mono": "か",
    "darkInk": true,
    "birthday": "2月10日",
    "blood": "O",
    "grade": "3年级",
    "traits": [
      "做得多说得少",
      "是大家默认可靠的那个",
      "也有害怕的东西，只是不退",
      "习惯把照顾别人当成日常",
      "动手之前先把风险想好",
      "被依赖时从不推辞",
      "海边的生活让你踏实"
    ],
    "profile": [
      0,
      0.5,
      -0.5,
      0.5,
      1,
      0
    ]
  },
  "dia": {
    "group": "aqours",
    "nameJa": "黒澤ダイヤ",
    "nameZh": "黑泽黛雅",
    "romaji": "Kurosawa Dia",
    "unit": "AZALEA",
    "color": "#db0839",
    "colorName": "红色",
    "mono": "だ",
    "darkInk": false,
    "birthday": "1月1日",
    "blood": "A",
    "grade": "3年级",
    "traits": [
      "先把规矩立起来再谈感情",
      "对自己和身边人都要求高",
      "严格其实是一种保护",
      "在在意的人面前会破功",
      "看不惯散漫和敷衍",
      "责任来了就接住，不抱怨",
      "把「必须做好」刻进习惯"
    ],
    "profile": [
      -0.5,
      -0.5,
      -0.5,
      1,
      1,
      -0.5
    ]
  },
  "you": {
    "group": "aqours",
    "nameJa": "渡辺曜",
    "nameZh": "渡边曜",
    "romaji": "Watanabe You",
    "unit": "CYaRon!",
    "color": "#66c0ff",
    "colorName": "水蓝色",
    "mono": "よ",
    "darkInk": true,
    "birthday": "4月17日",
    "blood": "AB",
    "grade": "2年级",
    "traits": [
      "行动力强，想到就出发",
      "爽朗，但也会吃醋",
      "对热爱的事有使不完的劲",
      "嘴上大大咧咧，心里有数",
      "说干就干，很少内耗",
      "伙伴低落时第一个察觉",
      "闲不住，总想找事练"
    ],
    "profile": [
      1,
      1,
      0,
      0,
      -0.5,
      0.5
    ]
  },
  "ruby": {
    "group": "aqours",
    "nameJa": "黒澤ルビィ",
    "nameZh": "黑泽露比",
    "romaji": "Kurosawa Ruby",
    "unit": "CYaRon!",
    "color": "#ff6fbe",
    "colorName": "粉紫色",
    "mono": "る",
    "darkInk": true,
    "birthday": "9月21日",
    "blood": "A",
    "grade": "1年级",
    "traits": [
      "容易紧张，习惯先道歉",
      "羡慕别人的大胆",
      "依赖信任的人，但也在慢慢独立",
      "一旦决定了就很稳",
      "陌生场合会先找熟悉的身影",
      "小声说话，却把喜好记得很牢",
      "被鼓励时会红着脸努力"
    ],
    "profile": [
      -1,
      -0.5,
      0.5,
      -1,
      -0.5,
      0
    ]
  },
  "mari": {
    "group": "aqours",
    "nameJa": "小原鞠莉",
    "nameZh": "小原鞠莉",
    "romaji": "Ohara Mari",
    "unit": "Guilty Kiss",
    "color": "#c252c6",
    "colorName": "浅紫色",
    "mono": "ま",
    "darkInk": false,
    "birthday": "6月13日",
    "blood": "AB",
    "grade": "3年级",
    "traits": [
      "直接热烈，不绕弯子",
      "舍得放手去追想要的",
      "看着随便，其实看得很清",
      "擅长把日子过得漂亮",
      "喜欢就大声说喜欢",
      "新鲜事物总想第一个试",
      "把「开心」当成重要决定"
    ],
    "profile": [
      1,
      0.5,
      0.5,
      0.5,
      0.5,
      1
    ]
  },
  "yoshiko": {
    "group": "aqours",
    "nameJa": "津島善子",
    "nameZh": "津岛善子",
    "romaji": "Tsushima Yoshiko",
    "unit": "Guilty Kiss",
    "color": "#c1cad4",
    "colorName": "灰色·白色",
    "mono": "や",
    "darkInk": true,
    "colorNote": "LLWiki 色名记为「白色」，色值 #c1cad4 实为浅蓝灰",
    "birthday": "7月13日",
    "blood": "O",
    "grade": "1年级",
    "traits": [
      "用设定和玩笑保护自己",
      "怕被看穿，又希望被理解",
      "嘴上不承认，身体很诚实",
      "中二的外表下是认真的心",
      "人前摆姿态，人后偷偷在意",
      "被叫本名会瞬间破功",
      "把「堕天使」当成安全的壳"
    ],
    "profile": [
      -1,
      0,
      0.5,
      -0.5,
      -1,
      1
    ]
  },
  "hanamaru": {
    "group": "aqours",
    "nameJa": "国木田花丸",
    "nameZh": "国木田花丸",
    "romaji": "Kunikida Hanamaru",
    "unit": "AZALEA",
    "color": "#ffd010",
    "colorName": "深黄色",
    "mono": "は",
    "darkInk": true,
    "birthday": "3月4日",
    "blood": "O",
    "grade": "1年级",
    "traits": [
      "安静，但心里有自己的小算盘",
      "用文字和书理解世界",
      "看着朴素，其实很有想法",
      "对喜欢的事会下苦功",
      "说话慢，却句句有分量",
      "传统和老物件让你安心",
      "把想法先写下来再说出口"
    ],
    "profile": [
      -0.5,
      -0.5,
      0.5,
      -0.5,
      1,
      -0.5
    ]
  },
  "ayumu": {
    "group": "nijigasaki",
    "id": "ayumu",
    "nameJa": "上原歩夢",
    "nameZh": "上原步梦",
    "romaji": "Uehara Ayumu",
    "unit": "A·ZU·NA",
    "color": "#ED7D95",
    "colorName": "浅粉色",
    "birthday": "3月1日",
    "blood": "A",
    "grade": "高二",
    "traits": [
      "温柔体贴，认真努力",
      "一步步朝梦想前进",
      "很在意重要的人",
      "会把别人的需求放在前面",
      "紧张时靠反复练习安定",
      "不擅争抢，但从不放弃",
      "把「想和你们在一起」藏在努力里"
    ],
    "profile": [
      -0.5,
      -0.5,
      1,
      -0.5,
      0.5,
      0
    ]
  },
  "kasumi": {
    "group": "nijigasaki",
    "id": "kasumi",
    "nameJa": "中須かすみ",
    "nameZh": "中须霞",
    "romaji": "Nakasu Kasumi",
    "unit": "QU4RTZ",
    "color": "#E7D600",
    "colorName": "蜡笔黄色",
    "birthday": "1月23日",
    "blood": "B",
    "grade": "高一",
    "traits": [
      "最爱可爱事物",
      "骨子里不服输",
      "爱耍小聪明恶作剧",
      "内心是好孩子",
      "被说幼稚会炸毛",
      "争强好胜写在脸上",
      "偷偷希望被当成大人"
    ],
    "profile": [
      0.5,
      0.5,
      0.5,
      0.5,
      -0.5,
      0.5
    ]
  },
  "shizuku": {
    "group": "nijigasaki",
    "id": "shizuku",
    "nameJa": "桜坂しずく",
    "nameZh": "樱坂雫",
    "romaji": "Osaka Shizuku",
    "unit": "A·ZU·NA",
    "color": "#01B7ED",
    "colorName": "浅蓝色",
    "birthday": "4月3日",
    "blood": "A",
    "grade": "高一",
    "traits": [
      "认真可靠，温柔谦逊",
      "热爱表演",
      "想让观众露出笑容",
      "台上台下反差很大",
      "习惯把紧张藏进排练",
      "对角色比对自己更上心",
      "安静地打磨每一个细节"
    ],
    "profile": [
      -0.5,
      -0.5,
      0.5,
      -0.5,
      1,
      0
    ]
  },
  "karin": {
    "group": "nijigasaki",
    "id": "karin",
    "nameJa": "朝香果林",
    "nameZh": "朝香果林",
    "romaji": "Asaka Karin",
    "unit": "DiverDiva",
    "color": "#485EC6",
    "colorName": "王室蓝色",
    "birthday": "6月29日",
    "blood": "AB",
    "grade": "高三",
    "traits": [
      "沉稳不惊，成熟自信",
      "意外地纯真",
      "爱捉弄后辈",
      "看得清场面，也控得住场",
      "不轻易表态，一表态就准",
      "被戳破少女心会嘴硬",
      "把可靠当成默认状态"
    ],
    "profile": [
      0.5,
      0,
      -0.5,
      1,
      1,
      0.5
    ]
  },
  "ai": {
    "group": "nijigasaki",
    "id": "ai",
    "nameJa": "宮下愛",
    "nameZh": "宫下爱",
    "romaji": "Miyashita Ai",
    "unit": "DiverDiva",
    "color": "#FF5800",
    "colorName": "超橙色",
    "birthday": "5月30日",
    "blood": "A",
    "grade": "高二",
    "traits": [
      "开朗爱笑",
      "被挑战就燃起斗志",
      "友善照顾人",
      "乐于尝试新事物",
      "冷场时主动抛梗",
      "越难越觉得有意思",
      "把快乐传染给全场"
    ],
    "profile": [
      1,
      1,
      0.5,
      0.5,
      -0.5,
      1
    ]
  },
  "kanata": {
    "group": "nijigasaki",
    "id": "kanata",
    "nameJa": "近江彼方",
    "nameZh": "近江彼方",
    "romaji": "Konoe Kanata",
    "unit": "QU4RTZ",
    "color": "#A664A0",
    "colorName": "堇色",
    "birthday": "12月16日",
    "blood": "O",
    "grade": "高三",
    "traits": [
      "慵懒爱睡",
      "疼爱妹妹",
      "温和随性",
      "关键时刻很可靠",
      "能躺着就不坐着",
      "看似散漫，实则心里有数",
      "把精力留给真正重要的事"
    ],
    "profile": [
      -0.5,
      -0.5,
      0.5,
      -0.5,
      0.5,
      -0.5
    ]
  },
  "setsuna": {
    "group": "nijigasaki",
    "id": "setsuna",
    "nameJa": "優木せつ菜",
    "nameZh": "优木雪菜",
    "romaji": "Yuki Setsuna",
    "unit": "A·ZU·NA",
    "color": "#D81C2F",
    "colorName": "猩红色",
    "birthday": "8月8日",
    "blood": "O",
    "grade": "高二",
    "traits": [
      "对喜欢的事率直",
      "充满热情",
      "认真有担当",
      "想把喜欢传遍世界",
      "谈到热爱就眼睛发亮",
      "认定的事九头牛拉不回",
      "把「喜欢」大声喊出来"
    ],
    "profile": [
      0.5,
      1,
      1,
      0.5,
      0.5,
      0.5
    ]
  },
  "emma": {
    "group": "nijigasaki",
    "id": "emma",
    "nameJa": "エマ・ヴェルデ",
    "nameZh": "艾玛·维尔德",
    "romaji": "Emma Verde",
    "unit": "QU4RTZ",
    "color": "#84C36E",
    "colorName": "浅绿色",
    "birthday": "2月5日",
    "blood": "O",
    "grade": "高三",
    "traits": [
      "稳重文静",
      "热爱大自然",
      "治愈身边人",
      "我行我素",
      "节奏慢，但从不慌乱",
      "用歌声和自然安抚人心",
      "把日子过成舒缓的调子"
    ],
    "profile": [
      -0.5,
      -0.5,
      1,
      -0.5,
      1,
      -0.5
    ]
  },
  "rina": {
    "group": "nijigasaki",
    "id": "rina",
    "nameJa": "天王寺璃奈",
    "nameZh": "天王寺璃奈",
    "romaji": "Tennoji Rina",
    "unit": "QU4RTZ",
    "color": "#9CA5B9",
    "colorName": "纸白色",
    "birthday": "11月13日",
    "blood": "B",
    "grade": "高一",
    "traits": [
      "不擅表情达意",
      "内心细腻",
      "努力想办法传达心情",
      "渴望与大家相连",
      "借助小道具传达说不出口的话",
      "面无表情，心里翻涌",
      "把「想被理解」写进小道具"
    ],
    "profile": [
      -1,
      -0.5,
      1,
      -1,
      -0.5,
      0
    ]
  },
  "shioriko": {
    "group": "nijigasaki",
    "id": "shioriko",
    "nameJa": "三船栞子",
    "nameZh": "三船栞子",
    "romaji": "Mifune Shioriko",
    "unit": "R3BIRTH",
    "color": "#37B484",
    "colorName": "翡翠色",
    "birthday": "10月5日",
    "blood": "AB",
    "grade": "高一",
    "traits": [
      "冷静沉着",
      "严于律己",
      "不懂变通",
      "真心希望他人幸福",
      "先讲道理，再谈感情",
      "看不惯散漫，也逼自己紧绷",
      "把「正确」看得比「舒服」重"
    ],
    "profile": [
      -0.5,
      -0.5,
      -1,
      0.5,
      1,
      -1
    ]
  },
  "mia": {
    "group": "nijigasaki",
    "id": "mia",
    "nameJa": "ミア・テイラー",
    "nameZh": "米娅·泰勒",
    "romaji": "Mia Taylor",
    "unit": "R3BIRTH",
    "color": "#A9A898",
    "colorName": "白金银色",
    "birthday": "12月6日",
    "blood": "AB",
    "grade": "高三",
    "traits": [
      "有才华却不自信",
      "说话直率",
      "其实害羞",
      "为喜欢的事鼓起勇气",
      "嘴上嫌弃，手上却帮忙",
      "被夸会先怀疑再开心",
      "把不安藏在直率后面"
    ],
    "profile": [
      -1,
      0,
      -1,
      0,
      -0.5,
      1
    ]
  },
  "lanzhu": {
    "group": "nijigasaki",
    "id": "lanzhu",
    "nameJa": "鐘嵐珠",
    "nameZh": "钟岚珠",
    "romaji": "Zhong Lanzhu",
    "unit": "R3BIRTH",
    "color": "#F8C8C4",
    "colorName": "玫瑰金色",
    "birthday": "2月15日",
    "blood": "B",
    "grade": "高二",
    "traits": [
      "自信满满",
      "想到就去做",
      "热烈直率",
      "偶尔任性",
      "要什么就大声争取",
      "舞台越大越兴奋",
      "把「我值得」写在脸上"
    ],
    "profile": [
      1,
      1,
      0.5,
      1,
      0.5,
      0.5
    ]
  },
  "kanon": {
    "group": "liella",
    "id": "kanon",
    "nameJa": "澁谷かのん",
    "nameZh": "涩谷香音",
    "romaji": "Shibuya Kanon",
    "unit": "CatChu!",
    "color": "#FF7F27",
    "colorName": "金盏花色",
    "birthday": "5月1日",
    "blood": "A",
    "grade": "高三",
    "traits": [
      "腼腆易怯场",
      "善良为他人着想",
      "热爱歌唱",
      "犹豫中仍向前走",
      "人前小声，歌声却亮",
      "紧张到手心出汗也不退",
      "把勇气一点点攒起来"
    ],
    "profile": [
      -0.5,
      -0.5,
      1,
      -0.5,
      -0.5,
      0
    ]
  },
  "keke": {
    "group": "liella",
    "id": "keke",
    "nameJa": "唐可可",
    "nameZh": "唐可可",
    "romaji": "Tang Keke",
    "unit": "KALEIDOSCORE",
    "color": "#A0FFF9",
    "colorName": "蜡笔蓝色",
    "birthday": "7月17日",
    "blood": "O",
    "grade": "高三",
    "traits": [
      "开朗热情",
      "想到就立刻行动",
      "遇难不放弃",
      "爱笑也爱哭",
      "情绪全写在脸上",
      "把「喜欢」喊得很大声",
      "跌倒了拍拍灰继续跑"
    ],
    "profile": [
      1,
      1,
      0.5,
      0.5,
      -0.5,
      1
    ]
  },
  "chisato": {
    "group": "liella",
    "id": "chisato",
    "nameJa": "嵐千砂都",
    "nameZh": "岚千砂都",
    "romaji": "Arashi Chisato",
    "unit": "5yncri5e!",
    "color": "#FF6E90",
    "colorName": "桃粉色",
    "birthday": "2月25日",
    "blood": "B",
    "grade": "高三",
    "traits": [
      "元气活泼",
      "好胜想赢",
      "看问题一针见血",
      "关键时刻支撑伙伴",
      "笑着把难题拆开来做",
      "不服输，但输得起",
      "把「赢」当成对伙伴的交代"
    ],
    "profile": [
      1,
      0.5,
      -0.5,
      0.5,
      0.5,
      0.5
    ]
  },
  "sumire": {
    "group": "liella",
    "id": "sumire",
    "nameJa": "平安名すみれ",
    "nameZh": "平安名堇",
    "romaji": "Heanna Sumire",
    "unit": "CatChu!",
    "color": "#74F466",
    "colorName": "蜜瓜绿色",
    "birthday": "9月28日",
    "blood": "AB",
    "grade": "高三",
    "traits": [
      "强硬好胜",
      "表现欲强",
      "内心温柔",
      "理解他人情感",
      "人前张扬，人后细腻",
      "被忽视会明显失落",
      "把温柔藏在好胜下面"
    ],
    "profile": [
      1,
      0.5,
      0.5,
      1,
      -0.5,
      0.5
    ]
  },
  "ren": {
    "group": "liella",
    "id": "ren",
    "nameJa": "葉月恋",
    "nameZh": "叶月恋",
    "romaji": "Hazuki Ren",
    "unit": "KALEIDOSCORE",
    "color": "#0000A0",
    "colorName": "宝石蓝色",
    "birthday": "11月24日",
    "blood": "A",
    "grade": "高三",
    "traits": [
      "沉稳认真",
      "不擅闲聊",
      "自律严谨",
      "逐渐敞开心扉",
      "先做到，再说到",
      "对散漫零容忍",
      "把信任留给时间证明"
    ],
    "profile": [
      -0.5,
      -0.5,
      -0.5,
      0.5,
      1,
      -0.5
    ]
  },
  "kinako": {
    "group": "liella",
    "id": "kinako",
    "nameJa": "桜小路きな子",
    "nameZh": "樱小路希奈子",
    "romaji": "Sakurakoji Kinako",
    "unit": "5yncri5e!",
    "color": "#FFF442",
    "colorName": "玉米黄色",
    "birthday": "4月10日",
    "blood": "O",
    "grade": "高二",
    "traits": [
      "老实坚定",
      "有责任心",
      "跌倒再爬起",
      "努力改变自己",
      "笨拙但从不偷懒",
      "被否定会先记下来再改进",
      "把「再来一次」当口头禅"
    ],
    "profile": [
      -0.5,
      0.5,
      0.5,
      -0.5,
      0.5,
      -0.5
    ]
  },
  "mei": {
    "group": "liella",
    "id": "mei",
    "nameJa": "米女メイ",
    "nameZh": "米女芽衣",
    "romaji": "Yoneme Mei",
    "unit": "CatChu!",
    "color": "#FF3535",
    "colorName": "胭脂红色",
    "birthday": "10月29日",
    "blood": "A",
    "grade": "高二",
    "traits": [
      "缺乏自信",
      "其实害羞",
      "憧憬可爱事物",
      "珍视朋友",
      "人前退缩，人后在意",
      "被肯定时会愣一下",
      "把「我不行」慢慢改成「我试试」"
    ],
    "profile": [
      -1,
      -0.5,
      0.5,
      -1,
      -0.5,
      0
    ]
  },
  "shiki": {
    "group": "liella",
    "id": "shiki",
    "nameJa": "若菜四季",
    "nameZh": "若菜四季",
    "romaji": "Wakana Shiki",
    "unit": "5yncri5e!",
    "color": "#B2FFDD",
    "colorName": "冰绿白色",
    "birthday": "6月17日",
    "blood": "B",
    "grade": "高二",
    "traits": [
      "沉着冷静",
      "好奇爱探究本质",
      "喜静独处",
      "容易寂寞",
      "先观察，再下结论",
      "对「为什么」比对「是什么」上心",
      "把安静当成充电方式"
    ],
    "profile": [
      -1,
      -0.5,
      -0.5,
      -0.5,
      0.5,
      0.5
    ]
  },
  "natsumi": {
    "group": "liella",
    "id": "natsumi",
    "nameJa": "鬼塚夏美",
    "nameZh": "鬼冢夏美",
    "romaji": "Onitsuka Natsumi",
    "unit": "5yncri5e!",
    "color": "#FF51C4",
    "colorName": "鬼夏粉色",
    "birthday": "8月7日",
    "blood": "AB",
    "grade": "高二",
    "traits": [
      "开朗行动力强",
      "对流行敏感",
      "为达目的肯下功夫",
      "伙伴低落时负责打气",
      "想到点子马上试",
      "镜头前自来熟",
      "把流量和人心都当学问"
    ],
    "profile": [
      1,
      1,
      0,
      0.5,
      0,
      1
    ]
  },
  "wien": {
    "group": "liella",
    "id": "wien",
    "nameJa": "ウィーン・マルガレーテ",
    "nameZh": "薇恩·玛格丽特",
    "romaji": "Wien Margarete",
    "unit": "KALEIDOSCORE",
    "color": "#E49DFD",
    "colorName": "优雅紫色",
    "birthday": "1月20日",
    "blood": "A",
    "grade": "高一",
    "traits": [
      "竞争心极强",
      "才华出众而自负",
      "易与人冲突",
      "不肯认输",
      "把对手当成镜子",
      "赢了也嫌赢得不够漂亮",
      "用实力堵住质疑"
    ],
    "profile": [
      0.5,
      0.5,
      -0.5,
      1,
      0.5,
      0.5
    ]
  },
  "tomari": {
    "group": "liella",
    "id": "tomari",
    "nameJa": "鬼塚冬毬",
    "nameZh": "鬼冢冬毬",
    "romaji": "Onitsuka Tomari",
    "unit": "5yncri5e!",
    "color": "#4CD2E2",
    "colorName": "水蓝色",
    "birthday": "12月28日",
    "blood": "B",
    "grade": "高一",
    "traits": [
      "讲求效率",
      "冷静分析",
      "对梦想冷眼旁观",
      "深爱姐姐",
      "先算投入产出再行动",
      "情绪波动很小",
      "把「有用」当成筛选标准"
    ],
    "profile": [
      -0.5,
      -0.5,
      -0.5,
      0,
      1,
      0
    ]
  },
  "kaho": {
    "group": "hasunosora",
    "id": "kaho",
    "nameJa": "日野下花帆",
    "nameZh": "日野下花帆",
    "romaji": "Hinoshita Kaho",
    "unit": "Cerise Bouquet",
    "color": "#F8B500",
    "colorName": "太阳色",
    "birthday": "5月22日",
    "blood": null,
    "grade": "103期",
    "traits": [
      "开朗笑容不断",
      "高兴就全力投入",
      "一往无前",
      "率真烂漫",
      "想到就冲，笑声先到",
      "低落也很快被新奇冲走",
      "把「快乐」传染给全场"
    ],
    "profile": [
      1,
      1,
      0.5,
      0.5,
      -0.5,
      0.5
    ]
  },
  "sayaka": {
    "group": "hasunosora",
    "id": "sayaka",
    "nameJa": "村野さやか",
    "nameZh": "村野沙耶香",
    "romaji": "Murano Sayaka",
    "unit": "DOLLCHESTRA",
    "color": "#5383C3",
    "colorName": "冰蓝色",
    "birthday": "1月13日",
    "blood": null,
    "grade": "103期",
    "traits": [
      "过于认真",
      "先计划再行动",
      "笨拙却纯粹",
      "容易紧绷",
      "把日程排得满满才安心",
      "出错会反复自责",
      "用准备抵消不安"
    ],
    "profile": [
      -0.5,
      -0.5,
      0.5,
      -0.5,
      -0.5,
      -0.5
    ]
  },
  "kozue": {
    "group": "hasunosora",
    "id": "kozue",
    "nameJa": "乙宗梢",
    "nameZh": "乙宗梢",
    "romaji": "Otomune Kozue",
    "unit": "Cerise Bouquet",
    "color": "#68BE8D",
    "colorName": "人鱼绿色",
    "birthday": "6月15日",
    "blood": null,
    "grade": "102期",
    "traits": [
      "文武双全",
      "凡事拼命努力",
      "从不骄傲自满",
      "目标坚定",
      "做到最好也不觉得够",
      "把努力当成呼吸一样自然",
      "优秀是练出来的，不是天生的"
    ],
    "profile": [
      0,
      0.5,
      -0.5,
      0.5,
      1,
      0
    ]
  },
  "tsuzuri": {
    "group": "hasunosora",
    "id": "tsuzuri",
    "nameJa": "夕霧綴理",
    "nameZh": "夕雾缀理",
    "romaji": "Yugiri Tsuzuri",
    "unit": "DOLLCHESTRA",
    "color": "#BA2636",
    "colorName": "我的红色",
    "birthday": "11月17日",
    "blood": null,
    "grade": "102期",
    "traits": [
      "是天才却平易近人",
      "容易寂寞",
      "常发呆神游",
      "带着点孩子气",
      "灵感来了就忘乎所以",
      "对「好玩」毫无抵抗力",
      "把天才的包袱随手放下"
    ],
    "profile": [
      0,
      -1,
      0.5,
      -1,
      -1,
      0.5
    ]
  },
  "rurino": {
    "group": "hasunosora",
    "id": "rurino",
    "nameJa": "大沢瑠璃乃",
    "nameZh": "大泽瑠璃乃",
    "romaji": "Osawa Rurino",
    "unit": "Mira-Cra Park!",
    "color": "#E7609E",
    "colorName": "瑠璃粉色",
    "birthday": "8月31日",
    "blood": null,
    "grade": "103期",
    "traits": [
      "开朗有活力",
      "万事乐在其中",
      "照顾身边人",
      "内心怕孤独",
      "热闹散场后会突然安静",
      "把快乐分给所有人",
      "用玩笑掩饰怕被留下"
    ],
    "profile": [
      1,
      0.5,
      1,
      -0.5,
      -0.5,
      0.5
    ]
  },
  "megumi": {
    "group": "hasunosora",
    "id": "megumi",
    "nameJa": "藤島慈",
    "nameZh": "藤岛慈",
    "romaji": "Fujishima Megumi",
    "unit": "Mira-Cra Park!",
    "color": "#C8C2C6",
    "colorName": "天使白色",
    "birthday": "12月20日",
    "blood": null,
    "grade": "102期",
    "traits": [
      "专业意识强",
      "深知自己魅力",
      "不感兴趣就不做",
      "为可爱费尽心力",
      "把「可爱」当事业经营",
      "镜头感是算出来的",
      "只把精力给值得的事"
    ],
    "profile": [
      0.5,
      0.5,
      0.5,
      1,
      0.5,
      -0.5
    ]
  },
  "ginko": {
    "group": "hasunosora",
    "id": "ginko",
    "nameJa": "百生吟子",
    "nameZh": "百生吟子",
    "romaji": "Momose Ginko",
    "unit": "Cerise Bouquet",
    "color": "#A2D7DD",
    "colorName": "天之原色",
    "birthday": "10月20日",
    "blood": null,
    "grade": "104期",
    "traits": [
      "热爱传统",
      "重视传承",
      "认真执着",
      "有些不坦率",
      "老规矩里藏着安心",
      "嘴上不说，手上照做",
      "把「传下去」当成责任"
    ],
    "profile": [
      -0.5,
      -0.5,
      0.5,
      -0.5,
      1,
      -1
    ]
  },
  "kosuzu": {
    "group": "hasunosora",
    "id": "kosuzu",
    "nameJa": "徒町小鈴",
    "nameZh": "徒町小铃",
    "romaji": "Kachimachi Kosuzu",
    "unit": "DOLLCHESTRA",
    "color": "#FAD764",
    "colorName": "长庚星色",
    "birthday": "2月28日",
    "blood": null,
    "grade": "104期",
    "traits": [
      "勇于挑战",
      "勤奋不气馁",
      "偶尔看轻自己",
      "想找值得骄傲的事",
      "跌倒了先爬起来再哭",
      "被肯定会偷偷开心很久",
      "把「我还行」慢慢攒成「我可以」"
    ],
    "profile": [
      0,
      0.5,
      0.5,
      -0.5,
      -0.5,
      0.5
    ]
  },
  "hime": {
    "group": "hasunosora",
    "id": "hime",
    "nameJa": "安養寺姫芽",
    "nameZh": "安养寺姬芽",
    "romaji": "Anyoji Hime",
    "unit": "Mira-Cra Park!",
    "color": "#9D8DE2",
    "colorName": "糖果紫色",
    "birthday": "9月24日",
    "blood": null,
    "grade": "104期",
    "traits": [
      "纯粹专注",
      "谈所爱语速变快",
      "容易激动",
      "全心投入安利",
      "一聊到热爱就停不下来",
      "把喜欢安利给全世界",
      "情绪上来藏都藏不住"
    ],
    "profile": [
      0.5,
      0.5,
      1,
      0,
      -0.5,
      0.5
    ]
  },
  "izumi": {
    "group": "hasunosora",
    "id": "izumi",
    "nameJa": "桂城泉",
    "nameZh": "桂城泉",
    "romaji": "Katsuragi Izumi",
    "unit": "Edel Note",
    "color": "#1EBECD",
    "colorName": "骑士绿",
    "birthday": "12月1日",
    "blood": null,
    "grade": "104期",
    "traits": [
      "冷静敏锐",
      "直指问题核心",
      "独立自主",
      "重视彼此强弱互补",
      "先看清，再出手",
      "不依附，也不拖累",
      "把「互补」当成合作前提"
    ],
    "profile": [
      -0.5,
      -0.5,
      -0.5,
      0.5,
      1,
      0
    ]
  },
  "ceras": {
    "group": "hasunosora",
    "id": "ceras",
    "nameJa": "セラス柳田リリエンフェルト",
    "nameZh": "塞拉斯·柳田·利林费尔德",
    "romaji": "Ceras Yanagida Lilienfeld",
    "unit": "DOLLCHESTRA",
    "color": "#F56455",
    "colorName": "上升猩红",
    "birthday": "6月26日",
    "blood": null,
    "grade": "105期",
    "traits": [
      "热爱学园偶像",
      "喜欢被搭理",
      "有点爱撒娇",
      "执着投入",
      "一被关注就眼睛发亮",
      "把「喜欢」挂在嘴边",
      "用撒娇换取多一点陪伴"
    ],
    "profile": [
      0.5,
      0.5,
      0.5,
      -0.5,
      -0.5,
      0.5
    ]
  }
};

export const QUESTIONS = {
  "muse": [
    {
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "想到就冲出去，边做边想办法",
          "from": "honoka",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "凡事先想清楚再动手",
          "from": "eli",
          "vec": [
            0,
            -0.5,
            -0.5,
            1,
            1,
            0
          ]
        },
        {
          "text": "说话温和，很少与人起冲突",
          "from": "kotori",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "认真守规矩，看不惯敷衍",
          "from": "umi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -1
          ]
        }
      ]
    },
    {
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "精力充沛，闲不下来",
          "from": "rin",
          "vec": [
            1,
            1,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "把喜欢藏得很深，嘴上却不肯承认",
          "from": "maki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            0,
            0.5,
            0
          ]
        },
        {
          "text": "安静，但对喜欢的事异常专注",
          "from": "hanayo",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            0,
            -0.5
          ]
        },
        {
          "text": "很在意自己呈现出来的样子",
          "from": "nico",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "看得透，却不说破",
          "from": "nozomi",
          "vec": [
            0.5,
            -0.5,
            0.5,
            0.5,
            1,
            0.5
          ]
        },
        {
          "text": "总能把低落的气氛带起来",
          "from": "honoka",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "对自己要求高，不太允许出错",
          "from": "eli",
          "vec": [
            0,
            -0.5,
            -0.5,
            1,
            1,
            0
          ]
        },
        {
          "text": "擅长照顾别人的感受",
          "from": "kotori",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "容易害羞，但该说的还是会说",
          "from": "umi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "情绪来得快去得也快",
          "from": "rin",
          "vec": [
            1,
            1,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "一个人练琴到深夜也不觉得苦",
          "from": "maki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            0,
            0.5,
            0
          ]
        },
        {
          "text": "习惯先反省自己",
          "from": "hanayo",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            0,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "面对一个新机会，你的第一反应是？",
      "opts": [
        {
          "text": "用玩笑和毒舌掩饰认真",
          "from": "nico",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "喜欢用轻松的方式化解尴尬",
          "from": "nozomi",
          "vec": [
            0.5,
            -0.5,
            0.5,
            0.5,
            1,
            0.5
          ]
        },
        {
          "text": "大家犹豫时先喊「试试看」",
          "from": "honoka",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "看起来可靠，其实也会偷偷紧张",
          "from": "eli",
          "vec": [
            0,
            -0.5,
            -0.5,
            1,
            1,
            0
          ]
        }
      ]
    },
    {
      "q": "团队合作里你通常扮演：",
      "opts": [
        {
          "text": "看着随和，其实有自己的主意",
          "from": "kotori",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "对自己比别人更严格",
          "from": "umi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "为朋友可以两肋插刀",
          "from": "rin",
          "vec": [
            1,
            1,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "被看穿心思时会突然慌乱",
          "from": "maki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            0,
            0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "遇到分歧时你倾向：",
      "opts": [
        {
          "text": "容易被忽略，却一直在默默努力",
          "from": "hanayo",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            0,
            -0.5
          ]
        },
        {
          "text": "比谁都努力，只是不让人看见",
          "from": "nico",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "相信直觉，也愿意给人留余地",
          "from": "nozomi",
          "vec": [
            0.5,
            -0.5,
            0.5,
            0.5,
            1,
            0.5
          ]
        },
        {
          "text": "难过也睡一觉就过去",
          "from": "honoka",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "休息日你更想：",
      "opts": [
        {
          "text": "嘴上理性，心里比谁都在意",
          "from": "eli",
          "vec": [
            0,
            -0.5,
            -0.5,
            1,
            1,
            0
          ]
        },
        {
          "text": "愿意为在意的人默默付出",
          "from": "kotori",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "重视传统和承诺",
          "from": "umi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "嘴上逞强，心里很软",
          "from": "rin",
          "vec": [
            1,
            1,
            1,
            -1,
            -0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "让你最有成就感的是：",
      "opts": [
        {
          "text": "朋友说你是外冷内热",
          "from": "maki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            0,
            0.5,
            0
          ]
        },
        {
          "text": "对热爱的事物毫无抵抗力",
          "from": "hanayo",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            0,
            -0.5
          ]
        },
        {
          "text": "渴望被认可，也值得被认可",
          "from": "nico",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "是朋友里那个兜底的人",
          "from": "nozomi",
          "vec": [
            0.5,
            -0.5,
            0.5,
            0.5,
            1,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你更难接受：",
      "opts": [
        {
          "text": "相信船到桥头自然直",
          "from": "honoka",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "习惯把责任扛在前面",
          "from": "eli",
          "vec": [
            0,
            -0.5,
            -0.5,
            1,
            1,
            0
          ]
        },
        {
          "text": "把心意缝进细节里",
          "from": "kotori",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "看不惯半途而废",
          "from": "umi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -1
          ]
        }
      ]
    },
    {
      "q": "别人夸你时你心里：",
      "opts": [
        {
          "text": "运动完才觉得活过来",
          "from": "rin",
          "vec": [
            1,
            1,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "宁可自己扛也不愿开口求助",
          "from": "maki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            0,
            0.5,
            0
          ]
        },
        {
          "text": "人多的场合会先找角落",
          "from": "hanayo",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            0,
            -0.5
          ]
        },
        {
          "text": "人前活泼，人后偷偷用功",
          "from": "nico",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "做决定前你习惯：",
      "opts": [
        {
          "text": "午睡和灵感同等重要",
          "from": "nozomi",
          "vec": [
            0.5,
            -0.5,
            0.5,
            0.5,
            1,
            0.5
          ]
        },
        {
          "text": "闲不下来，总想找点事做",
          "from": "honoka",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "计划被打乱时会明显不安",
          "from": "eli",
          "vec": [
            0,
            -0.5,
            -0.5,
            1,
            1,
            0
          ]
        },
        {
          "text": "被推到人前时会先往后缩",
          "from": "kotori",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "你表达关心的方式：",
      "opts": [
        {
          "text": "紧张时会把流程再背一遍",
          "from": "umi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "难过会直接哭出来，然后就好",
          "from": "rin",
          "vec": [
            1,
            1,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "对在意的事有一套不肯让步的标准",
          "from": "maki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            0,
            0.5,
            0
          ]
        },
        {
          "text": "谈到偶像就突然话多",
          "from": "hanayo",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            0,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "面对规则你倾向：",
      "opts": [
        {
          "text": "被夸可爱会嘴上嫌弃心里开心",
          "from": "nico",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "用玩笑话讲真心",
          "from": "nozomi",
          "vec": [
            0.5,
            -0.5,
            0.5,
            0.5,
            1,
            0.5
          ]
        },
        {
          "text": "把伙伴的情绪当成自己的事",
          "from": "honoka",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "冷静是练出来的，不是天生的",
          "from": "eli",
          "vec": [
            0,
            -0.5,
            -0.5,
            1,
            1,
            0
          ]
        }
      ]
    },
    {
      "q": "突发状况下你会：",
      "opts": [
        {
          "text": "安静地观察，再慢慢靠近",
          "from": "kotori",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "守着一套不肯让步的标准",
          "from": "umi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "跟着直觉跑，很少犹豫",
          "from": "rin",
          "vec": [
            1,
            1,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "独处时才觉得电量满格",
          "from": "maki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            0,
            0.5,
            0
          ]
        }
      ]
    }
  ],
  "aqours": [
    {
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "想到就喊出来，先做再说",
          "from": "chika",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "表面冷静，内心其实容易慌",
          "from": "riko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "做得多说得少",
          "from": "kanan",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "先把规矩立起来再谈感情",
          "from": "dia",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            1,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "行动力强，想到就出发",
          "from": "you",
          "vec": [
            1,
            1,
            0,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "容易紧张，习惯先道歉",
          "from": "ruby",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "直接热烈，不绕弯子",
          "from": "mari",
          "vec": [
            1,
            0.5,
            0.5,
            0.5,
            0.5,
            1
          ]
        },
        {
          "text": "用设定和玩笑保护自己",
          "from": "yoshiko",
          "vec": [
            -1,
            0,
            0.5,
            -0.5,
            -1,
            1
          ]
        }
      ]
    },
    {
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "安静，但心里有自己的小算盘",
          "from": "hanamaru",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "天生能把人聚到一起",
          "from": "chika",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "更习惯用作品而不是语言表达自己",
          "from": "riko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "是大家默认可靠的那个",
          "from": "kanan",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        }
      ]
    },
    {
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "对自己和身边人都要求高",
          "from": "dia",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            1,
            1,
            -0.5
          ]
        },
        {
          "text": "爽朗，但也会吃醋",
          "from": "you",
          "vec": [
            1,
            1,
            0,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "羡慕别人的大胆",
          "from": "ruby",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "舍得放手去追想要的",
          "from": "mari",
          "vec": [
            1,
            0.5,
            0.5,
            0.5,
            0.5,
            1
          ]
        }
      ]
    },
    {
      "q": "面对一个新机会，你的第一反应是？",
      "opts": [
        {
          "text": "怕被看穿，又希望被理解",
          "from": "yoshiko",
          "vec": [
            -1,
            0,
            0.5,
            -0.5,
            -1,
            1
          ]
        },
        {
          "text": "用文字和书理解世界",
          "from": "hanamaru",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "把别人的梦想也当回事",
          "from": "chika",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "对新环境需要时间适应",
          "from": "riko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "团队合作里你通常扮演：",
      "opts": [
        {
          "text": "也有害怕的东西，只是不退",
          "from": "kanan",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "严格其实是一种保护",
          "from": "dia",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            1,
            1,
            -0.5
          ]
        },
        {
          "text": "对热爱的事有使不完的劲",
          "from": "you",
          "vec": [
            1,
            1,
            0,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "依赖信任的人，但也在慢慢独立",
          "from": "ruby",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "遇到分歧时你倾向：",
      "opts": [
        {
          "text": "看着随便，其实看得很清",
          "from": "mari",
          "vec": [
            1,
            0.5,
            0.5,
            0.5,
            0.5,
            1
          ]
        },
        {
          "text": "嘴上不承认，身体很诚实",
          "from": "yoshiko",
          "vec": [
            -1,
            0,
            0.5,
            -0.5,
            -1,
            1
          ]
        },
        {
          "text": "看着朴素，其实很有想法",
          "from": "hanamaru",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "认定了就不轻易放手",
          "from": "chika",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "休息日你更想：",
      "opts": [
        {
          "text": "认真起来会忘了照顾自己",
          "from": "riko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "习惯把照顾别人当成日常",
          "from": "kanan",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "在在意的人面前会破功",
          "from": "dia",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            1,
            1,
            -0.5
          ]
        },
        {
          "text": "嘴上大大咧咧，心里有数",
          "from": "you",
          "vec": [
            1,
            1,
            0,
            0,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "让你最有成就感的是：",
      "opts": [
        {
          "text": "一旦决定了就很稳",
          "from": "ruby",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "擅长把日子过得漂亮",
          "from": "mari",
          "vec": [
            1,
            0.5,
            0.5,
            0.5,
            0.5,
            1
          ]
        },
        {
          "text": "中二的外表下是认真的心",
          "from": "yoshiko",
          "vec": [
            -1,
            0,
            0.5,
            -0.5,
            -1,
            1
          ]
        },
        {
          "text": "对喜欢的事会下苦功",
          "from": "hanamaru",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "你更难接受：",
      "opts": [
        {
          "text": "海风一吹就觉得又能行了",
          "from": "chika",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "人前镇定，人后反复复盘",
          "from": "riko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "动手之前先把风险想好",
          "from": "kanan",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "看不惯散漫和敷衍",
          "from": "dia",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            1,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "别人夸你时你心里：",
      "opts": [
        {
          "text": "说干就干，很少内耗",
          "from": "you",
          "vec": [
            1,
            1,
            0,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "陌生场合会先找熟悉的身影",
          "from": "ruby",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "喜欢就大声说喜欢",
          "from": "mari",
          "vec": [
            1,
            0.5,
            0.5,
            0.5,
            0.5,
            1
          ]
        },
        {
          "text": "人前摆姿态，人后偷偷在意",
          "from": "yoshiko",
          "vec": [
            -1,
            0,
            0.5,
            -0.5,
            -1,
            1
          ]
        }
      ]
    },
    {
      "q": "做决定前你习惯：",
      "opts": [
        {
          "text": "说话慢，却句句有分量",
          "from": "hanamaru",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "难过也很快被下一件事冲走",
          "from": "chika",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "琴声比话语更能代表你",
          "from": "riko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "被依赖时从不推辞",
          "from": "kanan",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        }
      ]
    },
    {
      "q": "你表达关心的方式：",
      "opts": [
        {
          "text": "责任来了就接住，不抱怨",
          "from": "dia",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            1,
            1,
            -0.5
          ]
        },
        {
          "text": "伙伴低落时第一个察觉",
          "from": "you",
          "vec": [
            1,
            1,
            0,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "小声说话，却把喜好记得很牢",
          "from": "ruby",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "新鲜事物总想第一个试",
          "from": "mari",
          "vec": [
            1,
            0.5,
            0.5,
            0.5,
            0.5,
            1
          ]
        }
      ]
    },
    {
      "q": "面对规则你倾向：",
      "opts": [
        {
          "text": "被叫本名会瞬间破功",
          "from": "yoshiko",
          "vec": [
            -1,
            0,
            0.5,
            -0.5,
            -1,
            1
          ]
        },
        {
          "text": "传统和老物件让你安心",
          "from": "hanamaru",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "总想把「喜欢」传给更多人",
          "from": "chika",
          "vec": [
            1,
            1,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "容易把小事在心里放大",
          "from": "riko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "突发状况下你会：",
      "opts": [
        {
          "text": "海边的生活让你踏实",
          "from": "kanan",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "把「必须做好」刻进习惯",
          "from": "dia",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            1,
            1,
            -0.5
          ]
        },
        {
          "text": "闲不住，总想找事练",
          "from": "you",
          "vec": [
            1,
            1,
            0,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "被鼓励时会红着脸努力",
          "from": "ruby",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        }
      ]
    }
  ],
  "nijigasaki": [
    {
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "温柔体贴，认真努力",
          "from": "ayumu",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "最爱可爱事物",
          "from": "kasumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "认真可靠，温柔谦逊",
          "from": "shizuku",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            0
          ]
        },
        {
          "text": "沉稳不惊，成熟自信",
          "from": "karin",
          "vec": [
            0.5,
            0,
            -0.5,
            1,
            1,
            0.5
          ]
        }
      ]
    },
    {
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "开朗爱笑",
          "from": "ai",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "慵懒爱睡",
          "from": "kanata",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "对喜欢的事率直",
          "from": "setsuna",
          "vec": [
            0.5,
            1,
            1,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "稳重文静",
          "from": "emma",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "不擅表情达意",
          "from": "rina",
          "vec": [
            -1,
            -0.5,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "冷静沉着",
          "from": "shioriko",
          "vec": [
            -0.5,
            -0.5,
            -1,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "有才华却不自信",
          "from": "mia",
          "vec": [
            -1,
            0,
            -1,
            0,
            -0.5,
            1
          ]
        },
        {
          "text": "自信满满",
          "from": "lanzhu",
          "vec": [
            1,
            1,
            0.5,
            1,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "一步步朝梦想前进",
          "from": "ayumu",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "骨子里不服输",
          "from": "kasumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "热爱表演",
          "from": "shizuku",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            0
          ]
        },
        {
          "text": "意外地纯真",
          "from": "karin",
          "vec": [
            0.5,
            0,
            -0.5,
            1,
            1,
            0.5
          ]
        }
      ]
    },
    {
      "q": "面对一个新机会，你的第一反应是？",
      "opts": [
        {
          "text": "被挑战就燃起斗志",
          "from": "ai",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "疼爱妹妹",
          "from": "kanata",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "充满热情",
          "from": "setsuna",
          "vec": [
            0.5,
            1,
            1,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "热爱大自然",
          "from": "emma",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "团队合作里你通常扮演：",
      "opts": [
        {
          "text": "内心细腻",
          "from": "rina",
          "vec": [
            -1,
            -0.5,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "严于律己",
          "from": "shioriko",
          "vec": [
            -0.5,
            -0.5,
            -1,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "说话直率",
          "from": "mia",
          "vec": [
            -1,
            0,
            -1,
            0,
            -0.5,
            1
          ]
        },
        {
          "text": "想到就去做",
          "from": "lanzhu",
          "vec": [
            1,
            1,
            0.5,
            1,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "遇到分歧时你倾向：",
      "opts": [
        {
          "text": "很在意重要的人",
          "from": "ayumu",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "爱耍小聪明恶作剧",
          "from": "kasumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "想让观众露出笑容",
          "from": "shizuku",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            0
          ]
        },
        {
          "text": "爱捉弄后辈",
          "from": "karin",
          "vec": [
            0.5,
            0,
            -0.5,
            1,
            1,
            0.5
          ]
        }
      ]
    },
    {
      "q": "休息日你更想：",
      "opts": [
        {
          "text": "友善照顾人",
          "from": "ai",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "温和随性",
          "from": "kanata",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "认真有担当",
          "from": "setsuna",
          "vec": [
            0.5,
            1,
            1,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "治愈身边人",
          "from": "emma",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "让你最有成就感的是：",
      "opts": [
        {
          "text": "努力想办法传达心情",
          "from": "rina",
          "vec": [
            -1,
            -0.5,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "不懂变通",
          "from": "shioriko",
          "vec": [
            -0.5,
            -0.5,
            -1,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "其实害羞",
          "from": "mia",
          "vec": [
            -1,
            0,
            -1,
            0,
            -0.5,
            1
          ]
        },
        {
          "text": "热烈直率",
          "from": "lanzhu",
          "vec": [
            1,
            1,
            0.5,
            1,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你更难接受：",
      "opts": [
        {
          "text": "会把别人的需求放在前面",
          "from": "ayumu",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "内心是好孩子",
          "from": "kasumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "台上台下反差很大",
          "from": "shizuku",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            0
          ]
        },
        {
          "text": "看得清场面，也控得住场",
          "from": "karin",
          "vec": [
            0.5,
            0,
            -0.5,
            1,
            1,
            0.5
          ]
        }
      ]
    },
    {
      "q": "别人夸你时你心里：",
      "opts": [
        {
          "text": "乐于尝试新事物",
          "from": "ai",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "关键时刻很可靠",
          "from": "kanata",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "想把喜欢传遍世界",
          "from": "setsuna",
          "vec": [
            0.5,
            1,
            1,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "我行我素",
          "from": "emma",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "做决定前你习惯：",
      "opts": [
        {
          "text": "渴望与大家相连",
          "from": "rina",
          "vec": [
            -1,
            -0.5,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "真心希望他人幸福",
          "from": "shioriko",
          "vec": [
            -0.5,
            -0.5,
            -1,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "为喜欢的事鼓起勇气",
          "from": "mia",
          "vec": [
            -1,
            0,
            -1,
            0,
            -0.5,
            1
          ]
        },
        {
          "text": "偶尔任性",
          "from": "lanzhu",
          "vec": [
            1,
            1,
            0.5,
            1,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你表达关心的方式：",
      "opts": [
        {
          "text": "紧张时靠反复练习安定",
          "from": "ayumu",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "被说幼稚会炸毛",
          "from": "kasumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "习惯把紧张藏进排练",
          "from": "shizuku",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            0
          ]
        },
        {
          "text": "不轻易表态，一表态就准",
          "from": "karin",
          "vec": [
            0.5,
            0,
            -0.5,
            1,
            1,
            0.5
          ]
        }
      ]
    },
    {
      "q": "面对规则你倾向：",
      "opts": [
        {
          "text": "冷场时主动抛梗",
          "from": "ai",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "能躺着就不坐着",
          "from": "kanata",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "谈到热爱就眼睛发亮",
          "from": "setsuna",
          "vec": [
            0.5,
            1,
            1,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "节奏慢，但从不慌乱",
          "from": "emma",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "突发状况下你会：",
      "opts": [
        {
          "text": "借助小道具传达说不出口的话",
          "from": "rina",
          "vec": [
            -1,
            -0.5,
            1,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "先讲道理，再谈感情",
          "from": "shioriko",
          "vec": [
            -0.5,
            -0.5,
            -1,
            0.5,
            1,
            -1
          ]
        },
        {
          "text": "嘴上嫌弃，手上却帮忙",
          "from": "mia",
          "vec": [
            -1,
            0,
            -1,
            0,
            -0.5,
            1
          ]
        },
        {
          "text": "要什么就大声争取",
          "from": "lanzhu",
          "vec": [
            1,
            1,
            0.5,
            1,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "回顾一天，你最先想起：",
      "opts": [
        {
          "text": "不擅争抢，但从不放弃",
          "from": "ayumu",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            0.5,
            0
          ]
        },
        {
          "text": "争强好胜写在脸上",
          "from": "kasumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "对角色比对自己更上心",
          "from": "shizuku",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            0
          ]
        },
        {
          "text": "被戳破少女心会嘴硬",
          "from": "karin",
          "vec": [
            0.5,
            0,
            -0.5,
            1,
            1,
            0.5
          ]
        }
      ]
    }
  ],
  "liella": [
    {
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "腼腆易怯场",
          "from": "kanon",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "开朗热情",
          "from": "keke",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "元气活泼",
          "from": "chisato",
          "vec": [
            1,
            0.5,
            -0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "强硬好胜",
          "from": "sumire",
          "vec": [
            1,
            0.5,
            0.5,
            1,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "沉稳认真",
          "from": "ren",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "老实坚定",
          "from": "kinako",
          "vec": [
            -0.5,
            0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "缺乏自信",
          "from": "mei",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "沉着冷静",
          "from": "shiki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            -0.5,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "开朗行动力强",
          "from": "natsumi",
          "vec": [
            1,
            1,
            0,
            0.5,
            0,
            1
          ]
        },
        {
          "text": "竞争心极强",
          "from": "wien",
          "vec": [
            0.5,
            0.5,
            -0.5,
            1,
            0.5,
            0.5
          ]
        },
        {
          "text": "讲求效率",
          "from": "tomari",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0,
            1,
            0
          ]
        },
        {
          "text": "善良为他人着想",
          "from": "kanon",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            -0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "想到就立刻行动",
          "from": "keke",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "好胜想赢",
          "from": "chisato",
          "vec": [
            1,
            0.5,
            -0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "表现欲强",
          "from": "sumire",
          "vec": [
            1,
            0.5,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "不擅闲聊",
          "from": "ren",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "面对一个新机会，你的第一反应是？",
      "opts": [
        {
          "text": "有责任心",
          "from": "kinako",
          "vec": [
            -0.5,
            0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "其实害羞",
          "from": "mei",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "好奇爱探究本质",
          "from": "shiki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            -0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "对流行敏感",
          "from": "natsumi",
          "vec": [
            1,
            1,
            0,
            0.5,
            0,
            1
          ]
        }
      ]
    },
    {
      "q": "团队合作里你通常扮演：",
      "opts": [
        {
          "text": "才华出众而自负",
          "from": "wien",
          "vec": [
            0.5,
            0.5,
            -0.5,
            1,
            0.5,
            0.5
          ]
        },
        {
          "text": "冷静分析",
          "from": "tomari",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0,
            1,
            0
          ]
        },
        {
          "text": "热爱歌唱",
          "from": "kanon",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "遇难不放弃",
          "from": "keke",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        }
      ]
    },
    {
      "q": "遇到分歧时你倾向：",
      "opts": [
        {
          "text": "看问题一针见血",
          "from": "chisato",
          "vec": [
            1,
            0.5,
            -0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "内心温柔",
          "from": "sumire",
          "vec": [
            1,
            0.5,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "自律严谨",
          "from": "ren",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "跌倒再爬起",
          "from": "kinako",
          "vec": [
            -0.5,
            0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "休息日你更想：",
      "opts": [
        {
          "text": "憧憬可爱事物",
          "from": "mei",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "喜静独处",
          "from": "shiki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            -0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "为达目的肯下功夫",
          "from": "natsumi",
          "vec": [
            1,
            1,
            0,
            0.5,
            0,
            1
          ]
        },
        {
          "text": "易与人冲突",
          "from": "wien",
          "vec": [
            0.5,
            0.5,
            -0.5,
            1,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "让你最有成就感的是：",
      "opts": [
        {
          "text": "对梦想冷眼旁观",
          "from": "tomari",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0,
            1,
            0
          ]
        },
        {
          "text": "犹豫中仍向前走",
          "from": "kanon",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "爱笑也爱哭",
          "from": "keke",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "关键时刻支撑伙伴",
          "from": "chisato",
          "vec": [
            1,
            0.5,
            -0.5,
            0.5,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你更难接受：",
      "opts": [
        {
          "text": "理解他人情感",
          "from": "sumire",
          "vec": [
            1,
            0.5,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "逐渐敞开心扉",
          "from": "ren",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "努力改变自己",
          "from": "kinako",
          "vec": [
            -0.5,
            0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "珍视朋友",
          "from": "mei",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "别人夸你时你心里：",
      "opts": [
        {
          "text": "容易寂寞",
          "from": "shiki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            -0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "伙伴低落时负责打气",
          "from": "natsumi",
          "vec": [
            1,
            1,
            0,
            0.5,
            0,
            1
          ]
        },
        {
          "text": "不肯认输",
          "from": "wien",
          "vec": [
            0.5,
            0.5,
            -0.5,
            1,
            0.5,
            0.5
          ]
        },
        {
          "text": "深爱姐姐",
          "from": "tomari",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0,
            1,
            0
          ]
        }
      ]
    },
    {
      "q": "做决定前你习惯：",
      "opts": [
        {
          "text": "人前小声，歌声却亮",
          "from": "kanon",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            -0.5,
            0
          ]
        },
        {
          "text": "情绪全写在脸上",
          "from": "keke",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "笑着把难题拆开来做",
          "from": "chisato",
          "vec": [
            1,
            0.5,
            -0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "人前张扬，人后细腻",
          "from": "sumire",
          "vec": [
            1,
            0.5,
            0.5,
            1,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你表达关心的方式：",
      "opts": [
        {
          "text": "先做到，再说到",
          "from": "ren",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -0.5
          ]
        },
        {
          "text": "笨拙但从不偷懒",
          "from": "kinako",
          "vec": [
            -0.5,
            0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "人前退缩，人后在意",
          "from": "mei",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "先观察，再下结论",
          "from": "shiki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            -0.5,
            0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "面对规则你倾向：",
      "opts": [
        {
          "text": "想到点子马上试",
          "from": "natsumi",
          "vec": [
            1,
            1,
            0,
            0.5,
            0,
            1
          ]
        },
        {
          "text": "把对手当成镜子",
          "from": "wien",
          "vec": [
            0.5,
            0.5,
            -0.5,
            1,
            0.5,
            0.5
          ]
        },
        {
          "text": "先算投入产出再行动",
          "from": "tomari",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0,
            1,
            0
          ]
        },
        {
          "text": "紧张到手心出汗也不退",
          "from": "kanon",
          "vec": [
            -0.5,
            -0.5,
            1,
            -0.5,
            -0.5,
            0
          ]
        }
      ]
    },
    {
      "q": "突发状况下你会：",
      "opts": [
        {
          "text": "把「喜欢」喊得很大声",
          "from": "keke",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            1
          ]
        },
        {
          "text": "不服输，但输得起",
          "from": "chisato",
          "vec": [
            1,
            0.5,
            -0.5,
            0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "被忽视会明显失落",
          "from": "sumire",
          "vec": [
            1,
            0.5,
            0.5,
            1,
            -0.5,
            0.5
          ]
        },
        {
          "text": "对散漫零容忍",
          "from": "ren",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "回顾一天，你最先想起：",
      "opts": [
        {
          "text": "被否定会先记下来再改进",
          "from": "kinako",
          "vec": [
            -0.5,
            0.5,
            0.5,
            -0.5,
            0.5,
            -0.5
          ]
        },
        {
          "text": "被肯定时会愣一下",
          "from": "mei",
          "vec": [
            -1,
            -0.5,
            0.5,
            -1,
            -0.5,
            0
          ]
        },
        {
          "text": "对「为什么」比对「是什么」上心",
          "from": "shiki",
          "vec": [
            -1,
            -0.5,
            -0.5,
            -0.5,
            0.5,
            0.5
          ]
        },
        {
          "text": "镜头前自来熟",
          "from": "natsumi",
          "vec": [
            1,
            1,
            0,
            0.5,
            0,
            1
          ]
        }
      ]
    }
  ],
  "hasunosora": [
    {
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "开朗笑容不断",
          "from": "kaho",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "过于认真",
          "from": "sayaka",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            -0.5
          ]
        },
        {
          "text": "文武双全",
          "from": "kozue",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "是天才却平易近人",
          "from": "tsuzuri",
          "vec": [
            0,
            -1,
            0.5,
            -1,
            -1,
            0.5
          ]
        }
      ]
    },
    {
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "开朗有活力",
          "from": "rurino",
          "vec": [
            1,
            0.5,
            1,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "专业意识强",
          "from": "megumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            1,
            0.5,
            -0.5
          ]
        },
        {
          "text": "热爱传统",
          "from": "ginko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -1
          ]
        },
        {
          "text": "勇于挑战",
          "from": "kosuzu",
          "vec": [
            0,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "纯粹专注",
          "from": "hime",
          "vec": [
            0.5,
            0.5,
            1,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "冷静敏锐",
          "from": "izumi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "热爱学园偶像",
          "from": "ceras",
          "vec": [
            0.5,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "高兴就全力投入",
          "from": "kaho",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "先计划再行动",
          "from": "sayaka",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            -0.5
          ]
        },
        {
          "text": "凡事拼命努力",
          "from": "kozue",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "容易寂寞",
          "from": "tsuzuri",
          "vec": [
            0,
            -1,
            0.5,
            -1,
            -1,
            0.5
          ]
        },
        {
          "text": "万事乐在其中",
          "from": "rurino",
          "vec": [
            1,
            0.5,
            1,
            -0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "面对一个新机会，你的第一反应是？",
      "opts": [
        {
          "text": "深知自己魅力",
          "from": "megumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            1,
            0.5,
            -0.5
          ]
        },
        {
          "text": "重视传承",
          "from": "ginko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -1
          ]
        },
        {
          "text": "勤奋不气馁",
          "from": "kosuzu",
          "vec": [
            0,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "谈所爱语速变快",
          "from": "hime",
          "vec": [
            0.5,
            0.5,
            1,
            0,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "团队合作里你通常扮演：",
      "opts": [
        {
          "text": "直指问题核心",
          "from": "izumi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "喜欢被搭理",
          "from": "ceras",
          "vec": [
            0.5,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "一往无前",
          "from": "kaho",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "笨拙却纯粹",
          "from": "sayaka",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "遇到分歧时你倾向：",
      "opts": [
        {
          "text": "从不骄傲自满",
          "from": "kozue",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "常发呆神游",
          "from": "tsuzuri",
          "vec": [
            0,
            -1,
            0.5,
            -1,
            -1,
            0.5
          ]
        },
        {
          "text": "照顾身边人",
          "from": "rurino",
          "vec": [
            1,
            0.5,
            1,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "不感兴趣就不做",
          "from": "megumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            1,
            0.5,
            -0.5
          ]
        }
      ]
    },
    {
      "q": "休息日你更想：",
      "opts": [
        {
          "text": "认真执着",
          "from": "ginko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -1
          ]
        },
        {
          "text": "偶尔看轻自己",
          "from": "kosuzu",
          "vec": [
            0,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "容易激动",
          "from": "hime",
          "vec": [
            0.5,
            0.5,
            1,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "独立自主",
          "from": "izumi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        }
      ]
    },
    {
      "q": "让你最有成就感的是：",
      "opts": [
        {
          "text": "有点爱撒娇",
          "from": "ceras",
          "vec": [
            0.5,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "率真烂漫",
          "from": "kaho",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "容易紧绷",
          "from": "sayaka",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            -0.5
          ]
        },
        {
          "text": "目标坚定",
          "from": "kozue",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        }
      ]
    },
    {
      "q": "你更难接受：",
      "opts": [
        {
          "text": "带着点孩子气",
          "from": "tsuzuri",
          "vec": [
            0,
            -1,
            0.5,
            -1,
            -1,
            0.5
          ]
        },
        {
          "text": "内心怕孤独",
          "from": "rurino",
          "vec": [
            1,
            0.5,
            1,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "为可爱费尽心力",
          "from": "megumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            1,
            0.5,
            -0.5
          ]
        },
        {
          "text": "有些不坦率",
          "from": "ginko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -1
          ]
        }
      ]
    },
    {
      "q": "别人夸你时你心里：",
      "opts": [
        {
          "text": "想找值得骄傲的事",
          "from": "kosuzu",
          "vec": [
            0,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "全心投入安利",
          "from": "hime",
          "vec": [
            0.5,
            0.5,
            1,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "重视彼此强弱互补",
          "from": "izumi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "执着投入",
          "from": "ceras",
          "vec": [
            0.5,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "做决定前你习惯：",
      "opts": [
        {
          "text": "想到就冲，笑声先到",
          "from": "kaho",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "把日程排得满满才安心",
          "from": "sayaka",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            -0.5
          ]
        },
        {
          "text": "做到最好也不觉得够",
          "from": "kozue",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "灵感来了就忘乎所以",
          "from": "tsuzuri",
          "vec": [
            0,
            -1,
            0.5,
            -1,
            -1,
            0.5
          ]
        }
      ]
    },
    {
      "q": "你表达关心的方式：",
      "opts": [
        {
          "text": "热闹散场后会突然安静",
          "from": "rurino",
          "vec": [
            1,
            0.5,
            1,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "把「可爱」当事业经营",
          "from": "megumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            1,
            0.5,
            -0.5
          ]
        },
        {
          "text": "老规矩里藏着安心",
          "from": "ginko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -1
          ]
        },
        {
          "text": "跌倒了先爬起来再哭",
          "from": "kosuzu",
          "vec": [
            0,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "面对规则你倾向：",
      "opts": [
        {
          "text": "一聊到热爱就停不下来",
          "from": "hime",
          "vec": [
            0.5,
            0.5,
            1,
            0,
            -0.5,
            0.5
          ]
        },
        {
          "text": "先看清，再出手",
          "from": "izumi",
          "vec": [
            -0.5,
            -0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "一被关注就眼睛发亮",
          "from": "ceras",
          "vec": [
            0.5,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "低落也很快被新奇冲走",
          "from": "kaho",
          "vec": [
            1,
            1,
            0.5,
            0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "突发状况下你会：",
      "opts": [
        {
          "text": "出错会反复自责",
          "from": "sayaka",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            -0.5,
            -0.5
          ]
        },
        {
          "text": "把努力当成呼吸一样自然",
          "from": "kozue",
          "vec": [
            0,
            0.5,
            -0.5,
            0.5,
            1,
            0
          ]
        },
        {
          "text": "对「好玩」毫无抵抗力",
          "from": "tsuzuri",
          "vec": [
            0,
            -1,
            0.5,
            -1,
            -1,
            0.5
          ]
        },
        {
          "text": "把快乐分给所有人",
          "from": "rurino",
          "vec": [
            1,
            0.5,
            1,
            -0.5,
            -0.5,
            0.5
          ]
        }
      ]
    },
    {
      "q": "回顾一天，你最先想起：",
      "opts": [
        {
          "text": "镜头感是算出来的",
          "from": "megumi",
          "vec": [
            0.5,
            0.5,
            0.5,
            1,
            0.5,
            -0.5
          ]
        },
        {
          "text": "嘴上不说，手上照做",
          "from": "ginko",
          "vec": [
            -0.5,
            -0.5,
            0.5,
            -0.5,
            1,
            -1
          ]
        },
        {
          "text": "被肯定会偷偷开心很久",
          "from": "kosuzu",
          "vec": [
            0,
            0.5,
            0.5,
            -0.5,
            -0.5,
            0.5
          ]
        },
        {
          "text": "把喜欢安利给全世界",
          "from": "hime",
          "vec": [
            0.5,
            0.5,
            1,
            0,
            -0.5,
            0.5
          ]
        }
      ]
    }
  ]
};
