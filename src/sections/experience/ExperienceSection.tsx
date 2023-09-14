import SectionTitle from '@/components/SectionTitle';
import ExperienceTab from '@/sections/experience/tabs/ExperienceTab';

const ExperienceSection = () => {
  // Renders
  return (
    <section className="py-20">
      <div className="container px-2 mx-auto">
        <SectionTitle title="Experience" />
        <ExperienceTab />
      </div>
    </section>
  );
};

export default ExperienceSection;
