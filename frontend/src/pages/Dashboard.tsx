import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { CheckCircle, Award } from "lucide-react";

interface Stat {
  title: string;
  value: number;
}

interface Activity {
  id: string;
  title: string;
  timestamp: string;
}

interface Achievement {
  title: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const fetchStats = async (): Promise<Stat[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/dashboard/stats`);
    return response?.data?.stats || [];
  };

  const fetchActivities = async (): Promise<Activity[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/dashboard/activity`);
    return response?.data?.activities || [];
  };

  const fetchAchievements = async (): Promise<Achievement[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/dashboard/achievements`);
    return response?.data?.achievements || [];
  };

  const {
    data: stats,
    isLoading: statsLoading,
    error: statsError,
  } = useQuery<Stat[]>("stats", fetchStats);

  const {
    data: activities,
    isLoading: activitiesLoading,
    error: activitiesError,
  } = useQuery<Activity[]>("activities", fetchActivities);

  const {
    data: achievements,
    isLoading: achievementsLoading,
    error: achievementsError,
  } = useQuery<Achievement[]>("achievements", fetchAchievements);

  // Error handling function
  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      return error.response?.data?.message || "An error occurred while fetching data.";
    }
    return "An unknown error occurred.";
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
          onClick={() => document.documentElement.classList.toggle("dark")}
        >
          Toggle Dark Mode
        </button>
      </header>

      {/* Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsLoading ? (
          <p className="text-gray-500 dark:text-gray-400">Loading stats...</p>
        ) : statsError ? (
          <p className="text-red-500 dark:text-red-400">{handleError(statsError)}</p>
        ) : stats?.length ? (
          stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <div className="ml-4">
                  <h3 className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</h3>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No stats available.</p>
        )}
      </section>

      {/* Activities */}
      <section className="mt-8">
        <h2 className="text-lg font -bold text-gray-900 dark:text-white">Recent Activities</h2>
        {activitiesLoading ? (
          <p className="text-gray-500 dark:text-gray-400">Loading activities...</p>
        ) : activitiesError ? (
          <p className="text-red-500 dark:text-red-400">{handleError(activitiesError)}</p>
        ) : activities?.length ? (
          <ul className="list-disc pl-5">
            {activities.map((activity) => (
              <li key={activity.id} className="text-gray-700 dark:text-gray-300">
                {activity.title} - {new Date(activity.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No activities available.</p>
        )}
      </section>

      {/* Achievements */}
      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Achievements</h2>
        {achievementsLoading ? (
          <p className="text-gray-500 dark:text-gray-400">Loading achievements...</p>
        ) : achievementsError ? (
          <p className="text-red-500 dark:text-red-400">{handleError(achievementsError)}</p>
        ) : achievements?.length ? (
          <ul className="list-disc pl-5">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {achievement.title}: {achievement.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No achievements available.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

