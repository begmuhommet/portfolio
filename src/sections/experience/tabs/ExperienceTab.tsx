import { experience } from '@/data/experience';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TabContent from './TabContent';

const liClasses =
  'px-4 py-2 border-l-2 border-gray-200 hover:bg-secondary-light cursor-pointer mr-5 transition-all duration-600';
const activeClasses = 'border-primary-main text-primary-main bg-secondary-light';

export enum TabNames {
  EktaChain = 'EktaChain',
  Neti = 'Neti',
  Freelance = 'Freelance',
}

const ExperienceTab: React.FC = () => {
  const [active, setActive] = useState<TabNames>(TabNames.EktaChain);

  // Handlers
  const handleChangeActive = (tab: TabNames) => () => {
    setActive(tab);
  };

  // Renders
  return (
    <div className="flex max-w-3xl">
      <div className="mr-3">
        <nav>
          <ul>
            {Object.entries(TabNames)?.map(([key, value]) => (
              <li
                key={key}
                className={clsx(liClasses, active === key && activeClasses)}
                onClick={handleChangeActive(key)}
              >
                {value}
              </li>
            ))}
          </ul>
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
            <TabContent
              companyName={experience[active]?.name}
              companyUrl={experience[active]?.website}
              title={experience[active]?.title}
              workStartDate={experience[active]?.startDate}
              workFinishDate={experience[active]?.endDate}
              workList={experience[active]?.tasks}
              subtitle="(Web3)"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceTab;
