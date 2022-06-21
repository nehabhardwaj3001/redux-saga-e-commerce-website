import React from 'react';
import Navbar from './Navbar';
import Products from './Products';

function Home() {

  return (
    <div className='main'>
    <div> <Navbar /></div> 
      <Products />
    </div>


  )
}

export default Home;