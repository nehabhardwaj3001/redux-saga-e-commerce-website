import React, { useState, useEffect } from 'react';
import "./styles/Login.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { getUsers } from '../redux/actions/userAction';

const Login = () => {
	const dispatch = useDispatch();
	const [details, setdetails] = useState({ email: "", password: "" });
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const state = useSelector(state => state.userReducer.users)
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getUsers())
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		setFormErrors(validate(details));
		setIsSubmit(true);
		console.log(details);
		console.log("state", state)
		state.map((item) => {
			if (item.email === details.email && item.password === details.password) {
				navigate("/home");
			}
		})
	}

	// useEffect(() => {
	// 	localStorage.setItem("details", JSON.stringify(details));
	// }, [details]);

	const validate = (values) => {
		const errors = {};

		state.map((item) => {
			if (!values.email) {
				errors.email = "Email is required!";
			}
			else if (item.email !== details.email && item.password !== details.password) {
				errors.InvalidEmail = "Invalid Email or Password !";
			}
		})
		if (values.password.length === 0) {
			errors.password = "Password is required";
		}
		else if (values.password.length < 4) {
			errors.password = "Password must be more than 4 characters";
		} else if (values.password.length > 10) {
			errors.password = "Password cannot exceed more than 10 characters";
		}
		return errors;
	};

	return (
		<div className='form-container'>
			<form onSubmit={submitHandler}>
				<h2 className='login'>Login</h2>
				{/* <div className='form-group'>
					<label htmlFor='username'>Username :</label>
					<input type="text" username="username" id="username" onChange={e => setdetails({ ...details, username: e.target.value })} value={details.username} />
				</div>
				<p className='error'> {formErrors.username} </p> */}
				<p className='error'> {formErrors.InvalidEmail}</p>
				<div className='form-group'>
					<label htmlFor='email'>Email :</label>
					<input type="email" name="email" id="email" onChange={e => setdetails({ ...details, email: e.target.value })} value={details.email} />
				</div>
				<p className='error'> {formErrors.email}</p>
				<div className='form-group'>
					<label htmlFor='password'>Password :</label>
					<input type="password" name="password" id="password" onChange={e => setdetails({ ...details, password: e.target.value })} value={details.password} />
				</div>
				<p className='error'> {formErrors.password} </p>
				<Button type='submit' variant='contained' color='primary' onClick={() => {
					localStorage.setItem("details", JSON.stringify(details));
				}}>Login</Button>
			</form>
			<p className='register'>Not a user? <Link className='register' to="/signIn">Register now</Link></p>
		</div>
	)
}

export default Login;
