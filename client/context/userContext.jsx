import axios from 'axios';
import { createContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const fetchedUserRef = useRef(false);
    useEffect(() => {
        if(!user && !fetchedUserRef.current) {
            axios.get('/profile').then(({data}) => {
                setUser(data);
                fetchedUserRef.current = true; // Indicate that user has been fetched
            })
        }
    }, [user]);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

// Define PropTypes for UserContextProvider
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};