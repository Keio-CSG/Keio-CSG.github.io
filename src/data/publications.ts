export type PubCategory = "computing" | "sensing" | "analog" | "review";
export type PubType = "journal" | "conference" | "domestic";

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: number;
  type: PubType;
  category: PubCategory;
  note?: string;
  award?: string;
  accRate?: string;
  links?: { label: string; href: string }[];
}

export const publications: Publication[] = [
  // ---- Journals: Computing ----
  {
    authors: "W. Zhang, X. Li, S. Ando, Z. Xu, K. Yoshioka",
    title: "A 65-nm Compute-in-Read-Only-Memory Macro With Bidirectional Ternary Weight Storage and Sparsity-Aware Local Accumulation for 1.58-bit LLM Inference",
    venue: "IEEE Transactions on Circuits and Systems I: Regular Papers",
    year: 2026, type: "journal", category: "computing",
  },
  {
    authors: "X. Li, W. Zhang, S. Ando, Z. Wang, J. Lin, K. Yoshioka",
    title: "MCRA: Multi-Column Residue Accumulation Analog Compute-in-Memory Architecture with Time-Domain M-Input ΣΔ ADC",
    venue: "IEEE Transactions on Very Large Scale Integration (VLSI) Systems",
    year: 2026, type: "journal", category: "computing",
  },
  {
    authors: "W. Zhang, S. Ando, Y.-C. Chen, K. Yoshioka",
    title: "ASiM: Improving Transparency of SRAM-based Analog Compute-in-Memory Research with an Open-Source Simulation Framework",
    venue: "IEEE Transactions on Very Large Scale Integration (VLSI) Systems",
    year: 2026, type: "journal", category: "computing",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }, { label: "GitHub", href: "https://github.com/" }],
  },
  {
    authors: "S. Ando, Y.-C. Chen, S. Miyagi, W. Zhang, K. Yoshioka",
    title: "A Saliency-Aware Analog Computing In-Memory with SAR-Embedded Detection Achieving 18.5% Power Reduction",
    venue: "Japanese Journal of Applied Physics",
    year: 2024, type: "journal", category: "computing",
  },
  {
    authors: "K. Yoshioka",
    title: "A 818-4094 TOPS/W Capacitor-Reconfigured Analog CIM for Unified Acceleration of CNNs and Transformers",
    venue: "IEEE Journal of Solid-State Circuits",
    year: 2024, type: "journal", category: "computing",
  },
  {
    authors: "Y. Toyama, K. Yoshioka, K. Ban, S. Maya, A. Sai, K. Onizuka",
    title: "An 8 Bit 12.4 TOPS/W Phase-Domain MAC Circuit for Energy-Constrained Deep Learning Accelerators",
    venue: "IEEE Journal of Solid-State Circuits, Vol. 54, Issue 10, pp.2730-2742",
    year: 2019, type: "journal", category: "computing",
  },

  // ---- Journals: Sensing ----
  {
    authors: "O. Sako, K. Koide, R. Nagata, K. Ikeda, R. Yoshida, K. Yoshioka",
    title: "LiDAR Beacon: 300 m-Range Fiducial Marker for Mobile Robot Localization with Dual Temporal Range–Reflectance Modulation",
    venue: "IEEE Sensors Journal",
    year: 2026, type: "journal", category: "sensing",
  },
  {
    authors: "K. Ikeda, Y. Hayakawa, R. Suzuki, S. Nagai, O. Sako, R. Nagata, R. Yoshida, K. Yoshioka",
    title: "Optical LiDAR Communication: Repurposing Existing LiDAR Sensors for Infrastructure-to-Vehicle Communication",
    venue: "IEEE Robotics and Automation Letters (RA-L)",
    year: 2025, type: "journal", category: "sensing",
  },
  {
    authors: "R. Suzuki*, T. Sato*, Y. Hayakawa*, K. Ikeda, O. Sako, R. Nagata, R. Yoshida, Q. Chen, K. Yoshioka",
    title: "From Lab to Road: Realizing and Detecting LiDAR Spoofing Attacks against Autonomous Vehicles at High-Speed and Long-Distance",
    venue: "IEEE Sensors Journal",
    year: 2025, type: "journal", category: "sensing",
    note: "* co-first authors",
  },
  {
    authors: "Y. Hayakawa*, T. Sato*, R. Suzuki*, K. Ikeda, O. Sako, R. Nagata, R. Yoshida, Q. Chen, K. Yoshioka",
    title: "Breaking the Shield: Systematic Security Analysis on Pulse Fingerprinting LiDAR Systems for Autonomous Driving",
    venue: "IEEE Sensors Journal",
    year: 2025, type: "journal", category: "sensing",
    note: "* co-first authors",
  },
  {
    authors: "鈴木諒, 吉岡健太郎, 速川湧気, 中原龍一, 那須義久, 西田圭一郎, 尾崎敏文",
    title: "深層学習と民生用3Dセンサを用いた低コスト高精度肘関節可動域自動計測の試み",
    venue: "中国四国整形外科会誌, Vol.35, No.2, pp.219-224",
    year: 2023, type: "journal", category: "sensing",
  },
  {
    authors: "速川湧気, 吉岡健太郎, 鈴木諒, 中原龍一, 那須義久, 西田圭一郎, 尾崎敏文",
    title: "完全Web化された医工連携の試み：関節可動域自動計測システムの開発",
    venue: "中国四国整形外科会誌, Vol.35, No.2, pp.225-230",
    year: 2023, type: "journal", category: "sensing",
  },
  {
    authors: "W. Bulten et al.",
    title: "Artificial intelligence for diagnosis and Gleason grading of prostate cancer: the PANDA challenge",
    venue: "Nature Medicine, Vol.28, pp.154–163",
    year: 2022, type: "journal", category: "sensing",
    note: "Open Access",
  },
  {
    authors: "S. Kondo, H. Kubota, H. Katagiri, Y. Ota, M. Hirono, T. T. Ta, H. Okuni, S. Ohtsuka, Y. Ojima, T. Sugimoto, H. Ishii, K. Yoshioka, K. Kimura, A. Sai, N. Matsumoto",
    title: "A 240×192 Pixel 10fps 70klux 225m-Range Automotive LiDAR SoC Using a 40ch 0.0036mm² Voltage/Time Dual-Data-Converter-Based AFE",
    venue: "IEEE Journal of Solid-State Circuits",
    year: 2020, type: "journal", category: "sensing",
  },
  {
    authors: "K. Yoshioka et al.",
    title: "A 20-ch TDC/ADC Hybrid Architecture LiDAR SoC for 24096 Pixel 200-m Range Imaging With Smart Accumulation Technique and Residue Quantizing SAR ADC",
    venue: "IEEE Journal of Solid-State Circuits, Vol. 53, Issue 11, pp.3026-3038",
    year: 2018, type: "journal", category: "sensing",
  },

  // ---- Journals: Analog ----
  {
    authors: "K. Yamashita, K. Yoshioka*, C. Ziegler, V. Issakov, H. Ishikuro",
    title: "A 4.2–373 K Functional 800 MS/s 12 b Buffer-then-Amplify Charge-Pump-Based Pipelined TI-SAR ADC with Integrated Active-Hold Technique",
    venue: "IEEE Journal of Solid-State Circuits",
    year: 2025, type: "journal", category: "analog",
    note: "* Corresponding author",
  },
  {
    authors: "X. Li, R. Wang, L. He, K. Yoshioka",
    title: "A High-Speed 8-Bit Single-Channel SAR ADC with Tailored Bit Intervals and Split Capacitors",
    venue: "Electronics",
    year: 2025, type: "journal", category: "analog",
  },
  {
    authors: "X. Li, K. Yoshioka, Z. Wang, J. Lin, C. Zhu",
    title: "A 0.6 V 68.2 dB 0.42 µW SAR-ΣΔ ADC for ASIC Chip in 0.18 µm CMOS",
    venue: "Electronics",
    year: 2025, type: "journal", category: "analog",
  },
  {
    authors: "K. Yamashita, B. Hershberg, K. Yoshioka*, H. Ishikuro",
    title: "A 4.6 K to 400 K Functional Ringamp-Based 250 MS/s 12 b Pipelined ADC with PVT-Robust Unity-Gain-Frequency-Aware Bias Calibration",
    venue: "IEEE Journal of Solid-State Circuits, Vol.59, Issue 3, pp.740-752",
    year: 2024, type: "journal", category: "analog",
    note: "* Corresponding author",
  },
  {
    authors: "K. Yoshioka",
    title: "Time-Based Current Source: A Highly Digital Robust Current Generator for Switched Capacitor Circuits",
    venue: "IEICE Transactions on Electronics",
    year: 2022, type: "journal", category: "analog",
  },
  {
    authors: "K. Yoshioka",
    title: "VCO-based Comparator: A Fully Adaptive Noise Scaling Comparator for High-Precision and Low-Power SAR ADCs",
    venue: "IEEE Transactions on VLSI Systems, Vol.29, Issue 12, pp.2143-2152",
    year: 2021, type: "journal", category: "analog",
    note: "Top-10 popular paper in the journal",
  },
  {
    authors: "K. Yoshioka, T. Sugimoto, N. Waki, S. Kim, D. Kurose, H. Ishii, M. Furuta, A. Sai, H. Ishikuro, T. Itakura",
    title: "Digital Amplifier: A Power-Efficient and Process-Scaling Amplifier for Switched Capacitor Circuits",
    venue: "IEEE Transactions on VLSI Systems, Vol.27, Issue 11, pp.2575-2586",
    year: 2019, type: "journal", category: "analog",
  },
  {
    authors: "S. Kawai, K. Yoshioka et al.",
    title: "An 802.11ax 4×4 Spectrum-Efficient WLAN AP Transceiver SoC Supporting 1024QAM with Frequency-Dependent IQ Calibration and Integrated Interference Analyzer",
    venue: "IEEE Journal of Solid-State Circuits, Vol. 53, Issue 11, pp.442-444",
    year: 2018, type: "journal", category: "analog",
  },
  {
    authors: "K. Yoshioka, R. Saito, T. Danjo, S. Tsukamoto, H. Ishikuro",
    title: "Dynamic Architecture and Frequency Scaling in 0.8–1.2 GS/s 7 b Subranging ADC",
    venue: "IEEE Journal of Solid-State Circuits, Vol. 50, Issue 4, pp.932-945",
    year: 2015, type: "journal", category: "analog",
  },
  {
    authors: "K. Yoshioka, A. Shikata, R. Sekimoto, T. Kuroda, H. Ishikuro",
    title: "An 8 bit 0.3–0.8 V 0.2–40 MS/s 2-bit/step SAR ADC with Successively Activated Threshold Configuring Comparators in 40 nm CMOS",
    venue: "IEEE Transactions on VLSI Systems, Vol. 23, Issue 2, pp.356-368",
    year: 2014, type: "journal", category: "analog",
  },
  {
    authors: "R. Sekimoto, A. Shikata, K. Yoshioka, T. Kuroda, H. Ishikuro",
    title: "A 0.5-V 5.2-fJ/conversion-step Full Asynchronous SAR ADC with Leakage Power Reduction down to 650 pW by Boosted Self-Power Gating in 40-nm CMOS",
    venue: "IEEE Journal of Solid-State Circuits, Vol. 48, Issue 11, pp.2628-2636",
    year: 2013, type: "journal", category: "analog",
  },

  // ---- Journals: Review ----
  {
    authors: "吉岡健太郎",
    title: "大規模言語モデルにおける半導体の課題と解決技術",
    venue: "整形・災害外科 68巻12号",
    year: 2025, type: "journal", category: "review",
  },
  {
    authors: "K. Yoshioka, S. Ando, S. Miyagi, Y.-C. Chen, W. Zhang",
    title: "A Review of SRAM-based Compute-in-Memory Circuits",
    venue: "Japanese Journal of Applied Physics",
    year: 2024, type: "journal", category: "review",
    note: "Most popular paper in the journal",
  },
  {
    authors: "K. Yoshioka",
    title: "Towards Reliable LiDARs for Autonomous Driving: A Review of High-Resolution and Security Features",
    venue: "The Review of Laser Engineering",
    year: 2023, type: "journal", category: "review",
  },
  {
    authors: "K. Yoshioka",
    title: "A Tutorial and Review of Automobile Direct ToF LiDAR SoCs: Evolution of Next-Generation LiDARs",
    venue: "IEICE Transactions on Electronics",
    year: 2022, type: "journal", category: "review",
    note: "Open Access · 2nd most popular paper in the journal",
  },

  // ---- International conferences: Computing ----
  {
    authors: "R. Sugawara, K. Yoshioka",
    title: "The First CMOS-Integrated Stochastic Processing Unit for Scalable Thermodynamic Computing in 65nm with 1000x Power Efficiency Improvement",
    venue: "SSDM", year: 2026, type: "conference", category: "computing",
  },
  {
    authors: "S. Horie, K. Yoshioka",
    title: "Dual-Purpose Spinning Current Circuit for Simultaneous Offset Cancellation and EMI Attack Detection in Hall-Effect Current Sensors",
    venue: "APCCAS", year: 2026, type: "conference", category: "computing",
  },
  {
    authors: "W. Zhang, K. Yoshioka",
    title: "SNNQ: Post-Training Quantization Towards Ultra Low-Bit and Fast Spiking Neural Networks",
    venue: "ISCAS", year: 2026, type: "conference", category: "computing",
  },
  {
    authors: "W. Zhang, Y. Zhong, Z. Ding, X. Li, K. Yoshioka",
    title: "D4C: Data-free Quantization for Contrastive Language-Image Pre-training Models",
    venue: "CVPR (Findings)", year: 2026, type: "conference", category: "computing",
    accRate: "30%",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }],
  },
  {
    authors: "W. Zhang, X. Li, S. Ando, K. Yoshioka",
    title: "BitROM: Weight Reload-Free CiROM Architecture Towards Billion-Parameter 1.58-bit LLM Inference",
    venue: "ASP-DAC", year: 2026, type: "conference", category: "computing",
    award: "Excellent Student Author Award",
  },
  {
    authors: "Y. Yan, S. Li, W. Zhang, X. Si, K. Yoshioka",
    title: "HEMA-CIM: A Dual-Macro Hybrid-Domain CIM Architecture for Energy-Efficient FP MAC Operations in Edge AI",
    venue: "IEEE ICCE-Asia", year: 2025, type: "conference", category: "computing",
    note: "Collaboration with Southeast University",
  },
  {
    authors: "W. Zhang, Y. Zhong, S. Ando, K. Yoshioka",
    title: "AHCPTQ: Accurate and Hardware-Compatible Post-Training Quantization for Segment Anything Model",
    venue: "ICCV", year: 2025, type: "conference", category: "computing",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }, { label: "GitHub", href: "https://github.com/" }],
  },
  {
    authors: "S. Ando, S. Miyagi, W. Zhang, Y.-C. Chen, K. Yoshioka",
    title: "A 4541 TOPS/W Saliency-Aware Analog Computing In-Memory Macro with Charge-Domain Saliency Detector",
    venue: "ESSERC", year: 2025, type: "conference", category: "computing",
  },
  {
    authors: "W. Zhang et al.",
    title: "GSMM: Efficient Global Sparsification for Resource-Conscious Multimodal Models",
    venue: "ICASSP", year: 2025, type: "conference", category: "computing", accRate: "~50%",
  },
  {
    authors: "W. Zhang, E. Dai, K. Yoshioka",
    title: "LiSA: Leveraging Link Recommender to Attack Graph Neural Networks via Subgraph Injection",
    venue: "PAKDD", year: 2025, type: "conference", category: "computing",
    accRate: "25%", award: "Best Paper Award",
  },
  {
    authors: "S. Ando, S. Miyagi, W. Zhang, Y.-C. Chen, K. Yoshioka",
    title: "A Saliency-Aware Analog Computing-In-Memory Macro with SAR-Embedded Saliency Detection Technique",
    venue: "SSDM", year: 2024, type: "conference", category: "computing",
  },
  {
    authors: "W. Zhang, S. Ando, Y.-C. Chen, S. Miyagi, S. Takamaeda-Yamazaki, K. Yoshioka",
    title: "PACiM: A Sparsity-Centric Hybrid Compute-in-Memory Architecture via Probabilistic Approximation",
    venue: "ICCAD", year: 2024, type: "conference", category: "computing", accRate: "24%",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }, { label: "GitHub", href: "https://github.com/" }],
  },
  {
    authors: "Y.-C. Chen, S. Ando, D. Fujiki, S. Takamaeda-Yamazaki, K. Yoshioka",
    title: "HALO-CAT: A Hidden Network Processor with Activation-LOcalized CIM Architecture and Layer-Penetrative Tiling",
    venue: "arXiv preprint", year: 2024, type: "conference", category: "computing",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }],
  },
  {
    authors: "K. Yoshioka",
    title: "A 818-4094 TOPS/W Capacitor-Reconfigured CIM Macro for Unified Acceleration of CNNs and Transformers",
    venue: "ISSCC", year: 2024, type: "conference", category: "computing", accRate: "26%",
  },
  {
    authors: "Y.-C. Chen, S. Ando, D. Fujiki, S. Takamaeda-Yamazaki, K. Yoshioka",
    title: "OSA-HCIM: On-The-Fly Saliency-Aware Hybrid SRAM CIM with Dynamic Precision Configuration",
    venue: "IEEE ASP-DAC", year: 2024, type: "conference", category: "computing", accRate: "29%",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }],
  },
  {
    authors: "K. Yoshioka, E. Lee, S. Wong, M. Horowitz",
    title: "Dataset Culling: Towards Efficient Training of Distillation-Based Domain Specific Models",
    venue: "IEEE ICIP, pp.3237-3241", year: 2019, type: "conference", category: "computing",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }, { label: "GitHub", href: "https://github.com/" }],
  },
  {
    authors: "Y. Toyama, K. Yoshioka, K. Ban, A. Sai, K. Onizuka",
    title: "A 12.4 TOPS/W, 20% Less Gate Count Bidirectional Phase Domain MAC Circuit for DNN Inference Applications",
    venue: "IEEE A-SSCC", year: 2018, type: "conference", category: "computing",
  },
  {
    authors: "K. Yoshioka, Y. Toyama, K. Ban, D. Yashima, S. Maya, A. Sai, K. Onizuka",
    title: "PhaseMAC: A 14 TOPS/W 8bit GRO-based Phase Domain MAC Circuit for In-Sensor-Computed Deep Learning Accelerators",
    venue: "IEEE Symposium on VLSI Circuits, pp.263-264", year: 2018, type: "conference", category: "computing", accRate: "29%",
  },

  // ---- International conferences: Sensing ----
  {
    authors: "T. Ishizue, N. Costagliola, S. Varma, O. Sako, K. Yoshioka, T. Sugawara, S. Rampazzi",
    title: "Demo: Controlling Depth Estimation in Stereo Cameras with Projected Patterns",
    venue: "VehicleSec", year: 2026, type: "conference", category: "sensing",
    award: "Best Demo Award",
  },
  {
    authors: "R. Yoshida, T. Sato, W. Zhang, Y. Hayakawa, S. Nagai, K. Yoshioka",
    title: "Demo: Real-World Reconstruction of LiDAR Perception under Jamming Attacks",
    venue: "VehicleSec", year: 2026, type: "conference", category: "sensing",
  },
  {
    authors: "H. Bhupathiraju, T. Ishizue, N. Costagliola, O. Sako, K. Yoshioka, T. Sugawara, S. Rampazzi",
    title: "Illusion of Depth: Revealing Hidden Stereo Vision Vulnerabilities in Depth Estimation",
    venue: "ACM CCS", year: 2026, type: "conference", category: "sensing",
  },
  {
    authors: "K. Ikeda*, R. Hara*, R. Nagata, O. Sako, Z. Ding, T. Kado, I. Fujioka, T. Beppu, M. Isogawa, K. Yoshioka",
    title: "Ghost-FWL: A Large-Scale Full-Waveform LiDAR Dataset for Ghost Detection and Removal",
    venue: "CVPR (Main)", year: 2026, type: "conference", category: "sensing", accRate: "25%",
    note: "* co-first authors · Collaboration with Isogawa Group and Sony",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }],
  },
  {
    authors: "R. Nagata, K. Koide, K. Ikeda, O. Sako, K. Yoshioka",
    title: "D-SLAMSpoof: An Environment-Agnostic LiDAR Spoofing Attack using Dynamic Point Cloud Injection",
    venue: "IROS", year: 2026, type: "conference", category: "sensing",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }],
  },
  {
    authors: "R. Nagata, K. Koide, K. Ikeda, O. Sako, S. Horie, K. Yoshioka",
    title: "MirrorDrift: Actuated Mirror-Based Attacks on LiDAR SLAM",
    venue: "IROS", year: 2026, type: "conference", category: "sensing",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }],
  },
  {
    authors: "R. Hayashi, K. Torimi, R. Nagata, K. Ikeda, O. Sako, T. Nakamura, M. Tani, Y. Aoki, K. Yoshioka",
    title: "BasketLiDAR: The First LiDAR-Camera Multimodal Dataset for Professional Basketball MOT",
    venue: "MMSports", year: 2025, type: "conference", category: "sensing",
  },
  {
    authors: "R. Yoshida, T. Sato, Y. Hayakawa, R. Suzuki, K. Ikeda, O. Sako, R. Nagata, K. Yoshioka",
    title: "Poster: Discovering Sensor-Fusion Vulnerabilities in Autonomous Driving Systems against LiDAR Attacks",
    venue: "NDSS Poster Session", year: 2025, type: "conference", category: "sensing", accRate: "48%",
  },
  {
    authors: "R. Nagata, K. Koide, Y. Hayakawa, R. Suzuki, K. Ikeda, O. Sako, Q. Chen, T. Sato, K. Yoshioka",
    title: "SLAMSpoof: Practical LiDAR Spoofing Attacks on Localization Systems Guided by Scan Matching Vulnerability Analysis",
    venue: "IEEE ICRA", year: 2025, type: "conference", category: "sensing", accRate: "38%",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }, { label: "GitHub", href: "https://github.com/" }],
  },
  {
    authors: "T. Sato*, R. Suzuki*, Y. Hayakawa*, K. Ikeda, O. Sako, R. Nagata, R. Yoshida, Q. Chen, K. Yoshioka",
    title: "On the Realism of LiDAR Spoofing Attacks against Autonomous Driving Vehicle at High Speed and Long Distance",
    venue: "NDSS", year: 2025, type: "conference", category: "sensing", accRate: "15%",
    note: "* co-first authors",
    links: [{ label: "Paper", href: "https://www.ndss-symposium.org/" }],
  },
  {
    authors: "O. Sako, T. Sato, Y. Hayakawa, R. Suzuki, K. Ikeda, R. Nagata, Q. Chen, K. Yoshioka",
    title: "Poster: Intensity-Aware Chosen Pattern Injection LiDAR Spoofing Attack",
    venue: "NDSS Poster Session", year: 2024, type: "conference", category: "sensing",
  },
  {
    authors: "R. Suzuki, T. Sato, Y. Hayakawa, K. Ikeda, O. Sako, R. Nagata, Q. Chen, K. Yoshioka",
    title: "WIP: Towards Practical LiDAR Spoofing Attack against Vehicles Driving at Cruising Speeds",
    venue: "VehicleSec", year: 2024, type: "conference", category: "sensing", accRate: "44%",
  },
  {
    authors: "Y. Hayakawa, T. Sato, R. Suzuki, K. Ikeda, O. Sako, R. Nagata, Q. Chen, K. Yoshioka",
    title: "WIP: An Adaptive High Frequency Removal Attack to Bypass Pulse Fingerprinting in New-Gen LiDARs",
    venue: "VehicleSec", year: 2024, type: "conference", category: "sensing", accRate: "44%",
  },
  {
    authors: "T. Sato*, Y. Hayakawa*, R. Suzuki*, Y. Shiiki*, K. Yoshioka, Q. Chen",
    title: "LiDAR Spoofing Meets the New-Gen: Capability Improvements, Broken Assumptions, and New Attack Strategies",
    venue: "NDSS", year: 2024, type: "conference", category: "sensing", accRate: "15%",
    note: "* co-first authors",
    links: [{ label: "Paper", href: "https://www.ndss-symposium.org/" }],
  },
  {
    authors: "T. Sato*, Y. Hayakawa*, R. Suzuki*, Y. Shiiki*, K. Yoshioka, Q. Chen",
    title: "WIP: Practical Removal Attacks on LiDAR-based Object Detection in Autonomous Driving",
    venue: "VehicleSec", year: 2023, type: "conference", category: "sensing",
    note: "* co-first authors", award: "ETAS Best Short/WIP Paper Award Runner-up",
  },
  {
    authors: "T. Sato*, Y. Hayakawa*, R. Suzuki*, Y. Shiiki*, K. Yoshioka, Q. Chen",
    title: "Towards Large-Scale Measurement Study on LiDAR Spoofing Attacks against Object Detection",
    venue: "ACM CCS, Poster Session", year: 2022, type: "conference", category: "sensing",
    note: "* co-first authors",
  },
  {
    authors: "K. Yoshioka, H. Okuni, T. T. Ta, A. Sai",
    title: "Through the Looking Glass: Diminishing Occlusions in Robot Vision Systems with Mirror Reflections",
    venue: "IEEE IROS", year: 2021, type: "conference", category: "sensing",
    links: [{ label: "arXiv", href: "https://arxiv.org/" }],
  },
  {
    authors: "T. T. Ta, H. Kubota, K. Kokubun, T. Sugimoto, M. Hirono, M. Sengoku, H. Katagiri, H. Okuni, S. Kondo, S. Ohtsuka, H. Kwon, K. Sasaki, Y. Ota, K. Suzuki, K. Kimura, K. Yoshioka, A. Sai, N. Matsumoto",
    title: "A 2D-SPAD Array and Read-Out AFE for Next-Generation Solid-State LiDAR",
    venue: "IEEE Symposium on VLSI Circuits", year: 2020, type: "conference", category: "sensing",
  },
  {
    authors: "S. Kondo, H. Kubota, H. Katagiri, Y. Ota, M. Hirono, T. T. Ta, H. Okuni, S. Ohtsuka, Y. Ojima, T. Sugimoto, H. Ishii, K. Yoshioka, K. Kimura, A. Sai, N. Matsumoto",
    title: "A 240×192 Pixel 10fps 70klux 225m-Range Automotive LiDAR SoC Using a 40ch 0.0036mm² Voltage/Time Dual-Data-Converter-Based AFE",
    venue: "ISSCC, pp.94-96", year: 2020, type: "conference", category: "sensing", accRate: "32%",
  },
  {
    authors: "K. Yoshioka et al.",
    title: "A 20ch TDC/ADC Hybrid SoC for 240×96-pixel 10%-reflection <0.125%-precision 200m-range Imaging LiDAR with Smart Accumulation Technique",
    venue: "ISSCC, pp.3026-3038", year: 2018, type: "conference", category: "sensing", accRate: "33%",
  },

  // ---- International conferences: Analog ----
  {
    authors: "K. Yamashita, K. Yoshioka, C. Ziegler, V. Issakov, H. Ishikuro",
    title: "A 4.6-373K Functional 800MS/s 12b Buffer-then-Amplify Charge-Pump-Based Pipelined TI-SAR ADC with Integrated-Active-Hold Technique",
    venue: "IEEE CICC", year: 2025, type: "conference", category: "analog",
  },
  {
    authors: "K. Yamashita, B. Hershberg, K. Yoshioka, H. Ishikuro",
    title: "A 4.6K to 400K Functional PVT-Robust Ringamp-Based 250MS/s 12b Pipelined ADC with Pole-Aware Bias Calibration",
    venue: "IEEE CICC", year: 2023, type: "conference", category: "analog",
    award: "Michael A. Zachariah Outstanding Student Paper Award",
  },
  {
    authors: "S. Kawai, K. Yoshioka et al.",
    title: "An 802.11ax 4×4 Spectrum-Efficient WLAN AP Transceiver SoC Supporting 1024QAM with Frequency-Dependent IQ Calibration and Integrated Interference Analyzer",
    venue: "ISSCC, pp.442-444", year: 2018, type: "conference", category: "analog", accRate: "33%",
  },
  {
    authors: "K. Yoshioka, T. Sugimoto, N. Waki, S. Kim, D. Kurose, H. Ishii, M. Furuta, A. Sai, T. Itakura",
    title: "A 0.7 V 12b 160MS/s 12.8 fJ/conv-step Pipelined-SAR ADC in 28nm CMOS with Digital Amplifier Technique",
    venue: "ISSCC, pp.478-479", year: 2017, type: "conference", category: "analog", accRate: "32%",
  },
  {
    authors: "K. Yoshioka, R. Saito, T. Danjo, S. Tsukamoto, H. Ishikuro",
    title: "7-bit 0.8–1.2 GS/s Dynamic Architecture and Frequency Scaling Subrange ADC with Binary-Search/Flash Live Configuring Technique",
    venue: "IEEE Symposium on VLSI Circuits, pp.932-945", year: 2014, type: "conference", category: "analog", accRate: "22%",
  },
  {
    authors: "K. Yoshioka, H. Ishikuro",
    title: "A 13b SAR ADC with Eye-Opening VCO-based Comparator",
    venue: "ESSCIRC, pp.411-414", year: 2014, type: "conference", category: "analog",
  },
  {
    authors: "K. Yoshioka, A. Shikata, R. Sekimoto, T. Kuroda, H. Ishikuro",
    title: "A 0.0058mm² 7.0 ENOB 24MS/s 17fJ/conv. Threshold Configuring SAR ADC with Source Voltage Shifting and Interpolation Technique",
    venue: "IEEE Symposium on VLSI Circuits, pp.266-267", year: 2013, type: "conference", category: "analog", accRate: "27%",
  },
  {
    authors: "K. Yoshioka, A. Shikata, R. Sekimoto, T. Kuroda, H. Ishikuro",
    title: "A 0.35-0.8 V 8b 0.5-35MS/s 2bit/step Extremely-Low Power SAR ADC",
    venue: "ASP-DAC", year: 2013, type: "conference", category: "analog",
    award: "Special Feature Award",
  },
  {
    authors: "R. Sekimoto, A. Shikata, K. Yoshioka, T. Kuroda, H. Ishikuro",
    title: "A 40nm CMOS Full Asynchronous Nano-Watt SAR ADC with 98% Leakage Power Reduction by Boosted Self Power Gating",
    venue: "IEEE A-SSCC", year: 2012, type: "conference", category: "analog",
    award: "Best Design Award",
  },
  {
    authors: "K. Yoshioka, A. Shikata, R. Sekimoto, T. Kuroda, H. Ishikuro",
    title: "An 8bit 0.35–0.8 V 0.5–30MS/s 2bit/step SAR ADC with Wide Range Threshold Configuring Comparator",
    venue: "ESSCIRC", year: 2012, type: "conference", category: "analog",
  },
];

