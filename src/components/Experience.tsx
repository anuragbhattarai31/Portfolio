import { useInView } from 'react-intersection-observer';

const experiences = [
 
  {
    title: 'Southeast Missouri State University',
    company: 'Bachelor of Science in Computer Science',
    period: '2021 - Present',
    description: 'Learned various programming languages inlcuding DSA algorithms and OOPs concepts',
  },
  {
    title: 'Kathmandu Model Secondary School',
    company: 'High School',
    period: '2019 - 2021',
    description: 'Learned basics of HTML, CSS and python programming langauges', 
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">Experience and Education</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, company, period, description, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-12 transform transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {index !== experiences.length - 1 && (
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      )}
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 transform -translate-x-[3px]"></div>
      <div className="space-y-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <h4 className="text-lg text-gray-600 dark:text-gray-300">{company}</h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Experience;