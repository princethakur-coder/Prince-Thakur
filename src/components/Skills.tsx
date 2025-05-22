import React from 'react';
import { Database, Server, Layout, Terminal } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon, skills }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-100 dark:border-slate-700">
      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsData = [
    {
      title: 'MongoDB',
      description: 'Document database for modern applications',
      icon: <Database className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ['Schema Design', 'Aggregations', 'Atlas', 'Indexes', 'Data Modeling'],
    },
    {
      title: 'Express.js',
      description: 'Fast, unopinionated web framework for Node.js',
      icon: <Server className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ['REST APIs', 'Middleware', 'Routing', 'Authentication', 'Error Handling'],
    },
    {
      title: 'React.js',
      description: 'JavaScript library for building user interfaces',
      icon: <Layout className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ['Hooks', 'Context API', 'Redux', 'React Router', 'Component Design'],
    },
    {
      title: 'Node.js',
      description: 'JavaScript runtime for server-side development',
      icon: <Terminal className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ['Async/Await', 'Event Loop', 'File System', 'Streams', 'NPM'],
    },
  ];

  const additionalSkills = [
    'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 
    'GraphQL', 'REST API', 'JWT', 'OAuth', 'Firebase', 
    'AWS', 'Docker', 'Git', 'Agile', 'CI/CD'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            A comprehensive overview of my technical skills and expertise in the MERN stack and related technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              skills={skill.skills}
            />
          ))}
        </div>

        <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Additional Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-50 dark:bg-slate-600 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              The MERN Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" 
                alt="MongoDB" 
                className="w-20 h-20 object-contain"
              />
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" 
                alt="Express.js" 
                className="w-20 h-20 object-contain dark:invert"
              />
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" 
                alt="React.js" 
                className="w-20 h-20 object-contain"
              />
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
                alt="Node.js" 
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;