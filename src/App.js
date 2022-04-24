import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
const Login = React.lazy (() => import('./pages/Auth/Login'));
const Register = React.lazy (() => import('./pages/Auth/Register'));
function App() {
  return (
    <div className="appContainer">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<React.Suspense fallback={<>...</>}><Login /></React.Suspense>} />
        <Route path="/register" element={<React.Suspense fallback={<>...</>}><Register /></React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
