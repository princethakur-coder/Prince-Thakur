import React from 'react';
import { Award, BookOpen, Briefcase, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Briefcase className="text-indigo-600 dark:text-indigo-400" />,
      value: '1.5+',
      label: 'Years Experience',
    },
    {
      icon: <BookOpen className="text-indigo-600 dark:text-indigo-400" />,
      value: '7+',
      label: 'Projects Completed',
    },
    {
      icon: <Users className="text-indigo-600 dark:text-indigo-400" />,
      value: '2+',
      label: 'Happy Clients',
    },
    {
      icon: <Award className="text-indigo-600 dark:text-indigo-400" />,
      value: '5+',
      label: 'Certifications',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Get to know more about me, my background, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-full bg-indigo-200 dark:bg-indigo-900/30 absolute -top-4 -left-4 rounded-lg"></div>
            <img
              src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Prince - MERN Stack Developer"
              className="w-full rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Available for hire</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              I'm Prince Thakur, a passionate MERN Stack Developer
            </h3>velopment started with a fascination for creating interactive 
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              With over 1.5 years of experience, I specialize in building modern web applications using MongoDB, Express.js, React.js, and Node.js. My journey in web deand user-friendly interfaces.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              I'm dedicated to writing clean, efficient code and building scalable applications that solve real-world problems. My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <h4 className="font-bold text-slate-900 dark:text-white">{stat.value}</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;