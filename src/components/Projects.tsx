import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Typing Test Model',
      description: 'A real-time typing test app with speed and accuracy tracking, keystroke handling, and performance metrics display.',
      image: 'https://www.lifewire.com/thmb/JVyGp8FmHq2zseTfUs8OphGRNUU=/1246x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/monkeytype-wpm-test-e1515e0ac7bc42358050d623152495ec.png',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Stripe'],
      liveUrl: 'https://rentype.onrender.com',
      githubUrl: 'https://github.com/princethakur-coder/rEntype',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, cart, checkout, and payment processing.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'Stripe'],
      liveUrl: 'https://renshop.onrender.com',
      githubUrl: 'https://github.com/princethakur-coder/rEnshop',
      category: 'fullstack',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user authentication, and team workspaces.',
      image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
      liveUrl: 'https://rentask.onrender.com',
      githubUrl: 'https://github.com/princethakur-coder/rEntask',
      category: 'fullstack',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A responsive dashboard for social media analytics with interactive charts and data visualization.',
      image: 'https://images.pexels.com/photos/7654049/pexels-photo-7654049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React.js', 'Chart.js', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://instaclone-0dse.onrender.com/',
      githubUrl: 'https://github.com/princethakur-coder/instaClone',
      category: 'frontend',
    },
    {
      id: 5,
      title: 'RESTful API Service',
      description: 'A secure and scalable API service for handling user authentication and data management.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'backend',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Explore a selection of my recent projects built with the MERN stack and other modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white flex items-center gap-2 hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white flex items-center gap-2 hover:text-indigo-300 transition-colors"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-50 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;