import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Prince<span className="text-teal-500">-Coder</span>
            </h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Building modern, scalable web applications with the MERN stack and other cutting-edge technologies. Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/princethakur-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/prince-thakur-17b445366/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=ZtjgtTZXnLRshmxfhQqBqXGQWxXQcglLvBvsSjNknjZgGVJRgTgXxrdwCdXjRkVxLWsCvzssCpFPLcKQClLbjfVjGDQwlRrFNZfJHdGszSnVFGfCfcfgqNrqsgxRdpppRLmJJLXQstcNslKNQLNhPnV"
                className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Tech Stack</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">
                <span className="text-indigo-400">M</span>ongoDB
              </li>
              <li className="text-slate-300">
                <span className="text-indigo-400">E</span>xpress.js
              </li>
              <li className="text-slate-300">
                <span className="text-indigo-400">R</span>eact.js
              </li>
              <li className="text-slate-300">
                <span className="text-indigo-400">N</span>ode.js
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Prince. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            Designed and built with 💙
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;