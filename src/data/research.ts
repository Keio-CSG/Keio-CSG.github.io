export interface ResearchTheme {
  slug: string;
  icon: string;
  title: { ja: string; en: string };
  summary: { ja: string; en: string };
  projects: { ja: string; en: string }[];
  achievements?: { text: { ja: string; en: string }; href?: string }[];
  collaborators?: string[];
}

export const researchThemes: ResearchTheme[] = [
  {
    slug: "edge-computing",
    icon: "cpu",
    title: { ja: "エッジコンピューティング", en: "Edge Computing" },
    summary: {
      ja: "エッジAI技術の進歩により、自動運転車や作業用ロボットなど、かつては夢物語だったアプリケーションが現実のものになっています。CSGでは、デジタル回路の性能限界を超える新しい計算原理を用いた革新的な回路技術の開発に取り組んでいます。",
      en: "Advances in edge AI are turning once-futuristic applications — autonomous vehicles, working robots — into reality. At CSG, we develop innovative circuit technologies based on new computing principles that go beyond the performance limits of digital circuits.",
    },
    projects: [
      {
        ja: "アナログ回路技術を活用した超低消費電力AI：デジタル回路と比較して10-100倍の省電力化を目指す",
        en: "Ultra-low-power AI using analog circuit technology, targeting 10-100x power reduction vs. digital circuits",
      },
      {
        ja: "イン・メモリ・コンピューティング：メモリ内で直接計算を行い、データ転送のボトルネックを解消",
        en: "In-memory computing that performs computation directly inside memory, eliminating data-transfer bottlenecks",
      },
    ],
    achievements: [
      { text: { ja: "Transformer用インメモリコンピューティング技術の実現", en: "Realized in-memory computing technology for Transformers" } },
      { text: { ja: "Saliencyを用いた効率的なディープニューラルネットワーク推論の実装", en: "Efficient deep neural network inference using saliency-aware techniques" } },
    ],
  },
  {
    slug: "autonomous-driving-security",
    icon: "shield",
    title: { ja: "自動運転セキュリティ", en: "Autonomous Driving Security" },
    summary: {
      ja: "自動運転技術の普及に伴い、そのセキュリティの重要性が増しています。CSGでは、LiDARを含む各種センサーのセキュリティ分析と、堅牢なシステム設計に取り組んでいます。",
      en: "As autonomous driving spreads, sensor security grows ever more critical. CSG researches security analysis of LiDAR and other sensors, and designs systems that remain robust under attack.",
    },
    projects: [
      { ja: "LiDARセキュリティの包括的分析：潜在的な攻撃ベクトルの特定と対策の研究", en: "Comprehensive LiDAR security analysis: identifying attack vectors and countermeasures" },
      { ja: "センサーフュージョン：複数のセンサデータを安全に統合する手法の開発", en: "Sensor fusion: methods for securely integrating multiple sensor streams" },
      { ja: "セキュアLiDAR：攻撃下でも安心・安全なセンシングを提供可能なLiDARセンサの研究", en: "Secure LiDAR: sensor designs that keep sensing safe and reliable even under attack" },
    ],
    collaborators: ["Waseda University", "University of Electro-Communications (JST CREST)", "University of California, Irvine", "Sony"],
  },
  {
    slug: "lidar-3d-sensing",
    icon: "radar",
    title: { ja: "LiDAR 3Dセンシング", en: "LiDAR 3D Sensing" },
    summary: {
      ja: "自動運転技術の進歩に伴い、LiDARなどの3Dセンサーが不可欠となっています。CSGでは、高性能で低コストなLiDARシステムの開発、そしてスポーツや医療応用に取り組んでいます。",
      en: "As autonomous driving advances, 3D sensors like LiDAR have become indispensable. CSG develops high-performance, low-cost LiDAR systems and applies them to sports and healthcare.",
    },
    projects: [
      { ja: "3DセンサーとAIを活用したリハビリシステム：患者の動きを正確に捉え、効果的なリハビリを支援", en: "Rehabilitation systems combining 3D sensors and AI to accurately capture patient movement" },
      { ja: "スポーツ分析のための3Dセンシング：選手のパフォーマンス向上に貢献", en: "3D sensing for sports analytics, helping improve athlete performance" },
    ],
    collaborators: ["Okayama University Hospital", "Aisin Corporation"],
  },
];
