import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
// import './style/Home.css';

function Home() {


  return (
    <div className='main'>
      <Navbar />
      <Products />
    </div>


  )
}

export default Home;