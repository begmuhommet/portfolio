import SectionTitle from '@/components/SectionTitle';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [-100, 70]);

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
    <section ref={sectionRef} className="pb-20">
      <div className="container px-2 mx-auto">
        <motion.div style={{ x }}>
          <SectionTitle title="About me" />
        </motion.div>
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-2xl mb-5 lg:mb-0">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="mb-2"
            >
              Hello! My name is <i className="text-primary-main">Bega</i> and I enjoy build frontend. My interest in web
              development started back in <i className="text-primary-main">2017</i> playing with HTML and CSS. That's
              when I realized how interesting things
              <i className="text-primary-main">I can do.</i>
            </motion.p>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
              viewport={{ once: true }}
              className="mb-4"
            >
              I’ve had the privilege of working at <i className="text-primary-main">few start-up's</i>, a big{' '}
              <i className="text-primary-main">it company</i>, and as a <i className="text-primary-main">freelancer</i>{' '}
              on freelance platforms. My main focus now is building accessible, inclusive products and digital
              experiences at <i className="text-primary-main">Ekta</i> for a variety of users.
            </motion.p>
            <p className="mb-3">
              <i className="text-primary-main">recently:</i>
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3">{renderTech()}</ul>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative group w-full max-w-xs">
              <div className="w-full h-full rounded-lg overflow-hidden border-4 border-secondary-light group-hover:border-secondary-main transition-all">
                <div className="relative w-full h-full">
                  {/* <Image
                    src="/bega.png"
                    fill
                    alt="Jumayev Begmuhommet"
                    className="grayscale group-hover:grayscale-0 transition-all"
                  /> */}
                  <img
                    src="/bega.png"
                    alt="Jumayev Begmuhommet"
                    className="grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
              <div className="w-full h-full rounded-lg border-4 opacity-1 z-20 border-secondary-main absolute top-5 left-10 transition-all group-hover:opacity-0 group-hover:-translate-x-10 group-hover:-translate-y-10 bg-secondary-main opacity-50 duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
