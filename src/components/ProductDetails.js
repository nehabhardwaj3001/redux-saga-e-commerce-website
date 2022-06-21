import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Navbar.css';
import Navbar from './Navbar.js';
import Products from './Products';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetailsFetch} from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/cartAction';
import './styles/ProductDetails.css';

function ProductDetails() {
  const params = useParams();
  const [cartItems, setCartItems] = useState("");
  const productDetails = useSelector(state => state.productsReducer.productDetails);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getProductDetailsFetch(params.id))
}, [params.id]);
console.log("details", productDetails);

const handleChange = () => {
  dispatch(addToCart(productDetails));
};

  return (
    <div className='details-div'>
      <Navbar />
      <div className='user-details'>
        {<div className='user-details' style={{marginTop : "150px"}}>
          <div className='image-div'>
            <img className='image' src={productDetails.image} width="230px" height="230px" />
            <button className='cart-button' onClick={handleChange}>Add to Cart</button>
            </div>
            <div className='info-div'>
            <p className='product-title'> {productDetails.title}</p>
            <div className='starts'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
          </div>
            <div className='price-div'>
              <p className='price-tag'>Price: </p> <p className='price'>  $ {productDetails.price}</p>
            </div>
            <div>
              <h1 className='about'>About this Item</h1>
              <ul><li><p className='description'> {productDetails.description}</p></li> 
                  <li><p className='description'>Category: {productDetails.category}</p></li> </ul> 
           </div>
            </div>
        </div>}
      </div>
    </div>
  )
}

export default ProductDetails;