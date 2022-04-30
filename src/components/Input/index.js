/* eslint-disable react/prop-types */
import React from 'react';

function Input({type,name,id,placeholder,onChange,onBlur,onClick}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full font-normal pl-7 pr-12 mt-[5px] text-[1em] border-gray-300 bg-[#F4F4F4] rounded-[8px]"
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onClick={onClick}
    />
  );
}

export default Input;