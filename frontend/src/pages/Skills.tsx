import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, BarChart2, Palette, Cloud, Brain, ArrowRight } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  color: string;
  path: string;
}

const skills: Skill[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: Code,
    description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks.',
    color: 'indigo',
    path: '/skills/web-development'
  },
  {
    id: 'android-dev',
    title: 'Android Development',
    icon: Smartphone,
    description: 'Build native Android applications using Kotlin and modern Android development practices.',
    color: 'green',
    path: '/skills/android-development'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: BarChart2,
    description: 'Learn to analyze and visualize data using Python, R, and popular analytics tools.',
    color: 'blue',
    path: '/skills/data-analytics'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Design beautiful and functional user interfaces with modern design principles.',
    color: 'purple',
    path: '/skills/ui-ux-design'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: Cloud,
    description: 'Master cloud platforms like AWS, Azure, and Google Cloud Platform.',
    color: 'yellow',
    path: '/skills/cloud-computing'
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: Brain,
    description: 'Dive into machine learning algorithms, frameworks, and practical applications.',
    color: 'red',
    path: '/skills/machine-learning'
  }
];

const colorClasses = {
  indigo: 'bg-indigo-500 text-white hover:bg-indigo-600',
  green: 'bg-green-500 text-white hover:bg-green-600',
  blue: 'bg-blue-500 text-white hover:bg-blue-600',
  purple: 'bg-purple-500 text-white hover:bg-purple-600',
  yellow: 'bg-yellow-500 text-white hover:bg-yellow-600',
  red: 'bg-red-500 text-white hover:bg-red-600'
};  

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <div className="p-6">
    <div className={`inline-flex p-3 rounded-lg ${colorClasses[skill.color].replace('hover:', '')}`}>
        <skill.icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{skill.title}</h3>
      <p className="mt-2 text-gray-600">{skill.description}</p>
      <Link
        to={skill.path}
        className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
      >
        Explore Learning Path
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
      <h1 className="text-3xl font-bold text-gray-900">Skills Development</h1>
        <p className="mt-4 text-xl text-gray-600">
          Choose your path and master the skills needed for your dream role in tech
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Not sure where to start?</h2>
          <p className="mt-4 text-gray-600">
            Take our skill assessment test to get personalized recommendations based on your interests and goals.
          </p>
          <Link to="/skill-assessment" className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Take Skill Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;