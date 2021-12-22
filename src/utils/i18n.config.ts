import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, fr, es, jp } from "../translation/translation";
//empty for now
const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  fr: {
    translation: fr,
  },
  jp: {
    translation: jp,
  },
};

i18next.use(initReactI18next).init({
  lng:'es',
  resources,
  compatibilityJSON: 'v3',
  //language to use if translations in user language are not available
  fallbackLng: "es",
  react:{
    useSuspense:false
  },
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18next;