export interface Award {
  date: string;
  title: string;
  paper?: string;
  venue: string;
}

export const awards: Award[] = [
  { date: "2026/3", title: "Excellent Student Author Award", paper: "BitROM: Weight-Reload-Free CiROM Architecture Towards Billion-Parameter 1.58-bit LLM Inference", venue: "IEICE VLD / ASP-DAC" },
  { date: "2025/10", title: "Best Poster Award", paper: "A High-Speed 8-Bit Single-Channel SAR ADC with Tailored Bit Intervals and Split Capacitors", venue: "IEEE ICCE-Asia 2025" },
  { date: "2025/8", title: "Excellent Reviewer Award", venue: "Symposium on Vehicle Security and Privacy 2025" },
  { date: "2025/6", title: "Best Paper Award", paper: "LiSA: Leveraging Link Recommender to Attack Graph Neural Networks via Subgraph Injection", venue: "PAKDD 2025" },
  { date: "2025/3", title: "Telecom System Technology Award", paper: "A 818-4094 TOPS/W Capacitor-Reconfigured CIM Macro for Unified Acceleration of CNNs and Transformers", venue: "Telecommunications Advancement Foundation" },
  { date: "2023/5", title: "Michael A. Zachariah Outstanding Student Paper Award", paper: "A 4.6K to 400K Functional PVT-Robust Ringamp-Based 250MS/s 12b Pipelined ADC", venue: "IEEE CICC" },
  { date: "2023/2", title: "ETAS Best Short/WIP Paper Award Runner-up", paper: "WIP: Practical Removal Attacks on LiDAR-based Object Detection in Autonomous Driving", venue: "VehicleSec" },
  { date: "2020/7", title: "1st Place (out of 1010 teams)", paper: "Prostate cANcer graDe Assessment (PANDA) Challenge", venue: "Kaggle" },
  { date: "2013/10", title: "Best Design Award", paper: "A 40nm CMOS Full Asynchronous Nano-Watt SAR ADC", venue: "IEEE A-SSCC" },
  { date: "2013/1", title: "Special Feature Award", paper: "A 0.35-0.8V 8b 0.5-35MS/s 2bit/step Extremely-Low Power SAR ADC", venue: "IEEE ASP-DAC" },
];

