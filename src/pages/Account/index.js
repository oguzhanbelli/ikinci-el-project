
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import { useProduct } from '../../contexts/ProductContext';
import Tabs from '../../components/Tabs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Account() {


  const navigate = useNavigate();
  const { loggedIn,user } = useAuth();
  const [showBuyModal, setShowBuyModal] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const {allCategories,setActiveCategory} = useProduct(); 
  
  const contextClass = {
    success: 'bg-blue-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-[#F1FFF0]',
    dark: 'bg-white-600 font-gray-300',
  };


  // eslint-disable-next-line no-unused-vars
  const handleHome = async() => {
    await setActiveCategory('all');
    navigate('/');
  };




  useEffect(() => {

    if (!loggedIn) {
      return navigate('/');
    }
    
  }, [loggedIn]);
  return (
    <div className="w-screen h-screen   bg-[#F2F2F2] flex flex-col lg:flex-col items-center  overflow-x-hidden lg:overflow-x-scroll justify-center lg:justify-start">
      <ToastContainer className={'fixed right-0 top-24'} autoClose={2000} hideProgressBar={true} closeButton={false} toastClassName={({ type }) => contextClass[type || 'default'] + 
        ' relative flex p-1 min-h-10 h-[60px] w-[321px] rounded-md justify-between overflow-hidden cursor-pointer shadow-lg'
      } bodyClassName={'bg-[#F1FFF0] text-[#46AF32]'}/>
      <div className="flex flex-row   xl:flex-row mt-[20px] w-[355px] h-[70px]  lg:w-[800px] lg:h-full xl:w-[1480px] xl:h-[70px] bg-white rounded-[8px] ">
        <div className='flex justify-center items-center ml-[26px]'>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z" fill="#DDDDDD"/>
            <path d="M19.002 7.21201C17.6721 7.21201 16.3721 7.60636 15.2664 8.3452C14.1606 9.08404 13.2988 10.1342 12.7898 11.3628C12.2809 12.5915 12.1478 13.9435 12.4072 15.2478C12.6667 16.5521 13.307 17.7502 14.2474 18.6906C15.1878 19.631 16.3859 20.2714 17.6902 20.5308C18.9945 20.7903 20.3465 20.6571 21.5752 20.1482C22.8038 19.6393 23.854 18.7774 24.5928 17.6717C25.3316 16.5659 25.726 15.2659 25.726 13.936C25.7215 12.1541 25.0116 10.4464 23.7516 9.18637C22.4916 7.92635 20.7839 7.21649 19.002 7.21201V7.21201Z" fill="#F5F5F5"/>
            <path d="M30.537 26.032C30.3589 25.597 30.1325 25.1834 29.862 24.799C29.2088 23.8189 28.3559 22.9878 27.3591 22.3603C26.3623 21.7329 25.2442 21.3231 24.078 21.158C23.7785 21.1202 23.4755 21.1931 23.226 21.363C21.9988 22.26 20.5181 22.7434 18.998 22.7434C17.4779 22.7434 15.9972 22.26 14.77 21.363C14.6496 21.2723 14.5119 21.2073 14.3653 21.172C14.2187 21.1367 14.0665 21.132 13.918 21.158C12.7507 21.3195 11.6311 21.7277 10.6338 22.3555C9.63654 22.9833 8.78436 23.8163 8.13399 24.799C7.86954 25.1871 7.64349 25.6001 7.459 26.032C7.42014 26.1209 7.40251 26.2176 7.40755 26.3144C7.41258 26.4113 7.44013 26.5056 7.48799 26.59C7.72826 26.9974 7.99309 27.3898 8.28099 27.765C8.68525 28.3142 9.13916 28.825 9.637 29.291C10.0667 29.7054 10.5173 30.0975 10.987 30.466C13.2962 32.1818 16.0966 33.1083 18.9735 33.1083C21.8504 33.1083 24.6508 32.1818 26.96 30.466C27.4365 30.1059 27.8876 29.7133 28.31 29.291C28.798 28.8166 29.2496 28.3062 29.661 27.764C29.9519 27.391 30.2169 26.9984 30.454 26.589C30.5222 26.5152 30.5666 26.4226 30.5814 26.3233C30.5962 26.2239 30.5807 26.1224 30.537 26.032Z" fill="#F5F5F5"/>
          </svg>

          <p className='ml-[10px] text-[0.938em] text-[#525252] '>
            {user.email}
          </p>

        </div>
      </div>
      <div className="flex flex-col  xl:flex-col mt-[10px] w-[360px] items-center h-auto my-auto lg:w-[800px] lg:h-full xl:w-[1480px] xl:max-h-[850px] overflow-scroll bg-white rounded-[8px] ">
        
        <div>
          <Tabs color={'red'} showBuyModal={showBuyModal} setShowBuyModal={setShowBuyModal} />
          
          
        </div> 
        {showBuyModal ? <div className="opacity-[0.7] fixed inset-0 z-40 bg-[#4B9CE2]">
             
        </div> : null}
        


       

      




      </div>
    </div>
  );
}

export default Account;