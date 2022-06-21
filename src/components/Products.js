import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from '../redux/actions/productAction';
import { Grid } from '@material-ui/core';
import { Link , useNavigate} from 'react-router-dom';
import './styles/Products.css';
import Pagination from '@material-ui/lab/Pagination';

const Products = () => {
  const [page, setPage] = useState(1);
  const[lowerlimit,setLowerlimit]=useState(0);
  const[upperlimit,setUpperlimit]=useState(10000); 
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);
  const handleChange = (value) => {
    setPage(value);
  };

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
    <div className='filter'>
              <h4 className='price-filter'>Price Filter</h4>
              <div className='price-input'>
                <div className='field'>
                  <input type="number" className='input-min' placeholder='min' onChange={(e)=>setLowerlimit(e.target.value)}/>
                </div>
                <div className='seperator'> - </div>
                <div className='field'>
                  <input type='number' className='input-max' placeholder='max' onChange={(e)=>setUpperlimit(e.target.value)}/>
                </div>
              </div>
              </div>
    <div><button className='new-product' onClick={handleClick}>Add Product</button></div></div>
      <div className='data'>
        <Grid container spacing={3}>
          {
            products
            .filter((item) => {
              if(item.title.toLowerCase().includes(search.toLowerCase()) && item.price>=lowerlimit &&item.price<=upperlimit
              ) {
                  return item;
              }
          })
            .map((item, index) => {
              return (
                <Grid item xs={3}  key={index} className="image-title">
                  <Link to={`/product/${item.id}`}>
                  <img className='image' src={item.image} alt='image' width="200px" height="200px" />
                  </Link>
                  <p className='title'>{item.title}</p>
                </Grid>
              );
            })
          }
        </Grid>
        <Pagination count={4} variant="outlined" color="primary" page={page} onChange={handleChange}/>
      </div>
      </div>
  )
}

export default Products;
