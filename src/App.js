import './App.css';
import React from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import MyCart from './components/MyCart';
import Categories from './components/Categories';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<ProductDetails />}/>
        <Route path='/categories/:category' element={<Categories />}/>
        {/* <Route path='/mycart' element={<MyCart />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
