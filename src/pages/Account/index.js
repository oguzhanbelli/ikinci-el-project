import React, { useRef, useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';
import { useProduct } from '../../contexts/ProductContext';
import Tabs from '../../components/Tabs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserIcon } from '../../constants/Icon';


function Account() {
  const buyModalRef = useRef();
  const { user,logout } = useAuth();
  const [showBuyModal, setShowBuyModal] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const { allCategories, setActiveCategory } = useProduct();

  const contextClass = {
    success: 'bg-blue-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-[#F1FFF0]',
    dark: 'bg-white-600 font-gray-300',
  };

  // eslint-disable-next-line no-unused-vars

  return (
    <div className="w-screen h-screen   bg-[#F2F2F2] flex flex-col lg:flex-col items-center  overflow-x-hidden lg:overflow-x-scroll justify-center lg:justify-start">
      <ToastContainer
        className={'fixed right-0 top-24'}
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        toastClassName={({ type }) =>
          contextClass[type || 'default'] +
          ' relative flex p-1 min-h-10 h-[60px] w-[321px] rounded-md justify-between overflow-hidden cursor-pointer shadow-lg'
        }
        bodyClassName={'bg-[#F1FFF0] text-[#46AF32]'}
      />
      <div className="flex flex-row   xl:flex-row mt-[20px] w-[355px] h-[70px]  lg:w-[800px] lg:h-[300px] 2xl:w-[1480px]  xl:h-[70px] bg-white rounded-[8px] ">
        <div className="flex justify-center items-center ml-[26px]">
          <UserIcon/>

          <p className="ml-[10px] text-[0.938em] text-[#525252] ">
            {user.email}
          </p>
        </div>
        <div className='flex justify-end items-center w-full mr-[10px] text-[0.938em] font-normal'>
          <button onClick={() => logout()} className='bg-[#4B9CE2] w-[86px] h-[30px] rounded-[8px] text-white'>Çıkış Yap</button>

        </div>
      </div>
      <div  className="flex flex-col  xl:flex-col mt-[10px] hide-scrollbar w-[360px] items-center h-auto my-auto lg:w-[800px] md:w-[430px] lg:h-full xl:w-[1000px] 2xl:w-[1480px] xl:h-[850px] overflow-scroll bg-white rounded-[8px] ">
        <Tabs
          ref={buyModalRef}
          
          color={'red'}
          showBuyModal={showBuyModal}
          setShowBuyModal={setShowBuyModal}
        />

        {showBuyModal ? (
          <div className="opacity-[0.7] fixed inset-0 z-40 bg-[#4B9CE2]"></div>
        ) : null}
      </div>
    </div>
  );
}

export default Account;
