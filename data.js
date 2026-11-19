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
      "你想到就会去做，行动总比犹豫快",
      "你天生能把大家的情绪带起来",
      "你不太记仇，难过也过得很快",
      "你相信船到桥头自然直"
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
      "你习惯先把事情想清楚再动手",
      "你对自己要求高，不太允许自己出错",
      "你看起来可靠，其实也会偷偷紧张",
      "你嘴上理性，心里比谁都在意"
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
      "你说话温和，很少与人起冲突",
      "你擅长照顾别人的感受",
      "你看着随和，其实有自己的主意",
      "你愿意为在意的人默默付出"
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
      "你认真守规矩，也看不惯敷衍",
      "你容易害羞，但该说的还是会说",
      "你对自己比别人更严格",
      "你重视传统和承诺"
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
      "你精力充沛，闲不下来",
      "你情绪来得快去得也快",
      "你重感情，为朋友可以两肋插刀",
      "你嘴上逞强，心里很软"
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
      "你不太会把喜欢说出口",
      "你对在意的事有自己的标准",
      "你表面冷淡，其实比谁都认真",
      "你需要独处来恢复能量"
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
      "你安静，但对喜欢的事异常专注",
      "你习惯先反省自己",
      "你容易被忽略，却一直在默默努力",
      "你对热爱的事物毫无抵抗力"
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
      "你很在意自己呈现出来的样子",
      "你用玩笑和毒舌掩饰认真",
      "你比谁都努力，只是不让人看见",
      "你渴望被认可，也值得被认可"
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
      "你看得透，却不说破",
      "你喜欢用轻松的方式化解尴尬",
      "你相信直觉，也愿意给人留余地",
      "你是朋友里那个兜底的人"
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
      "你想到就会喊出来，先做再说",
      "你天生能把人聚到一起",
      "你把别人的梦想也当回事",
      "你认定了就不轻易放手"
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
      "你表面冷静，内心其实容易慌",
      "你更习惯用作品而不是语言表达自己",
      "你对新环境需要时间适应",
      "你认真起来会忘了照顾自己"
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
      "你做得多说得少",
      "你是大家默认可靠的那个",
      "你也有害怕的东西，只是不退",
      "你习惯把照顾别人当成日常"
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
      "你先把规矩立起来再谈感情",
      "你对自己和身边人都要求高",
      "你的严格其实是一种保护",
      "你在在意的人面前会破功"
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
      "你行动力强，想到就出发",
      "你爽朗，但也会吃醋",
      "你对热爱的事有使不完的劲",
      "你嘴上大大咧咧，心里有数"
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
      "你容易紧张，习惯先道歉",
      "你羡慕别人的大胆",
      "你依赖信任的人，但也在慢慢独立",
      "你一旦决定了就很稳"
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
      "你直接热烈，不绕弯子",
      "你舍得放手去追想要的",
      "你看着随便，其实看得很清",
      "你擅长把日子过得漂亮"
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
      "你用设定和玩笑保护自己",
      "你怕被看穿，又希望被理解",
      "你嘴上不承认，身体很诚实",
      "你中二的外表下是认真的心"
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
      "你安静，但心里有自己的小算盘",
      "你用文字和书理解世界",
      "你看着朴素，其实很有想法",
      "你对喜欢的事会下苦功"
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
      "你温柔体贴",
      "你认真努力",
      "你一步步朝梦想前进",
      "你很在意重要的人"
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
      "你最爱可爱事物",
      "你不服输",
      "你爱耍小聪明恶作剧",
      "你内心是好孩子"
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
      "你认真可靠",
      "你温柔谦逊",
      "你热爱表演",
      "你想让观众露出笑容"
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
      "你沉稳不惊",
      "你成熟自信",
      "你意外地纯真",
      "你爱捉弄后辈"
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
      "你开朗爱笑",
      "你被挑战就燃起斗志",
      "你友善照顾人",
      "你乐于尝试新事物"
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
      "你慵懒爱睡",
      "你疼爱妹妹",
      "你温和随性",
      "你关键时刻很可靠"
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
      "你对喜欢的事率直",
      "你充满热情",
      "你认真有担当",
      "你想把喜欢传遍世界"
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
      "你稳重文静",
      "你热爱大自然",
      "你治愈身边人",
      "你我行我素"
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
      "你不擅表情达意",
      "你内心细腻",
      "你努力想办法传达心情",
      "你渴望与大家相连"
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
      "你冷静沉着",
      "你严于律己",
      "你不懂变通",
      "你真心希望他人幸福"
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
      "你有才华却不自信",
      "你说话直率",
      "你其实害羞",
      "你为喜欢的事鼓起勇气"
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
      "你自信满满",
      "你想到就去做",
      "你热烈直率",
      "你偶尔任性"
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
      "你腼腆易怯场",
      "你善良为他人着想",
      "你热爱歌唱",
      "你犹豫中仍向前走"
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
      "你开朗热情",
      "你想到就立刻行动",
      "你遇难不放弃",
      "你爱笑也爱哭"
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
      "你元气活泼",
      "你好胜想赢",
      "你看问题一针见血",
      "你关键时刻支撑伙伴"
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
      "你强硬好胜",
      "你表现欲强",
      "你内心温柔",
      "你理解他人情感"
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
      "你沉稳认真",
      "你不擅闲聊",
      "你自律严谨",
      "你逐渐敞开心扉"
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
      "你老实坚定",
      "你有责任心",
      "你跌倒再爬起",
      "你努力改变自己"
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
      "你缺乏自信",
      "你其实害羞",
      "你憧憬可爱事物",
      "你珍视朋友"
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
      "你沉着冷静",
      "你好奇爱探究本质",
      "你喜静独处",
      "你容易寂寞"
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
      "你开朗行动力强",
      "你对流行敏感",
      "你为达目的肯下功夫",
      "你为伙伴打气"
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
      "你竞争心极强",
      "你才华出众而自负",
      "你易与人冲突",
      "你不肯认输"
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
      "你讲求效率",
      "你冷静分析",
      "你对梦想冷眼旁观",
      "你深爱姐姐"
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
      "你开朗笑容不断",
      "你开心就全力以赴",
      "你一往无前",
      "你率真烂漫"
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
      "你过于认真",
      "你先计划再行动",
      "你笨拙却纯粹",
      "你容易紧绷"
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
      "你文武双全",
      "你凡事拼命努力",
      "你从不骄傲自满",
      "你目标坚定"
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
      "你是天才却平易近人",
      "你容易寂寞",
      "你常发呆神游",
      "你孩子气"
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
      "你开朗有活力",
      "你万事乐在其中",
      "你照顾身边人",
      "你内心怕孤独"
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
      "你专业意识强",
      "你深知自己魅力",
      "你不感兴趣就不做",
      "你为可爱费尽心力"
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
      "你热爱传统",
      "你重视传承",
      "你认真执着",
      "你有些不坦率"
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
      "你勇于挑战",
      "你勤奋不气馁",
      "你偶尔看轻自己",
      "你想找到值得骄傲之事"
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
      "你纯粹专注",
      "你谈所爱语速变快",
      "你容易激动",
      "你全心投入安利"
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
      "你冷静敏锐",
      "你直指问题核心",
      "你独立自主",
      "你重视彼此强弱互补"
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
      "你热爱学园偶像",
      "你喜欢被搭理",
      "你有点爱撒娇",
      "你执着投入"
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
          "text": "你想到就会去做，行动总比犹豫快",
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
          "text": "你对自己要求高，不太允许自己出错",
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
          "text": "你看着随和，其实有自己的主意",
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
          "text": "你重视传统和承诺",
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
          "text": "你情绪来得快去得也快",
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
          "text": "你表面冷淡，其实比谁都认真",
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
          "text": "你对热爱的事物毫无抵抗力",
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
          "text": "你很在意自己呈现出来的样子",
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
          "text": "你相信直觉，也愿意给人留余地",
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
          "text": "你相信船到桥头自然直",
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
          "text": "你习惯先把事情想清楚再动手",
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
          "text": "你擅长照顾别人的感受",
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
          "text": "你重视传统和承诺",
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
          "text": "你精力充沛，闲不下来",
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
          "text": "你对在意的事有自己的标准",
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
          "text": "你容易被忽略，却一直在默默努力",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你很在意自己呈现出来的样子",
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
          "text": "你喜欢用轻松的方式化解尴尬",
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
          "text": "你不太记仇，难过也过得很快",
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
          "text": "你嘴上理性，心里比谁都在意",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你擅长照顾别人的感受",
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
          "text": "你对自己比别人更严格",
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
          "text": "你嘴上逞强，心里很软",
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
          "text": "你不太会把喜欢说出口",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你容易被忽略，却一直在默默努力",
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
          "text": "你渴望被认可，也值得被认可",
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
          "text": "你看得透，却不说破",
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
          "text": "你天生能把大家的情绪带起来",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你嘴上理性，心里比谁都在意",
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
          "text": "你说话温和，很少与人起冲突",
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
          "text": "你容易害羞，但该说的还是会说",
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
          "text": "你重感情，为朋友可以两肋插刀",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你不太会把喜欢说出口",
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
          "text": "你习惯先反省自己",
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
          "text": "你比谁都努力，只是不让人看见",
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
          "text": "你是朋友里那个兜底的人",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你天生能把大家的情绪带起来",
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
          "text": "你看起来可靠，其实也会偷偷紧张",
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
          "text": "你愿意为在意的人默默付出",
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
          "text": "你认真守规矩，也看不惯敷衍",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你重感情，为朋友可以两肋插刀",
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
          "text": "你需要独处来恢复能量",
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
          "text": "你安静，但对喜欢的事异常专注",
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
          "text": "你用玩笑和毒舌掩饰认真",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你是朋友里那个兜底的人",
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
          "text": "你想到就会去做，行动总比犹豫快",
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
          "text": "你对自己要求高，不太允许自己出错",
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
          "text": "你看着随和，其实有自己的主意",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你认真守规矩，也看不惯敷衍",
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
          "text": "你情绪来得快去得也快",
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
          "text": "你表面冷淡，其实比谁都认真",
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
          "text": "你对热爱的事物毫无抵抗力",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你用玩笑和毒舌掩饰认真",
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
          "text": "你相信直觉，也愿意给人留余地",
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
          "text": "你相信船到桥头自然直",
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
          "text": "你习惯先把事情想清楚再动手",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你看着随和，其实有自己的主意",
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
          "text": "你重视传统和承诺",
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
          "text": "你精力充沛，闲不下来",
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
          "text": "你对在意的事有自己的标准",
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
          "text": "你想到就会喊出来，先做再说",
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
          "text": "你更习惯用作品而不是语言表达自己",
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
          "text": "你也有害怕的东西，只是不退",
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
          "text": "你在在意的人面前会破功",
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
          "text": "你爽朗，但也会吃醋",
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
          "text": "你依赖信任的人，但也在慢慢独立",
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
          "text": "你擅长把日子过得漂亮",
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
          "text": "你用设定和玩笑保护自己",
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
          "text": "你看着朴素，其实很有想法",
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
          "text": "你认定了就不轻易放手",
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
          "text": "你表面冷静，内心其实容易慌",
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
          "text": "你是大家默认可靠的那个",
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
          "text": "你在在意的人面前会破功",
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
          "text": "你行动力强，想到就出发",
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
          "text": "你羡慕别人的大胆",
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
          "text": "你看着随便，其实看得很清",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你用设定和玩笑保护自己",
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
          "text": "你用文字和书理解世界",
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
          "text": "你把别人的梦想也当回事",
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
          "text": "你认真起来会忘了照顾自己",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你是大家默认可靠的那个",
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
          "text": "你的严格其实是一种保护",
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
          "text": "你嘴上大大咧咧，心里有数",
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
          "text": "你容易紧张，习惯先道歉",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你看着随便，其实看得很清",
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
          "text": "你中二的外表下是认真的心",
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
          "text": "你安静，但心里有自己的小算盘",
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
          "text": "你天生能把人聚到一起",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你认真起来会忘了照顾自己",
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
          "text": "你做得多说得少",
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
          "text": "你对自己和身边人都要求高",
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
          "text": "你对热爱的事有使不完的劲",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你容易紧张，习惯先道歉",
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
          "text": "你舍得放手去追想要的",
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
          "text": "你嘴上不承认，身体很诚实",
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
          "text": "你对喜欢的事会下苦功",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你天生能把人聚到一起",
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
          "text": "你对新环境需要时间适应",
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
          "text": "你习惯把照顾别人当成日常",
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
          "text": "你先把规矩立起来再谈感情",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你对热爱的事有使不完的劲",
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
          "text": "你一旦决定了就很稳",
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
          "text": "你直接热烈，不绕弯子",
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
          "text": "你怕被看穿，又希望被理解",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你对喜欢的事会下苦功",
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
          "text": "你想到就会喊出来，先做再说",
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
          "text": "你更习惯用作品而不是语言表达自己",
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
          "text": "你也有害怕的东西，只是不退",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你先把规矩立起来再谈感情",
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
          "text": "你爽朗，但也会吃醋",
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
          "text": "你依赖信任的人，但也在慢慢独立",
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
          "text": "你擅长把日子过得漂亮",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你怕被看穿，又希望被理解",
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
          "text": "你看着朴素，其实很有想法",
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
          "text": "你认定了就不轻易放手",
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
          "text": "你表面冷静，内心其实容易慌",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你也有害怕的东西，只是不退",
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
          "text": "你在在意的人面前会破功",
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
          "text": "你行动力强，想到就出发",
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
          "text": "你羡慕别人的大胆",
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
          "text": "你温柔体贴",
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
          "text": "你不服输",
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
          "text": "你热爱表演",
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
          "text": "你爱捉弄后辈",
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
          "text": "你被挑战就燃起斗志",
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
          "text": "你温和随性",
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
          "text": "你想把喜欢传遍世界",
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
          "text": "你稳重文静",
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
          "text": "你努力想办法传达心情",
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
          "text": "你真心希望他人幸福",
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
          "text": "你有才华却不自信",
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
          "text": "你想到就去做",
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
          "text": "你很在意重要的人",
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
          "text": "你最爱可爱事物",
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
          "text": "你温柔谦逊",
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
          "text": "你意外地纯真",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你开朗爱笑",
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
          "text": "你疼爱妹妹",
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
          "text": "你认真有担当",
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
          "text": "你我行我素",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你内心细腻",
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
          "text": "你不懂变通",
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
          "text": "你为喜欢的事鼓起勇气",
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
          "text": "你自信满满",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你一步步朝梦想前进",
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
          "text": "你内心是好孩子",
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
          "text": "你认真可靠",
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
          "text": "你成熟自信",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你乐于尝试新事物",
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
          "text": "你慵懒爱睡",
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
          "text": "你充满热情",
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
          "text": "你治愈身边人",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你不擅表情达意",
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
          "text": "你严于律己",
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
          "text": "你其实害羞",
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
          "text": "你偶尔任性",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你认真努力",
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
          "text": "你爱耍小聪明恶作剧",
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
          "text": "你想让观众露出笑容",
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
          "text": "你沉稳不惊",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你友善照顾人",
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
          "text": "你关键时刻很可靠",
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
          "text": "你对喜欢的事率直",
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
          "text": "你热爱大自然",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你渴望与大家相连",
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
          "text": "你冷静沉着",
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
          "text": "你说话直率",
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
          "text": "你热烈直率",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你温柔体贴",
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
          "text": "你不服输",
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
          "text": "你热爱表演",
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
          "text": "你爱捉弄后辈",
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
          "text": "你被挑战就燃起斗志",
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
          "text": "你温和随性",
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
          "text": "你想把喜欢传遍世界",
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
          "text": "你稳重文静",
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
          "text": "你努力想办法传达心情",
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
          "text": "你真心希望他人幸福",
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
          "text": "你有才华却不自信",
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
          "text": "你想到就去做",
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
          "text": "你很在意重要的人",
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
          "text": "你最爱可爱事物",
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
          "text": "你温柔谦逊",
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
          "text": "你意外地纯真",
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
          "text": "你腼腆易怯场",
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
          "text": "你想到就立刻行动",
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
          "text": "你看问题一针见血",
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
          "text": "你理解他人情感",
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
          "text": "你不擅闲聊",
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
          "text": "你跌倒再爬起",
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
          "text": "你珍视朋友",
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
          "text": "你沉着冷静",
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
          "text": "你为达目的肯下功夫",
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
          "text": "你不肯认输",
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
          "text": "你讲求效率",
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
          "text": "你善良为他人着想",
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
          "text": "你爱笑也爱哭",
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
          "text": "你元气活泼",
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
          "text": "你表现欲强",
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
          "text": "你自律严谨",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你老实坚定",
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
          "text": "你其实害羞",
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
          "text": "你喜静独处",
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
          "text": "你为伙伴打气",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你才华出众而自负",
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
          "text": "你对梦想冷眼旁观",
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
          "text": "你犹豫中仍向前走",
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
          "text": "你开朗热情",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你看问题一针见血",
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
          "text": "你理解他人情感",
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
          "text": "你沉稳认真",
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
          "text": "你有责任心",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你珍视朋友",
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
          "text": "你沉着冷静",
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
          "text": "你对流行敏感",
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
          "text": "你易与人冲突",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你讲求效率",
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
          "text": "你善良为他人着想",
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
          "text": "你遇难不放弃",
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
          "text": "你关键时刻支撑伙伴",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你表现欲强",
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
          "text": "你自律严谨",
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
          "text": "你努力改变自己",
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
          "text": "你缺乏自信",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你喜静独处",
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
          "text": "你为伙伴打气",
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
          "text": "你竞争心极强",
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
          "text": "你冷静分析",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你犹豫中仍向前走",
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
          "text": "你开朗热情",
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
          "text": "你好胜想赢",
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
          "text": "你内心温柔",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你沉稳认真",
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
          "text": "你有责任心",
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
          "text": "你憧憬可爱事物",
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
          "text": "你容易寂寞",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你对流行敏感",
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
          "text": "你易与人冲突",
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
          "text": "你深爱姐姐",
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
          "text": "你腼腆易怯场",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你遇难不放弃",
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
          "text": "你关键时刻支撑伙伴",
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
          "text": "你强硬好胜",
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
          "text": "你不擅闲聊",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你努力改变自己",
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
          "text": "你缺乏自信",
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
          "text": "你好奇爱探究本质",
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
          "text": "你为达目的肯下功夫",
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
          "text": "你开朗笑容不断",
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
          "text": "你先计划再行动",
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
          "text": "你从不骄傲自满",
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
          "text": "你孩子气",
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
          "text": "你万事乐在其中",
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
          "text": "你不感兴趣就不做",
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
          "text": "你有些不坦率",
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
          "text": "你勇于挑战",
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
          "text": "你容易激动",
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
          "text": "你重视彼此强弱互补",
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
          "text": "你热爱学园偶像",
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
          "text": "你开心就全力以赴",
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
          "text": "你容易紧绷",
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
          "text": "你文武双全",
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
          "text": "你容易寂寞",
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
          "text": "你照顾身边人",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你专业意识强",
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
          "text": "你重视传承",
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
          "text": "你偶尔看轻自己",
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
          "text": "你全心投入安利",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你直指问题核心",
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
          "text": "你有点爱撒娇",
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
          "text": "你率真烂漫",
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
          "text": "你过于认真",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你从不骄傲自满",
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
          "text": "你孩子气",
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
          "text": "你开朗有活力",
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
          "text": "你深知自己魅力",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你有些不坦率",
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
          "text": "你勇于挑战",
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
          "text": "你谈所爱语速变快",
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
          "text": "你独立自主",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你热爱学园偶像",
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
          "text": "你开心就全力以赴",
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
          "text": "你笨拙却纯粹",
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
          "text": "你目标坚定",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你容易寂寞",
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
          "text": "你照顾身边人",
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
          "text": "你为可爱费尽心力",
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
          "text": "你热爱传统",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你偶尔看轻自己",
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
          "text": "你全心投入安利",
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
          "text": "你冷静敏锐",
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
          "text": "你喜欢被搭理",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你率真烂漫",
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
          "text": "你过于认真",
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
          "text": "你凡事拼命努力",
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
          "text": "你常发呆神游",
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
      "q": "下面哪句话最像你？",
      "opts": [
        {
          "text": "你开朗有活力",
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
          "text": "你深知自己魅力",
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
          "text": "你认真执着",
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
          "text": "你想找到值得骄傲之事",
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
      "q": "朋友更可能这样形容你：",
      "opts": [
        {
          "text": "你谈所爱语速变快",
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
          "text": "你独立自主",
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
          "text": "你执着投入",
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
          "text": "你开朗笑容不断",
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
      "q": "你内心的真实写照是：",
      "opts": [
        {
          "text": "你笨拙却纯粹",
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
          "text": "你目标坚定",
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
          "text": "你是天才却平易近人",
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
          "text": "你万事乐在其中",
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
      "q": "别人眼中的你，更接近：",
      "opts": [
        {
          "text": "你为可爱费尽心力",
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
          "text": "你热爱传统",
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
          "text": "你勤奋不气馁",
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
          "text": "你容易激动",
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
