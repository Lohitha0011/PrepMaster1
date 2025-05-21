
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const machineLearningResources = [
  {
    title: 'Coursera - Machine Learning by Andrew Ng',
    url: 'https://www.coursera.org/learn/machine-learning',
    description: 'A foundational course on machine learning taught by Andrew Ng, covering algorithms and best practices.',
  },
  {
    title: 'Kaggle',
    url: 'https://www.kaggle.com/',
    description: 'A platform for data science competitions, datasets, and community-driven projects.',
  },
  {
    title: 'Google AI - Machine Learning Crash Course',
    url: 'https://developers.google.com/machine-learning/crash-course',
    description: 'A free course that provides a quick introduction to machine learning concepts and practices.',
  },
  {
    title: 'Fast.ai',
    url: 'https://www.fast.ai/',
    description: 'A practical approach to learning machine learning and deep learning using the Fastai library.',
  },
];

const MachineLearning = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Machine Learning Resources</h1>
        <p className="mt-4 text-xl text-gray-600">
          Explore these resources to enhance your machine learning skills.
        </p>
      </div>

      <div className="space-y-4">
        {machineLearningResources.map((resource, index) => (
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

export default MachineLearning;