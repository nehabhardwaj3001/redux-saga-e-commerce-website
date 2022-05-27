import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import {removeFromCart} from '../redux/actions/cartAction';

const MyCart = () => {
 const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cartItems);
console.log("jhsgcjh", cartItems)
  return (
    <div className='mycart'>
      <h2>MY CART</h2>
        <Grid container spacing={3}>
      {
         cartItems && cartItems[0] && cartItems.map((item, index) => {
          return (
            <Grid item xs={4}  key={index} className="image-title">
              <img className='image' src={item.image} width="200px" height="200px"  />
              <p><span>Title: </span> {item.title}</p>
              <p><span>Price: </span> {item.price}</p>
              <p><span>Category: </span> {item.category}</p>
              <button>Buy Now</button>
              <button onClick={() => {dispatch(removeFromCart(item))}}>Remove</button>
            </Grid>
          );
         })
      }
      </Grid>
    </div>
  )
}

export default MyCart
