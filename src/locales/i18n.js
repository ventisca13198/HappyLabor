import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import en from "./en.json";
import th from "./th.json";
import la from "./la.json";
import mm from "./mm.json";
import kh from "./kh.json";

i18n
  .use(XHR)
  //   .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    resources: {
      en: {
        translations: en,
      },
      th: {
        translations: th,
      },
      la: {
        translations: la,
      },
      mm: {
        translations: mm,
      },
      kh: {
        translations: kh,
      },
      //   fre: {
      //     translations: translationFre
      //   },
      //   hin: {
      //     translations: translationHin
      //   },
      //   jap: {
      //     translations: translationJap
      //   }
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
