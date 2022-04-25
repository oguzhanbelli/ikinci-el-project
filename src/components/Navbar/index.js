import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../constants/Logo';
function NavBar() {
//   const { loggedIn, user } = useAuth();
//   console.log(loggedIn);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loggedIn,setLoggedIn] = React.useState(false); 
  // eslint-disable-next-line no-unused-vars
  const [user,setUser] = React.useState({});
  return (
    <div>
      <nav className="relative px-[220px] py-4 flex justify-between items-center bg-white dark:bg-slate-700 dark:text-white">
        <Link
          to={'/'}
          className="text-2xl  font-medium leading-none text-indigo-400 flex justify-between items-center"
        >
          <div className='w-[120px] '>
            <Logo/>
          </div>
       
        
        </Link>

        <div className="lg:hidden flex  flex-row  justify-center">

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="navbar-burger flex items-center text-indigo-500 p-2"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

    

        {loggedIn ? (
          <div className="hidden lg:flex justify-between">
            <Link
              to="/profile"
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            >
              Profil
            </Link>
            {user?.role === 'admin' ? (
              <Link
                to="/admin"
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6  bg-indigo-400 hover:bg-indigo-300 text-sm text-white font-bold  rounded-xl transition duration-200"
              >
                Admin
              </Link>
            ) : (
              ''
            )}
          </div>
        ) : (
          <>
            <Link
              to="/signup"
              className="hidden lg:flex  gap-1 items-center justify-center mx-auto w-[125px] lg:ml-auto lg:mr-3 h-[40px] bg-[#F0F8FF] hover:bg-gray-100 text-[15px] text-[#4B9CE2] font-bold  rounded-xl transition duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          
                <path d="M6.47201 12.945C6.23331 12.945 6.00439 12.8502 5.83561 12.6814C5.66683 12.5126 5.57201 12.2837 5.57201 12.045V0.9C5.57201 0.661305 5.66683 0.432387 5.83561 0.263604C6.00439 0.0948211 6.23331 0 6.47201 0C6.7107 0 6.93962 0.0948211 7.1084 0.263604C7.27718 0.432387 7.37201 0.661305 7.37201 0.9V12.045C7.37201 12.2837 7.27718 12.5126 7.1084 12.6814C6.93962 12.8502 6.7107 12.945 6.47201 12.945V12.945Z" fill="#4B9CE2"/>
                <path d="M12.045 7.37201H0.9C0.661305 7.37201 0.432387 7.27718 0.263604 7.1084C0.0948211 6.93962 0 6.7107 0 6.47201C0 6.23331 0.0948211 6.00439 0.263604 5.83561C0.432387 5.66683 0.661305 5.57201 0.9 5.57201H12.045C12.2837 5.57201 12.5126 5.66683 12.6814 5.83561C12.8502 6.00439 12.945 6.23331 12.945 6.47201C12.945 6.7107 12.8502 6.93962 12.6814 7.1084C12.5126 7.27718 12.2837 7.37201 12.045 7.37201Z" fill="#4B9CE2"/>
             
                <defs>
                  <clipPath id="clip0_1_7">
                    <rect width="12.945" height="12.945" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              <p className='mt-0.5 '>     Ürün Ekle</p>
            </Link>
            <Link
              to="/signin"
              className="hidden lg:flex  gap-1 items-center justify-center w-[125px] h-[40px]  py-2 px-6 bg-[#F0F8FF] hover:bg-indigo-600 text-[15px] text-[#4B9CE2] font-bold rounded-xl transition duration-200"
            >
              Giriş Yap
            </Link>
          </>
        )}
      </nav>
      <hr className="dark:border-slate-600"></hr>
      <div
        className={
          'lg:hidden flex-grow items-center ' +
          (navbarOpen ? ' flex' : ' hidden')
        }
        id="example-navbar-danger"
      >
        <ul className="flex dark:bg-slate-700 bg-gray-100  flex-col w-screen h-full lg:flex-row list-none lg:ml-auto">
          {loggedIn ? (
            <div>
              <li className="nav-item hover:bg-slate-400 ">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={'/'}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 dark:text-white text-slate-700  ">
                    Ana Sayfa
                  </span>
                </Link>
              </li>

              <li className="nav-item hover:bg-slate-400">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to={'/profile'}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 dark:text-white text-slate-700 ">
                    Profil
                  </span>
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li className="nav-item hover:bg-slate-400">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)} 
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={'/signup'}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 dark:text-white text-slate-700 ">
                    Kayıt Ol
                  </span>
                </Link>
              </li>
              <li className="nav-item hover:bg-slate-400">
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to={'/signin'}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 dark:text-white text-slate-700 ">
                    Giriş Yap
                  </span>
                </Link>
              </li>
            </div>
          )}
          {user?.role === 'admin' ? (
            <li className="nav-item hover:bg-slate-400">
              <Link
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                to={'/admin'}
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2 dark:text-white text-slate-700 ">
                  Admin
                </span>
              </Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;