import i18n from '@/i18n';
import { TLang } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const languages: { [key in TLang]: string } = {
  tr: '/tr.svg',
  en: '/en.svg',
  ru: '/ru.svg',
};

const Languages = () => {
  // State
  const [lang, setLang] = useState<TLang>('en');
  const [openLangs, setOpenLangs] = useState(false);

  const onCLick = (event: MouseEvent) => {
    const id = (event.target as HTMLElement).getAttribute('id');

    if (id !== 'langBtn' && id !== 'langImg') {
      handleCloseLangs();
    }
  };

  // Effects
  useEffect(() => {
    window.addEventListener('click', onCLick);

    return () => window.removeEventListener('click', onCLick);
  }, []);

  // Handlers
  const handleChangeLang = (lang: TLang) => async () => {
    setLang(lang);
    handleCloseLangs();
    i18n.changeLanguage(lang);
  };

  const handleOpenLangs = () => {
    setOpenLangs(true);
  };

  const handleCloseLangs = () => {
    setOpenLangs(false);
  };

  return (
    <div className="relative flex justify-center items-center">
      <button
        id="langBtn"
        onClick={handleOpenLangs}
        className="relative active:scale-95 p-[4px] rounded-full hover:bg-primary-light transition-colors z-20"
      >
        <img id="langImg" src={languages[lang]} alt="flag" className="w-[28px] h-[28px]" />
      </button>
      <motion.div
        className="absolute top-10 rigth-0 z-10 flex flex-col bg-background-light rounded-md"
        initial={{ y: -10, opacity: 0, display: 'none' }}
        animate={{ y: openLangs ? 0 : -10, opacity: openLangs ? 1 : 0, display: openLangs ? 'block' : 'none' }}
      >
        {Object.entries(languages).map(([key, value], index) => (
          <button
            key={index}
            onClick={handleChangeLang(key as TLang)}
            className="relative flex w-[max-content] p-2 rounded-md transition-colors hover:bg-primary-light active:scale-95"
          >
            <img id="langImg" src={value} alt="flag" className="w-[28px] h-[28px]" />
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default Languages;
