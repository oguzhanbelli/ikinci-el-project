/* eslint-disable no-undef */
import axios from 'axios';
import Cookies from 'js-cookie';
// Add a request interceptor

// axios.interceptors.request.use(
//   function (config) {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
//     const token = localStorage.getItem('access-token');

//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = token;
//     }
//     console.log(config);
//     return config;
   
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
export const fetchRegister = async ({email,password}) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/local/register`,{
      username:email,
      email:email,
      password:password}
  );
  return data;
};

export const fetchMe = async () => {
  const token = Cookies.get('Auth_Token');
  const {data} = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users/me`,{headers:{'Authorization':`Bearer ${token}`}}
  );

  return data;
};


export const fetchLogin = async ({identifier,password}) => {
  const {data} = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/local`,
    {
      identifier:identifier,
      password:password}
  );
  return data;


};
export const fetchUsingStatuses = async () => {
  const token = Cookies.get('Auth_Token');
  try{
    const {data,status} = await axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/using-statuses`,{headers:{'Authorization':`Bearer ${token}`}}
    );
  
    return status === 200 ? data : data.message;
  }catch(e){
    console.log(e.message);
  }
};
export const fetchBrands = async () => {
  const token = Cookies.get('Auth_Token');
  try{
    const {data,status} = await axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/brands`,{headers:{'Authorization':`Bearer ${token}`}}
    );
  
    return status === 200 ? data : data.message;
  }catch(e){
    console.log(e.message);
  }
};

export const fetchColors = async () => {
  const token = Cookies.get('Auth_Token');
  try{
    const {data,status} = await axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/colors`,{headers:{'Authorization':`Bearer ${token}`}}
    );
  
    return status === 200 ? data : data.message;
  }catch(e){
    console.log(e.message);
  }
};
export const fetchMyOffers = async (id) => {
  const token = Cookies.get('Auth_Token');
  try{
    const {data,status} = await axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/offers?users_permissions_user=${id}`,{headers:{'Authorization':`Bearer ${token}`}}
    );
  
    return status === 200 ? data : data.message;
  }catch(e){
    console.log(e.message);
  }
};

export const fetchAddProduct = async (formData) => {
  console.log(formData);
  const token = Cookies.get('Auth_Token');
  try{
    const {data,status} = await axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}/products`,formData,{headers:{'Authorization':`Bearer ${token}`}}
    );
  
    return status === 200 ? data : data.message;
  }catch(e){
    console.log(e.message);
  }
};
export const addOffer = async (input) => {
  const token = Cookies.get('Auth_Token');
  const {data} = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/offers`,input,{headers:{'Authorization':`Bearer ${token}`}}

  );

  return data;
  
};
export const confirmMyProductsOffer = async (id,statusOffer) => {
 
  const token = Cookies.get('Auth_Token');
  try{
    const {data,status} = await axios.put(
      `${process.env.REACT_APP_BASE_ENDPOINT}/offers/${id}`,statusOffer,{headers:{'Authorization':`Bearer ${token}`}}
    );
  
    return status === 200 ? data : data.message;
  }catch(e){
    console.log(e.message);
  }
};
export const removeOffer = async (id) => {
  const token = Cookies.get('Auth_Token');
  const {data} = await axios.delete(
    `${process.env.REACT_APP_BASE_ENDPOINT}/offers/${id}`,{headers:{'Authorization':`Bearer ${token}`}}

  );

  return data;
  
};

export const fetchMyProductOffers = async (id) => {
  const token = Cookies.get('Auth_Token');
  try{
    const {data,status} = await axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/products?users_permissions_user=${id}`,{headers:{'Authorization':`Bearer ${token}`}}
    );
  
    return status === 200 ? data : data.message;

    
  }catch(e){
    console.log(e.message);
  }
};


export const buyProduct = async (id,input) => {
  const token = Cookies.get('Auth_Token');
 
  try{
    const {data,status} = await axios.put(
      `${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`,input,{headers:{'Authorization':`Bearer ${token}`}}
  
    );
    return status === 200 ? data : data.message;

    
  }catch(e){
    console.log(e.message);
  }
};

export const fetchOneProduct = async (id) => {

  try{
    
    const {data,status} = await axios.get(
      `${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`,
     
    );
    return status === 200 ? data : null;

    
  }catch(e){
    return e.response.status;
  }
  
    
};




export const fetchAllCategories = async () => {

  const {data} = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/categories`,
   
  );
  return data;

  
};
export const fetchAllProducts = async () => {

  const {data} = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products`,
     
  );
  return data;
  
    
};
  
  