interface ITabContentProps {
  title: string;
  subtitle?: string;
  workStartDate: string;
  workFinishDate: string;
  companyName: string;
  companyUrl: string;
  workList: string[];
}

const TabContent: React.FC<ITabContentProps> = props => {
  const { workStartDate, workFinishDate, companyName, companyUrl, title, workList, subtitle } = props;

  return (
    <div>
      <div className="flex items-center">
        <h6 className="font-bold mr-1">{title}</h6>
        {subtitle && <span className="mr-2 text-sm">{subtitle}</span>}
        <a
          href={companyUrl}
          className="text-secondary-main hover:text-primary-main transition-colors"
          target="_blank"
          rel="nooper noreferrer"
        >
          @{companyName}
        </a>
      </div>
      <p className="text-sm text-slate-300 mb-2">
        {workStartDate} &#8212; {workFinishDate}
      </p>

      <ul>
        {workList?.map((work, index) => (
          <li key={index} className="flex items-center mb-1">
            <span className="w-1 h-1 rounded-full bg-secondary-main mr-2" />
            <span className="text-sm text-stone-100">{work}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabContent;
