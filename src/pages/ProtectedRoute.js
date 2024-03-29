import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
// eslint-disable-next-line react/prop-types
function ProtectedRoute({children}) {
  const { loggedIn,user } = useAuth();
 
  return !user && !loggedIn ? children : <Navigate to={'/'} replace/>; 
   

}

export default ProtectedRoute;
