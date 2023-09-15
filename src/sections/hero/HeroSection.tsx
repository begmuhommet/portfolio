import i18n from '@/i18n';
import { motion } from 'framer-motion';
import OfferProjectModal from './OfferProjectModal';
import ReactComponentAnimation from '@/sections/hero/ReactComponentAnimation';

const HeroSection = () => {
  return (
    <section id="hero" className="py-48 flex items-center justify-center">
      <div className="container px-3 mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-start">
          <div className="text-left flex-1 mb-10 lg:mb-20">
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
              className="text-sm md:text-md text-secondary-main mb-2"
            >
              {i18n.t('hi')}
            </motion.p>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
              className="text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-bold mb-2 md:mb-4"
            >
              {i18n.t('name')}
            </motion.h1>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
              className="text-3xl sm:text-4xl lg:text-5xl text-slate-400 font-bold mb-3 md:mb-6"
            >
              {i18n.t('subtitle')}
            </motion.h1>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
              className="text-md md:text-lg text-gray-400 max-w-sm md:max-w-lg mb-10"
            >
              {i18n.t('description')}
            </motion.p>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }}
            >
              <OfferProjectModal />
            </motion.div>
          </div>

          <div className="flex-1 ml-0 sm:ml-10 self-start lg:self-auto hidden lg:flex">
            <ReactComponentAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
