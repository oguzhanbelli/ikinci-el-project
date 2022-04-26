import { createContext, useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAllCategories, fetchAllProducts } from '../api';
// import { getPermRequest, getPermRequests, getUser } from "../api";
const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  let [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState();
  useEffect(() => {
    if (searchParams.get('category') !== 'all') {
      getProductsWithCategory();
    }
  });

  useEffect(() => {
    if (searchParams.get('category') === 'all' ) {
      getProducts();
    }
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      try {
      
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
    if (searchParams.get('category') === 'all' ||!searchParams.get('category')) {
      getProducts();
      setLoading(false);
    } else {
      setAllProducts(data[0]?.products);
      setLoading(false);
    }
    setLoading(false);
  };
  const getProducts = async () => {
    
    const data = await fetchAllProducts();
    console.log(data);
    setAllProducts(data);
    setLoading(false);
  };

  const values = {
    allCategories,
    getCategories,
    loading,
    activeCategory,
    setActiveCategory,
    getProductsWithCategory,
    getProducts,
    allProducts,
  };

  if (loading) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div> Loading...</div>;
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
