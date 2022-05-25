import './App.css';
import React from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
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
        </Routes>
      </Router>
      {/* <Navbar />
      <Products /> */}
    </div>
  );
}

export default App;
