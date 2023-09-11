import i18n from '@/i18n';
import { motion } from 'framer-motion';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Languages from '../Languages';
import Logo from '../Logo';

const resumes: { [key: string]: string } = {
  en: '/Begmuhommet-Jumayev.pdf',
  ru: 'Жумаев-Бегмухоммет.pdf',
  tr: '/Begmuhommet-Jumayev-TR.pdf',
};

const Header = () => {
  // Renders
  return (
    <header className="bg-background-main py-3 shadow-sm fixed top-0 left-0 w-full z-40 flex justify-center text-white">
      <div className="container px-3">
        <div className="flex items-center justify-between">
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}>
            <Logo />
          </motion.div>

          <div className="flex items-center justify-end relative gap-4">
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}>
              <a
                href={resumes[i18n.language]}
                target="_blank"
                className="px-3 py-1 border border-secondary-main rounded-md text-secondary-main hover:bg-secondary-light transition-colors active:scale-95 flex items-center justify-center"
              >
                <IoDocumentTextOutline className="mr-2" size={20} />
                <span>{i18n.t('resume')}</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
            >
              <Languages />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
