export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  venue?: string;
  year?: string;
  tag: "security" | "sensing" | "computing";
  summary: { ja: string; en: string };
  sections?: { heading: string; body: string }[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "ghost-fwl",
    title: "Ghost-FWL",
    subtitle: "A Large-Scale Full-Waveform LiDAR Dataset for Ghost Detection and Removal",
    venue: "CVPR 2026 (Main)",
    year: "2026",
    tag: "sensing",
    summary: {
      ja: "フルウェーブフォームLiDARにおけるゴースト（虚像）点の検出・除去のための大規模データセット。五十川研究室およびソニーとの共同研究で、CVPR 2026本会議に採択されました（採択率25%）。",
      en: "A large-scale full-waveform LiDAR dataset for detecting and removing ghost points. A collaboration with the Isogawa Group and Sony, accepted to the CVPR 2026 main conference (25% acceptance rate).",
    },
    links: [
      { label: "arXiv", href: "https://arxiv.org/" },
      { label: "Project Site", href: "https://sites.google.com/keio.jp/keio-csg/projects/ghost-fwl" },
    ],
  },
  {
    slug: "optical-lidar-communication",
    title: "Optical LiDAR Communication (OLC)",
    subtitle: "Repurposing Existing LiDAR Sensors for Infrastructure-to-Vehicle Communication",
    venue: "IEEE RA-L",
    year: "2025",
    tag: "sensing",
    summary: {
      ja: "既存のLiDARセンサを通信デバイスとして再利用する新しい光通信システム。LiDAR Injectionと2Dコード技術を組み合わせることで、ロボット側に追加ハードウェアを必要とせず低コストなV2I通信を実現します。実環境実験では30m先でも76%以上の通信成功率を確認しました。",
      en: "A novel optical communication system that repurposes existing LiDAR sensors as communication devices. By combining LiDAR injection with 2D code technology, OLC achieves cost-effective V2I communication without additional hardware on the robot. Real-world experiments confirmed over 76% success rate at distances up to 30 meters.",
    },
    sections: [
      {
        heading: "System Overview",
        body: "OLC comprises three steps. Transmitter processing encodes information into a 2D code (rectangular micro QR code or Data Matrix), converted to a binary image that determines the laser irradiation pattern. LiDAR injection emits synchronized laser pulses toward the target LiDAR following that pattern, with an infrared camera tracking the LiDAR's position while motors maintain targeting precision. Receiver processing lets the target LiDAR treat injected signals as point cloud data, reconstruct the 2D code, and decode the information.",
      },
      {
        heading: "Case Studies",
        body: "Two V2I systems were built as proof of concept: a traffic light detection system and a blind spot detection system, both demonstrating real-time communication performance for next-generation robotics infrastructure.",
      },
      {
        heading: "Robustness in Multi-LiDAR Environments",
        body: "With an interfering LiDAR placed 3 meters behind the target, OLC achieved a 100% success rate across 1000 consecutive frames with no synchronization errors. A trigger burst transmission mechanism ignores further signals during transmission, preventing mis-triggering from other LiDARs or light sources.",
      },
      {
        heading: "Interference on Perception Tasks",
        body: "OLC injection near a blind curve was evaluated against Fast-LIO2 SLAM. The resulting APE of 0.295 meters falls below the commonly accepted 0.5 m threshold, so the impact on perception is considered negligible.",
      },
      {
        heading: "Performance with a Moving LiDAR",
        body: "Indoor tests moving from 4 to 3 meters showed a 100% success rate at 1.16 km/h or below, and over 87.5% at the maximum tested speed of 2.4 km/h — reliable at speeds typical of service robots.",
      },
    ],
    links: [{ label: "Project", href: "https://sites.google.com/keio.jp/keio-csg/projects/optical-lidar-communication" }],
  },
  {
    slug: "basket-lidar",
    title: "BasketLiDAR",
    subtitle: "The First LiDAR-Camera Multimodal Dataset for Professional Basketball MOT",
    venue: "MMSports 2025",
    year: "2025",
    tag: "sensing",
    summary: {
      ja: "プロバスケットボール環境において、LiDAR点群と同期したマルチビューカメラ映像を組み合わせた、スポーツMOT分野初のマルチモーダルデータセット。4,445フレーム・3,105選手IDを含み、3台のLiDARと3台のカメラ間でIDが完全に同期されています。青木研究室およびアイシンとの共同研究です。",
      en: "The first multimodal dataset in the sports MOT field combining LiDAR point clouds with synchronized multi-view camera footage in a professional basketball environment. It contains 4,445 frames and 3,105 player IDs, fully synchronized across three LiDAR sensors and three multi-view cameras. A collaboration with the Aoki Lab and Aisin.",
    },
    sections: [
      {
        heading: "Why Basketball",
        body: "Basketball represents one of the hardest scenarios in multi-object tracking: ten players move rapidly and unpredictably within a confined court, with frequent occlusions from intense physical contact. Traditional multi-camera systems are constrained by the two-dimensional nature of video and the cost of 3D reconstruction, making real-time analysis difficult.",
      },
      {
        heading: "Proposed Framework",
        body: "Built on the dataset, we developed an MOT algorithm leveraging LiDAR's high-precision 3D spatial information. It consists of a real-time tracking pipeline using LiDAR alone and a multimodal pipeline fusing LiDAR and camera data. Experiments show real-time operation — difficult with camera-only methods — with superior tracking performance even under occlusion.",
      },
      {
        heading: "Dataset Availability",
        body: "The dataset is not publicly available due to institutional policies, but can be shared upon reasonable request for academic research purposes.",
      },
    ],
    links: [{ label: "Paper (arXiv)", href: "https://arxiv.org/" }],
  },
  {
    slug: "lidar-spoofing-on-driving-vehicles",
    title: "LiDAR Spoofing on Driving Vehicles",
    subtitle: "From Lab to Road: Realizing and Detecting LiDAR Spoofing Attacks at High Speed and Long Distance",
    venue: "NDSS 2025 / IEEE Sensors Journal",
    year: "2025",
    tag: "security",
    summary: {
      ja: "実際に走行する自動運転車のLiDARに対して、長距離・高速域でセンサ幻惑攻撃が成立することを世界で初めて実証した研究。UC Irvineとの共同研究で、NDSS 2025（採択率15%）に採択され、国内外のメディアでも広く報道されました。",
      en: "The first demonstration that LiDAR spoofing attacks are realizable against actual driving autonomous vehicles at high speed and long distance. A collaboration with UC Irvine, accepted to NDSS 2025 (15% acceptance rate) and widely covered by media in Japan and abroad.",
    },
    links: [
      { label: "NDSS Paper", href: "https://www.ndss-symposium.org/" },
      { label: "Press", href: "https://www.keio.ac.jp/" },
    ],
  },
  {
    slug: "new-gen-lidar-security",
    title: "New-Gen LiDAR Security",
    subtitle: "LiDAR Spoofing Meets the New-Gen: Capability Improvements, Broken Assumptions, and New Attack Strategies",
    venue: "NDSS 2024",
    year: "2024",
    tag: "security",
    summary: {
      ja: "パルスフィンガープリンティングなどの防御機構を備えた次世代LiDARに対しても、適応的な高周波パルス照射によって物体消失攻撃が可能であることを体系的に示した研究。自動運転用LiDARに対する世界初の網羅的セキュリティ調査として、プレスリリースも実施しました。",
      en: "A systematic study showing that even new-generation LiDARs equipped with defenses such as pulse fingerprinting remain vulnerable to object-removal attacks via adaptive high-frequency pulse injection. Released as the world's first comprehensive security investigation of automotive LiDAR sensors.",
    },
    links: [{ label: "NDSS Paper", href: "https://www.ndss-symposium.org/" }],
  },
];
