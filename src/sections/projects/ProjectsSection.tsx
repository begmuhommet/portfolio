import SectionTitle from '@/components/SectionTitle';
import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container px-2 mx-auto">
        <SectionTitle title="Recent Projects" />
        <Projects />
      </div>
    </section>
  );
};

export default ProjectsSection;
