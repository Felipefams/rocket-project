import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEN from './locales/en/translations.json';
import translationsPT from './locales/pt/translations.json';
import translationsZH from './locales/zh/translations.json';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: {
            translations: translationsEN
        },
        pt: {
            translations: translationsPT
        },
        zh: {
            translations: translationsZH
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en', 'pt', 'zh'];

export default i18n;
