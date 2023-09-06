import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-8">
      {projects.map((project, index) => (
        <a
          href={project.url}
          rel="noopener noreferrer"
          target="_blank"
          key={index}
          className={`relative group shadow-lg rounded-lg flex flex-col hover:shadow-2xl transition-shadow duration-500`}
        >
          <div className="mb-2">
            <img src={project.image} alt="project" className="rounded-t-lg w-full" />
          </div>

          <div className={`flex-1 flex flex-col p-4`}>
            <h2 className="text-xl font-bold text-primary-main mb-2">{project.name}</h2>
            <h3 className="text-sm mb-4">{project.description}</h3>

            <div className="">
              {project.tecknologies.map((teck, index) => (
                <span className="text-gray-400 text-xs" key={index}>
                  {teck},{' '}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
