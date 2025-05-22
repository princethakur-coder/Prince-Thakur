import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                <span className="block">Hello, I'm</span>
                <span className="text-indigo-600 dark:text-indigo-400">Prince Thakur</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-teal-600 dark:text-teal-400 mb-6">
                MERN Stack Developer
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                I create modern web applications using MongoDB, Express, React, and Node.js.
                Specializing in building robust, scalable, and user-friendly digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  View My Work
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 font-medium rounded-lg transition-colors"
                >
                  Contact Me
                </a>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Developer working"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500 dark:text-slate-400">MERN Stack</span>
                    <span className="font-medium text-slate-900 dark:text-white">Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;