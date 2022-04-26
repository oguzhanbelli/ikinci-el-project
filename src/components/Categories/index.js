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
    <div className="mt-[19.83px]  py-3 mx-3 lg:w-[92.5em] w-[365px] h- overflow-x-scroll h-[31.17px] flex items-center    scroll-hidden lg:overflow-x-hidden">
      <a   onClick={() => handleCategory({name:'all'})} className={`text-[18px] ${activeCategory === 'all' ? 'border' : 'text-gray-700'}   font-semibold  leading-5 mr-[27.35px] mb-2  lg:mr-[53px]  md:my-0`} href="#">Hepsi</a>

      {
          
        allCategories.map(item => (
          <span key={item.id}  onClick={() => handleCategory(item)} className={`text-[18px] ${activeCategory === item.name ? 'border' : 'text-gray-700'} mb-2  font-semibold  leading-5 mr-[27.35px]  lg:mr-[53px]  md:my-0`} href="#">{item.name}</span>
        ))


      }
    </div>
  );
}

export default Categories;