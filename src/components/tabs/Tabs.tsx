import clsx from 'clsx';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import TabContent from './TabContent';

const ektaWorkList = [
  `Write modern, performant, maintainable code for a diverse array of client and internal projects`,
  `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript,
            TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify`,
  `Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis`,
];

const liClasses = 'px-4 py-2 border-l-2 border-gray-200 hover:bg-secondary-light cursor-pointer mr-5 transition-all duration-600';
const activeClasses = 'border-primary-main text-primary-main bg-secondary-light';

export enum TabNames {
  Ekta = 'Etka',
  Neti = 'Neti',
  Freelance = 'Freelance',
}

const Tabs: React.FC = () => {
  const [active, setActive] = useState(TabNames.Ekta);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  // Handlers
  const handleChangeActive = (tab: TabNames) => () => {
    setActive(tab);
  };

  // Renders
  return (
    <div className="flex max-w-3xl">
      <div className="mr-3">
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

      <div className="flex-1" ref={parent}>
        {active === TabNames.Ekta && (
          <TabContent
            companyName="Ekta"
            companyUrl="https://ekta.io/"
            title="Frontend Developer"
            workStartDate="June 2022"
            workFinishDate="Present"
            workList={ektaWorkList}
            subtitle="(Wenb3)"
          />
        )}
        {active === TabNames.Neti && (
          <TabContent
            companyName="Neti"
            companyUrl="https://ekta.io/"
            title="Frontend Developer"
            workStartDate="August 2021"
            workFinishDate="June 2022"
            workList={ektaWorkList}
          />
        )}
        {active === TabNames.Freelance && (
          <TabContent
            companyName="Freelance"
            companyUrl="https://ekta.io/"
            title="Frontend Developer"
            workStartDate="December 2018"
            workFinishDate="August 2021"
            workList={ektaWorkList}
          />
        )}
      </div>
    </div>
  );
};

export default Tabs;
