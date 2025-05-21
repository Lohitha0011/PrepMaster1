
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const androidDevResources = [
  {
    title: 'Android Developer Guide',
    url: 'https://developer.android.com/guide',
    description: 'Official documentation for Android development, including guides and API references.',
  },
  {
    title: 'Udacity - Android Development',
    url: 'https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801',
    description: 'Nanodegree program that teaches Android development through hands-on projects.',
  },
  {
    title: 'Coursera - Android App Development',
    url: 'https://www.coursera.org/specializations/android-app-development',
    description: 'Specialization that covers the basics of Android app development.',
  },
  {
    title: 'Android Developers YouTube Channel',
    url: 'https://www.youtube.com/user/androiddevelopers',
    description: 'Official YouTube channel for Android developers with tutorials and updates.',
  },
];

const Android = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Android Development Resources</h1>
        <p className="mt-4 text-xl text-gray-600">
          Explore these resources to enhance your Android development skills.
        </p>
      </div>

      <div className="space-y-4">
        {androidDevResources.map((resource, index) => (
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

export default Android;