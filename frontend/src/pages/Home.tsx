import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Layout, Users, Briefcase, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Programming Languages',
    description: 'Master popular languages with structured learning paths and resources.',
    link: '/languages'
  },
  {
    icon: BookOpen,
    title: 'DSA A2Z Sheet',
    description: 'Track your progress through comprehensive DSA preparation.',
    link: '/dsa-sheet'
  },
  {
    icon: Layout,
    title: 'Skills Development',
    description: 'Explore various tech domains with curated learning roadmaps.',
    link: '/skills'
  },
  {
    icon: Briefcase,
    title: 'Resources & Tools',
    description: 'Access essential tools and platforms for interview preparation.',
    link: '/resources'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with peers, share knowledge, and grow together.',
    link: '/community'
  }
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Journey to{' '}
          <span className="text-indigo-600">Tech Success</span>{' '}
          Starts Here
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Comprehensive preparation platform for tech placements. Master DSA, develop skills, and connect with a community of aspiring developers.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/community"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Join Community
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.link}
            className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col items-start">
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 bg-indigo-50 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">1000+</div>
            <div className="text-gray-600">DSA Problems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">50+</div>
            <div className="text-gray-600">Learning Paths</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">200+</div>
            <div className="text-gray-600">Interview Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">10K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;