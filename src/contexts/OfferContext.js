/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState, useEffect, useContext } from 'react';
import {  fetchMyOffers, removeOffer, addOffer, fetchMyProductOffers, confirmMyProductsOffer } from '../api';
// import Logo from '../constants/Logo';
import { useAuth } from './AuthContext';
// import { getPermRequest, getPermRequests, getUser } from "../api";
const OfferContext = createContext();

// eslint-disable-next-line react/prop-types
const OfferProvider = ({ children }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [myProductsOffers, setMyProductsOffers] = useState([]);
  const [myOffers, setMyOffers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
    
       
        getMyOffers();
        getMyProductsOffers();
        setLoading(false);
        
      } catch (e) {
        setLoading(false);
      }
    })();
  }, [loading]);
  const getMyOffers = async () => {
    
    try {
      const data = await fetchMyOffers(user?.id);
      setMyOffers(data);
      setLoading(false);
      return data;
     
     
    } catch (e) {
      setLoading(false);
    }
  };

  const addOfferProduct = async (input) => {
    setLoading(true);
    const data = await addOffer(input);
    setLoading(false);
    setMyOffers([data,...myOffers]);
    return data;
  };

  const getMyProductsOffers = async() =>{
 
    setLoading(true);
    try {
     
      const data = await fetchMyProductOffers(user?.id);
      const filteredData = data.filter(item => item.offers.length > 0);
      setMyProductsOffers(filteredData);
      setLoading(false);
      return data;
     
     
    } catch (e) {
      setLoading(false);
    }


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
  const confirmOffer = async (id,statusOffer) => {
    setLoading(true);
    try {
      const data = await confirmMyProductsOffer(id,statusOffer);
    
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
    getMyProductsOffers,
    myProductsOffers,
    confirmOffer,
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
