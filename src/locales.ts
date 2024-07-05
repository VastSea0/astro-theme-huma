// locale settings for this theme
// https://astro-i18n-starter.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = "tr";

export const LOCALES_SETTING: LocaleSetting = {
  "en": {
    "label": "English"
  },
  "tr": {
    "label": "Türkçe"
  },
  "ja": {
    "label": "日本語"
  },
 
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: 'rtl' | 'ltr';
  };
} // refer: https://starlight.astro.build/reference/configuration/#locales
