/** Recruiting-facing selling points: what a student actually gets by joining CSG. */

export interface Highlight {
  icon: string;
  title: { ja: string; en: string };
  body: { ja: string; en: string };
  proof?: { ja: string; en: string };
  /** Scene illustration at src/assets/recruit/<art>.webp; the icon stands in until it exists. */
  art?: string;
}

export const whyCsg: Highlight[] = [
  {
    icon: "chip",
    art: "tapeout",
    title: { ja: "本物のチップを、自分で焼く", en: "You tape out real silicon" },
    body: {
      ja: "シミュレーションで終わりません。学生が設計した回路を実際に半導体プロセスで製造し、測定して論文にします。65nm・28nm・12nm FinFETでの試作実績があり、TSMCからの支援も受けています。",
      en: "Research doesn't stop at simulation. Circuits designed by students are fabricated in real semiconductor processes, measured, and published. We have tape-outs in 65nm, 28nm, and 12nm FinFET, supported by TSMC.",
    },
    proof: { ja: "ISSCC 5報 / JSSC 9報", en: "5 ISSCC · 9 JSSC papers" },
  },
  {
    icon: "car",
    art: "vehicle",
    title: { ja: "実車を走らせて攻撃・防御する", en: "You attack and defend real vehicles" },
    body: {
      ja: "LiDAR攻撃装置を自作し、実際の自動運転車を走行させて検証します。実機のLiDARを設計することもあります。ここまでやっている研究室は世界でも数えるほどしかありません。",
      en: "We build our own LiDAR attack rigs and validate them against actual driving autonomous vehicles — and sometimes design the LiDAR sensors themselves. Only a handful of labs worldwide work at this level.",
    },
    proof: { ja: "NDSS 2年連続採択", en: "NDSS two years running" },
  },
  {
    icon: "globe",
    art: "world",
    title: { ja: "世界の研究者と、直接やり合う", en: "You engage the world directly" },
    body: {
      ja: "国際学会での発表を全員が目指します。UC Irvine、フロリダ大、南京大学、東南大学、ソニー、アイシンとの共同研究が動いており、海外からの留学生も在籍しています。",
      en: "Every member aims to present at international venues. We run joint projects with UC Irvine, University of Florida, Nanjing University, Southeast University, Sony, and Aisin — and host visiting students from abroad.",
    },
    proof: { ja: "NeurIPS / CVPR / ICCV / NDSS / IROS / ICRA", en: "NeurIPS · CVPR · ICCV · NDSS · IROS · ICRA" },
  },
  {
    icon: "sparkle",
    art: "media",
    title: { ja: "研究成果が、世の中に届く", en: "Your work reaches the public" },
    body: {
      ja: "GIZMODO、日経クロステック、IEEE Spectrum、Tech Xploreなど国内外のメディアに研究が取り上げられています。プレスリリースも積極的に行っています。",
      en: "Our research has been covered by GIZMODO, Nikkei xTECH, IEEE Spectrum, and Tech Xplore, in Japan and abroad. We actively issue press releases.",
    },
    proof: { ja: "メディア掲載 15件以上", en: "15+ media features" },
  },
  {
    icon: "book",
    art: "onboarding",
    title: { ja: "ゼロから始めても、追いつける", en: "You can start from zero" },
    body: {
      ja: "プログラミングやAIの経験は必須ではありません。新人研修と勉強会で、一生使える基礎力と専門性を身につけます。大事なのは、ハードとソフト両方をやってみたいという意志です。",
      en: "Prior programming or AI experience isn't required. Onboarding training and study sessions build the fundamentals and depth that last a career. What matters is the will to tackle both hardware and software.",
    },
  },
  {
    icon: "wallet",
    art: "resources",
    title: { ja: "研究費に、困らない", en: "You won't lack resources" },
    body: {
      ja: "JST CREST 2件、JSTさきがけ、JST ASPIRE、次世代エッジAI事業、科研費基盤Bなど、大型予算を複数獲得しています。試作費も学会渡航費も心配なく研究に集中できます。",
      en: "We hold multiple large grants — two JST CREST projects, JST PRESTO, JST ASPIRE, the Next-Gen Edge AI program, and KAKENHI (B). Fabrication and conference travel are covered so you can focus on research.",
    },
  },
];

/** Student-won awards — evidence that students here get recognized, not just the PI. */
export interface StudentAward {
  year: string;
  name: { ja: string; en: string };
  award: { ja: string; en: string };
}

