/* eslint-disable no-undef */
import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const { state } = useLocation();
  console.log(state, 'state');
  return (
    <div className="w-screen h-screen  bg-[#F2F2F2] flex flex-col items-center pb-3 overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col lg:flex-row mt-[20px] w-[355px] h-auto xl:w-[1480px] xl:h-[769px] bg-white rounded-[8px] ">
        <div className="flex flex-col  lg:items-start lg:flex-row ">
          <img
            src={`${process.env.REACT_APP_BASE_ENDPOINT}${state.image.url}`}
            className="rounded-[8px]   w-[343px] h-[362px] md:w-[187px]  xl:w-[700px] xl:h-[737px] mx-[6px] xl:ml-[15px]  mt-[6px] xl:mt-[16px] bg-gray-200"
          />

          <div className="lg:mt-[30px] lg:ml-[60px] ml-[10px] ">
            <h1 className="text-[1.125em] lg:text-[2.125em] text-[#555555] font-normal mt-[10px]  ">{state.name}</h1>
            <div className='mt-[10px] flex lg:hidden'>
              <p className="text-[#525252]  text-[1.25em] lg:text-[1.563em] font-bold flex w-[200px] text-left ">
                {state.price},00 TL
              </p>
            </div>
            <div className="flex flex-row justify-between w-[200px]  text-center">
              <div className="flex flex-col">
                <div className="flex justify-between w-[250px] mt-[25px] ">
                  <p className="text-[#525252] text-[0.938em] font-bold flex ">
                    Marka :
                  </p>
                  <p className="text-[#525252] text-[0.938em] font-normal flex w-[100px] text-left ">
                    {state.brand}
                  </p>
                </div>
                <div className="flex justify-between w-[250px] mt-[20px]">
                  <p className="text-[#525252] text-[0.938em] font-bold flex ">
                    Renk :
                  </p>
                  <p className="text-[#525252] text-[0.938em] font-normal flex w-[100px] text-left  ">
                    {state.color}
                  </p>
                </div>
                <div className="flex justify-between w-[250px] mt-[20px]">
                  <p className="text-[#525252] text-[0.938em] font-bold flex ">
                    Kullanım Durumu :
                  </p>
                  <p className="text-[#525252] text-[0.938em] font-normal flex w-[100px] text-left ">
                    {state.status}
                  </p>
                </div>
                <div className='mt-[30px] hidden lg:flex'>
                  <p className="text-[#525252] text-[1.563em] font-bold flex w-[200px] text-left ">
                    {state.price},00 TL
                  </p>
                </div>
                <div className='fixed bottom-10 opacity-50 lg:opacity-100 bg-[#FFFFFF]  inset-x-0  lg:flex lg:sticky lg:justify-between w-full mt-[30px] h-[45px]'>
                  <button className='w-[172px] lg:w-[235px] h-[45px] cursor-pointer bg-[#4B9CE2] text-white rounded-[8px]'>Satın Al</button>
                  <button className='w-[172px] lg:w-[235px] h-[45px] cursor-pointer bg-[#F0F8FF] ml-[10px] text-[#4b9ce2] rounded-[8px]'>Teklif Ver</button>
                </div>
                <div className='flex flex-col mt-[15px] text-left '>
                  <h2 className='text-[0.938em] text-[#525252] font-bold'>Açıklama</h2>

                  <p className='mt-[10px] text-[0.938em] text-[#555555]'>{state.description}</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
