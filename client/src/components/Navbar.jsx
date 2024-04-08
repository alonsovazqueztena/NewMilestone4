// Import the Link component from react-router-dom to handle routing
import { Link } from "react-router-dom";

// Define the Navbar functional component
export default function Navbar() {
  // Return statement contains the JSX for the Navbar
  return (
    // Use the <nav> element to define the navigation links area
    <nav>
      {/* Link components are used for navigation. 
          `to` prop specifies the route to navigate to when the link is clicked. */}
      <Link to='/'>Home</Link> {/* Link to the Home page */}
      <Link to='/register'>Register</Link> {/* Link to the Register page */}
      <Link to='/login'>Login</Link> {/* Link to the Login page */}
    </nav>
  );
}