export interface Grant {
  title: string;
  period: string;
  program: string;
  role: string;
}

export const grants: Grant[] = [
  { title: "アナデジ混載型エッジAI SoC設計技術の研究開発", period: "2025.12–2030.2", program: "JST 次世代エッジAI半導体研究開発事業", role: "グループリーダー" },
  { title: "先端CMOSプロセスVLSI回路設計省力化フレームワークの構築", period: "2025.12–2030.3", program: "JST ASPIRE Top", role: "主たる共同研究者" },
  { title: "ハードウェア・ソフトウェア協調設計によるセキュアLiDARの創出", period: "2024.04–2028.03", program: "科研費 基盤研究B", role: "代表 (PI)" },
  { title: "AI駆動型サイバーフィジカルシステムのセキュリティ評価・対策基盤", period: "2023.10–2029.03", program: "JST CREST", role: "主たる共同研究者" },
  { title: "ゆらぎの熱力学に基づく確率的コンピューティング基盤の創出", period: "2023.04–2027.03", program: "科研費 基盤研究A", role: "分担" },
  { title: "サイバーとフィジカルを横断したセンサセキュリティ研究", period: "2022.09–2026.03", program: "JST さきがけ ICT基盤強化領域", role: "代表 (PI)" },
  { title: "D3-AI: 多様性と環境変化に寄り添う分散機械学習基盤の創出", period: "2021.09–2027.03", program: "JST CREST", role: "主たる共同研究者" },
  { title: "LiDAR based Sensing System Focused on Privacy Preserving and Occlusions", period: "2021.08–2023.03", program: "科研費 研究スタート支援", role: "代表 (PI)" },
];

