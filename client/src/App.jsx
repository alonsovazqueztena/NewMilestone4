// Import the main stylesheet for the application
import './App.css';
// Import Routes and Route components from react-router-dom for routing
import { Routes, Route } from 'react-router-dom';
// Import Navbar component to be used across all pages
import Navbar from '../src/components/Navbar';
// Import page components
import Home from '../src/pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
// Import axios for making HTTP requests
import axios from 'axios';
// Import Toaster component for showing toast notifications
import { Toaster } from 'react-hot-toast';
// Import UserContextProvider to wrap around the app for user context management
import { UserContextProvider } from '../context/userContext';

// Set default configurations for axios
axios.defaults.baseURL = 'http://localhost:8000'; // Base URL for all axios requests
axios.defaults.withCredentials = true; // Allows for credentials to be sent with requests

// Define the App functional component
function App() {
  return (
    // Wrap the application inside the UserContextProvider to manage user state globally
    <UserContextProvider>
      {/* Navbar component that appears on every page */}
      <Navbar />
      {/* Toaster component for displaying notifications */}
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      {/* Routes define the different pages of the application */}
      <Routes>
        {/* Define the route for the Home page */}
        <Route path='/' element={<Home />} />
        {/* Define the route for the Register page */}
        <Route path='/register' element={<Register />} />
        {/* Define the route for the Login page */}
        <Route path='/login' element={<Login />} />
        {/* Define the route for the Dashboard page */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  );
}

// Export the App component as the default export of this module
export default App;
