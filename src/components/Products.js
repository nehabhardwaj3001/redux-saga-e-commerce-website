import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from '../redux/action';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './styles/Products.css'

const Products = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);
  console.log("products", products)

 useEffect(() => {
    dispatch(getProductsFetch())
  }, []);

  return (
    <div className='container'>
      <div className='search'>
        <input className='input-box' type='text' placeholder="Search Product" onChange={(e) => setSearch(e.target.value)} /> 
        <button className="button">Search</button>
      </div>
      <div className='data'>
        <Grid container spacing={3}>
          {
            products.map((item, index) => {
              return (
                <Grid item xs={4}  key={index} className="image-title">
                  <Link to={`/${item.id}`}  >
                  <img className='image' src={item.image} width="200px" height="200px" />
                  </Link>
                  <p>{item.title}</p>
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    </div>
  )
}

export default Products;
