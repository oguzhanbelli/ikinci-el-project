/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState, useEffect, useContext } from 'react';
import {  fetchMyOffers, removeOffer, addOffer } from '../api';
// import Logo from '../constants/Logo';
import { useAuth } from './AuthContext';
// import { getPermRequest, getPermRequests, getUser } from "../api";
const OfferContext = createContext();

// eslint-disable-next-line react/prop-types
const OfferProvider = ({ children }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const [myOffers, setMyOffers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
    
       
        getMyOffers();
        
      } catch (e) {
        setLoading(false);
      }
    })();
  }, [loading]);
  const getMyOffers = async () => {
    const data = await fetchMyOffers(user?.id);
    setMyOffers(data);
    setLoading(false);
  };

  const addOfferProduct = async (input) => {
    setLoading(true);
    const data = await addOffer(input);
    setLoading(false);
    setMyOffers([data,...myOffers]);
    return data;
  };

  const removeOfferProduct = async (id) => {
    setLoading(true);
    try {
      const data = await removeOffer(id);
      setMyOffers(myOffers.filter(item => item.id !== id));
      setLoading(false);
      return data;
     
     
    } catch (e) {
      setLoading(false);
    }
  };
 
  const values = {
    addOfferProduct,
    getMyOffers,
    removeOfferProduct,
    myOffers,
    loading,
    setLoading,
    
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <OfferContext.Provider value={values}>{children}</OfferContext.Provider>
  );
};

const useOffer = () => useContext(OfferContext);

export { OfferProvider, useOffer };
