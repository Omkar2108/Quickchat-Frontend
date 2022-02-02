import Login from './components/login';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Signup from './components/signup';
import Welcome from './components/welcome';
import ForgotPassword from './components/forgotpassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
