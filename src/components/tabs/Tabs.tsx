import clsx from 'clsx';
import { useState } from 'react';

const liClasses = 'px-4 py-2 border-l-2 border-gray-200 hover:bg-secondary-light cursor-pointer mr-5';
const activeClasses = 'border-primary-main text-primary-main';

export enum TabNames {
  Ekta = 'Etka',
  Neti = 'Neti',
  Freelance = 'Freelance',
}

const Tabs: React.FC = () => {
  const [active, setActive] = useState(TabNames.Ekta);

  // Handlers
  const handleChangeActive = (tab: TabNames) => () => {
    setActive(tab);
  };

  // Renders
  return (
    <div className="flex">
      <div>
        <ul>
          <li className={clsx(liClasses, active === TabNames.Ekta && activeClasses)} onClick={handleChangeActive(TabNames.Ekta)}>
            Ekta
          </li>
          <li className={clsx(liClasses, active === TabNames.Neti && activeClasses)} onClick={handleChangeActive(TabNames.Neti)}>
            Neti
          </li>
          <li
            className={clsx(liClasses, active === TabNames.Freelance && activeClasses)}
            onClick={handleChangeActive(TabNames.Freelance)}
          >
            Freelance
          </li>
        </ul>
      </div>

      <div className="flex-1">
        {active === TabNames.Ekta && <div>Web3 Frontend Developer</div>}
        {active === TabNames.Neti && <div>Frontend Developer</div>}
        {active === TabNames.Freelance && <div>Frontend Developer</div>}
      </div>
    </div>
  );
};

export default Tabs;
