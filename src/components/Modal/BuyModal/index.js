/* eslint-disable react/prop-types */
import React from 'react';

function BuyModal({title,content,setShowBuyModal,method,parameter}) {
  console.log(parameter);

  const closeModal = () => {
    setShowBuyModal(false);
  };
  const sendData = () => {
    
    method(parameter);
    setShowBuyModal(false);
  };
  return (
    <div className="absolute md:top-[50px] md:justify-center md:items-center flex flex-col overflow-x-hidden   overflow-y-auto md:fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative  md:my-6 mx-auto my-auto w-[355px] h-[171px] md:w-[400px] md:h-[200px] ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative  dark:bg-gray-700  flex flex-col w-full  bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-center  rounded-t ">
            <h3 className="text-[1.125em] md:text-[1.563em] mt-[13px] md:mt-[20px]  text-[#525252] font-bold dark:text-white">
              {title}
            </h3>
          </div>
          {/*body*/}
          <div className='w-full h-full md:h-full flex flex-col bg-white rounded-[10px]  '>
            <div className='flex items-center justify-center w-full '>
              
              <p className="text-[#555555] text-[0.938em] md:text-[0.938em] mt-[12px]  font-normal  ">
                {content}
              </p>
       
            

            </div>
            <div className='flex w-full justify-center  mt-[20px] mb-[20px]'>
              <button onClick={()=> closeModal()}  className='w-[172px] lg:w-[150] h-[45px] cursor-pointer bg-[#F0F8FF]  text-[#4b9ce2]  ml-[10px] rounded-[8px]'>Vazgeç</button>
              <button onClick={() => sendData()}  className='w-[172px] lg:w-[150] h-[45px] cursor-pointer bg-[#4b9ce2] ml-[10px] mr-[10px] text-white rounded-[8px]'>Satın Al</button>
            </div>


              

          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyModal;