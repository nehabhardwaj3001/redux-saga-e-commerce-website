import React,{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/e-commerce image.jpg';
import cart from '../images/cart-ImResizer.jpg';
import "./styles/Navbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { getProductsFetch  } from '../redux/actions/productAction';
import {getProductCategoryFetch} from '../redux/actions/productAction';
import { Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);
  console.log("products", products)
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const options = [
    { key: 1, text: 'electronics', value: "electronics" },
    { key: 2, text: 'jewelery', value: "jewelery"  },
    { key: 3, text: "men's clothing", value: "men's clothing" },
    { key: 4, text: "women's clothing", value: "women's clothing"},
  ]
  const handleChange = (e, {value})=>{
    setCategory(value);
    navigate(`/category/${value}`)   
  };

  // useEffect(() => {
  //   dispatch(getProductCategoryFetch(category))
  // }, [category]);
  
  return (
  <>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <Link class="navbar-brand" to="#"> E-COMMERCE </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/home">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/mycart"> MyCart</Link>
            </li>
          </ul>
          <Dropdown
          onChange={handleChange}
          options={ options }
          placeholder='All'
          selection
          value={category}
        />
          {/* <form class="d-flex">
            <input class="px-2 search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
            <button class="btn0" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
    <hr />
    {/* <Dropdown
          onChange={handleChange}
          options={ options }
          placeholder='All'
          selection
          value={category}
        /> */}
    {/* <div className='categories'>
       <Link to={`/category/jewelery`}  >
         <button className='category' onClick={(e) => setCategory(e.target.value)}>electronics</button>
         <button className='category' onClick={(e) => setCategory(e.target.value)}>jewelery</button>
         <button className='category' onClick={(e) => setCategory(e.target.value)}>men's clothing</button>
         <button className='category' onClick={(e) => setCategory(e.target.value)}>women's clothing</button>
       </Link>
       </div> */}
    </>
 
  
  );
}

export default Navbar;