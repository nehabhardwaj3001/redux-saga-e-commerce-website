import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Navbar.css';
import Navbar from './Navbar.js'
import Products from './Products';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetailsFetch} from '../redux/action';
import './styles/ProductDetails.css';

function ProductDetails() {
  const params = useParams();
  const productDetails = useSelector(state => state.productsReducer.productDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailsFetch(params.id))
  }, [params.id]);
console.log("details", productDetails)
  return (
    <div className='details-div'>
      <Navbar />
      <div className='user-details'>
        {
          // productDetails.map((item, index) => {
          //     return (
          //       <div className="col" key={index}>
          //         <h2>Details: </h2>
          //         <img className='image' src={item.image} width="200px" height="200px" />
          //         <p><span color='black'>Title: </span> {item.title}</p>
          //         <p><span color='black'>Price: </span> {item.price}</p>
          //         <p><span color='black'>Description: </span> {item.description}</p>
          //         <p><span color='black'>Category: </span> {item.category}</p>
          //       </div>
          //     )
          // })
        }
        {<div >
          <h2>Details: </h2>
            <img className='image' src={productDetails.image} width="200px" height="200px" />
            <p><span color='black'>Title: </span> {productDetails.title}</p>
            <p><span color='black'>Price: </span> {productDetails.price}</p>
            <p><span color='black'>Description: </span> {productDetails.description}</p>
            <p><span color='black'>Category: </span> {productDetails.category}</p>
        </div>}

      </div>
    </div>
  )
}

export default ProductDetails;