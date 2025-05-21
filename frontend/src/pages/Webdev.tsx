
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const webDevResources = [
  {
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/en-US/docs/Web',
    description: 'Comprehensive resource for web development documentation and tutorials.',
  },
  {
    title: 'FreeCodeCamp',
    url: 'https://www.freecodecamp.org/',
    description: 'Learn web development through interactive coding lessons and projects.',
  },
  {
    title: 'W3Schools',
    url: 'https://www.w3schools.com/',
    description: 'A web developer’s site for tutorials and references on web development languages.',
  },
  {
    title: 'Codecademy',
    url: 'https://www.codecademy.com/learn/learn-html',
    description: 'Interactive platform that offers free coding classes in various programming languages.',
  },
];

const Webdev = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Web Development Resources</h1>
        <p className="mt-4 text-xl text-gray-600">
          Explore these resources to enhance your web development skills.
        </p>
      </div>

      <div className="space-y-4">
        {webDevResources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
            <p className="text-gray-600">{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              Visit Resource <ArrowRight className="inline h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/skills" className="text-indigo-600 hover:underline">
          Back to Skills
        </Link>
      </div>
    </div>
  );
};

export default Webdev;