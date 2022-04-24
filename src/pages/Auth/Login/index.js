import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../constants/Logo';

function Login() {
  return (
    <div className="loginContainer">
      <div className="bannerLogin"/>
      <div className="lg:w-[67.813em] xl:w-[67.813em] w-[34.813em]  bg-theme-bg-white h-full flex-col flex items-center text-center">
        <div className='mt-[133px] w-[225px] h-[74px]'>
          <Logo />
        </div>
        <div className="bg-[#FBFBFB] rounded-[8px] w-[35.563em] h-[34.625em] items-center   text-black  shadow-lg shadow-[#1E36480A] mt-14  ">
          <div className='flex flex-col  items-center  pt-[4.375em] pb-[4.375em] w-full h-full'>

       
            <h1 className="font-bold text-[2em] text-[#525252] h-[43px]">Giriş Yap</h1>
            <p className='text-[#525252] text-[0.938em] mt-[10px] leading-5'>
                Fırsatlardan yararlanmak için giriş yap.

            </p>
           
            <form className='mt-[3.125em] w-[389px] h-[176px]'>
              
              <div className="flex flex-col mx-auto ">
                <label htmlFor="name" className="mb-[5px] text-[0.938em] relative left-0 flex w-full top-0 leading-5 ">Email</label>
                <input
                  id="default"
                  type="text"
                  name="default"
                  placeholder="Email@example.com"
                  className="px-4 py-2 w-[389px] h-[45px] rounded-[8px] border  placeholder:font-normal bg-[#F4F4F4] border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="flex flex-col mx-auto mt-[15px] ">
                <label htmlFor="name" className="mb-[5px] text-[0.938em]  relative left-0 flex w-full top-0 leading-5 ">Şifre</label>
                <input
                  id="default"
                  type="password"
                  name="default"
                  placeholder="•••••"
                  className="px-4 py-2 w-[389px] h-[45px] rounded-[8px] bg-[#F4F4F4]  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className=' flex  w-full  flex-col  '>
                <p className='text-[0.75em] font-normal relative mt-[5px] text-[#B1B1B1]  text-right cursor-pointer leading-4'>Şifremi unuttum</p>
              </div>
              <button className='w-full mb-[20px] bg-[#4B9CE2] rounded-[8px] leading-6 h-[45px] mt-[30px] text-white text-[1.125em] font-bold cursor-pointer'>
                  Giriş
              </button>
              <div className=''>
                <p className='text-[0.938em] font-normal leading-5'>Hesabın yok mu ? <Link to={'/register'} className='leading-5 text-[#4B9CE2] cursor-pointer'> Üye Ol</Link></p>
              </div>

              
             


            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
