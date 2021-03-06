import './App.css';
import React, { useEffect } from 'react';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import MyCart from './components/MyCart';
import Categories from './components/Categories';
import SignIn from './components/SignIn';
import NewProduct from './components/NewProduct';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    console.log('insiede app.jsz',localStorage.getItem("details"));
    const user = JSON.parse(localStorage.getItem("details"));
    console.log("hdj", user?.email)
    if(!user?.email){
      navigate('/login');
    } else {
      navigate('/home')
    }
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/category/:category' element={<Categories />}/>
        <Route path='/mycart' element={<MyCart />}/>
        <Route path='/signIn' element={<SignIn />}/> 
        <Route path='/create' element={<NewProduct />} />
        <Route path='*' element={<Login/>}/> 
      </Routes>
    </div>
  );
}

export default App;
