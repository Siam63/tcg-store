import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Shop from './Components/Shop';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <AuthProvider>
      <div className="">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/login" element={<LoginPage/> }/>
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  );
}

export default App;