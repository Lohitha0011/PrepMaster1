
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const uiUxResources = [
  {
    title: 'Nielsen Norman Group',
    url: 'https://www.nngroup.com/',
    description: 'A leading research firm in user experience, offering articles and reports on UX best practices.',
  },
  {
    title: 'Interaction Design Foundation',
    url: 'https://www.interaction-design.org/',
    description: 'An online platform providing courses, articles, and resources on interaction design and UX.',
  },
  {
    title: 'Adobe XD Tutorials',
    url: 'https://helpx.adobe.com/xd/tutorials.html',
    description: 'Official tutorials for Adobe XD, a popular tool for UI/UX design.',
  },
  {
    title: 'Figma Learn',
    url: 'https://www.figma.com/resources/learn-design/',
    description: 'Resources and tutorials for using Figma, a collaborative interface design tool.',
  },
];

const UiUx = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">UI/UX Design Resources</h1>
        <p className="mt-4 text-xl text-gray-600">
          Explore these resources to enhance your UI/UX design skills.
        </p>
      </div>

      <div className="space-y-4">
        {uiUxResources.map((resource, index) => (
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

export default UiUx;