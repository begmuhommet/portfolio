import useExperience from '@/hooks/useExperience';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TabContent from './TabContent';

const liClasses =
  'flex-1 px-4 py-2 md:border-l-2 border-b-2 md:border-b-0 border-gray-200 hover:bg-secondary-light cursor-pointer mr-5 transition-all duration-600';
const activeClasses = 'border-primary-main text-primary-main bg-secondary-light';

export enum TabNames {
  EktaChain = 'EktaChain',
  Neti = 'Neti',
  Freelance = 'Freelance',
}

const ExperienceTab: React.FC = () => {
  const [active, setActive] = useState<TabNames>(TabNames.EktaChain);
  const experience = useExperience();

  // Handlers
  const handleChangeActive = (tab: TabNames) => () => {
    setActive(tab);
  };

  // Renders
  const renderTabs = () => {
    return Object.entries(TabNames)?.map(([key, value]) => (
      <li
        key={key}
        className={clsx(liClasses, active === key && activeClasses)}
        onClick={handleChangeActive(key as TabNames)}
      >
        {value}
      </li>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row max-w-3xl">
      <div className="mb-5 md:mb-0 md:mr-3">
        <nav>
          <ul className="flex md:flex-col flex-row">{renderTabs()}</ul>
        </nav>
      </div>

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active ? active : 'empty'}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <TabContent data={experience[active]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceTab;
