import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/connexion" />
    }

    return children;

}

export default PrivateRoute;