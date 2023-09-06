import SectionTitle from '@/components/SectionTitle';
import ExperienceTab from '@/sections/experience/tabs/ExperienceTab';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [-100, 70]);

  // Renders
  return (
    <section ref={sectionRef} className="py-20">
      <div className="container px-2 mx-auto">
        <motion.div style={{ x }}>
          <SectionTitle title="Experience" />
        </motion.div>
        <ExperienceTab />
      </div>
    </section>
  );
};

export default ExperienceSection;
