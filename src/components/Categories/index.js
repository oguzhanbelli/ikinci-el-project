import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useProduct } from '../../contexts/ProductContext';

function Categories() {
  // eslint-disable-next-line no-unused-vars
  let [searchParams,setSearchParams] = useSearchParams();
  
  const {allCategories,activeCategory,setActiveCategory} = useProduct();
  
  const handleCategory = (item) =>{
    setSearchParams(`category=${item.name}`);
    setActiveCategory(item.name);
  
  };


  return (
    <div className="mt-[19.83px]  py-2 mx-3 2xl:w-[92.5em] lg:w-[60em] w-[347px] md:w-[690px] xl:w-[80.5em]  overflow-x-scroll h-auto   flex items-center hide-scrollbar   scroll-hidden lg:overflow-y-hidden ">
      
      <span   onClick={() => handleCategory({name:'all'})} className={`text-[18px] ${activeCategory === 'all'  ? 'border  ' : 'text-gray-700 pb-2'}   cursor-pointer font-semibold  leading-5 mr-[27.35px] mb-2  lg:mr-[53px]  md:my-0`} href="#">Hepsi</span>
  
      {
          
        allCategories.map(item => (
          <span key={item.id}  onClick={() => handleCategory(item)} className={`text-[18px] ${activeCategory === item.name ? 'border' : 'text-gray-700 pb-2'} mb-2  font-semibold  cursor-pointer  leading-5 mr-[27.35px]  lg:mr-[53px]  md:my-0`} href="#">{item.name}</span>
        ))


      }
    
    </div>
  );
}

export default Categories;