import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from '../redux/actions/productAction';
import { Grid } from '@material-ui/core';
import { Link , useNavigate} from 'react-router-dom';
import './styles/Products.css'

const Products = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);
 
  console.log("products", products)
 useEffect(() => {
    dispatch(getProductsFetch())
  }, []);

  const handleClick = () => {
    navigate('/create')
  };

  return (
    <div className='container'>
   <div className='product'> <form className="d-flex">
      <input className="px-2 search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
      <button className="btn0" type="submit">Search</button>
    </form>
    <div><button className='new-product' onClick={handleClick}>Add Product</button></div></div>
      <div className='data'>
        <Grid container spacing={3}>
          {
            products
          //   .filter((item) => {
          //     if(item.title.toLowerCase().includes(search.toLowerCase()) 
          //     ) {
          //         return item;
          //     }
          // })
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
