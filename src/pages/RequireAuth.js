/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RequireAuth = ({children,redirectTo}) => {
  const {loggedIn} = useAuth();
  return loggedIn ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;