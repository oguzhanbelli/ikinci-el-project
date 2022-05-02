/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function BuyModal({title,content,setShowBuyModal,method,parameter,toast}) {
  console.log(parameter);

  const closeModal = () => {
    setShowBuyModal(false);
  };
  const sendData = () => {
    
    // method(parameter);
    // setShowBuyModal(false);
    toast(<div className='flex justify-between items-center'>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" fill="#46AF32"/>
        <path d="M9.41996 14.891C9.15476 14.8909 8.90048 14.7855 8.71299 14.598L6.31797 12.203C6.22246 12.1108 6.14632 12.0004 6.09391 11.8784C6.0415 11.7564 6.01389 11.6252 6.01273 11.4924C6.01158 11.3596 6.03685 11.2279 6.08713 11.105C6.13742 10.9822 6.21169 10.8705 6.30558 10.7766C6.39947 10.6827 6.51111 10.6085 6.63401 10.5582C6.75691 10.5079 6.88862 10.4826 7.0214 10.4837C7.15418 10.4849 7.28538 10.5125 7.40739 10.5649C7.52939 10.6173 7.63972 10.6935 7.73197 10.789L9.41898 12.476L14.355 7.53999C14.4472 7.44448 14.5576 7.3683 14.6796 7.31589C14.8016 7.26349 14.9328 7.2359 15.0656 7.23475C15.1984 7.23359 15.33 7.2589 15.4529 7.30918C15.5758 7.35946 15.6875 7.4337 15.7813 7.5276C15.8752 7.62149 15.9495 7.73316 15.9998 7.85606C16.0501 7.97895 16.0754 8.11061 16.0743 8.24338C16.0731 8.37616 16.0455 8.5074 15.9931 8.6294C15.9407 8.75141 15.8645 8.86174 15.769 8.95399L10.126 14.597C9.93887 14.7847 9.68495 14.8904 9.41996 14.891Z" fill="white"/>
      </svg>

      <p className='w-full ml-[10px]'>Satın alındı</p>
    </div>);

  };
  return (
    <div className="absolute md:top-[50px] md:justify-center md:items-center flex flex-col overflow-x-hidden   overflow-y-auto md:fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative  md:my-6 mx-auto my-auto w-[355px] h-[171px] md:w-[400px] md:h-[200px] ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative    flex flex-col w-full  bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-center  rounded-t ">
            <h3 className="text-[1.125em] md:text-[1.563em] mt-[13px] md:mt-[20px]  text-[#525252] font-bold ">
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