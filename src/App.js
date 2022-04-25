import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
const Login = React.lazy (() => import('./pages/Auth/Login'));
const Register = React.lazy (() => import('./pages/Auth/Register'));
function App() {
  return (
    <div className="appContainer">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<React.Suspense fallback={<>...</>}><ProtectedRoute><Login /></ProtectedRoute></React.Suspense>} />
        <Route path="/register" element={<React.Suspense fallback={<>...</>}><ProtectedRoute><Register /></ProtectedRoute></React.Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
