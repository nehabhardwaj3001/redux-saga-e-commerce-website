import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProductCategoryFetch} from '../redux/actions/productAction';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import './styles/Categories.css';


const Categories = () => {
  // const [category , setCategory] = useState("")
	const {params} = useParams();
	const categories = useSelector(state => state.productsReducer.categories);
	const dispatch = useDispatch();
console.log("category", categories)
// console.log("params category", params.category)

	useEffect(() => {
    dispatch(getProductCategoryFetch(params.category))
  }, [params.category]);

  return (
    <div className='category-page'>
      <div className='navbar'>
        <Navbar /> 
      </div>
      <div className='category-items'>
      <Grid container spacing={3}>
      {
         categories && categories[0] && categories.map((item, index) => {
          return (
            <Grid item xs={4}  key={index} className="image-title">
              <img className='image' src={item.image} width="200px" height="200px" />
              <p className='title'>{item.title}</p>
            </Grid>
          );
         })
      }
      </Grid>
        </div>
    </div>
  )
}

export default Categories;
