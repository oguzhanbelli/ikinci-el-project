/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { buyProduct, fetchAllCategories, fetchAllProducts, fetchMyOffers, fetchOneProduct,removeOffer } from '../api';
// import Logo from '../constants/Logo';
import { useAuth } from './AuthContext';
// import { getPermRequest, getPermRequests, getUser } from "../api";
const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const {user} = useAuth();
  
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [myOffers, setMyOffers] = useState([]);
  let [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (searchParams.get('category') !== 'all' ) {
      getProductsWithCategory();
   
    }
    
  });
  useEffect(() => {
    if (searchParams.get('category') !== 'all' ) {
      getProductsWithCategory();
 
    }
  }, [searchParams]);
  

  useEffect(() => {
    if (searchParams.get('category') === 'all' || activeCategory === 'all'  ) {
      getProducts();
      
    }
  }, [activeCategory]);

  useEffect(() => {
    (async () => {
      try {
        getCategories();
        setLoading(false);
       
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const getCategories = async () => {
    const data = await fetchAllCategories();
  
    setAllCategories(data);
  };
  const getProductsWithCategory = async () => {
    
  
    const data = allCategories.filter(
      (item) => item.name === searchParams.get('category')
    );
    
    setAllProducts(data[0]?.products);

    setLoading(false);

  };
  const getProducts = async () => {
    setLoading(true);
    
    const data = await fetchAllProducts();

    setAllProducts(data);
    setLoading(false);
  };

  const getOneProduct = async (id) => {
    setLoading(true);

    const data = await fetchOneProduct(id);
   
    getMyOffers();
 
    return data;
    
  };
  const getMyOffers = async () => {
    const data = await fetchMyOffers(user?.id);
    setMyOffers(data);
    setLoading(false);
   
  };
  const addOffer = async () => {


    const data = await addOffer();
    setMyOffers([...myOffers,...data]);
   
    return data;
  };

  const removeOfferProduct  =async (id) =>{
    const data = await removeOffer(id);
    return data;
  };
  const buyProductDetail  =async (id) =>{
    const data = await buyProduct(id,{isSold:true});
    return data;
  };
  const values = {
    allCategories,
    getCategories,
    getMyOffers,
    removeOfferProduct,
    myOffers,
    loading,
    activeCategory,
    setActiveCategory,
    getOneProduct,
    buyProductDetail,
    getProductsWithCategory,
    getProducts,
    addOffer,
    allProducts,
  };

 
  


  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
