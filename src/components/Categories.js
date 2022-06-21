import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProductCategoryFetch} from '../redux/actions/productAction';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import './styles/Categories.css';


const Categories = () => {
	const params = useParams();
	const categories = useSelector(state => state.productsReducer.categories);
	const dispatch = useDispatch();
  const [category, setCategory] = useState("");



useEffect(() => {
  dispatch(getProductCategoryFetch(params.category))
}, [params.category]);
console.log("category", categories)
  return (
    <div className='category-page'>
      <div className='navbar-catyegory'>
        <Navbar /> 
      </div>
      <div className='category-items'>
      <Grid container spacing={3}>
      {
         categories && categories[0] && categories.map((item, index) => {
          return (
            <Grid item xs={4}  key={index} className="image-title">
              <Link to={`/product/${item.id}`}  >
              <img className='image' src={item.image} width="200px" height="200px" />
              </Link>
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
