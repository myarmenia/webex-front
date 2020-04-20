import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

function setDefaultLng() {
  localStorage.setItem('language','hy')
  return 'hy'
}
const currentLng = localStorage.getItem('language') || setDefaultLng()

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: currentLng,
    fallbackLng: 'hy',
    whitelist: ["hy", "en", "ru"],
    interpolation: {
      escapeValue: false,
    },
    react:{
      useSuspense: true,
    },

    // saveMissing: true,
    // saveMissingTo: 'all',

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      // addPath: '/locales/add/{{lng}}/{{ns}}',
    },
  });

export default i18n;
