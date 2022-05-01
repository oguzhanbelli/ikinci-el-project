/* eslint-disable react/prop-types */
import React from 'react';

function Input({type,name,value,placeholder,onChange,onBlur}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="focus:ring-[#4B9CE2] focus:bg-[#F0F8FF] focus:border-[#4B9CE2] focus:border-[1px] block w-full h-full font-normal pl-7 pr-12 mt-[5px] text-[1em] border-[1px] border-gray-300 bg-[#F4F4F4] rounded-[8px]"
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    
    />
  );
}

export default Input;