/* eslint-disable react/prop-types */
import React from 'react';

function Input({type,name,value,placeholder,onChange,onBlur,className}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    
    />
  );
}

export default Input;