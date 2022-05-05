import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import NavBar from './components/Navbar';
import Logo from './constants/Logo';

import RequireAuth from './pages/RequireAuth';

const ProductDetail = React.lazy (() => import('./pages/Product/ProductDetail'));
const Login = React.lazy (() => import('./pages/Auth/Login'));
const Register = React.lazy (() => import('./pages/Auth/Register'));
const AddProduct = React.lazy(() =>  import('./pages/Product/AddProduct') );
const Account = React.lazy(() => import ('./pages/Account'));
function App() {
  const location = useLocation();
  return (
    <div className="appContainer">
      {
        location.pathname === '/login' || location.pathname == '/register' ? <></>: <NavBar/>
      }
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route  path="/account" element={<React.Suspense><RequireAuth redirectTo={'/'}><Account /></RequireAuth> </React.Suspense> } />
        <Route  path="/product-detail/:id" element={<React.Suspense><ProductDetail /> </React.Suspense> } />
        <Route path="/add-product" element={<React.Suspense fallback={<div className='w-screen h-screen justify-center flex items-center'> <div className='w-[100px] h-[50px]'> <Logo/> </div></div>}><RequireAuth redirectTo={'/'}><AddProduct /></RequireAuth></React.Suspense>} />
        <Route path="/login" element={<React.Suspense fallback={<div className='w-screen h-screen justify-center flex items-center'> <div className='w-[100px] h-[50px]'> <Logo/> </div></div>}><ProtectedRoute><Login /></ProtectedRoute></React.Suspense>} />
        <Route path="/register" element={<React.Suspense fallback={<div className='w-screen h-screen justify-center flex items-center'> <div className='w-[100px] h-[50px]'> <Logo/> </div></div>}><ProtectedRoute><Register /></ProtectedRoute></React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
