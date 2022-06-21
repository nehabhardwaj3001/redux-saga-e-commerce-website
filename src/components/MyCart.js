import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart} from '../redux/actions/cartAction';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './styles/MyCart.css';

const MyCart = () => {
	const navigate = useNavigate();
 const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cartItems);
console.log("cart", cartItems)

  return (
    <div className='mycart'>
      <Navbar />
       {cartItems && cartItems[0] && cartItems[0].image  ? 
     <> <h2 className='heading'>MY CART</h2>
      <div className='cart-items'>
        <div>
      {
         cartItems && cartItems[0] && cartItems.map((item, index) => {
          return (
            <div className='cart-div'>
            <div className="image">
              <img className='image' src={item.image} alt="cartImage" width="200px" height="200px"  />
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
      </div></> :
      <><h1 className='no-cart'> Your Cart is empty.</h1>
      <Button variant="outlined" color="secondary" onClick={()=>{navigate('/home')}}>Add Product to the Cart</Button></>
      }
    </div>
  )
}

export default MyCart;
