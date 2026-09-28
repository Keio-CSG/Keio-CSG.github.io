export type NewsTag = "award" | "paper" | "grant" | "press" | "lab";

/**
 * Most link labels are proper nouns ("IEEE JSSC") and read the same in both
 * languages; the few that are prose carry a translation so the English page
 * does not fall back to Japanese.
 */
export type NewsLinkLabel = string | { ja: string; en: string };

export const linkLabel = (label: NewsLinkLabel, locale: "ja" | "en") =>
  typeof label === "string" ? label : label[locale];

export interface NewsItem {
  date: string;
  ja: string;
  en: string;
  tag?: NewsTag;
  /**
   * Sources carried over from the Google Sites version, where they were
   * embedded mid-sentence. Shown as chips after the text.
   */
  links?: { label: NewsLinkLabel; href: string }[];
}

/** Shared so the homepage and the news page label tags identically. */
export const newsTagLabels: Record<NewsTag, { ja: string; en: string; cls: string }> = {
  award: { ja: "受賞", en: "Award", cls: "bg-sand-300/70 text-navy-800" },
  paper: { ja: "論文", en: "Paper", cls: "bg-coral-300/30 text-coral-600" },
  grant: { ja: "研究費", en: "Grant", cls: "bg-sky-200/70 text-navy-700" },
  press: { ja: "プレス", en: "Press", cls: "bg-navy-800 text-paper-50" },
  lab: { ja: "研究室", en: "Lab", cls: "bg-paper-300 text-navy-700" },
};

