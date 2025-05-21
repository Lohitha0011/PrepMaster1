
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const dataAnalyticsResources = [
  {
    title: 'Coursera - Data Analysis and Visualization with Python',
    url: 'https://www.coursera.org/learn/data-analysis-with-python',
    description: 'A course that teaches data analysis and visualization using Python and libraries like Pandas and Matplotlib.',
  },
  {
    title: 'Khan Academy - Statistics and Probability',
    url: 'https://www.khanacademy.org/math/statistics-probability',
    description: 'Free resources to learn statistics and probability, which are fundamental for data analytics.',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    description: 'A comprehensive program that covers the fundamentals of data analytics, including data visualization and analysis.',
  },
  {
    title: 'Tableau Public',
    url: 'https://public.tableau.com/en-us/s/',
    description: 'A free platform to create and share interactive data visualizations using Tableau.',
  },
];

const DataAnalytics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Data Analytics Resources</h1>
        <p className="mt-4 text-xl text-gray-600">
          Explore these resources to enhance your data analytics skills.
        </p>
      </div>

      <div className="space-y-4">
        {dataAnalyticsResources.map((resource, index) => (
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

export default DataAnalytics;