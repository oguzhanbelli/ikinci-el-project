
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function AddProduct() {

  const navigate = useNavigate();
  const {loggedIn} = useAuth();

  useEffect(()=> {
    if(!loggedIn){
      return navigate('/');
    }
  },[loggedIn]);

 
  

  return (
    <div className="w-screen h-screen   bg-[#F2F2F2] flex flex-col items-center pb-3 overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col  lg:flex-row mt-[20px] w-[355px] h-full lg:w-[800px] lg:h-[500px] xl:w-[1480px] xl:h-[812px] bg-white rounded-[8px] ">
     
      </div>
    </div>
  );
}

export default AddProduct;