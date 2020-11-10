import i18n from "i18next";
import en from "./locales/en";

i18n.init({
  resources: { en },
  fallbackLng: "en",
  debug: false,

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: ".",

  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
