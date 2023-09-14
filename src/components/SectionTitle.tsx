import { motion, useInView } from 'framer-motion';
import { FC, useRef } from 'react';

interface IProps {
  title: string;
}

const SectionTitle: FC<IProps> = props => {
  const { title } = props;
  const ref = useRef(null);
  const inView = useInView({ current: ref.current });

  return (
    <motion.h2
      ref={ref}
      variants={{ hide: { opacity: 0 }, show: { opacity: 1 } }}
      animate={inView ? 'show' : 'hide'}
      transition={{ duration: 0.7 }}
      className="text-3xl text-secondary-main font-bold mb-5 lg:mb-12"
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
