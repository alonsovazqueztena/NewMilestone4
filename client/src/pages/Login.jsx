// Login.jsx

// Import useState hook from React for state management
import { useState } from "react";
// Import axios for making HTTP requests
import axios from 'axios';
// Import toast from react-hot-toast for showing messages
import {toast} from 'react-hot-toast';
// Import useNavigate hook from react-router-dom for navigation
import {useNavigate} from 'react-router-dom';

// Define the Login functional component
export default function Login() {
  // useNavigate hook for redirecting the user
  const navigate = useNavigate();
  // useState hook to manage form data state
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // Function to handle user login
  const loginUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const {email, password} = data; // Destructure email and password from data state
    try {
      // Post login data to the server
      const {data} = await axios.post('/login', {email, password});
      if (data.error) {
        // Display an error message if there is an error in the response
        toast.error(data.error);
      } else {
        // Clear form data and navigate to the dashboard on success
        setData({});
        navigate('/dashboard');
      }
    } catch (error) {
      // Log the error if the request fails
      console.log(error);
    }
  };

  // Return the JSX for rendering the Login component
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
