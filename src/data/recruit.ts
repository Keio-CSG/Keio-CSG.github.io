import type { ProjectCategory } from "./projectCategories";
import { zundamonAnalog } from "./tools";

export const recruit = {
  updated: "2026/9/28",
  intro: {
    ja: "学部3年生配属及び大学院から吉岡研に入りたい方・興味がある方は、吉岡（kyoshioka47@keio.jp）にメールをください！ 「配属に興味があるのですが、見学できますか？」程度の文面で大丈夫です。研究内容の説明や先輩との簡単な懇談を通して研究室説明を行っています。配属期間は早めに・積極的に教員に連絡を取り、色々な話を聞いた上で入りたい研究室を絞ってみてください。",
    en: "If you're a B3 student considering lab assignment, or a prospective graduate student interested in joining CSG, please email Ken (kyoshioka47@keio.jp). A short message like \"I'm interested in the lab, could I visit?\" is enough. We'll walk you through our research and let you chat informally with current members. Reach out to faculty early and talk to several labs before deciding.",
  },
  infoSessions: {
    year: "2026",
    slots: ["10/21 16:00–", "10/23 15:30–", "10/28 16:00–", "11/4 16:00–"],
    note: {
      ja: "予約は不要です。研究室説明30分、先輩との懇談30分ほどを予定しています。23-214に来てください。都合が合わない方は個別に対応しますので、メールをください。",
      en: "No reservation needed. About 30 minutes of lab introduction plus 30 minutes chatting with current members. Meet at room 23-214. If none of these times work, email us and we'll arrange a visit.",
    },
  },
  // The lab introduction deck on Speaker Deck. Swap both values when a new
  // year's deck goes up; the player id comes from
  // https://speakerdeck.com/oembed.json?url=<deck url>
  slides: {
    title: { ja: "吉岡研究室紹介（2026年度）", en: "Yoshioka Lab introduction (2026)" },
    url: "https://speakerdeck.com/kentaroy47/yoshioka-kenkyuushitsu-shoukai-2026-nendo",
    playerId: "f7d6b9b10e7744ddbe141d1440e3cff5",
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
      category: "computing" as ProjectCategory,
      title: { ja: "回路：インメモリAIアクセラレータ", en: "Circuit: In-Memory AI Accelerators" },
      body: {
        ja: "メモリ内でAI計算を行うことで、従来回路よりも遥かに低い電力のAI回路の実現を目指しています。アナログ演算や確率的計算などのデジタル演算よりも革新的な計算方式による効率化を探求。実際の回路設計に加え、PyTorchを利用した回路フレンドリーなAIの学習・フレームワーク作成も行います。",
        en: "We perform AI computation directly inside memory to build far more power-efficient AI circuits than conventional designs, exploring analog and probabilistic computation beyond digital arithmetic. Alongside real circuit design, we build PyTorch-based training and frameworks for circuit-friendly AI.",
      },
      sponsors: { ja: "JST CREST / 科研費 / 理研 / JST 次世代AI 他", en: "JST CREST / KAKENHI / RIKEN / JST Next-Generation AI and others" },
      collaborators: { ja: "東京大学、京都大学、静岡大学、情報工学科 藤木研 など", en: "Univ. of Tokyo, Kyoto Univ., Shizuoka Univ., Fujiki Lab (Keio CS) and others" },
      examples: "CVPR'26 (Findings), ASP-DAC'26, SSDM'26, ISCAS'26, ICCV'25, ESSERC'25, ISSCC'24",
    },
    {
      category: "security" as ProjectCategory,
      title: { ja: "センサ：自動運転セキュリティ", en: "Sensor: Autonomous Driving Security" },
      body: {
        ja: "自動運転に不可欠なLiDARセンサは多く使われていますが、そのセキュリティ性質はあまり調べられていません。吉岡研ではLiDARセンサの脆弱性発見や自動運転車における脅威を調査し、解決策を提案する研究を行っています。攻撃装置の構築のほか、実際にLiDARを設計したり試験用の自動運転車を走行させたりしている、世界でも数少ない研究室です。",
        en: "LiDAR sensors are essential to autonomous driving, yet their security is rarely studied. We uncover LiDAR vulnerabilities and threats to autonomous vehicles and propose defenses — one of the few labs worldwide that builds attack rigs, designs real LiDARs, and drives actual test vehicles.",
      },
      sponsors: { ja: "JST CREST / JST-NSF VINES / 科研費 他", en: "JST CREST / JST-NSF VINES / KAKENHI and others" },
      collaborators: { ja: "University of California, Irvine / University of Florida / 早稲田大学 / 電気通信大学 / ソニー", en: "University of California, Irvine / University of Florida / Waseda University / UEC / Sony" },
      examples: "ACM CCS'26, NeurIPS'26, IROS'26, VehicleSec'26, RA-L'25, ICRA'25, NDSS'25, NDSS'24",
    },
    {
      category: "sensing" as ProjectCategory,
      title: { ja: "センサ：LiDARセンシング", en: "Sensor: LiDAR Sensing" },
      body: {
        ja: "LiDARセンサの高性能化・低価格化に伴い、医療やスポーツといった新しいアプリケーションが考えられます。そのような新規センシングアプリ開発を共同研究を通じ実現します。",
        en: "As LiDAR sensors become more capable and affordable, new applications open up in healthcare and sports. We realize these new sensing applications through collaborative research.",
      },
      sponsors: { ja: "科研費 / JST CRONOS", en: "KAKENHI / JST CRONOS" },
      collaborators: { ja: "岡山大学病院 / アイシン / 電気情報工学科 青木研 / 情報工学科 五十川研", en: "Okayama University Hospital / Aisin / Aoki Lab (Keio EEE) / Isogawa Lab (Keio CS)" },
      examples: "CVPR'26, NeurIPS'26",
    },
  ],
  // Students' own words, kept whole and as they wrote them (some wrote in English).
  voices: [
    {
      q: { ja: "この研究室を選んだ理由はなんですか？", en: "Why did you choose this lab?" },
      a: [
        { ja: "立ち上げたばかりの研究室ということもあって、活気に満ちていると感じたから", en: "Being a newly founded lab, it felt full of energy." },
        { ja: "比較的新しい研究室で、これまでの研究テーマや伝統にとらわれずに自由に挑戦できると感じたため", en: "As a relatively new lab, it felt free to try things without being bound by old themes or traditions." },
        { ja: "自律走行、センシングに興味があり、しかもハードとソフト両方できそうだったため", en: "I was interested in autonomous driving and sensing, and it looked like I could do both hardware and software here." },
        { ja: "ハードとソフトのどっちも扱っていた、研究室が大きかった、やる気のある生徒がいた", en: "It covered both hardware and software, the lab was big, and the students were motivated." },
        { ja: "ハードウェアとソフトウェアの両方を触ることができる唯一の研究室だったから", en: "It was the only lab where I could work with both hardware and software." },
        { ja: "研究テーマが面白そうだったから、ハードとソフト両方を学べるから、対面で会う機会が他の研究室に比べて多いので仲は深まる、先生や雰囲気が良かった", en: "The research looked interesting, I could learn both hardware and software, we meet in person more than other labs so people get close, and I liked the professor and the atmosphere." },
      ],
    },
    {
      q: { ja: "研究室生活で印象に残っていること・楽しいことは何ですか？", en: "What stands out or is fun about lab life?" },
      a: [
        { ja: "議論の最中に良いアイデアが浮かんだ時／海外の研究者と交流できる点", en: "The moment a good idea sparks mid-discussion, and getting to interact with researchers abroad." },
        { ja: "メンバー全員が国際学会や論文誌を目指していること", en: "Every member aims for international conferences and journals." },
        { ja: "国際会議の発表、吉岡先生以外にも一流の研究者と出会えたこと", en: "Presenting at international conferences, and meeting top researchers beyond Prof. Yoshioka." },
        { ja: "海外の学会発表、仲間との議論。優秀な先輩との議論は興味深く、自分もこうなりたいと思わせるものがある", en: "Presenting at overseas conferences and discussing with peers. Talking with talented seniors is fascinating and makes me want to become like them." },
        { ja: "We went to VLSI meeting and had beer at night, people talked about interesting stuff.", en: "We went to VLSI meeting and had beer at night, people talked about interesting stuff." },
        { ja: "研究に関する相談とダーツ", en: "Talking through research — and darts." },
        { ja: "京都に学会発表を聞きに行ったこと、飲み会", en: "Going to Kyoto to hear conference talks, and lab dinners." },
      ],
    },
    {
      q: { ja: "研究室での経験が将来どのように役立つと思いますか？", en: "How will this lab experience help your future?" },
      a: [
        { ja: "問題解決能力、なんとかする力", en: "Problem-solving ability — the power to figure things out." },
        { ja: "自分で考えて行動する力が身についた", en: "I've learned to think and act on my own." },
        { ja: "プレゼンテーション能力、課題に対する向き合い方、知的なタフさ", en: "Presentation skills, how to face challenges, intellectual toughness." },
        { ja: "マネジメント能力。自分のプロジェクトを進めるのに人を巻き込む必要があり、スケジューリングなどを自分で率先する必要がある環境なのでその能力が身につくだろう。", en: "Management skills. Moving your own project forward means bringing other people in and taking the lead on scheduling, so you build that ability here." },
        { ja: "The research group is experienced and good at writing good papers", en: "The research group is experienced and good at writing good papers" },
        { ja: "プレゼンや資料作り、英語での日常会話", en: "Presentations and slide-making, and everyday conversation in English." },
        { ja: "実験プロセスを考え、結果を分析し、考察する力はどの仕事でも役立つと思う。メンバーと協力する場面が多く、コミュニケーション能力を培うことができ、仕事で役立つと思う。", en: "Designing experiments, analysing the results and drawing conclusions is useful in any job. We work together a lot, so you also build communication skills that carry over to work." },
      ],
    },
    {
      q: { ja: "研究室生活の１日を教えてください", en: "What does a day in the lab look like?" },
      a: [
        { ja: "朝１０時ごろに研究室に到着し、実験や論文執筆を行います。２０時ごろに研究室を出て帰宅します。", en: "I get to the lab around 10 a.m. and run experiments or write papers. I head home around 8 p.m." },
        { ja: "日によるが、午前中 or 午後のどちらかで自分のテーマの研究。残りは研究室メンバーの研究の手伝いや論文を読んで新しいテーマを考えています。", en: "It depends on the day: either the morning or the afternoon goes to my own project. The rest I spend helping other members with their research, or reading papers and thinking up new topics." },
        { ja: "大学に登校し、同僚と話し、研究。飽きたらまた同僚と雑談。気分で帰りに同僚とダーツ", en: "Come in, chat with labmates, do research. When I get bored, chat some more. If I feel like it, darts with labmates on the way home." },
        { ja: "13:00〜14:30ミーティング、14:30〜15:00遅めのご飯、15:00〜17:00実験やデータの取得など", en: "13:00–14:30 meeting, 14:30–15:00 late lunch, 15:00–17:00 experiments and data collection." },
      ],
    },
  ],
  // Answers are a list of blocks so the long one keeps its three headed parts.
  // A block may end with a link to somewhere that goes further.
  // A "\n" in a body starts a new paragraph.
  faq: [
    {
      q: { ja: "コアタイムはありますか？", en: "Are there core hours?" },
      a: [
        {
          body: {
            ja: "ありませんが、自分で管理して研究を進めることを期待しています。毎週研究室全体の進捗ミーティングがあり、そこで相談したり、Slackで随時みんなに聞いたりしながら研究できます。",
            en: "No, but we expect you to manage your own time and move your research forward. There's a weekly progress meeting for the whole lab where you can talk things through, and you can ask everyone on Slack at any time.",
          },
        },
      ],
    },
    {
      q: { ja: "どういう人が吉岡研に向いていますか？", en: "Who is a good fit for the lab?" },
      a: [
        {
          body: {
            ja: "吉岡研の研究内容に興味・好奇心がある人です。特に、ハードとソフトの両方に興味・好奇心がある人に向いています。\nセンシングもコンピューティングも、土台はハードウェアです。ハードの知識は就職後も必ず役立ちます。",
            en: "Anyone curious about what we research — especially someone curious about both hardware and software.\nHardware is the foundation of both sensing and computing, and knowing hardware will serve you well after you graduate, too.",
          },
        },
      ],
    },
    {
      q: { ja: "専門知識は必要ですか？", en: "Do I need specialist knowledge?" },
      a: [
        {
          body: {
            ja: "必要ありません。回路、機械学習、プログラミングの知識は、配属後に研修で勉強します。",
            en: "No. Circuits, machine learning and programming are all covered in training after you join.",
          },
          link: {
            label: { ja: "予習したい人へ：ずんだもんと学ぶアナログ回路", en: "Want a head start? Analog Circuits with Zundamon (in Japanese)" },
            href: zundamonAnalog.href,
          },
        },
      ],
    },
    {
      q: { ja: "世界と勝負するといってもなにをすればいいのでしょう？", en: "\"Compete with the world\" — but what does that actually mean day to day?" },
      a: [
        {
          body: {
            ja: "吉岡が考える大切なことは、失敗することと基礎力と環境です。",
            en: "What I think matters most is failure, fundamentals, and environment.",
          },
        },
        {
          heading: { ja: "失敗すること", en: "Failing" },
          body: {
            ja: "仕事で失敗したら怒られるしガッカリします。では失敗はいけないことでしょうか？私はそう思いません。大学のものづくりでは失敗や経験から驚くほどたくさんの事を学べます。研究室ではたくさん失敗をし、そしてそこから学んでください！研究生活におけるたくさんの失敗・勉強・経験は将来の自分に向けてのトレーニング・投資であると思ってください。そうすると研究や勉強にも能動的に動くことができると思います。\n進んでリスクを取り失敗する勇気のある学生さん、大歓迎です。",
            en: "Fail at work and you get scolded, and it's disappointing. So is failure a bad thing? I don't think so. Building things at university, you learn an astonishing amount from failure and experience. Fail a lot in the lab, and learn from it! Think of all the failing, studying and experience in your research life as training for, and an investment in, your future self. Seen that way, you can take the initiative in research and study.\nStudents with the courage to take risks and fail are very welcome.",
          },
        },
        {
          heading: { ja: "基礎力", en: "Fundamentals" },
          body: {
            ja: "基礎が大事なのはスポーツでも研究、仕事でも同じです。基礎理解がないと物事の表面をなぞるだけになってしまいます。\nもちろん基礎が出来ていないから研究室には向いてない、ということはなくCSGでは新人研修や勉強会を通し人生を通じる屋台骨となる基礎力と専門性を培います。",
            en: "Fundamentals matter in sports, in research and at work alike. Without a basic understanding, you only ever trace the surface of things.\nThat doesn't mean you're not cut out for the lab if your fundamentals aren't there yet. At CSG, onboarding training and study sessions build the fundamentals and expertise that will be your backbone for life.",
          },
        },
        {
          heading: { ja: "環境", en: "Environment" },
          body: {
            ja: "海外では指導教員を先生ではなくアドバイザーと言います。アドバイザーの役目は学生に楽しく自発的に研究できる環境を整え、一方的に指導するのではなく学生を導きます。慶應義塾の理念の一つである「半学半教」に近いです。\n偉そうに書いてますが吉岡もまだまだです、共に成長できるような研究室環境・風土を作っていきましょう。",
            en: "Abroad, a supervisor is called an advisor rather than a teacher. An advisor's job is to set up an environment where students can do research happily and on their own initiative, guiding them rather than lecturing at them. It's close to hangaku-hankyo, \"half learning, half teaching\", one of Keio's founding ideals.\nThat all sounds grand, but I'm still learning too. Let's build a lab and a culture where we grow together.",
          },
        },
      ],
    },
    {
      q: { ja: "配属されると6期生になると思いますが、他の研究室と変わるのでしょうか？", en: "I'd be joining as the 6th cohort — how is that different from an established lab?" },
      a: [
        {
          body: {
            ja: "皆さんは6期生になります。まだ歴史の浅い研究室なので、自分で立ち上げることも多いですが、教員から密接な指導が受けられる、スタートアップに近い環境で研究できるというプラスも多くあります。このような環境にワクワクする方と会えるのを楽しみにしています。",
            en: "You'd be our 6th cohort. As a young lab, there's still a lot to build yourself — but you also get close mentoring and a startup-like environment. If that excites you, we'd love to meet you.",
          },
        },
      ],
    },
  ],
  outcomes: { ja: "Sony、日産、Princeton (Ph.D)", en: "Sony, Nissan, Princeton (Ph.D.)" },
};
