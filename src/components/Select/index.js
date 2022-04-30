import React from 'react';

function Select() {
  return (
    <select
      className="focus:ring-indigo-500 focus:border-indigo-500 block w-[353px] h-[45px] placeholder:text-[#99A0A7] text-gray-500 font-normal pl-7 pr-12 mt-[5px] text-[1em] border-gray-300 bg-[#F4F4F4] rounded-[8px]"
    >
      <option selected>Kategori Seç</option>
      {/* {data} */}
    </select>
  );
}

export default Select;