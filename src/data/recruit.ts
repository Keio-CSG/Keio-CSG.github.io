export const recruit = {
  updated: "2025/9/22",
  intro: {
    ja: "学部3年生配属及び大学院から吉岡研に入りたい方・興味がある方は、吉岡（kyoshioka47@keio.jp）にメールをください！ 「配属に興味があるのですが、見学できますか？」程度の文面で大丈夫です。研究内容の説明や先輩との簡単な懇談を通して研究室説明を行っています。配属期間は早めに・積極的に教員に連絡を取り、色々な話を聞いた上で入りたい研究室を絞ってみてください。",
    en: "If you're a B3 student considering lab assignment, or a prospective graduate student interested in joining CSG, please email Ken (kyoshioka47@keio.jp). A short message like \"I'm interested in the lab, could I visit?\" is enough. We'll walk you through our research and let you chat informally with current members. Reach out to faculty early and talk to several labs before deciding.",
  },
  infoSessions: {
    year: "2025",
    slots: ["10/22 15:30–", "10/24 15:00–", "10/31 15:00–", "11/5 15:30–"],
    note: {
      ja: "予約は不要です。研究室説明30分、先輩との懇談30分ほどを予定しています。23-214に来てください。",
      en: "No reservation needed. About 30 minutes of lab introduction plus 30 minutes chatting with current members. Meet at room 23-214.",
    },
  },
  tracks: {
    ja: "吉岡研では「回路」か「センサ」、どちらかの研究テーマに分かれて配属します。どちらのテーマも上下のレイヤ（上はAI・ソフトウェア、下は半導体デバイスやレーザなど）と連携して研究をするため、ハードとソフト両方に興味があることが重要です。プログラミングやAIの知識・経験は必須ではなく、それよりもハードとソフトを両方やってみたいという意志が重要だと考えています。",
    en: "Students join CSG under one of two tracks: Circuit or Sensor. Both tracks span layers from AI/software down to semiconductor devices and lasers, so an interest in both hardware and software matters more than prior expertise. Programming or AI experience isn't required — willingness to tackle both hard and soft elements is.",
  },
  culture: {
    ja: "「慶應から世界へ」をモットーに、国際学会での発表を目指して研究しています。競合相手はMIT、スタンフォード、インテル、Googleなど。研究室にコアタイムはありませんが、週に一度のグループミーティングは出席必須（オンライン可）です。4年生以降は授業が少なくなるため、自発的な研究活動が期待されます。",
    en: "Our motto is \"from Keio to the world\" — we aim to publish at international conferences, competing with the likes of MIT, Stanford, Intel, and Google. There's no core-hours requirement, but weekly group meetings are mandatory (online participation is fine). From B4 onward, coursework drops off sharply, so self-directed research is expected.",
  },
  ongoingProjects: [
    {
      title: { ja: "回路：インメモリAIアクセラレータ", en: "Circuit: In-Memory AI Accelerators" },
      body: {
        ja: "メモリ内でAI計算を行うことで、従来回路よりも遥かに低い電力のAI回路の実現を目指しています。アナログ演算や確率的計算などのデジタル演算よりも革新的な計算方式による効率化を探求。実際の回路設計に加え、PyTorchを利用した回路フレンドリーなAIの学習・フレームワーク作成も行います。",
        en: "We perform AI computation directly inside memory to build far more power-efficient AI circuits than conventional designs, exploring analog and probabilistic computation beyond digital arithmetic. Alongside real circuit design, we build PyTorch-based training and frameworks for circuit-friendly AI.",
      },
      sponsors: "JST CREST / 科研費 / 理研 他",
      collaborators: "東京大学、京都大学、静岡大学、情報工学科 藤木研 など",
      examples: "ICCV'25, ESSERC'25, ICCAD'24, SSDM'24, ISSCC'24, ASP-DAC'24",
    },
    {
      title: { ja: "センサ：自動運転セキュリティ", en: "Sensor: Autonomous Driving Security" },
      body: {
        ja: "自動運転に不可欠なLiDARセンサは多く使われていますが、そのセキュリティ性質はあまり調べられていません。吉岡研ではLiDARセンサの脆弱性発見や自動運転車における脅威を調査し、解決策を提案する研究を行っています。攻撃装置の構築のほか、実際にLiDARを設計したり試験用の自動運転車を走行させたりしている、世界でも数少ない研究室です。",
        en: "LiDAR sensors are essential to autonomous driving, yet their security is rarely studied. We uncover LiDAR vulnerabilities and threats to autonomous vehicles and propose defenses — one of the few labs worldwide that builds attack rigs, designs real LiDARs, and drives actual test vehicles.",
      },
      sponsors: "JST CREST / JST さきがけ / 科研費 他",
      collaborators: "University of California, Irvine / University of Florida / 早稲田大学 / 電気通信大学 / ソニー",
      examples: "RA-L'25, ICRA'25, NDSS'25, NDSS'24, VehicleSec'24, VehicleSec'23",
    },
    {
      title: { ja: "センサ：LiDARセンシング", en: "Sensor: LiDAR Sensing" },
      body: {
        ja: "LiDARセンサの高性能化・低価格化に伴い、医療やスポーツといった新しいアプリケーションが考えられます。そのような新規センシングアプリ開発を共同研究を通じ実現します。",
        en: "As LiDAR sensors become more capable and affordable, new applications open up in healthcare and sports. We realize these new sensing applications through collaborative research.",
      },
      sponsors: "科研費",
      collaborators: "岡山大学病院 / アイシン / 情報工学科 青木研",
      examples: "",
    },
  ],
  voices: [
    {
      q: { ja: "この研究室を選んだ理由はなんですか？", en: "Why did you choose this lab?" },
      a: [
        { ja: "立ち上げたばかりの研究室ということもあって、活気に満ちていると感じたから", en: "Being a newly founded lab, it felt full of energy." },
        { ja: "比較的新しい研究室で、これまでの研究テーマや伝統にとらわれずに自由に挑戦できると感じたため", en: "As a relatively new lab, it felt free to try things without being bound by old traditions." },
        { ja: "自律走行、センシングに興味があり、しかもハードとソフト両方できそうだったため", en: "I was interested in autonomous driving and sensing, and could work on both hardware and software here." },
        { ja: "ハードウェアとソフトウェアの両方を触ることができる唯一の研究室だったから", en: "It was the only lab where I could touch both hardware and software." },
      ],
    },
    {
      q: { ja: "研究室生活で印象に残っていること・楽しいことは何ですか？", en: "What stands out or is fun about lab life?" },
      a: [
        { ja: "議論の最中に良いアイデアが浮かんだ時／海外の研究者と交流できる点", en: "The moment a good idea sparks mid-discussion, and getting to interact with researchers abroad." },
        { ja: "メンバー全員が国際学会や論文誌を目指していること", en: "Every member aims for international conferences and journals." },
        { ja: "海外の学会発表、仲間との議論。優秀な先輩との議論は興味深く、自分もこうなりたいと思わせるものがある", en: "Presenting at overseas conferences and discussing with talented senior members — it's inspiring." },
      ],
    },
    {
      q: { ja: "研究室での経験が将来どのように役立つと思いますか？", en: "How will this lab experience help your future?" },
      a: [
        { ja: "問題解決能力、なんとかする力", en: "Problem-solving ability — the power to figure things out." },
        { ja: "プレゼンテーション能力、課題に対する向き合い方、知的なタフさ", en: "Presentation skills, how to face challenges, intellectual toughness." },
        { ja: "マネジメント能力。自分のプロジェクトを進めるのに人を巻き込む必要があり、スケジューリングなどを自分で率先する必要がある", en: "Management skills — driving your own project means involving others and owning the schedule." },
      ],
    },
  ],
  faq: [
    {
      q: { ja: "世界と勝負するといってもなにをすればいいのでしょう？", en: "\"Compete with the world\" — but what does that actually mean day to day?" },
      a: {
        ja: "吉岡が考える大切なことは「失敗すること」「基礎力」「環境」です。大学のものづくりでは失敗から驚くほどたくさんのことを学べます。研究室ではたくさん失敗をし、そこから学んでください。基礎が大事なのはスポーツでも研究でも仕事でも同じで、CSGでは新人研修や勉強会を通して基礎力と専門性を培います。海外では指導教員を「アドバイザー」と呼び、学生が楽しく自発的に研究できる環境を整える役目を担います。共に成長できる研究室環境・風土を作っていきましょう。",
        en: "Three things matter most: failure, fundamentals, and environment. Building things at university teaches you an astonishing amount through failure — fail often here, and learn from it. Fundamentals matter as much in research as in sports or work; CSG builds them through onboarding training and study sessions. Abroad, advisors create an environment where students research happily and independently rather than being lectured at — we aim to grow together in that spirit.",
      },
    },
    {
      q: { ja: "配属されると若い期の学生になると思いますが、他の研究室と変わるのでしょうか？", en: "As an early cohort in a young lab, is it different from established labs?" },
      a: {
        ja: "歴史も先輩も少なく、自分で立ち上げないといけないことが多く大変な面もありますが、教員から密接な指導が受けられる、スタートアップに近い環境で研究できるというプラスも多くあります。このような環境にワクワクする方と会えるのを楽しみにしています。",
        en: "Less history and fewer seniors means more to build yourself — but also close mentoring and a startup-like environment. If that excites you, we'd love to meet you.",
      },
    },
  ],
  outcomes: { ja: "Sony、日産、Princeton (Ph.D)", en: "Sony, Nissan, Princeton (Ph.D.)" },
};
