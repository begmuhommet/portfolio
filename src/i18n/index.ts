import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '@/assets/locales/en.json';
import ru from '@/assets/locales/ru.json';
import tr from '@/assets/locales/tr.json';

const resources = { en: { translation: en }, ru: { translation: ru }, tr: { translation: tr } };

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
