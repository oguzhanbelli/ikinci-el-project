
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AccountIcon, AddIcon } from '../../constants/Icon';
import Logo from '../../constants/Logo';
import { useAuth } from '../../contexts/AuthContext';
import { useProduct } from '../../contexts/ProductContext';

function NavBar() {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();
  const { setActiveCategory } = useProduct();

  const handleHome = async () => {
    await setActiveCategory('all');
    navigate('/');
  };

  return (
    <div>
      <nav className="relative px-[10px] md:px-[190px] lg:px-[200px] xl:px-[220px] py-4 flex justify-between items-center text-center bg-white ">
        <span
          name="logo"
          onClick={() => handleHome()}
          className="text-2xl  font-medium leading-none text-indigo-400 flex justify-between items-center"
        >
          <div className="w-[120px] cursor-pointer ">
            <Logo />
          </div>
        </span>

        <div className="lg:hidden flex  flex-row  justify-center">
          {loggedIn ? (
            <>
              <Link
                to="/add-product"
                className=" flex  gap-1 items-center justify-center mx-auto w-[40px] mr-[10px] h-[40px] bg-[#F0F8FF] hover:bg-gray-100 text-[15px] text-[#4B9CE2] font-bold  rounded-xl transition duration-200"
              >
                <AddIcon />
              </Link>
              <Link
                to="/account"
                className=" flex  gap-1 items-center justify-center w-[116px]  lg:mr-3 h-[40px] bg-[#F0F8FF] hover:bg-gray-100 text-[15px] text-[#4B9CE2] font-bold  rounded-xl transition duration-200"
              >
                <AccountIcon />
                Hesabım
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className=" flex  gap-1 items-center justify-center w-[116px]  lg:mr-3 h-[40px] bg-[#F0F8FF] hover:bg-gray-100 text-[15px] text-[#4B9CE2] font-bold  rounded-xl transition duration-200"
            >
              <AccountIcon />
              Giriş Yap
            </Link>
          )}
        </div>

        {loggedIn ? (
          <>
            <Link
              to="/add-product"
              className="hidden lg:flex  gap-1 items-center justify-center mx-auto w-[125px] lg:ml-auto lg:mr-3 h-[40px] bg-[#F0F8FF] hover:bg-gray-100 text-[15px] text-[#4B9CE2] font-bold  rounded-xl transition duration-200"
            >
              <AddIcon />

              <p className="mt-0.5 "> Ürün Ekle</p>
            </Link>
            <Link
              to="/account"
              className="hidden lg:flex  gap-1 items-center justify-center w-[125px]  lg:mr-3 h-[40px] bg-[#F0F8FF] hover:bg-gray-100 text-[15px] text-[#4B9CE2] font-bold  rounded-xl transition duration-200"
            >
              <AccountIcon />
              Hesabım
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="hidden lg:flex  gap-1 items-center justify-center w-[125px]  lg:mr-3 h-[40px] bg-[#F0F8FF] hover:bg-gray-100 text-[15px] text-[#4B9CE2] font-bold  rounded-xl transition duration-200"
            >
              <AccountIcon />
              Giriş Yap
            </Link>
          </>
        )}
      </nav>
      <hr className=""></hr>
    </div>
  );
}

export default NavBar;
