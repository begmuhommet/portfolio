import SectionTitle from '@/components/SectionTitle';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Projects from './Projects';

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [-100, 200]);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container px-2 mx-auto">
        <motion.div style={{ x }}>
          <SectionTitle title="Recent Projects" />
        </motion.div>

        <Projects />
      </div>
    </section>
  );
};

export default ProjectsSection;
