import { socials } from '@/data/socials';
import { motion } from 'framer-motion';

const Socials = () => {
  return (
    <ul className="flex items-center justify-center flex-col fixed bottom-6 right-10 z-30 text-white">
      {socials.map(({ icon, href, name }, index) => (
        <motion.li
          key={index}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 1 + index * 0.1 } }}
          className="mb-5"
        >
          <a
            href={href}
            aria-label={name}
            rel="noopener noreferrer"
            target="_blank"
            className="block duration-500 hover:text-secondary-main hover:-translate-y-1"
          >
            {icon}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default Socials;
