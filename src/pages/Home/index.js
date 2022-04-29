/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import {   useNavigate, useSearchParams } from 'react-router-dom';
import Categories from '../../components/Categories';
import Logo from '../../constants/Logo';
import { useProduct } from '../../contexts/ProductContext';


function Home() {
  const navigate = useNavigate();
  const {allProducts,setActiveCategory,activeCategory,loading,getProducts} = useProduct();

  const [searchParams] = useSearchParams();
  console.log(searchParams.get('category'));
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setActiveCategory(searchParams.get('category') || 'all');
    getProducts();

  },[]); 
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setActiveCategory(searchParams.get('category'));

  },[activeCategory]);

  const handleNavigate = (item) => {
    navigate(`/product-detail/${item.id}`, { state: item ,replace:true});
  };



  return (
    <div>

      <div className='w-screen h-full  bg-[#F2F2F2] flex flex-col items-center overflow-x-hidden overflow-y-auto'>
        <div className='bg-home-banner bg-no-repeat bg-cover w-[355px] h-[125px] md:w-[700px] md:h-[200px] lg:w-[60em] lg:h-[20em] xl:w-[92.5em]  rounded-[8px] bg-center mt-[20px] p-[20px] xl:h-[20em]'></div>
        <Categories/>

        <div className='flex flex-wrap hide-scrollbar  flex-row overflow-scroll w-[375px] md:w-[690px] lg:w-[1000px]  lg:h-auto p-1  xl:w-[1500px] h-screen xl:h-screen xl:pb-[171px] gap-[15px] xl:gap-[20px] rounded-[8px]  mt-[20px] pb-[20px] xl:mt-[20px] '>
          {
            !loading ?   
              allProducts?.map(item => (
                <div onClick={()=> handleNavigate(item)} key={item.id} className="flex flex-col  cursor-pointer   w-[173px] h-[266px] md:w-[200px] xl:w-[280px] xl:h-[392px]  xl:px-[10px]   bg-white rounded-[8px]">
                  <img alt={item.id} src={`${process.env.REACT_APP_BASE_ENDPOINT}${item.image.url}`} className="flex rounded-[8px] flex-col w-[161px] h-[184px] md:w-[187px]  xl:w-[260px] xl:h-[297px] mx-[6px] xl:mx-auto  mt-[6px] xl:mt-[10px] bg-gray-200">
            
            
                  </img>
                  <div className="flex border-box   flex-col justify-center   ">
                    <div className='flex flex-col xl:flex-row justify-between '>
                      <p className="text-[0.938em] font-bold text-[#4B9CE2] ml-[6px] xl:ml-[6px] mt-[5px] xl:mt-[5px]">{item.brand}</p>
                      <p className='ml-[6px] text-[10px] xl:text-[0.938em] xl:mt-[5px] xl:mr-[10px]'><strong>Renk:</strong> {item.color}</p>
                    </div>
                   
                    <p className='mt-[12px] w-full  h-[20px]  relative bottom-[6px]  xl:mt-[26px] ml-[6px] font-bold text-[1.125em] text-[#3E3E3E]'>{item.price}.00 TL</p>
                   
                    
                  </div>
                </div>
              )):  <div className='w-screen h-screen justify-center flex items-center'> <div className='w-[100px] h-[50px]'> <Logo/> </div></div>
          }

        </div>
      </div>
    </div>
  );
}

export default Home;
