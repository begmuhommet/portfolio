import SectionTitle from '@/components/SectionTitle';
import i18n from '@/i18n';
import ExperienceTab from '@/sections/experience/tabs/ExperienceTab';

const ExperienceSection = () => {
  // Renders
  return (
    <section className="py-20">
      <div className="container px-2 mx-auto">
        <SectionTitle title={i18n.t('experienceTitle')} />
        <ExperienceTab />
      </div>
    </section>
  );
};

export default ExperienceSection;
