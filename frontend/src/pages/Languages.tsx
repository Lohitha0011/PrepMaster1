import React from 'react';
import { Code, BookOpen, Star, Users, ArrowRight } from 'lucide-react';

interface Language {
  name: string;
  icon: React.ElementType;
  description: string;
  difficulty: string;
  learners: string;
  topics: string[];
  resources: {
    title: string;
    type: string;
    link: string;
  }[];
}

const languages: Language[] = [
  {
    name: 'Python',
    icon: Code,
    description: 'A versatile language known for its simplicity and readability. Perfect for beginners and widely used in various domains.',
    difficulty: 'Beginner',
    learners: '15K+',
    topics: ['Basic Syntax', 'Data Structures', 'OOP', 'File Handling', 'Libraries & Frameworks'],
    resources: [
      {
        title: 'Python Official Documentation',
        type: 'Documentation',
        link: 'https://docs.python.org/3/'
      },
      {
        title: 'Python for Everybody',
        type: 'Course',
        link: 'https://www.py4e.com/'
      }
    ]
  },
  {
    name: 'Java',
    icon: Code,
    description: 'A robust, object-oriented language widely used in enterprise applications and Android development.',
    difficulty: 'Intermediate',
    learners: '12K+',
    topics: ['Core Java', 'Collections', 'Multithreading', 'Spring Framework', 'Android Development'],
    resources: [
      {
        title: 'Java Documentation',
        type: 'Documentation',
        link: 'https://docs.oracle.com/en/java/'
      },
      {
        title: 'Java Programming Masterclass',
        type: 'Course',
        link: '#'
      }
    ]
  },
  {
    name: 'JavaScript',
    icon: Code,
    description: 'The language of the web. Essential for front-end development and increasingly popular in back-end development.',
    difficulty: 'Intermediate',
    learners: '20K+',
    topics: ['ES6+', 'DOM Manipulation', 'Async Programming', 'React', 'Node.js'],
    resources: [
      {
        title: 'MDN Web Docs',
        type: 'Documentation',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        title: 'JavaScript.info',
        type: 'Tutorial',
        link: 'https://javascript.info/'
      }
    ]
  }
];

const LanguageCard = ({ language }: { language: Language }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
    <div className="flex items-start justify-between">
      <div>
        <language.icon className="h-8 w-8 text-indigo-600" />
        <h3 className="text-xl font-semibold mt-4">{language.name}</h3>
        <p className="text-gray-600 mt-2">{language.description}</p>
      </div>
      <div className="flex items-center space-x-2 bg-indigo-50 px-3 py-1 rounded-full">
        <Star className="h-4 w-4 text-indigo-600" />
        <span className="text-sm text-indigo-600">{language.difficulty}</span>
      </div>
    </div>

    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
      <div className="flex items-center">
        <Users className="h-4 w-4 mr-1" />
        {language.learners} learners
      </div>
    </div>

    <div className="mt-6">
      <h4 className="font-medium text-gray-900">Key Topics</h4>
      <div className="mt-2 flex flex-wrap gap-2">
        {language.topics.map((topic) => (
          <span
            key={topic}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6">
      <h4 className="font-medium text-gray-900">Learning Resources</h4>
      <div className="mt-2 space-y-2">
        {language.resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 text-indigo-600 mr-2" />
              <span className="text-gray-700">{resource.title}</span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Languages = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Programming Languages</h1>
        <p className="mt-4 text-xl text-gray-600">
          Master the most in-demand programming languages with structured learning paths and curated resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((language) => (
          <LanguageCard key={language.name} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Languages;