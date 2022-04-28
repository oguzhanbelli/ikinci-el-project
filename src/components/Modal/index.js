/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, {  useState } from 'react';
import { useFormik } from 'formik';
import { addOffer } from '../../api';
import { useAuth } from '../../contexts/AuthContext';
// eslint-disable-next-line no-unused-vars
let offerSubmit;
function Modal({state,setShowDetailModal}) {

  const [checked,setChecked] = useState(false);
  const {user } = useAuth();

  const modalClose = ( ) => {
    setShowDetailModal(false);
  };


  
  const formik = useFormik({
    initialValues: {
      offerPrice: '',
      
    },

    onSubmit: async (values) => {
     
      offerSubmit = {product:state.id,users_permissions_user:user.id,offerPrice:values.offerPrice};
      
      

      addOffer(offerSubmit);
      modalClose();


 
    },
  });

  
 

  return (
    <>
      <div className="absolute top-[10px] md:justify-center md:items-center flex flex-col overflow-x-hidden  overflow-y-auto md:fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  md:my-6 mx-auto w-[355px] h-[407px] md:w-[480px] md:h-[461px] ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative  dark:bg-gray-700  flex flex-col w-full  bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between  rounded-t ">
              <h3 className="text-[1.125em] md:text-[1.563em] mt-[13px] md:mt-[20px] ml-[20px] text-[#525252] font-bold dark:text-white">
                    Teklif Ver
              </h3>
              <button
                onClick={() => modalClose()}
                className=" bg-transparent border-0 mt-[16.39px] md:mt-[30px] mr-[19px] text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              
              >
                <svg className='w-[11.83px] h-[11.83px]  md:w-[18px] md:h-[18px]' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <path d="M0.706591 16.9703C0.519054 16.7828 0.413697 16.5285 0.413697 16.2632C0.413697 15.998 0.519054 15.7437 0.706591 15.5561L15.5558 0.706893C15.7434 0.519357 15.9977 0.414 16.2629 0.414C16.5282 0.414 16.7825 0.519357 16.97 0.706893C17.1576 0.89443 17.2629 1.14878 17.2629 1.414C17.2629 1.67922 17.1576 1.93357 16.97 2.12111L2.1208 16.9703C1.93327 17.1579 1.67891 17.2632 1.4137 17.2632C1.14848 17.2632 0.894127 17.1579 0.706591 16.9703V16.9703Z" fill="#525252"/>
                  <path d="M0.706562 0.707659C0.894098 0.520122 1.14845 0.414765 1.41367 0.414765C1.67888 0.414765 1.93324 0.520122 2.12078 0.707659L16.97 15.5569C17.1576 15.7444 17.2629 15.9988 17.2629 16.264C17.2629 16.5292 17.1576 16.7836 16.97 16.9711C16.7825 17.1587 16.5281 17.264 16.2629 17.264C15.9977 17.264 15.7433 17.1587 15.5558 16.9711L0.706562 2.12187C0.519025 1.93434 0.413668 1.67998 0.413668 1.41476C0.413668 1.14955 0.519025 0.895195 0.706562 0.707659V0.707659Z" fill="#525252"/>

                  <defs>
                    <clipPath id="clip0_1_2">
                      <rect width="17.678" height="17.678" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>

              </button>
            </div>
            {/*body*/}
            <div className='w-full h-[407px] md:h-[461px] flex flex-col bg-white rounded-[10px]  '>
              <div className='w-[315px] h-[45px] md:w-[441px] md:h-[60px] flex flex-row bg-[#F0F8FF] mx-auto mt-[17px] rounded-[10px] '>
                <div className='w-[50px] h-[50px] mt-[4px] ml-[4px] md:mt-[6px] md:ml-[6px] '>
                  <img className='w-[36px] h-[37px] md:w-[50px] md:h-[50px] rounded-[8px]'  src={`${process.env.REACT_APP_BASE_ENDPOINT}${state?.image?.url}`}/>
                </div>
                <div className='mt-[6px] mb-[5px] ml-[5px]  md:mt-[8px] md:ml-[7px] w-[136px] h-[34px] md:mb-[18px] flex flex-wrap text-ellipsis overflow-hidden  '>
                  <p className='font-normal  text-[#555555] text-[0.813em] md:text-[0.813em]  '>{state?.name}</p>
                </div>
                <div className=' flex  items-center     w-full relative'>
                  <p className="text-[#525252] text-[0.938em] md:text-[1.125em]  font-bold  absolute  right-[11px]  ">
                    {state?.price},00 TL
                  </p>
                </div>

              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className={` w-[315px] h-[45px] md:w-[441px] md:h-[45px] flex flex-row ${checked ? 'bg-[#F0F8FF] border-[1px] cursor-pointer border-[#4B9CE2]' : 'bg-[#F0F8FF]'} mx-auto mt-[10px] md:mt-[17px] rounded-[10px]`}>
                  <label onClick={() => setChecked(true)} className='flex items-center ml-[10px] w-full cursor-pointer  peer-checked:bg-red-300 '>
                    <input type={'radio'} defaultChecked={true} value={'20'} name="offer" className="option-input radio peer" />
                    <p className={`${checked ? ' text-[#4B9CE2]':'text-[#525252]'} text-[0.938em]  font-normal ml-[5px]`}>
                      %20'si Kadar Teklif Ver
                    </p>

                  </label>


                </div>
                <div className={`w-[315px] h-[45px] md:w-[441px] md:h-[45px]  cursor-pointer  flex flex-row ${checked ? 'bg-[#F0F8FF] border-[1px]  border-[#4B9CE2]' : 'bg-[#F0F8FF]'} mx-auto mt-[10px] md:mt-[17px] rounded-[10px]`}>
                  <label onClick={() => setChecked(true)} className='flex items-center w-full cursor-pointer  ml-[10px] peer-checked:bg-red-300 '>
                    <input type={'radio'}  value={'20'} name="offer" className="option-input radio peer" />
                    <p className={`${checked ? ' text-[#4B9CE2]':'text-[#525252]'}  text-[0.938em] font-normal ml-[5px]`}>
                      %30'si Kadar Teklif Ver
                    </p>

                  </label>


                </div>
                <div className={`w-[315px] h-[45px] md:w-[441px] md:h-[45px] cursor-pointer flex flex-row ${checked ? 'bg-[#F0F8FF] border-[1px] border-[#4B9CE2]' : 'bg-[#F0F8FF]'} mx-auto mt-[10px] md:mt-[17px] rounded-[10px]`}>
                  <label onClick={() => setChecked(true)} className='flex items-center ml-[10px] w-full cursor-pointer peer-checked:bg-red-300 '>
                    <input type={'radio'}  value={'20'} name="offer" className="option-input radio peer" />
                    <p className={`${checked ? ' text-[#4B9CE2]':'text-[#525252]'} text-[0.938em]  font-normal ml-[5px]`}>
                      %40'si Kadar Teklif Ver
                    </p>

                  </label>


                </div>

                <div className={`w-[315px] h-[45px] md:w-[441px] md:h-[45px] flex flex-row mx-auto mt-[15px] rounded-[10px]`}>
                  <div className="mt-1 w-full  relative rounded-[8px] shadow-sm bg-[#F4F4F4]">
                  
                    <input
                      type="number"
                      name="offerPrice"
                      value={formik.values.offerPrice}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={checked}
                      id="offerPrice"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Teklif Belirle"
                    />
                    <div className="absolute inset-y-3 right-0 flex items-center">
                      <label htmlFor="currency" className="sr-only">
            Currency
                      </label>
                      <span
                        id="currency"
                        name="currency"
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                      >
                        TL
                      </span>
                    </div>
                  </div>
                </div>

                <div className='mt-[20px]'>
                  <button type='submit' className='w-[315px] md:w-[315px] h-[45px] cursor-pointer bg-[#4B9CE2] text-white rounded-[8px]'>Onayla</button>

                </div>

              </form>
              

            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Modal;