export const news: NewsItem[] = [
  { date: "2026-09", tag: "paper", ja: "吉田くんと池田くんの研究が、機械学習のトップ学会 NeurIPS 2026 にそれぞれ採択されました🎉 池田くんの研究は五十川研究室との共同研究です。", en: "Two full-waveform LiDAR papers, by Ryo Yoshida and Kazuma Ikeda, were accepted to NeurIPS 2026! 🎉 One is a joint effort with the Isogawa Lab.", links: [{ label: "NeurIPS", href: "https://neurips.cc/" }] },
  { date: "2026-09", tag: "grant", ja: "JST-NSF VINES と JST CRONOS に、吉岡がCo-PIとして参画している提案がそれぞれ採択されました。", en: "Proposals to JST-NSF VINES and JST CRONOS, with Ken as Co-PI, were both accepted.", links: [{ label: "JST-NSF VINES", href: "https://www.keio.ac.jp/ja/press-release/20260917-press-01" }, { label: "JST CRONOS", href: "https://www.jst.go.jp/kisoken/cronos/dl/2026/press-01.pdf" }] },
  { date: "2026-09", tag: "award", ja: "松野くんがdlabデザインフォーラムで dlab-VDECデザインアワード優秀賞 を受賞しました！おめでとうございます🎉", en: "Ryoya Matsuno received the dlab-VDEC Design Award (Excellence Prize) at the dlab Design Forum! 🎉", links: [{ label: { ja: "受賞報告", en: "Announcement" }, href: "https://x.com/keiocsg/status/2099454587199738137" }] },
  { date: "2026-09", tag: "paper", ja: "渡辺さんのVLAセキュリティの研究が、ロボット学習のトップ学会 CoRL 2026 に採択されました！🎉", en: "Marino Watanabe's work on VLA security was accepted to CoRL 2026, a top venue in robot learning! 🎉", links: [{ label: "CoRL 2026", href: "https://www.corl.org/" }] },
  { date: "2026-09", tag: "paper", ja: "佐古くんとフロリダ大・電通大との共同研究（ステレオカメラの脆弱性）が、セキュリティのトップ学会 ACM CCS 2026 に採択されました！🎉", en: "Ozora Sako's stereo camera vulnerability research, with the University of Florida and UEC, was accepted to ACM CCS 2026 — a top security venue! 🎉", links: [{ label: "ACM CCS 2026", href: "https://www.sigsac.org/ccs/CCS2026/" }] },
  { date: "2026-08", tag: "award", ja: "吉田くんの研究がMIRU優秀学生賞を受賞しました🎉", en: "Ryo Yoshida received the MIRU Outstanding Student Award 🎉", links: [{ label: { ja: "MIRU優秀学生賞", en: "MIRU Student Award" }, href: "https://x.com/keiocsg/status/2085548388368744593" }] },
  { date: "2026-08", tag: "award", ja: "佐古くんとフロリダ大、電通大との共同研究がVehicleSec Best Demo Awardを受賞しました🎉", en: "Ozora Sako's collaboration with University of Florida and UEC won the VehicleSec Best Demo Award 🎉", links: [{ label: { ja: "受賞報告", en: "Announcement" }, href: "https://x.com/keiocsg/status/2088816673600266496" }] },
  { date: "2026-08", tag: "paper", ja: "Wenlunの Compute-in-ROM for LLM の論文が TCAS-I に採択されました！", en: "Wenlun's paper on Compute-in-ROM for LLMs was accepted to TCAS-I! Congrats!", links: [{ label: "TCAS-I", href: "https://ieeexplore.ieee.org/document/11649857" }] },
  { date: "2026-08", tag: "paper", ja: "菅原くんの熱力学コンピュータの研究がSSDMに採択されました！おめでとう！", en: "Ryu Sugawara's thermodynamic computing work was accepted to SSDM! Congrats!" },
  { date: "2026-08", tag: "paper", ja: "堀江くんのセキュアなアナログ回路の研究がAPCCASに採択されました！おめでとう！", en: "Shion Horie's secure analog circuit work was accepted to APCCAS! Congrats!" },
  { date: "2026-06", tag: "paper", ja: "永田くんの論文が2本、ロボットのトップ学会 IROS 2026 に採択されました！", en: "Two SLAM spoofing papers by Rokuto Nagata were accepted to IROS 2026!" },
  { date: "2026-05", tag: "paper", ja: "WenlunがISCASで研究発表を行いました！", en: "Wenlun presented his work at ISCAS! Congrats!" },
  { date: "2026-03", tag: "press", ja: "IEEE Sensors Journalに佐古くんの研究が採択されました。世界最長、309m先から識別可能なLiDAR用基準マーカーを開発。", en: "Ozora's paper was accepted to IEEE Sensors Journal — a world-record 309 m identifiable fiducial marker for LiDAR.", links: [{ label: { ja: "プレスリリース", en: "Press release" }, href: "https://www.keio.ac.jp/ja/press-releases/2026/3/24/28-173365/" }] },
  { date: "2026-02", tag: "paper", ja: "池田くんと張さんの論文がAIのトップ学会 CVPR 2026 に採択されました！五十川研究室とソニーとの共同研究です💡", en: "Kazuma and Wenlun's papers were accepted to CVPR 2026 (1 Main + 1 Findings)! A collaboration with the Isogawa Group and Sony 💡" },
  { date: "2026-02", tag: "lab", ja: "5人の新B4がCSGに加わりました！これからよろしくお願いします。", en: "Five new B4 students joined CSG! Welcome aboard." },
  { date: "2025-12", tag: "grant", ja: "JST次世代エッジAI開発事業とJST ASPIREに、吉岡がCo-PIとして参画している提案がそれぞれ採択されました。", en: "Proposals to the JST Next-Gen Edge AI program and JST ASPIRE, with Ken as Co-PI, were both accepted.", links: [{ label: { ja: "次世代エッジAI事業", en: "Next-Gen Edge AI program" }, href: "https://www.jst.go.jp/program/edge-ai-semicon/" }, { label: "JST ASPIRE", href: "https://www.jst.go.jp/aspire/" }] },
  { date: "2025-12", tag: "paper", ja: "山下くんの12nm FinFET高速クライオADCの論文がIEEE JSSCに採択されました！🎉", en: "Kaoru's paper on a high-speed cryo ADC in 12nm FinFET was accepted to IEEE JSSC! Congrats! 🎉", links: [{ label: "IEEE JSSC", href: "https://ieeexplore.ieee.org/document/11303363" }] },
  { date: "2025-10", tag: "paper", ja: "池田くんの論文がIEEE RA-Lに採択されました！🚙", en: "Kazuma's paper was accepted to IEEE RA-L! Congrats! 🚙", links: [{ label: "IEEE RA-L", href: "https://ieeexplore.ieee.org/document/11197902" }] },
  { date: "2025-09", tag: "award", ja: "吉岡がElsevier/StanfordのTop-2%研究者リスト（2025年単年）に選出されました。", en: "Ken was listed in the Top-2% researcher list (2025 single year) from Elsevier/Stanford.", links: [{ label: "Elsevier/Stanford", href: "https://elsevier.digitalcommonsdata.com/datasets/btchxktzyw/8" }] },
  { date: "2025-09", tag: "paper", ja: "WenlunのLLM論文がASP-DAC 2026に、ACIMシミュレータ論文がIEEE TVLSIに採択されました！", en: "Wenlun's LLM paper was accepted to ASP-DAC 2026 and his ACIM simulator paper to IEEE TVLSI!", links: [{ label: "ASP-DAC 2026", href: "https://www.aspdac.com/aspdac2026/index.html" }, { label: "IEEE TVLSI", href: "https://ieeexplore.ieee.org/document/11152313/" }] },
  { date: "2025-08", tag: "paper", ja: "林くんのLiDARによるバスケ解析の論文がMMSports 2025に採択されました！青木研究室とアイシンとの共同研究です🏀", en: "Ryunosuke Hayashi's LiDAR basketball analytics paper was accepted to MMSports 2025 — a collaboration with the Aoki Lab and Aisin 🏀", links: [{ label: "MMSports 2025", href: "http://mmsports.multimedia-computing.de/mmsports2025/index.html" }] },
  { date: "2025-06", tag: "award", ja: "Wenlunの論文がPAKDD'25でBest Paper Awardを受賞しました！🎉", en: "Wenlun's paper received the Best Paper Award at PAKDD'25! Huge congrats! 🎉", links: [{ label: { ja: "受賞報告", en: "Announcement" }, href: "https://pbs.twimg.com/media/GtXZO80bMAQrX9P?format=jpg&name=4096x4096" }] },
  { date: "2025-06", tag: "paper", ja: "Wenlunの論文がICCV 2025に採択されました！💥", en: "Wenlun's paper was accepted to ICCV 2025! 💥", links: [{ label: "ICCV 2025", href: "https://iccv.thecvf.com/Conferences/2025/AcceptedPapers" }] },
  { date: "2025-05", tag: "paper", ja: "安藤くんのAnalog CIM論文がESSERC'25に採択されました！👏", en: "Shimpei's Analog CIM paper was accepted to ESSERC'25! 👏", links: [{ label: { ja: "論文", en: "Paper" }, href: "https://epapers2.org/esserc2025/ESR/paper_details.php?paper_id=7102" }] },
  { date: "2025-03", tag: "award", ja: "吉岡が電気通信普及財団のテレコムシステム技術賞を受賞しました！", en: "Ken received the Telecommunications Advancement Foundation's Telecom System Technology Award!", links: [{ label: { ja: "テレコムシステム技術賞", en: "Telecom System Technology Award" }, href: "https://www.taf.or.jp/award/telesys/" }] },
  { date: "2025-02", tag: "press", ja: "NDSS'25発表に関しプレスリリースを行いました。走行中の自動運転センサーを長距離から無効化できることを発見。", en: "Press release on our NDSS'25 work: disabling sensors on driving autonomous vehicles from long distance.", links: [{ label: { ja: "プレスリリース", en: "Press release" }, href: "https://www.jst.go.jp/pr/announce/20250225-2/index.html" }, { label: { ja: "発表の様子", en: "Photos from the talk" }, href: "https://x.com/qialfredchen/status/1895267782247567787" }] },
  { date: "2025-01", tag: "paper", ja: "永田くんの論文がロボット系トップ学会 ICRA 2025 に採択されました！🙌 AISTとUCIとの共同研究です。", en: "Rokuto's paper was accepted to ICRA 2025! A collaboration between AIST and UCI. 🙌" },
  { date: "2024-09", tag: "paper", ja: "吉岡の論文が回路系トップ論文誌 JSSC に採択されました！🙌", en: "Ken's analog CIM paper was accepted to the Journal of Solid-State Circuits! 🙌", links: [{ label: "IEEE JSSC", href: "https://ieeexplore.ieee.org/document/10689660/" }] },
  { date: "2024-08", tag: "paper", ja: "セキュリティ四大学会の一つ NDSS 2025 に論文が採択されました！🙌 UCIとの共同研究、2年連続の採択です。", en: "Our collaborative research with UCI on LiDAR security was accepted to NDSS 2025 — two-year streak! 🙌", links: [{ label: "NDSS 2025", href: "https://www.ndss-symposium.org/ndss2025/" }] },
  { date: "2024-06", tag: "paper", ja: "半導体設計自動化のトップ学会 ICCAD 2024 に張さんの論文が採択されました!🙌", en: "Wenlun's paper on Probabilistic CIM was accepted to ICCAD 2024! 🙌" },
  { date: "2024-03", tag: "grant", ja: "科研費基盤B（代表）に採択いただきました。LiDARシステム設計に関する研究を進めます。", en: "We won a KAKENHI Grant-in-Aid for Scientific Research (B) on LiDAR system design!" },
  { date: "2023-10", tag: "paper", ja: "半導体のオリンピック ISSCC 2024 に論文が採択されました！🙌（採択率27%）", en: "Our paper on analog CIM for Transformers was accepted to ISSCC 2024 (27% acceptance rate)! 🙌" },
  { date: "2023-09", tag: "grant", ja: "JST CRESTに吉岡が主たる共同研究者の提案「AI駆動型サイバーフィジカルシステムのセキュリティ評価・対策基盤」が採択されました！", en: "We won a JST CREST grant on autonomous vehicle security, with Ken as principal co-researcher!" },
  { date: "2022-09", tag: "grant", ja: "JSTさきがけ「ICT基盤強化」領域に吉岡が代表の提案「サイバーとフィジカルを横断したセンサセキュリティ研究」が採択されました。", en: "We won a JST PRESTO research grant on sensor security crossing cyber and physical domains, with Ken as PI." },
  { date: "2021-04", tag: "lab", ja: "研究室がスタートしました！", en: "CSG has started!" },
];
