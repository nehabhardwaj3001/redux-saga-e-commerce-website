import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from '../redux/actions/productAction';
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
    <form className="d-flex">
      <input class="px-2 search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
      <button class="btn0" type="submit">Search</button>
    </form>
      <div className='data'>
        <Grid container spacing={3}>
          {
            products
            .filter((item) => {
              if(item.title.toLowerCase().includes(search.toLowerCase()) 
              ) {
                  return item;
              }
          })
            .map((item, index) => {
              return (
                <Grid item xs={3}  key={index} className="image-title">
                  <Link to={`/product/${item.id}`}  >
                  <img className='image' src={item.image} alt='image' width="200px" height="200px" />
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

export default Products;
