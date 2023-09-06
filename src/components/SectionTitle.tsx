import { FC } from 'react';

interface IProps {
  title: string;
}

const SectionTitle: FC<IProps> = props => {
  const { title } = props;

  return <h2 className="text-3xl text-secondary-main font-bold mb-5 lg:mb-12">{title}</h2>;
};

export default SectionTitle;
