export interface ResearchTheme {
  slug: string;
  icon: string;
  title: { ja: string; en: string };
  /** A question that lands without any background — the way in for a non-specialist. */
  hook: { ja: string; en: string };
  /** Plain-language explanation aimed at B3 students. No unexplained jargon. */
  plain: { ja: string; en: string };
  /** What a student actually spends their days doing — the thing B3 students ask first. */
  whatYouDo: { ja: string; en: string }[];
  /** Skills and keywords picked up along the way. */
  keywords: { ja: string; en: string }[];
  /** The formal framing, used on homepage cards and meta descriptions. */
  summary: { ja: string; en: string };
  projects: { ja: string; en: string }[];
  collaborators?: (string | { ja: string; en: string })[];
}

export const researchThemes: ResearchTheme[] = [
  {
    slug: "edge-computing",
    icon: "cpu",
    title: { ja: "エッジコンピューティング", en: "Edge Computing" },
    hook: {
      ja: "AIを、電池で動かせるか？",
      en: "Can we run AI on a battery?",
    },
    plain: {
      ja: "いまのAIは、巨大なデータセンターで莫大な電力を食べながら動いています。これをスマホや自動車、ロボットに載せようとすると、電力がまったく足りません。しかも半導体の進歩は鈍り、デジタル回路をこれ以上速く・省エネにするのは限界に近づいています。\n\nそこで私たちは、計算のやり方そのものを変えます。データを運ばずメモリの中で直接計算する。0と1ではなくアナログの電圧で計算する。あえて「だいたい合っている」計算で済ませる。教科書とは違うやり方で、消費電力を10分の1から100分の1にすることを狙っています。\n\nそして紙の上で終わらせません。設計した回路は本当に半導体工場で製造され、数ヶ月後に自分のチップとして手元に届きます。",
      en: "Today's AI runs in vast data centers, consuming enormous power. Putting it into a phone, a car, or a robot leaves nowhere near enough energy budget — and with semiconductor scaling slowing, making digital circuits faster and leaner is hitting a wall.\n\nSo we change how computing works. Compute inside memory instead of shuttling data around. Compute with analog voltages instead of ones and zeros. Accept answers that are approximately right. These non-textbook approaches target 10-100x less power.\n\nAnd we don't stop at paper. Circuits you design get fabricated at a real semiconductor foundry, and months later your own chip arrives in your hands.",
    },
    whatYouDo: [
      {
        ja: "PyTorchでAIモデルを学習させ、回路に載せやすい形に作り変える",
        en: "Train AI models in PyTorch and reshape them to fit real circuits",
      },
      {
        ja: "回路を設計し、レイアウトを引いて、半導体工場に製造を依頼する",
        en: "Design circuits, draw the layout, and send it off to a fab",
      },
      {
        ja: "数ヶ月後に届いた自分のチップを測定し、狙い通り動くか確かめる",
        en: "Measure your own chip when it returns, and find out if it works",
      },
      {
        ja: "結果を論文にまとめ、ISSCCなど世界第一線の学会で発表する",
        en: "Write up the results and present at top venues like ISSCC",
      },
    ],
    keywords: [
      { ja: "回路設計", en: "Circuit design" },
      { ja: "深層学習", en: "Deep learning" },
      { ja: "PyTorch", en: "PyTorch" },
      { ja: "半導体プロセス", en: "Semiconductor processes" },
      { ja: "アナログ回路", en: "Analog circuits" },
      { ja: "モデル量子化", en: "Model quantization" },
    ],
    summary: {
      ja: "エッジAI技術の進歩により、自動運転車や作業用ロボットなど、かつては夢物語だったアプリケーションが現実のものになっています。CSGでは、デジタル回路の性能限界を超える新しい計算原理を用いた革新的な回路技術の開発に取り組んでいます。",
      en: "Advances in edge AI are turning once-futuristic applications — autonomous vehicles, working robots — into reality. At CSG, we develop innovative circuit technologies based on new computing principles that go beyond the performance limits of digital circuits.",
    },
    projects: [
      {
        ja: "メモリの中で直接計算する「インメモリ・コンピューティング」でデータ転送のボトルネックをなくす",
        en: "In-memory computing that removes the data-transfer bottleneck by computing where the data lives",
      },
      {
        ja: "アナログ回路やゆらぎを使い、デジタルとは違う原理でAI計算を効率化する",
        en: "Analog and stochastic circuits that make AI efficient on principles digital logic can't reach",
      },
      {
        ja: "大規模言語モデル（LLM）を、限られた電力のデバイスで動かすための回路",
        en: "Circuits that bring large language models onto power-constrained devices",
      },
      {
        ja: "回路に優しいAIモデルの学習手法や、シミュレータの開発・公開",
        en: "Training methods for circuit-friendly AI models, plus open-source simulators",
      },
    ],
  },
  {
    slug: "autonomous-driving-security",
    icon: "shield",
    title: { ja: "自動運転セキュリティ", en: "Autonomous Driving Security" },
    hook: {
      ja: "走っている自動運転車に、ウソの景色を見せられるか？",
      en: "Can you show a moving self-driving car something that isn't there?",
    },
    plain: {
      ja: "自動運転車は「LiDAR」というセンサで周囲を見ています。レーザーを飛ばし、跳ね返ってくるまでの時間から物までの距離を測る仕組みです。ではもし、外から狙ってレーザーを撃ち返したら、どうなるでしょう。\n\n実は、ありもしない障害物を見せて急ブレーキを踏ませたり、逆に目の前にいる人を消してしまったりできます。私たちはその装置を自分たちの手で作り、テストコースで本物の車を走らせて「時速何kmで、何m先から成立するのか」を世界で初めて確かめました。\n\n物騒に聞こえるかもしれませんが、狙いは逆です。どこまで危ないのかを正確に知らなければ、守る技術は作れません。攻撃を示すのと同じだけの労力を、それを検知し防ぐ手法の設計にも注いでいます。",
      en: "Self-driving cars see the world through LiDAR: it fires laser pulses and measures how long they take to bounce back. So what happens if someone fires lasers back at it?\n\nIt turns out you can make a car brake hard for an obstacle that doesn't exist — or make a person standing right in front of it disappear. We build these rigs ourselves and drive real vehicles on test tracks, and we were the first to establish how fast and how far away such attacks actually work.\n\nThat may sound alarming, but the aim is the opposite. You cannot design defenses without knowing precisely how dangerous something is. We put as much effort into detection and mitigation as into the attacks themselves.",
    },
    whatYouDo: [
      {
        ja: "レーザーと光学系を組み合わせ、攻撃装置を自分の手で作る",
        en: "Build attack rigs by hand from lasers and optics",
      },
      {
        ja: "テストコースで実際に自動運転車を走らせ、攻撃が成立する条件を測る",
        en: "Drive real autonomous vehicles on test tracks and measure when attacks succeed",
      },
      {
        ja: "3D点群データをAIで解析し、攻撃を見破る検知手法を考える",
        en: "Analyze 3D point clouds with AI to devise detection methods",
      },
      {
        ja: "NDSSなどセキュリティのトップ会議で発表し、ときに新聞やテレビに取り上げられる",
        en: "Present at top security venues like NDSS — and sometimes end up in the press",
      },
    ],
    keywords: [
      { ja: "LiDAR", en: "LiDAR" },
      { ja: "光学系の自作", en: "Building optics" },
      { ja: "セキュリティ", en: "Security" },
      { ja: "3D点群処理", en: "3D point clouds" },
      { ja: "深層学習", en: "Deep learning" },
      { ja: "SLAM", en: "SLAM" },
    ],
    summary: {
      ja: "自動運転技術の普及に伴い、そのセキュリティの重要性が増しています。CSGでは、LiDARを含む各種センサーのセキュリティ分析と、堅牢なシステム設計に取り組んでいます。",
      en: "As autonomous driving spreads, sensor security grows ever more critical. CSG researches security analysis of LiDAR and other sensors, and designs systems that remain robust under attack.",
    },
    projects: [
      {
        ja: "実車・実速度でどこまで攻撃が通用するのかを解明し、危険性を定量化する",
        en: "Quantifying how far attacks carry against real vehicles at real speeds",
      },
      {
        ja: "自己位置推定（SLAM）を狂わせ、車に「自分がどこにいるか」を誤認させる攻撃",
        en: "Attacks on SLAM that make a vehicle mistake where it is",
      },
      {
        ja: "防御機能を備えた最新のLiDARさえ突破できてしまうことの実証",
        en: "Demonstrating that even the newest LiDARs with built-in defenses can be bypassed",
      },
      {
        ja: "攻撃を検知・無効化する仕組みと、そもそも攻撃に強いLiDARの設計",
        en: "Detection and mitigation, plus LiDAR designs that resist attack by construction",
      },
    ],
    collaborators: [
      "University of California, Irvine",
      "University of Florida",
      { ja: "早稲田大学", en: "Waseda University" },
      { ja: "電気通信大学", en: "The University of Electro-Communications" },
      "Sony",
    ],
  },
  {
    slug: "lidar-3d-sensing",
    icon: "radar",
    title: { ja: "LiDAR 3Dセンシング", en: "LiDAR 3D Sensing" },
    hook: {
      ja: "世界が3Dで見えたら、何を作る？",
      en: "If you could see the world in 3D, what would you build?",
    },
    plain: {
      ja: "自動運転のおかげで、LiDARは急速に安くなりました。ということは、車以外にも使えるということです。カメラは平面の映像しか撮れませんが、LiDARは空間そのものを3次元の点の集まりとして捉えられます。\n\n私たちはこれを病院とスポーツに持ち込みました。リハビリでは、関節がどこまで曲がるかを医師が分度器で測っていたものを、センサとAIで自動化しています。バスケットボールでは、10人の選手が激しくぶつかり合うコートで誰がどこにいるかを追い続けるシステムを作りました。カメラだけでは選手が重なった瞬間に見失いますが、3Dなら区別できます。\n\n工事現場で建機が自分の位置を把握するための、300m先から識別できる目印も開発しました。技術を作って終わりではなく、それが現場で本当に役立つところまで持っていく。そこがこのテーマの面白さです。",
      en: "Self-driving cars made LiDAR cheap, fast — which means it can be used far beyond cars. A camera captures a flat image; LiDAR captures space itself as a cloud of 3D points.\n\nWe've taken it into hospitals and onto basketball courts. In rehabilitation, the range of motion a doctor once measured with a protractor is now captured automatically by sensor and AI. In basketball, we built a system that follows ten players through the collisions of a real game — where camera-only tracking loses people the moment they overlap.\n\nWe also built a marker identifiable from 300 meters away, so construction machinery can localize itself on site. The appeal of this theme is carrying a technology all the way to where it actually helps someone.",
    },
    whatYouDo: [
      {
        ja: "病院や体育館にセンサを持ち込み、実際の現場でデータを取る",
        en: "Take sensors into hospitals and gymnasiums and capture real-world data",
      },
      {
        ja: "取れた3D点群をAIで解析し、人の動きや位置を追跡する仕組みを作る",
        en: "Analyze the resulting 3D point clouds with AI to track people and motion",
      },
      {
        ja: "医師やプロチーム、企業と直接やり取りしながら、使える形に仕上げる",
        en: "Work directly with doctors, pro teams, and companies to make it genuinely usable",
      },
      {
        ja: "作ったデータセットを公開し、世界中の研究者に使ってもらう",
        en: "Release your datasets for researchers worldwide to build on",
      },
    ],
    keywords: [
      { ja: "LiDAR", en: "LiDAR" },
      { ja: "3D点群", en: "3D point clouds" },
      { ja: "深層学習", en: "Deep learning" },
      { ja: "物体追跡", en: "Object tracking" },
      { ja: "医療応用", en: "Healthcare applications" },
      { ja: "スポーツ解析", en: "Sports analytics" },
    ],
    summary: {
      ja: "自動運転技術の進歩に伴い、LiDARなどの3Dセンサーが不可欠となっています。CSGでは、高性能で低コストなLiDARシステムの開発、そしてスポーツや医療応用に取り組んでいます。",
      en: "As autonomous driving advances, 3D sensors like LiDAR have become indispensable. CSG develops high-performance, low-cost LiDAR systems and applies them to sports and healthcare.",
    },
    projects: [
      {
        ja: "プロバスケの試合で10人の選手を3Dで追跡するシステムとデータセット",
        en: "A system and dataset for tracking ten players in 3D during professional basketball games",
      },
      {
        ja: "3DセンサとAIによる、リハビリの関節可動域の自動計測",
        en: "Automatic measurement of joint range of motion for rehabilitation, via 3D sensing and AI",
      },
      {
        ja: "GPSが使えない場所でも建機が自己位置を掴める、300m先から識別可能な目印",
        en: "A fiducial marker identifiable from 300 m, letting machinery localize where GPS fails",
      },
      {
        ja: "LiDARを通信機として使い、信号や死角の情報を車に届ける仕組み",
        en: "Repurposing LiDAR as a receiver, delivering traffic-signal and blind-spot information to vehicles",
      },
    ],
    collaborators: [
      { ja: "岡山大学病院", en: "Okayama University Hospital" },
      { ja: "株式会社アイシン", en: "Aisin Corporation" },
      { ja: "慶應義塾大学 青木研究室", en: "Aoki Lab, Keio University" },
    ],
  },
];
