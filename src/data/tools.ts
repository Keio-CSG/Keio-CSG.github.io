/**
 * Tools and teaching material the lab builds and runs alongside its papers.
 * Listed at the foot of the projects page; the textbook is also linked from
 * the recruit FAQ, since it is how an incoming student can get a head start.
 */
export interface LabTool {
  name: { ja: string; en: string };
  kind: { ja: string; en: string };
  desc: { ja: string; en: string };
  href: string;
  icon: string;
}

export const zundamonAnalog: LabTool = {
  name: { ja: "ずんだもんと学ぶアナログ回路", en: "Analog Circuits with Zundamon" },
  kind: { ja: "教材", en: "Teaching" },
  desc: {
    ja: "回路理論は学んだけれどトランジスタ回路は初めて、という学部生向けのWeb教科書。四国めたんとずんだもんの対話で、MOSFETの基礎から増幅回路、周波数特性まで順に学べます。",
    en: "A web textbook (in Japanese) for undergraduates who know circuit theory but are new to transistors. A dialogue between Shikoku Metan and Zundamon walks from MOSFET basics through amplifiers to frequency response.",
  },
  href: "https://keio-csg.github.io/zundamon-analog/",
  icon: "book",
};

export const topsscs: LabTool = {
  name: { ja: "TopSSCS", en: "TopSSCS" },
  kind: { ja: "研究", en: "Research" },
  desc: {
    ja: "ISSCC・VLSI・JSSC・CICC・A-SSCC・ESSERC での論文発表をもとに、国内の大学・企業をランキング。日本の集積回路研究の現在地を可視化します。",
    en: "Ranks Japanese universities and companies by their papers at ISSCC, VLSI, JSSC, CICC, A-SSCC and ESSERC — a picture of where integrated-circuit research in Japan stands.",
  },
  href: "https://kentaroy47.github.io/topsscs/orgs/index.html",
  icon: "chip",
};

export const labTools: LabTool[] = [zundamonAnalog, topsscs];
