// Register.jsx

// Import useState hook from React for state management
import { useState } from "react";
// Import axios for making HTTP requests
import axios from 'axios';
// Import toast for displaying messages
import {toast} from 'react-hot-toast';
// Import useNavigate hook from react-router-dom for navigation
import { useNavigate } from 'react-router-dom';

// Define the Register functional component
export default function Register() {
  // useNavigate hook to programmatically navigate user
  const navigate = useNavigate();
  // useState hook to manage the form data state
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Function to handle user registration
  const registerUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const {name, email, password} = data; // Destructure the form data

    try {
      // Post registration data to the server
      const {data} = await axios.post('/register', {name, email, password});
      if (data.error) {
        // Display an error message if there is an error in the response
        toast.error(data.error);
      } else {
        // Clear form data and show success message
        setData({});
        toast.success('Registration successful. Welcome!');
        navigate('/login'); // Navigate to login page after successful registration
      }
    } catch (error) {
      // Log the error if the request fails
      console.log(error);
    }
  };

  // Return the JSX for rendering the Register component
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
