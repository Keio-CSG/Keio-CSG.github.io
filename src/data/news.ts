export interface NewsItem {
  date: string;
  ja: string;
  en: string;
  tag?: "award" | "paper" | "grant" | "press" | "lab";
}

export const news: NewsItem[] = [
  { date: "2026-08", tag: "award", ja: "吉田くんの研究がMIRU優秀学生賞を受賞しました🎉", en: "Ryo Yoshida received the MIRU Outstanding Student Award 🎉" },
  { date: "2026-08", tag: "award", ja: "佐古くんとフロリダ大、電通大との共同研究がVehicleSec Best Demo Awardを受賞しました🎉", en: "Ozora Sako's collaboration with University of Florida and UEC won the VehicleSec Best Demo Award 🎉" },
  { date: "2026-08", tag: "paper", ja: "Wenlunの Compute-in-ROM for LLM の論文が TCAS-I に採択されました！", en: "Wenlun's paper on Compute-in-ROM for LLMs was accepted to TCAS-I! Congrats!" },
  { date: "2026-08", tag: "paper", ja: "菅原くんの熱力学コンピュータの研究がSSDMに採択されました！おめでとう！", en: "Ryu Sugawara's thermodynamic computing work was accepted to SSDM! Congrats!" },
  { date: "2026-08", tag: "paper", ja: "堀江くんのセキュアなアナログ回路の研究がAPCCASに採択されました！おめでとう！", en: "Shion Horie's secure analog circuit work was accepted to APCCAS! Congrats!" },
  { date: "2026-06", tag: "paper", ja: "永田くんの論文が2本、ロボットのトップ学会 IROS 2026 に採択されました！", en: "Two SLAM spoofing papers by Rokuto Nagata were accepted to IROS 2026!" },
  { date: "2026-05", tag: "paper", ja: "WenlunがISCASで研究発表を行いました！", en: "Wenlun presented his work at ISCAS! Congrats!" },
  { date: "2026-03", tag: "press", ja: "IEEE Sensors Journalに佐古くんの研究が採択されました。世界最長、309m先から識別可能なLiDAR用基準マーカーを開発。", en: "Ozora's paper was accepted to IEEE Sensors Journal — a world-record 309 m identifiable fiducial marker for LiDAR." },
  { date: "2026-02", tag: "paper", ja: "池田くんと張さんの論文がAIのトップ学会 CVPR 2026 に採択されました！五十川研究室とソニーとの共同研究です💡", en: "Kazuma and Wenlun's papers were accepted to CVPR 2026 (1 Main + 1 Findings)! A collaboration with the Isogawa Group and Sony 💡" },
  { date: "2026-02", tag: "lab", ja: "5人の新B4がCSGに加わりました！これからよろしくお願いします。", en: "Five new B4 students joined CSG! Welcome aboard." },
  { date: "2025-12", tag: "grant", ja: "JST次世代エッジAI開発事業とJST ASPIREに、吉岡がCo-PIとして参画している提案がそれぞれ採択されました。", en: "Proposals to the JST Next-Gen Edge AI program and JST ASPIRE, with Ken as Co-PI, were both accepted." },
  { date: "2025-12", tag: "paper", ja: "山下くんの12nm FinFET高速クライオADCの論文がIEEE JSSCに採択されました！🎉", en: "Kaoru's paper on a high-speed cryo ADC in 12nm FinFET was accepted to IEEE JSSC! Congrats! 🎉" },
  { date: "2025-10", tag: "paper", ja: "池田くんの論文がIEEE RA-Lに採択されました！🚙", en: "Kazuma's paper was accepted to IEEE RA-L! Congrats! 🚙" },
  { date: "2025-09", tag: "award", ja: "吉岡がElsevier/StanfordのTop-2%研究者リスト（2025年単年）に選出されました。", en: "Ken was listed in the Top-2% researcher list (2025 single year) from Elsevier/Stanford." },
  { date: "2025-09", tag: "paper", ja: "WenlunのLLM論文がASP-DAC 2026に、ACIMシミュレータ論文がIEEE TVLSIに採択されました！", en: "Wenlun's LLM paper was accepted to ASP-DAC 2026 and his ACIM simulator paper to IEEE TVLSI!" },
  { date: "2025-08", tag: "paper", ja: "林くんのLiDARによるバスケ解析の論文がMMSports 2025に採択されました！青木研究室とアイシンとの共同研究です🏀", en: "Ryunosuke Hayashi's LiDAR basketball analytics paper was accepted to MMSports 2025 — a collaboration with the Aoki Lab and Aisin 🏀" },
  { date: "2025-06", tag: "award", ja: "Wenlunの論文がPAKDD'25でBest Paper Awardを受賞しました！🎉", en: "Wenlun's paper received the Best Paper Award at PAKDD'25! Huge congrats! 🎉" },
  { date: "2025-06", tag: "paper", ja: "Wenlunの論文がICCV 2025に採択されました！💥", en: "Wenlun's paper was accepted to ICCV 2025! 💥" },
  { date: "2025-05", tag: "paper", ja: "安藤くんのAnalog CIM論文がESSERC'25に採択されました！👏", en: "Shimpei's Analog CIM paper was accepted to ESSERC'25! 👏" },
  { date: "2025-03", tag: "award", ja: "吉岡が電気通信普及財団のテレコムシステム技術賞を受賞しました！", en: "Ken received the Telecommunications Advancement Foundation's Telecom System Technology Award!" },
  { date: "2025-02", tag: "press", ja: "NDSS'25発表に関しプレスリリースを行いました。走行中の自動運転センサーを長距離から無効化できることを発見。", en: "Press release on our NDSS'25 work: disabling sensors on driving autonomous vehicles from long distance." },
  { date: "2025-01", tag: "paper", ja: "永田くんの論文がロボット系トップ学会 ICRA 2025 に採択されました！🙌 AISTとUCIとの共同研究です。", en: "Rokuto's paper was accepted to ICRA 2025! A collaboration between AIST and UCI. 🙌" },
  { date: "2024-09", tag: "paper", ja: "吉岡の論文が回路系トップ論文誌 JSSC に採択されました！🙌", en: "Ken's analog CIM paper was accepted to the Journal of Solid-State Circuits! 🙌" },
  { date: "2024-08", tag: "paper", ja: "セキュリティ四大学会の一つ NDSS 2025 に論文が採択されました！🙌 UCIとの共同研究、2年連続の採択です。", en: "Our collaborative research with UCI on LiDAR security was accepted to NDSS 2025 — two-year streak! 🙌" },
  { date: "2024-06", tag: "paper", ja: "半導体設計自動化のトップ学会 ICCAD 2024 に張さんの論文が採択されました!🙌", en: "Wenlun's paper on Probabilistic CIM was accepted to ICCAD 2024! 🙌" },
  { date: "2024-03", tag: "grant", ja: "科研費基盤B（代表）に採択いただきました。LiDARシステム設計に関する研究を進めます。", en: "We won a KAKENHI Grant-in-Aid for Scientific Research (B) on LiDAR system design!" },
  { date: "2023-10", tag: "paper", ja: "半導体のオリンピック ISSCC 2024 に論文が採択されました！🙌（採択率27%）", en: "Our paper on analog CIM for Transformers was accepted to ISSCC 2024 (27% acceptance rate)! 🙌" },
  { date: "2023-09", tag: "grant", ja: "JST CRESTに吉岡が主たる共同研究者の提案「AI駆動型サイバーフィジカルシステムのセキュリティ評価・対策基盤」が採択されました！", en: "We won a JST CREST grant on autonomous vehicle security, with Ken as principal co-researcher!" },
  { date: "2022-09", tag: "grant", ja: "JSTさきがけ「ICT基盤強化」領域に吉岡が代表の提案「サイバーとフィジカルを横断したセンサセキュリティ研究」が採択されました。", en: "We won a JST PRESTO research grant on sensor security crossing cyber and physical domains, with Ken as PI." },
  { date: "2021-04", tag: "lab", ja: "研究室がスタートしました！", en: "CSG has started!" },
];
