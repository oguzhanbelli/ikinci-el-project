/* eslint-disable no-undef */
import axios from 'axios';

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
export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/local/register`,
    input
  );

  return data;
};

export const fetchMe = async () => {
  const token = localStorage.getItem('access-token');
  const {data} = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users/me`,{headers:{'Authorization':`Bearer ${token}`}}
  );

  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,
    {
      refresh_token: localStorage.getItem('refresh-token'),
    }
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

 
  


 
  // login();
    
  


};

