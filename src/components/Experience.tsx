import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  institution,
  period,
  description,
  type,
}) => {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          type === 'work' 
            ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
            : 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400'
        }`}>
          {type === 'work' ? <Briefcase size={20} /> : <BookOpen size={20} />}
        </div>
        <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700"></div>
      </div>
      <div className="pb-12">
        <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm mb-4">
          {period}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-indigo-600 dark:text-indigo-400 mb-4">
          {company || institution}
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const workExperience = [
    {
      title: 'Analyst',
      company: 'eClerx',
      period: '2023 - 2025',
      description: 'Leading development of enterprise web applications using the MERN stack. Architected microservices, implemented CI/CD pipelines, and mentored junior developers.',
      type: 'work' as const,
    },
  ];

  const education = [
    {
      title: 'Bachelor of Computer Science',
      institution: 'Chandigarh Group of Colleges',
      period: '2020 - 2024',
      description: 'Specialized in web technologies and distributed systems. Completed this on scalable architectures for web applications.',
      type: 'education' as const,
    },
    {
      title: '12th',
      institution: 'Dav Public School',
      period: '2019 - 2020',
      description: 'I have done my 12th in non medical stream with 82%.',
      type: 'education' as const,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience & <span className="text-indigo-600 dark:text-indigo-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            My professional journey and educational background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-indigo-600 dark:text-indigo-400" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <TimelineItem
                  key={index}
                  title={job.title}
                  company={job.company}
                  period={job.period}
                  description={job.description}
                  type={job.type}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <BookOpen className="text-teal-600 dark:text-teal-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.title}
                  institution={edu.institution}
                  period={edu.period}
                  description={edu.description}
                  type={edu.type}
                />
              ))}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">React.js Certification</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Infosys</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">AWS in cyber security</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Amazon</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Machine learining from AWS</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Amazon</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;