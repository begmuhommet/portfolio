import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  // States
  const [limit, setLimit] = useState(4);

  // Hanlers
  const handleLimit = () => {
    setLimit(prevState => prevState + 2);
  };

  // Renders
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-8 mb-10">
        {projects.slice(0, limit).map((project, index) => (
          <motion.a
            href={project.url}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
            className={`relative group shadow-lg rounded-lg flex flex-col hover:shadow-sm transition-shadow duration-500`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: index * 0.05 } }}
            viewport={{ once: true }}
          >
            <div className="mb-2">
              <img src={project.image} alt="project" className="rounded-t-lg w-full" />
            </div>

            <div className={`flex-1 flex flex-col p-4`}>
              <h2 className="text-xl font-bold text-primary-main mb-2">{project.name}</h2>
              {/* <h3 className="text-sm mb-4">{project.description}</h3> */}

              <div className="">
                {project.tecknologies.map((teck, index) => (
                  <span className="text-gray-400 text-xs" key={index}>
                    {teck},{' '}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {projects.length > limit && (
        <motion.button
          className="border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition-all active:scale-95 font-bold"
          onClick={handleLimit}
        >
          Load more
        </motion.button>
      )}
    </div>
  );
};

export default Projects;
