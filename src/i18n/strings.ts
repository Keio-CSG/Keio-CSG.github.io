export type Locale = "ja" | "en";
export const locales: Locale[] = ["ja", "en"];
export const defaultLocale: Locale = "ja";

export const strings = {
  ja: {
    nav: {
      home: "Home",
      research: "Research",
      papers: "Papers",
      members: "Members",
      projects: "Projects",
      recruit: "Recruit",
    },
    footer: {
      address: "住所",
      contact: "連絡先",
      rights: "Computing and Sensing Group, Keio University",
    },
    common: {
      readMore: "詳しく見る",
      contactUs: "詳細を問い合わせる",
      viewAll: "すべて見る",
      backToProjects: "プロジェクト一覧に戻る",
      langSwitch: "English",
    },
  },
  en: {
    nav: {
      home: "Home",
      research: "Research",
      papers: "Papers",
      members: "Members",
      projects: "Projects",
      recruit: "Recruit",
    },
    footer: {
      address: "Address",
      contact: "Contact",
      rights: "Computing and Sensing Group, Keio University",
    },
    common: {
      readMore: "Read more",
      contactUs: "Get in touch",
      viewAll: "View all",
      backToProjects: "Back to projects",
      langSwitch: "日本語",
    },
  },
} as const;

export function t(locale: Locale) {
  return strings[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ja" ? "en" : "ja";
}
