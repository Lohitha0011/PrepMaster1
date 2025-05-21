import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new createRoot API
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App'; // Your main App component

// Step 1: Create a QueryClient instance
const queryClient = new QueryClient();

// Step 2: Render your application using createRoot
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    {/* Wrap the entire App component inside BrowserRouter */}
    <QueryClientProvider client={queryClient}>
      
        <App />
      
    </QueryClientProvider>
  </React.StrictMode>
  
);
