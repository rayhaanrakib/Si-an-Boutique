import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return <div className='w-full min-h-screen flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/dJh8rZf/giphy.gif" alt="" /></div>
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;