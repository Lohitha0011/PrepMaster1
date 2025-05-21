import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './AuthContext'; // Correct import

const queryClient = new QueryClient();

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Languages from './pages/Languages';
import DSASheet from './pages/DSASheet';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Webdev from './pages/Webdev';
import Android from './pages/Android';
import DataAnalytics from './pages/DataAnalytics';
import UiUx from './pages/UiUx';
import Ml from './pages/Ml';
import Cloud from './pages/Cloud';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider> {/* Wrap with AuthProvider */}
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="/dsa-sheet" element={<DSASheet />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/community" element={<Community />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/skills/web-development" element={<Webdev />} />
                <Route path="/skills/android-development" element={<Android />} />
                <Route path="/skills/data-analytics" element={<DataAnalytics />} />
                <Route path="/skills/ui-ux-design" element={<UiUx />} />
                <Route path="/skills/machine-learning" element={<Ml />} />
                <Route path="/skills/cloud-computing" element={<Cloud />} />
                
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