export const sponsors = [
  "株式会社アイシン (Aisin Corp.)",
  "ソニーセミコンダクタソリューションズ株式会社 (Sony Semiconductor Solutions)",
  "TSMC",
];

export const mediaCoverage = [
  { outlet: "自動運転ラボ", title: "慶応の学生ら、走行中の自動運転センサーを無効化　「脆弱性」を発見", date: "2025/03" },
  { outlet: "GIZMODO", title: "自動運転車のセンサー、遠距離からの攻撃で無効化できちゃうかも", date: "2025/02" },
  { outlet: "日経クロステック", title: "AI推論の新半導体が続々、電力効率改善へ注目3選", date: "2024/03" },
  { outlet: "Tech Xplore", title: "Autonomous vehicle technology vulnerable to road object spoofing and vanishing attacks", date: "2024/03" },
  { outlet: "PC Watch", title: "ISSCC 2024の発表論文数から見る、日の丸半導体復活への兆し", date: "2024/02" },
  { outlet: "日経クロステック", title: "自動運転用LiDARに脆弱性、慶応大らがHFR攻撃で物体消失を確認", date: "2024/02" },
  { outlet: "EE Times", title: "アナログCIM回路でCNNとTransformerの処理を実現", date: "2024/02" },
  { outlet: "IEEE Spectrum", title: "Toshiba's Light Sensor Paves the Way for Cheap Lidar", date: "" },
  { outlet: "Google AI Blog", title: "An International Scientific Challenge for the Diagnosis and Gleason Grading of Prostate Cancer", date: "" },
];

export const patentsUrl = "https://patents.google.com/?inventor=kentaro+yoshioka&assignee=Toshiba+Corp&num=25";
