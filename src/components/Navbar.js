import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/e-commerce image.jpg';
import cart from '../images/cart-ImResizer.jpg';
import "./styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="my-cart">
        <img className='logo-navbar' src={logo} alt='logo' />
      </a>
      <div><h1 className="brand-name"> E-COMMERCE </h1></div>
      <div className="my-cart">
        {/* <a href="/" className="my-cart">
       <img className='logo-navbar' src={logo} alt='logo' />
    </a> */}
      </div>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/home"><i class="fa fa-home" style={{fontSize:"48px",color:"cornflowerblue"}}></i></Link>
          </li>
          <li>
            <Link to="/login"><i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:"48px",color:"cornflowerblue"}}></i></Link>
          </li>
          <li>
          <Link to="/mycart"><img className='logo-navbar' src={cart} alt='logo' /></Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;