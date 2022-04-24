import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../constants/Logo';


function Register() {

  return (
    <div className="registerContainer">
      <div className="bannerRegister" />
      <div className="registerMain">
        <div className="registerLogoContainer">
          <Logo />
        </div>
        <div className="formRegisterContainer">
          <div className="formRegisterInputs">
            <h1 className="font-bold text-[2em] text-[#525252] h-[43px]">
              Üye Ol
            </h1>
            <p className="text-[#525252] text-[0.938em] mt-[10px] leading-5">
              Fırsatlardan yararlanmak için üye ol!
            </p>

            <form className="registerForm">
              <div className="registerEmailInput">
                <label
                  htmlFor="email"
                  className="mb-[5px] text-[0.938em] relative left-0 flex w-full top-0 leading-5 "
                >
                  Email
                </label>
                <input
                  id="default"
                  type="text"
                  name="default"
                  placeholder="Email@example.com"
                  className="px-4 py-2 w-[389px] h-[45px] rounded-[8px] border  placeholder:font-normal bg-[#F4F4F4] border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="registerPasswordInput">
                <label
                  htmlFor="password"
                  className="mb-[5px] text-[0.938em]  relative left-0 flex w-full top-0 leading-5 "
                >
                  Şifre
                </label>
                <input
                  id="default"
                  type="password"
                  name="default"
                  placeholder="•••••"
                  className="px-4 py-2 w-[389px] h-[45px] rounded-[8px] bg-[#F4F4F4]  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="forgetPasswordContainer">
                <p className="text-[0.75em] font-normal relative mt-[5px] text-[#B1B1B1]  text-right cursor-pointer leading-4">
                  Şifremi unuttum
                </p>
              </div>
              <button className="registerContainerButton">Üye Ol</button>
              <div className="">
                <p className="text-[0.938em] font-normal leading-5">
                  Hesabın yok mu ?{' '}
                  <Link
                    to={'/register'}
                    className="leading-5 text-[#4B9CE2] cursor-pointer"
                  >
                    {' '}
                    Üye Ol
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Register;
