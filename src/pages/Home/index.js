import React, { useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';
import Categories from '../../components/Categories';
import NavBar from '../../components/Navbar';
import { useProduct } from '../../contexts/ProductContext';


function Home() {
  const {allProducts,setActiveCategory,activeCategory,loading} = useProduct();

  const [searchParams] = useSearchParams();
  console.log(searchParams.get('category'));
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setActiveCategory(searchParams.get('category') || 'all');

  },[]); 
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setActiveCategory(searchParams.get('category'));

  },[activeCategory]);

 



  return (
    <div>
        
      <NavBar/>

      <div className='w-screen h-screen  bg-[#F2F2F2] flex flex-col items-center'>
        <div className='bg-home-banner bg-no-repeat bg-cover w-[355px] h-[100px] lg:w-[92.5em] rounded-[8px] bg-center lg:h-[26.875em] mt-[20px] p-3'></div>
        <Categories/>

        <div className='flex flex-wrap flex-row overflow-scroll w-[375px] lg:w-[1500px] h-full lg:h-auto gap-[20px] rounded-[8px]  mt-[20px] p-1'>
          {
            !loading ?   
              allProducts?.map(item => (
                <div key={item.id} className="flex flex-col mt-2 w-[173px] h-[266px] lg:w-[280px] lg:h-[392px]  px-[10px] py-[10px] border-box bg-white rounded-xl">
                  <div className="flex rounded-[8px] flex-col w-[161px] h-[184px]  lg:w-[260px] lg:h-[297px] mx-auto mt-[10px] bg-gray-200">
            
            
                  </div>
                  <div className="flex border-box p-1 flex-col">
                    <div className='flex flex-row justify-between'>
                      <p className="text-[0.938em] text-[#4B9CE2]">{item.brand}</p>
                      <p><strong>Renk:</strong> {item.color}</p>
                    </div>
                    <p className='mt-[26px] font-bold text-[1.125em]'>{item.price}.00 TL</p>
                  </div>
                </div>
              )):<div>Loading...</div>
          }

        </div>
      </div>
    </div>
  );
}

export default Home;