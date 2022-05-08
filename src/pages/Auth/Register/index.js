import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchRegister } from '../../../api';
import { ErrorIcon } from '../../../constants/Icon';
import Logo from '../../../constants/Logo';
import { useAuth } from '../../../contexts/AuthContext';
import { ToastContainer,toast } from 'react-toastify';
import validationSchema from './validations';
function Register() {
  const {login} = useAuth();
  const contextClass = {
    success: 'bg-blue-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-[#FFE5E5]',
    dark: 'bg-white-600 font-gray-300',
  };
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
        toast(<div className='flex  items-center h-full w-full '>
          <div className='flex justify-center items-center'><ErrorIcon/></div>
      

          <p className='w-full justify-start ml-[10px] flex font-normal'>{e.response.data.data[0].messages[0].message}</p>
        </div>);

      }
    },
  });
  return (
    <div className="loginContainer">
      <div className="bannerLogin" />
      <div className="loginMain">
        {formik.errors.general && (
          <ToastContainer hideProgressBar={true} closeButton={false} toastClassName={({ type }) => contextClass[type || 'default'] + 
            ' relative flex p-1 min-h-10 h-[60px] mx-auto lg:mx-0 w-[321px] rounded-md justify-between overflow-hidden cursor-pointer shadow-lg'
          } bodyClassName={'bg-[#FFE5E5] text-[#F77474]'}/>
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

export default Register;
