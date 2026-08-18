export interface Member {
  name: string;
  team?: string;
  mail?: string;
  github?: string;
  comment?: string;
  photo?: string;
}

export interface AlumniMember {
  name: string;
  destination: string;
  mail?: string;
  github?: string;
  url?: string;
}

export const pi = {
  name: "Kentaro Yoshioka",
  title: { ja: "准教授 (Associate Professor)", en: "Associate Professor" },
  photo: "/images/members/pi.jpg",
  bio: [
    {
      period: "2014/4 – 2021/3",
      ja: "東芝 研究開発センター 研究員。世界最高効率クラスのA/D変換器（ISSCC 2017/2018, JSSC 2018, TVLSI 2019）、自動運転向け世界最長レンジLiDAR（ISSCC 2018/2020, VLSI 2020, JSSC 2018/2020）の研究に従事。",
      en: "Research staff at Toshiba R&D Center. Researched some of the world's most efficient A/D converters (ISSCC 2017/2018, JSSC 2018, TVLSI 2019) and the world's longest-range automotive LiDAR (ISSCC 2018/2020, VLSI 2020, JSSC 2018/2020).",
    },
    {
      period: "2017/12 – 2018/12",
      ja: "スタンフォード大学 客員研究員。世界最高効率クラスのアナログディープラーニング回路を研究（VLSI 2018, ASSCC 2018, JSSC 2018, ICIP2019）。",
      en: "Visiting Scholar at Stanford University, researching some of the world's most efficient analog deep learning circuits (VLSI 2018, ASSCC 2018, JSSC 2018, ICIP2019).",
    },
    {
      period: "2021/4 –",
      ja: "慶應義塾大学 准教授。",
      en: "Associate Professor, Keio University.",
    },
    {
      period: "2022/10 – 2026/3",
      ja: "JSTさきがけ研究者 (Presto Researcher)。",
      en: "JST PRESTO Researcher.",
    },
  ],
  comment: { ja: "慶應から世界へ！", en: "From Keio to the world!" },
  badges: ["Kaggle Competition Master 🥇🥇"],
  links: {
    kaggle: "https://www.kaggle.com/kyoshioka47",
    github: "https://github.com/kentaroy47",
  },
};

export const phdStudents: Member[] = [
  { name: "Wenlun Zhang", team: "Circuit", mail: "wenlun_zhang@keio.jp", github: "https://github.com/Wenlun-Zhang", comment: "研究ワクワク！" },
  { name: "Kazuma Ikeda", team: "Sensing", mail: "kazu2080@keio.jp", github: "https://github.com/ike-kazu", comment: "とにかくやる" },
  { name: "Shimpei Ando", team: "Circuit", mail: "shimpeiando@keio.jp", github: "https://github.com/Shimpeiando", comment: "焦らずコツコツ" },
  { name: "Ozora Sako", team: "Sensing", mail: "sako.ozora@keio.jp", github: "https://github.com/ozorasann", comment: "経験を大切にする" },
];

export const masterStudents: Member[] = [
  { name: "Masahiro Hatano", team: "Sensing", mail: "hmasa@keio.jp", github: "https://github.com/lmasal", comment: "\"楽しい\"をモットーに！" },
  { name: "Risa Nonaka", team: "Circuit", mail: "gaspar@keio.jp", comment: "コツコツ頑張ります！" },
  { name: "Ryunosuke Hayashi", team: "Sensing", mail: "hayashi.ryu430@keio.jp", comment: "計画的になりたい" },
  { name: "Ryoya Matsuno", team: "Circuit", mail: "ryoya_matsuno@keio.jp", comment: "日進月歩" },
  { name: "Ryo Yoshida", team: "Sensing" },
  { name: "Xu Zhen", team: "Circuit", comment: "頑張れ！！！" },
  { name: "Zihao Ding", team: "Sensor", comment: "少しずつ前に進みたい" },
  { name: "Shion Horie", team: "Circuits", mail: "456shion@keio.jp", comment: "好奇心を忘れない" },
  { name: "Ryu Sugawara", team: "Circuits", mail: "55sugawararyu@keio.jp", comment: "なにかしら頑張ろう" },
  { name: "Marino Watanabe", team: "Sensing", mail: "watanabe_marino@keio.jp", comment: "頑張ります。" },
];

export const bachelorStudents: Member[] = [
  { name: "Masayuki Murakami", team: "Sensing", mail: "masayuki.murakami@keio.jp", comment: "日進月歩" },
  { name: "Ryo Tokizaki", team: "Circuit", mail: "tokizaki0702@keio.jp", comment: "コツコツが勝つコツ" },
  { name: "Ittoku Ishii", team: "Sensing", mail: "1010ishii@keio.jp", comment: "七転六起" },
  { name: "Takumi Yusa", team: "Sensing", mail: "yusa.taku3@keio.jp", comment: "継続は力なり" },
  { name: "Kento Matsukawa", team: "Sensing", mail: "pinetriver@keio.jp", comment: "ポジティブ！" },
];

export const researchMembers: Member[] = [
  { name: "Takami Sato", team: "Security" },
  { name: "Xinyu Li", team: "Circuits", comment: "Visiting Ph.D. Student from Nanjing University" },
  { name: "Yan Yan", team: "Circuits", comment: "Visiting Master's Student from Southeast University" },
];

export const staff: Member[] = [{ name: "Aki Fukushima", team: "Secretary" }];

export const alumni: AlumniMember[] = [
  { name: "Yung-Chin (Jim) Chen", destination: "Ph.D. student at Princeton University", mail: "jim.chen.work@gmail.com", url: "https://chenyungchin.github.io/" },
  { name: "Ryo Suzuki", destination: "Nissan Motors", mail: "suzuki.ryo@keio.jp", github: "https://github.com/suhd10" },
  { name: "Rokuto Nagata", destination: "Daihen", mail: "nagatarokuto@keio.jp", github: "https://github.com/ngtroku" },
  { name: "Satomi Miyagi", destination: "Sony Semiconductor Solutions", mail: "stm-m22@keio.jp", github: "https://github.com/stm-m22" },
  { name: "Yuki Hayakawa", destination: "Sony", mail: "hykwyuk@keio.jp", github: "https://github.com/organic-nailer" },
  { name: "Fumiya Tanaka", destination: "Sansan", mail: "238t@keio.jp", github: "https://github.com/fummicc1" },
  { name: "Shota Nagai", destination: "AWS", mail: "n-shota@keio.jp" },
  { name: "Yu Kitagawa", destination: "—", mail: "keioyukita104@keio.jp" },
];
