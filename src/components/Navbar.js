import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/e-commerce image.jpg';
import cart from '../images/cart-ImResizer.jpg';
import "./styles/Navbar.css";


const Navbar = () => {
  const [category, setCategory] = useState("");

  return (

    <nav className="navigation">
      <div className='navbar'>
      <div>
      <a href="/" className="my-cart">
        <img className='logo-navbar' src={logo} alt='logo' />
      </a></div>
    <div><h1 className="brand-name"> E-COMMERCE </h1></div>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/home"><i className="fa fa-home" style={{fontSize:"48px",color:"cornflowerblue"}}></i></Link>
          </li>
          <li>
            <Link to="/login"><i className="fa fa-sign-out" aria-hidden="true" style={{fontSize:"48px",color:"cornflowerblue"}}></i></Link>
          </li>
          <li>
          <Link to="/mycart"><img className='logo-navbar' src={cart} alt='logo' /></Link>
          </li>
        </ul>
        </div>
      </div>
       <div className='categories'>
       <Link to={`/category/jewelery`}  >
         <button className='category' onClick={(e) => setCategory(e.target.value)}>electronics</button>
         <button className='category' onClick={(e) => setCategory(e.target.value)}>jewelery</button>
         <button className='category' onClick={(e) => setCategory(e.target.value)}>men's clothing</button>
         <button className='category' onClick={(e) => setCategory(e.target.value)}>women's clothing</button>
       </Link>
       </div>
    </nav>


 
  
  );
}

export default Navbar;