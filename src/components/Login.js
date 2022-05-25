import React, { useState , useEffect} from 'react';
import Home from './Home.js';
import "./styles/Login.css";
// import logo from '../image/logo.jpeg';
import { useNavigate } from 'react-router-dom';
import  Button   from '@material-ui/core/Button';

const Login = () => {
    const [details, setdetails] = useState({username: "", email: "", password: ""});
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details);
        }


  return (
    <div className='form-container'>
    <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='username'>Username :</label>
                <input type="text"  username="username" id="username" onChange={e => setdetails({...details, username: e.target.value})} value={details.username} />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email :</label>
                <input type="email" name="email" id="email" onChange={e => setdetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password :</label>
                <input type="password" name="password" id="password" onChange={e => setdetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <Button type='submit' variant='contained'>Login</Button>
    </form>
    </div>
  )
}

export default Login;
