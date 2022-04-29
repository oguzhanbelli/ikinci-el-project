import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRegister } from '../../../api';
import Logo from '../../../constants/Logo';
import { useAuth } from '../../../contexts/AuthContext';
import validationSchema from './validations';

function login() {
  const {login} = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
         
    },
    validationSchema,
   
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegister({
          email: values.email,
          password: values.password,
        });
      
      
        login(registerResponse);


      } catch (e) {
        bag.setErrors({general:e.response.data.data[0].messages[0].message});
      }
    },
  });
  return (
    <div className="loginContainer">
      <div className="bannerLogin" />
      <div className="loginMain">
        {formik.errors.general && (
          <div
            className="bg-[#FFE5E5] rounded-[8px] shadow-sm shadow-[#1E36482E] text-[#F77474]  fixed md:top-[10px] md:relative xl:fixed  lg:top-[90px] top-[10px] mx-auto  inset-x-0 lg:inset-auto  w-[321px] h-[60px] lg:right-[11px]  "
            role="alert"
          >
            <div className="flex h-full items-center ml-3 text-center">
              <div className='flex  items-center text-center'>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" fill="#F77474"/>
                  <path d="M11 12.75C10.8011 12.75 10.6103 12.671 10.4697 12.5303C10.329 12.3897 10.25 12.1989 10.25 12V7C10.25 6.80109 10.329 6.61032 10.4697 6.46967C10.6103 6.32902 10.8011 6.25 11 6.25C11.1989 6.25 11.3897 6.32902 11.5303 6.46967C11.671 6.61032 11.75 6.80109 11.75 7V12C11.75 12.1989 11.671 12.3897 11.5303 12.5303C11.3897 12.671 11.1989 12.75 11 12.75V12.75Z" fill="white"/>
                  <path d="M11 15.743C10.8011 15.743 10.6103 15.664 10.4697 15.5233C10.329 15.3827 10.25 15.1919 10.25 14.993V15C10.25 14.8011 10.329 14.6103 10.4697 14.4697C10.6103 14.329 10.8011 14.25 11 14.25C11.1989 14.25 11.3897 14.329 11.5303 14.4697C11.671 14.6103 11.75 14.8011 11.75 15V14.993C11.75 15.1919 11.671 15.3827 11.5303 15.5233C11.3897 15.664 11.1989 15.743 11 15.743V15.743Z" fill="white"/>
                </svg>
      
              </div>
              <div className='flex justify-center items-center'>
                <p className="text-[1em] text-red-500 ml-[10px]  ">{formik.errors.general}</p>
              </div>
            </div>
          </div>
        )}
        <div className="loginLogoContainer">
          <Logo />
        </div>
        <div className="formLoginContainer">
          <div className="formLoginInputs">
            <h1 className="font-bold text-[2em] text-[#525252] h-[43px]">
              Üye Ol
            </h1>
            <p className="text-[#525252] text-[0.938em] mt-[10px] leading-5">
              Fırsatlardan yararlanmak için üye ol!
            </p>

            <form onSubmit={formik.handleSubmit} className="loginForm ">
              
              <div className="loginEmailInput">
                <label
                  htmlFor="email"
                  className="mb-[5px] text-[0.938em] relative left-0 flex w-full top-0 leading-5 "
                >
                  Email
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                  type="text"
                  
                  placeholder="Email@example.com"
                  // eslint-disable-next-line quotes
                  className={`px-4 py-2 w-[315px]  lg:w-[389px] lg:h-[45px] rounded-[8px] border-[1px]  placeholder:font-normal  bg-[#F4F4F4] border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                    formik.touched.email && formik.errors.email
                      ? 'border-[#F77474] bg-[#FFF2F2] text-[#F77474] '
                      : ''
                  }`}
                />
              </div>
              <div className="loginPasswordInput">
                <label
                  htmlFor="password"
                  className="mb-[5px] text-[0.938em]  relative left-0 flex w-full top-0 leading-5 "
                >
                  Şifre
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  name="password"
                  type="password"
                  placeholder="•••••"
                  // eslint-disable-next-line quotes
                  className={`px-4 py-2 w-[315px]  lg:w-[389px] lg:h-[45px] rounded-[8px] bg-[#F4F4F4]  border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                    formik.touched.password && formik.errors.password
                      ? 'border-[#F77474] bg-[#FFF2F2] text-[#F77474] placeholder:text-[#F77474]'
                      :''
                  }`}
                />
              </div>

              <button className="loginContainerButton" type='submit'>Üye Ol</button>
              <div className="">
                <p className="text-[0.938em] font-normal leading-5">
                  Hesabın var mı ?{' '}
                  <Link
                    to={'/login'}
                    className="leading-5 text-[#4B9CE2] cursor-pointer"
                  >
                    {' '}
                    Giriş Yap
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

export default login;
