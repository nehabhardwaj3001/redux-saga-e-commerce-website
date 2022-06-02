import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useSelector } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Navbar = () => {
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
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/home"> E-COMMERCE </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link>
              </li>
              <div className='cart'>
                {
                  localStorage.getItem("details") ?
                    <>  <li className="nav-item">
                      <Link className="nav-link" to="/mycart"> MyCart</Link></li>
                      <li className="nav-item">
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
              {/* <div className='filter'>
              <h4 className='price-filter'>Price Filter</h4>
              <div className='price-input'>
                <div className='field'>
                  <span>Min</span>
                  <input type="number" className='input-min' placeholder='min' onChange={(e)=>setLowerlimit(e.target.value)}/>
                </div>
                <div className='seperator'> - </div>
                <div className='field'>
                  <span>Max</span>
                  <input type='number' className='input-max' placeholder='max' onChange={(e)=>setUpperlimit(e.target.value)}/>
                </div>
              </div>
              </div> */}
              {/* <div className='slider'>
                <div className='progress'></div>
              </div> */}
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