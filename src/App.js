import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import React from 'react';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Shop from './Components/Shop';
import LoginPage from './Components/LoginPage';
import AddItem from './Components/AddItem';
import ViewItem from './Components/ViewItem';
import EditItem from './Components/EditItem';

function App() {
  return (
    <AuthProvider>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/login" element={<LoginPage/> }/>
          <Route path="/addItem" element={<AddItem/>}/>
          <Route path="/items/:id" element={<ViewItem/>}/>
          <Route path="/edit/:id" element={<EditItem/>}/>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;