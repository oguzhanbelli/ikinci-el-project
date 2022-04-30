/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import {  buyProduct, fetchAllCategories, fetchAllProducts, fetchOneProduct } from '../api';
// import Logo from '../constants/Logo';

// import { getPermRequest, getPermRequests, getUser } from "../api";
const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
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
  }, [loading]);

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
    setLoading(false);
    return data;
    
  };
  const buyProductDetail = async (id) => {
    setLoading(true);
    const data = await buyProduct(id, { isSold: true });
    setLoading(false);
    return data;
  };

  const values = {
    allCategories,
    getCategories,
    loading,
    setLoading,
    activeCategory,
    setActiveCategory,
    getOneProduct,
    buyProductDetail,
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
