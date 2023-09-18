import SectionTitle from '@/components/SectionTitle';
import i18n from '@/i18n';
import { motion } from 'framer-motion';

const technologies = [
  'Javascript',
  'Typescript',
  'React.js',
  'Next.js',
  'Mobx',
  'Redux',
  'MaterialUI',
  'TailwindCSS',
  'Wagmi',
  'Ethers.js',
  'Wallet Connect',
  'React Hook Form',
];

const AboutSection = () => {
  // Renders
  const renderTech = () => {
    return technologies.map((tech, index) => (
      <motion.li
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: index * 0.2 } }}
        viewport={{ once: true }}
        key={index}
        className="flex items-center mb-2"
      >
        <span className="w-1 h-1 rounded-full bg-secondary-main mr-2" />
        <span>{tech}</span>
      </motion.li>
    ));
  };

  return (
    <section className="pb-20">
      <div className="container px-2 mx-auto">
        <SectionTitle title={i18n.t('aboutTitle')} />
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-2xl mb-5 lg:mb-0">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="mb-6"
            >
              {i18n.t('aboutContent')}
            </motion.p>
            <p className="mb-3 text-primary-main">{i18n.t('technologies')}:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3">{renderTech()}</ul>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative group w-full max-w-xs">
              <div className="w-full h-full rounded-lg overflow-hidden border-4 border-secondary-light group-hover:border-secondary-main transition-all">
                <div className="relative w-full h-full">
                  <img
                    src="/bega.png"
                    alt="Jumayev Begmuhommet"
                    className="grayscale group-hover:grayscale-0 transition-all max-w-none"
                  />
                </div>
              </div>
              <div className="hidden md:block w-full h-full rounded-lg border-4 opacity-1 z-20 border-secondary-main absolute top-5 left-10 transition-all group-hover:opacity-0 group-hover:-translate-x-10 group-hover:-translate-y-10 bg-secondary-main opacity-50 duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
