import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function AddProduct() {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      return navigate('/');
    }
  }, [loggedIn]);

  return (
    <div className="w-screen h-screen   bg-[#F2F2F2] flex flex-col items-center pb-3 overflow-scroll">
      <div className="flex flex-col  lg:flex-row mt-[20px] w-[355px] h-full lg:w-[800px] lg:h-full xl:w-[1480px] xl:h-[812px] bg-white rounded-[8px] ">
        <form className="flex flex-col ml-[30px]">
          <div className="mt-[25px]  flex flex-col">
            <h1 className=" text-[1.563em] font-bold text-[#525252]">
              Ürün Detayları
            </h1>
          </div>
          <div className="mt-[25px] mb-[25px] w-[730px] h-[45px]">
            <label className='text-[0.938em] text-[#525252] mb-[5px]'>Ürün Adı</label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full font-normal pl-7 pr-12 mt-[5px] text-[1em] border-gray-300 bg-[#F4F4F4] rounded-[8px]"
              placeholder="Örnek: Iphone 12 Pro Max"
            />
          </div>
          <div className="mt-[25px] mb-[25px] w-[730px] h-[100px]">
            <label className='text-[0.938em] text-[#525252] '>Açıklama</label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full mt-[5px]  text-[1em] font-normal placeholder:text-[#99A0A7] text-gray-500 pl-7 pr-12 bg-[#F4F4F4]  border border-gray-300 rounded-[8px]"
              placeholder="Ürün açıklaması girin."
            ></textarea>
          </div>

          <div className="mt-[30px]  w-[730px] flex flex-row">
            <div>
              <label className='text-[0.938em] text-[#525252] mb-[5px]'>Kategori</label>
              <select
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[353px] h-[45px] placeholder:text-[#99A0A7] text-gray-500 font-normal pl-7 pr-12 mt-[5px] text-[1em] border-gray-300 bg-[#F4F4F4] rounded-[8px]"
              >
                <option selected>Kategori Seç</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="ml-[24px]">
              <label className='text-[0.938em] text-[#525252] mb-[5px]'>Marka</label>
              <select
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[353px] h-[45px] placeholder:text-[#99A0A7] text-gray-500 font-normal pl-7 pr-12 mt-[5px] text-[1em] border-gray-300 bg-[#F4F4F4] rounded-[8px]"
              >
                <option selected>Marka Seç</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="mt-[25px] mb-[25px] w-[730px]  flex flex-row">
            <div>
              <label className='text-[0.938em] text-[#525252] mb-[5px]'>Renk</label>
              <select
                id="countries_disabled"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[353px] h-[45px] placeholder:text-[#99A0A7] text-gray-500 font-normal pl-7 pr-12 mt-[5px] text-[1em] border-gray-300 bg-[#F4F4F4] rounded-[8px]"
              >
                <option selected>Renk Seç</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="ml-[24px]">
              <label className='text-[0.938em] text-[#525252] mb-[5px]'>Kullanım Durumu</label>
              <select
                id="countries_disabled"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[353px] h-[45px] placeholder:text-[#99A0A7] text-gray-500 font-normal pl-7 pr-12 mt-[5px] text-[1em] border-gray-300 bg-[#F4F4F4] rounded-[8px]"
              >
                <option selected>Kullanım Durumu Seç</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-[315px] h-[45px] mb-[25px]">
            <label className='text-[0.938em] text-[#525252] mb-[5px]'>Fiyat</label>
            <div className="mt-1 w-full  relative rounded-[8px] shadow-sm ">
              <input
                type="number"
                name="offerPrice"
                id="offerPrice"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-[315px] h-[45px] pl-7 pr-12 placeholder:text-[#99A0A7] text-gray-500 border-gray-300 bg-[#F4F4F4] rounded-md"
                placeholder="Bir fiyat girin"
              />
              <div className="absolute inset-y-3 right-0 flex items-center">
                <span
                  id="currency"
                  name="currency"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  TL
                </span>
              </div>
            </div>
            <div className='flex flex-row w-[315px] mt-[15px] justify-between'>
              <p className='text-[#99A0A7] text-[0.938em] mt-[11px] ml-[2px] '>Teklif Opsiyonu</p>
              <label htmlFor="unchecked" className=" inline-flex items-center cursor-pointer mt-[11px]">
                <span className="relative">
                  <span className="block w-10 h-6 bg-[#EBEBEB] rounded-full shadow-inner"></span>
                  <span className="absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out">
                    <input id="unchecked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
                  </span>
                </span>
              </label>

            </div>
          </div>

          
        </form>
        <div>
          <div className='flex flex-col ml-[47.5px]'>
            <div className="mt-[25px]  flex flex-col">
              <h1 className=" text-[1.563em] font-bold text-[#525252]">
              Ürün Görseli
              </h1>
            </div>
            <div className="flex justify-center mt-8">
              <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">File Upload</label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                      </div>
                      <input type="file" className="opacity-0" />
                    </label>
                  </div>
                </div>
               
              </div>
            </div> 


          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
