import { useLanguage } from '../context/LanguageContext';

export const useTranslations = () => {
  const { translations } = useLanguage();

  const t = (key: string) => {
    if (!translations) return '';
    return translations[key] || key;
  };

  return { t };
};
