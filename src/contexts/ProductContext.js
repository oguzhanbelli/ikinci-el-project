/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import {  buyProduct, fetchAddProduct, fetchAllCategories, fetchAllProducts, fetchBrands, fetchColors, fetchOneProduct, fetchUsingStatuses } from '../api';
// import Logo from '../constants/Logo';

// import { getPermRequest, getPermRequests, getUser } from "../api";
const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const [allStatuses, setAllStatuses] = useState([]);
  
  const [allColors, setAllColors] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
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
    try {
      const data = await fetchAllProducts();
      setAllProducts(data);
      setLoading(false);
      return data;
     
     
    } catch (e) {
      setLoading(false);
    }
  };
  
  const getColors = async () => {
    setLoading(true);
   
    const data = await fetchColors();
    const filteredData= data.map(item => {return {label:item.name,value:item.name};});
    setAllColors(filteredData);
    setLoading(false);
  };
  const getBrands = async () => {
    setLoading(true);
   
    const data = await fetchBrands();
    const filteredData= data.map(item => {return {label:item.name,value:item.name};});
    setAllBrands(filteredData);
    setLoading(false);
  };
  const getUsingStatuses = async () => {
    setLoading(true);
   
    const data = await fetchUsingStatuses();
  
    const filteredData= data.map(item => {return {label:item.name,value:item.name};});
    
    setAllStatuses(filteredData);
    setLoading(false);
  };


  const addProduct = async (formData) => {
    setLoading(true);
   
    await fetchAddProduct(formData);
    
 
  
    setLoading(false);

  };






  const getOneProduct = async (id) => {
  
    try {
      const data = await fetchOneProduct(id);
      setAllProducts(data);
      console.log(data);
      setLoading(false);
      return data;
     
     
    } catch (e) {
      setLoading(false);
    }
    
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
    allColors,
    loading,
    setLoading,
    allBrands,
    getBrands,
    addProduct,
    activeCategory,
    setActiveCategory,
    getOneProduct,
    allStatuses,
    getUsingStatuses,
    getColors,
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
