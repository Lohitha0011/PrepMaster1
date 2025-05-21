
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cloudComputingResources = [
  {
    title: 'AWS Training and Certification',
    url: 'https://aws.amazon.com/training/',
    description: 'Official training resources and certification programs from Amazon Web Services.',
  },
  {
    title: 'Google Cloud Training',
    url: 'https://cloud.google.com/training',
    description: 'Courses and certifications to learn about Google Cloud services and solutions.',
  },
  {
    title: 'Microsoft Learn - Azure',
    url: 'https://learn.microsoft.com/en-us/training/azure/',
    description: 'Free learning paths and modules to get started with Microsoft Azure.',
  },
  {
    title: 'Cloud Academy',
    url: 'https://cloudacademy.com/',
    description: 'A platform offering training and certification for various cloud technologies and services.',
  },
];

const CloudComputing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Cloud Computing Resources</h1>
        <p className="mt-4 text-xl text-gray-600">
          Explore these resources to enhance your cloud computing skills.
        </p>
      </div>

      <div className="space-y-4">
        {cloudComputingResources.map((resource, index) => (
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

export default CloudComputing;