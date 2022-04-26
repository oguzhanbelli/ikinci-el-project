/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect, useContext } from 'react';
import { fetchMe, fetchLogout } from '../api';
import Cookies from 'js-cookie';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        console.log(me);
        setLoggedIn(true);
        setUser(me);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);
  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);

    Cookies.set('Auth_Token', data.jwt);
    
  };
  const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);
    await fetchLogout();

    Cookies.remove('Auth_Token');
    callback();
  };

  const values = {
    loggedIn,
    user,
    login,
    logout
  };

  if (loading) {
    return <div> Loading... </div>;
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };