import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, BookOpen, Layout, Users, BarChart2, Briefcase, Menu, X, LogIn } from 'lucide-react';
import { useAuth } from '../AuthContext';

const Navbar: React.FC = () => {
  const { user, setUser  } = useAuth();
  console.log('Current user in Navbar:', user); // Debugging line to check user state
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  const navItems = [
    { name: 'Languages', path: '/languages', icon: Code },
    { name: 'DSA Sheet', path: '/dsa-sheet', icon: BookOpen },
    { name: 'Skills', path: '/skills', icon: Layout },
    { name: 'Resources', path: '/resources', icon: Briefcase },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart2 },
    { name: 'Community', path: '/community', icon: Users },
  ];

  const handleLogout = () => {
    setUser (null); // Clear the user state
    localStorage.removeItem('user'); // Clear user data from localStorage
  };

  // Don't render navbar on authentication pages
  if (isAuthPage) return null;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">PrepMaster</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/signup"
                className="flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span>Signup</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            {user ? (
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-gray-700">Welcome, {user.name}</span>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/signup"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-5 w-5" />
                <span>Signin</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;