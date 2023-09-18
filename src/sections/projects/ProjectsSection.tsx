import SectionTitle from '@/components/SectionTitle';
import i18n from '@/i18n';
import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container px-2 mx-auto">
        <SectionTitle title={i18n.t('projectsTitle')} />
        <Projects />
      </div>
    </section>
  );
};

export default ProjectsSection;
