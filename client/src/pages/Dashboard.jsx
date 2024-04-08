// Import useContext hook from React to access the context
import { useContext } from "react";
// Import UserContext to access user data within this component
import { UserContext } from "../../context/userContext";

// Define the Dashboard functional component
export default function Dashboard() {
    // Use useContext hook to access the `user` object from UserContext
    const {user} = useContext(UserContext);

    // Return the JSX for rendering the Dashboard component
    return (
        <div>
            <h1>Dashboard</h1>
            {/* Conditional rendering to display user's name if user data exists */}
            {!!user && (<h1>Hi, {user.name}!</h1>)}
        </div>
    );
}
