import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/dashpoardcomponent/Nav';
import Home from './components/dashpoardcomponent/Home';
import Product from './components/dashpoardcomponent/Product';
import Cart from './components/usercomponent/Cart';
import Regiter from './components/dashpoardcomponent/Regiter';
import Login from './components/dashpoardcomponent/Login';
import Footer from './components/dashpoardcomponent/Footer';
import AdminAddProduct from './components/admincomponent/AdminAddProduct';
import About from './components/dashpoardcomponent/About';
import AdminOrders from './components/admincomponent/AdminOrders';
import ProductDetail from './components/dashpoardcomponent/ProductDetail'

import axios from 'axios';
import { useState,useEffect } from 'react';

const App = () => {

  const [userData, setUserData] = useState(null);

useEffect(() => {
  const getCurrentUser = async () => {
    try {
      const result = await axios.get(
        "http://localhost:3000/api/profile",{
           withCredentials: true
        }
      
      );

      setUserData(result.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  getCurrentUser();
}, []);

  return (
    <>
    <Nav  user={userData} setUser={setUserData}/>
    <Routes>
      <Route path="/" element={ <Home/>}/>  
      <Route path="/product" element={<Product/>}/>  
      <Route path="product/:id" element={<ProductDetail/>}/>
      <Route path ="about" element ={<About/>}/>
      <Route path="/register" element={ <Regiter/>}/> 
      <Route path="/login" element={ <Login  setUser={setUserData}/>}/> 
      <Route path="/admin-add" element={<AdminAddProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/adminorder' element={< AdminOrders/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
