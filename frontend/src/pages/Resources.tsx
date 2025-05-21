import React from 'react';
import {
  Code,
  BookOpen,
  FileText,
  Users,
  Terminal,
  Video,
  ExternalLink
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  links: {
    name: string;
    url: string;
    description: string;
  }[];
}

const resources: Resource[] = [
  {
    id: 'coding-platforms',
    title: 'Coding Platforms',
    description: 'Practice coding problems and improve your problem-solving skills',
    icon: Code,
    links: [
      {
        name: 'LeetCode',
        url: 'https://leetcode.com',
        description: 'Popular platform for coding interview preparation'
      },
      {
        name: 'HackerRank',
        url: 'https://hackerrank.com',
        description: 'Practice coding, prepare for interviews, and get hired'
      },
      {
        name: 'CodeForces',
        url: 'https://codeforces.com',
        description: 'Competitive programming platform with regular contests'
      }
    ]
  },
  {
    id: 'learning-resources',
    title: 'Learning Resources',
    description: 'Comprehensive learning materials and documentation',
    icon: BookOpen,
    links: [
      {
        name: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org',
        description: 'Free coding bootcamp with certifications'
      },
      {
        name: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        description: 'Comprehensive web development documentation'
      }
    ]
  },
  {
    id: 'resume-tools',
    title: 'Resume Building',
    description: 'Create professional resumes and portfolios',
    icon: FileText,
    links: [
      {
        name: 'Resume.io',
        url: 'https://resume.io',
        description: 'Professional resume builder with templates'
      },
      {
        name: 'Canva',
        url: 'https://www.canva.com',
        description: 'Design tool with resume templates'
      }
    ]
  },
  {
    id: 'mock-interviews',
    title: 'Mock Interviews',
    description: 'Practice technical interviews with peers and professionals',
    icon: Users,
    links: [
      {
        name: 'Pramp',
        url: 'https://www.pramp.com',
        description: 'Free peer-to-peer mock interviews'
      },
      {
        name: 'interviewing.io',
        url: 'https://interviewing.io',
        description: 'Anonymous technical interviews with engineers'
      }
    ]
  },
  {
    id: 'ides',
    title: 'IDEs & Code Editors',
    description: 'Popular development environments and code editors',
    icon: Terminal,
    links: [
      {
        name: 'VS Code',
        url: 'https://code.visualstudio.com',
        description: 'Popular, extensible code editor'
      },
      {
        name: 'IntelliJ IDEA',
        url: 'https://www.jetbrains.com/idea',
        description: 'Powerful IDE for Java development'
      }
    ]
  },
  {
    id: 'video-tutorials',
    title: 'Video Tutorials',
    description: 'Video courses and tutorials from experts',
    icon: Video,
    links: [
      {
        name: 'Coursera',
        url: 'https://www.coursera.org',
        description: 'Online courses from top universities'
      },
      {
        name: 'Udemy',
        url: 'https://www.udemy.com',
        description: 'Vast collection of online courses'
      }
    ]
  }
];

const ResourceCard = ({ resource }: { resource: Resource }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <div className="p-6">
      <div className="flex items-center space-x-3">
        <resource.icon className="h-6 w-6 text-indigo-600" />
        <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
      </div>
      <p className="mt-2 text-gray-600">{resource.description}</p>
      
      <div className="mt-6 space-y-4">
        {resource.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">{link.name}</h4>
                <p className="mt-1 text-sm text-gray-500">{link.description}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Resources & Tools</h1>
        <p className="mt-4 text-xl text-gray-600">
          Everything you need to prepare for your tech career
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default Resources;