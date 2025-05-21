import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">PrepMaster</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your comprehensive platform for placement preparation. Master DSA, develop skills, and land your dream tech job.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/languages" className="text-gray-600 hover:text-indigo-600">Languages</Link>
              </li>
              <li>
                <Link to="/dsa-sheet" className="text-gray-600 hover:text-indigo-600">DSA Sheet</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 hover:text-indigo-600">Skills</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-indigo-600">Resources</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/community" className="text-gray-600 hover:text-indigo-600">Community</Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} PrepMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;