import { motion } from 'framer-motion';
import { FC } from 'react';

interface IProps {
  title: string;
}

const SectionTitle: FC<IProps> = props => {
  const { title } = props;

  return (
    <motion.h2
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ once: true }}
      className="text-3xl text-secondary-main font-bold mb-5 lg:mb-12"
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
