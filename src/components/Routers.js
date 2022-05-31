import React, { useEffect } from 'react';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Login from './Login';
import MyCart from './MyCart';
import Categories from './Categories';
import SignIn from './SignIn.js';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Routers() {
   
    return (
      <div className="Routers">
          <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/' element={<Login />}/>
          <Route path='/product/:id' element={<ProductDetails />}/>
          <Route path='/category/:category' element={<Categories />}/>
          <Route path='/mycart' element={<MyCart />}/>
          <Route path='/signIn' element={<SignIn />}/> 
          <Route path='*' element={<Login/>}/> 
        </Routes>
        </Router>
      </div>
    );
  }
  
  export default Routers;