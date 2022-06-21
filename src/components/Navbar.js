import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useSelector } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Navbar = () => {
  const products = useSelector(state => state.productsReducer.products);
  console.log("products", products)
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const options = [
    { key: 1, text: 'electronics', value: "electronics" },
    { key: 2, text: 'jewelery', value: "jewelery" },
    { key: 3, text: "men's clothing", value: "men's clothing" },
    { key: 4, text: "women's clothing", value: "women's clothing" },
  ]
  const handleChange = (e, { value }) => {
    setCategory(value);
    navigate(`/category/${value}`)
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <Link class="navbar-brand" to="/home"> E-COMMERCE </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/home">Home</Link>
              </li>
              <div className='cart'>
                {
                  localStorage.getItem("details") ?
                    <>  <li class="nav-item">
                      <Link class="nav-link" to="/mycart"> MyCart</Link></li>
                      <li class="nav-item">
                        <Button content="logout"
                          onClick={() => {
                          localStorage.clear();
                          navigate("/login")
                        }}
                         /></li>
                    </>
                    :
                    <Link to="/login"><Button content="logIn" /></Link>
                }
              </div>
            </ul>
            <Dropdown
              onChange={handleChange}
              options={options}
              placeholder='All'
              selection
              value={category}
            />
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;