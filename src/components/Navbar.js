import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { OutlinedInput } from '@material-ui/core';
import { Button } from '@material-ui/core';

const Navbar = () => {
  const [category, setCategory] = useState([]);
  // const open = Boolean(category);
  const navigate = useNavigate();
  const options = ['electronics', 'jewelery', "men's clothing" ,"women's clothing"]
  //   { key: 1, text: 'electronics', value: "electronics" },
  //   { key: 2, text: 'jewelery', value: "jewelery" },
  //   { key: 3, text: "men's clothing", value: "men's clothing" },
  //   { key: 4, text: "women's clothing", value: "women's clothing" },
  // ]
  
  const handleChange = (e) => {
    setCategory(e.target.value);
    navigate(`/category/${e.target.value}`)   
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
                {/* {
                  localStorage.getItem("details") ?
                    <>  */}
                     <li className="nav-item">
                      <Link className="nav-link" to="/mycart"> MyCart</Link></li>
                      <li className="nav-item">
                      <Button variant="outlined"
                          onClick={() => {
                          localStorage.clear();
                          navigate("/login")
                        }}>LogOut</Button>
                         </li>
                    {/* </> */}
                    {/* :
                    <Link to="/login"><Button variant="outlined">LogOut</Button></Link>
                } */}
              </div>
            </ul>
         
              <FormControl size="small" fullWidth style={{ width: '200px'}}>
                <InputLabel id="demo-simple-select-label" >Category</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={category}
                  label="Category"
                  onChange={ handleChange }
                  input={<OutlinedInput label="Name" />}
                >
                {options.map((item)=> {
                  console.log("shk", item)
                  return <MenuItem key={item} value={item}>{item}</MenuItem>
                })}
              </Select>
            </FormControl>
            {/* <Dropdown
              onChange={handleChange}
              options={options}
              placeholder='All'
              selection
              value={category}
            /> */}
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;