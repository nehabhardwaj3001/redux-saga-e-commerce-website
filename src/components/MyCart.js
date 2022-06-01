import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import {addToCart, removeFromCart} from '../redux/actions/cartAction';
import Navbar from './Navbar';
import './styles/MyCart.css';

const MyCart = () => {
 const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cartItems);
console.log("cart", cartItems)

  return (
    <div className='mycart'>
      <Navbar />
      <h2 className='heading'>MY CART</h2>
      <div className='cart-items'>
        <div>
      {
         cartItems && cartItems[0] && cartItems.map((item, index) => {
          return (
            <div className='cart-div'>
            <div className="image">
              <img className='image' src={item.image} width="200px" height="200px"  />
              </div>
              <div className='info-div'>
              <p className='product-title'>{item.title}</p>
              <div className='price-div'>
              <p className='price-tag'>Price: </p> <p className='price'>  $ {item.price}</p>
            </div>
            <p className='description1'>Category: {item.category}</p>
             <div className='btn'> <button className='cart-button'>Buy Now</button>
              <button className='cart-button' onClick={() => {dispatch(removeFromCart(item))}}>Remove</button></div>
            </div>
            </div>
          );
         })
      }
      </div>
      </div>
    </div>
  )
}

export default MyCart
