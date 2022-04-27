import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import NavBar from './components/Navbar';

const ProductDetail = React.lazy (() => import('./components/ProductDetail'));
const Login = React.lazy (() => import('./pages/Auth/Login'));
const Register = React.lazy (() => import('./pages/Auth/Register'));
function App() {
  const location = useLocation();
  return (
    <div className="appContainer">
      {
        location.pathname === '/login' || location.pathname == '/register' ? <></>: <NavBar/>
      }
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route  path="/productDetail/:id" element={<React.Suspense><ProductDetail /> </React.Suspense> } />
        <Route path="/login" element={<React.Suspense fallback={<>...</>}><ProtectedRoute><Login /></ProtectedRoute></React.Suspense>} />
        <Route path="/register" element={<React.Suspense fallback={<>...</>}><ProtectedRoute><Register /></ProtectedRoute></React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
