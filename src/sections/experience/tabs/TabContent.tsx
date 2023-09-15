import { IExperience } from '@/types';

interface ITabContentProps {
  data: IExperience;
}

const TabContent: React.FC<ITabContentProps> = props => {
  const { data } = props;
  const { name, title, subtitle, website, start, end, tasks } = data;

  return (
    <div>
      <div className="flex md:items-center flex-col md:flex-row">
        <h6 className="font-bold mr-3 text-xl">{title}</h6>
        {subtitle && <span className="mr-2 text-sm">{subtitle}</span>}
        <a
          href={website}
          className="text-secondary-main hover:text-primary-main transition-colors text-lg"
          target="_blank"
          rel="nooper noreferrer"
        >
          @{name}
        </a>
      </div>
      <p className="text-sm text-slate-300 mb-2 text-lg">
        {start} &#8212; {end}
      </p>

      <ul>
        {tasks?.map((work, index) => (
          <li key={index} className="flex items-center mb-1 text-md">
            <span className="w-1 h-1 rounded-full bg-secondary-main mr-2" />
            <span className="text-stone-100">{work}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabContent;
