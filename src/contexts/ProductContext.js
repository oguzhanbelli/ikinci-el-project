import { createContext, useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAllCategories, fetchAllProducts, fetchMyOffers } from '../api';
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
  const [activeCategory, setActiveCategory] = useState('all');
  useEffect(() => {
    if (searchParams.get('category') !== 'all' && activeCategory) {
      getProductsWithCategory();
    }
    
  },[]);
  useEffect(() => {
    if (searchParams.get('category') !== 'all' ) {
      getProductsWithCategory();
    }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get('category') === 'all' ) {
      getProducts();
    }
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      try {
        getMyOffers();
        getCategories();
       
      
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const getCategories = async () => {
    const data = await fetchAllCategories();
    console.log(data);
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
    console.log(data);
    setAllProducts(data);
    setLoading(false);
  };

  const getMyOffers = async () => {
    const data = await fetchMyOffers(user.id);
    setMyOffers(data);
  };
  // const offerRemove = async () => {
  //   const data = await fetchMyOffers(user.id);
  //   setMyOffers(data);
  // };
  const values = {
    allCategories,
    getCategories,
    getMyOffers,
    myOffers,
    loading,
    activeCategory,
    setActiveCategory,
    getProductsWithCategory,
    getProducts,
    allProducts,
  };

 
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
