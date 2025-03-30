import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Finance Tracker',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    tech: ['Typescript', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/anuragbhattarai31/PROJECTMERN',
    live: 'https://projectmern-1.onrender.com/',
  },
  
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'AWS','DynamoDB', 'Amplify'],
    github: 'https://github.com/anuragbhattarai31/Task-app',
    live: 'https://main.d2co0wui6i9jlv.amplifyapp.com/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, image, tech, github, live }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item: string) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;