export const studentAwards: StudentAward[] = [
  { year: "2026", name: { ja: "吉田", en: "Ryo Yoshida" }, award: { ja: "MIRU優秀学生賞", en: "MIRU Outstanding Student Award" } },
  { year: "2026", name: { ja: "佐古", en: "Ozora Sako" }, award: { ja: "VehicleSec Best Demo Award", en: "VehicleSec Best Demo Award" } },
  { year: "2026", name: { ja: "張", en: "Wenlun Zhang" }, award: { ja: "ASP-DAC Excellent Student Author Award", en: "ASP-DAC Excellent Student Author Award" } },
  { year: "2026", name: { ja: "池田", en: "Kazuma Ikeda" }, award: { ja: "自動車工学会賞", en: "JSAE Award" } },
  { year: "2026", name: { ja: "菅原", en: "Ryu Sugawara" }, award: { ja: "理工学部賞・卒業論文賞", en: "Faculty Award and Thesis Award" } },
  { year: "2026", name: { ja: "渡辺", en: "Marino Watanabe" }, award: { ja: "電気学術奨励賞", en: "IEEJ Encouragement Award" } },
  { year: "2025", name: { ja: "張", en: "Wenlun Zhang" }, award: { ja: "PAKDD Best Paper Award", en: "PAKDD Best Paper Award" } },
  { year: "2025", name: { ja: "李", en: "Xinyu Li" }, award: { ja: "IEEE ICCE-Asia Best Poster Award", en: "IEEE ICCE-Asia Best Poster Award" } },
  { year: "2023", name: { ja: "山下", en: "Kaoru Yamashita" }, award: { ja: "IEEE CICC Outstanding Student Paper Award", en: "IEEE CICC Outstanding Student Paper Award" } },
];

/** Where alumni went — concrete career outcomes. */
export const careerOutcomes = [
  { destination: "Princeton University (Ph.D.)", kind: "academia" },
  { destination: "Sony", kind: "industry" },
  { destination: "Sony Semiconductor Solutions", kind: "industry" },
  { destination: "Nissan Motors", kind: "industry" },
  { destination: "AWS", kind: "industry" },
  { destination: "Sansan", kind: "industry" },
  { destination: "Daihen", kind: "industry" },
];

/** Open-source releases — proof the lab ships, and a way for students to build a public record. */
export const openSource = [
  { name: "SLAMSpoof", desc: { ja: "LiDAR自己位置推定へのスプーフィング攻撃フレームワーク（ICRA'25）", en: "Spoofing attack framework against LiDAR localization (ICRA'25)" }, href: "https://github.com/Keio-CSG/slamspoof" },
  { name: "ASiM", desc: { ja: "SRAMアナログCIMの推論精度シミュレータ（TVLSI'25）", en: "Inference-accuracy simulator for SRAM analog compute-in-memory (TVLSI'25)" }, href: "https://github.com/Keio-CSG/ASiM" },
  { name: "Ghost-FWL", desc: { ja: "フルウェーブフォームLiDARのゴースト除去データセットと実装（CVPR'26）", en: "Full-waveform LiDAR dataset and code for ghost removal (CVPR'26)" }, href: "https://github.com/Keio-CSG/Ghost-FWL" },
  { name: "PACiM", desc: { ja: "確率的近似によるハイブリッドCIMのシミュレータ（ICCAD'24）", en: "Simulator for sparsity-centric hybrid CIM via probabilistic approximation (ICCAD'24)" }, href: "https://github.com/Keio-CSG/PACiM" },
  { name: "AHCPTQ", desc: { ja: "Segment Anything Model向けの量子化手法（ICCV'25）", en: "Hardware-compatible post-training quantization for SAM (ICCV'25)" }, href: "https://github.com/Keio-CSG/AHCPTQ" },
  { name: "LiDAR-Utilities", desc: { ja: "研究室で使うLiDARの使い方とキャプチャ用スクリプト", en: "How-tos and capture scripts for the LiDARs we use" }, href: "https://github.com/Keio-CSG/LiDAR-Utilities" },
];

/** Facilities and things the lab physically has — very concrete for visitors. */
export const facilities = [
  { ja: "回路試作 (65nm / 28nm / 12nm FinFET)", en: "Chip tape-out (65nm / 28nm / 12nm FinFET)" },
  { ja: "実験用自動運転車両", en: "Test autonomous vehicle" },
  { ja: "LiDAR攻撃・評価装置", en: "LiDAR attack and evaluation rigs" },
  { ja: "各社LiDARセンサ多数", en: "A wide range of commercial LiDAR sensors" },
  { ja: "高速測定環境 (ADC/CIM評価)", en: "High-speed measurement setup for ADC/CIM" },
  { ja: "GPUサーバ", en: "GPU servers" },
];
