import React, { useState, useEffect } from 'react';
import "./styles/Login.css";
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/userAction';

const Login = () => {
	const dispatch = useDispatch();
	const [signInDetails, setsignInDetails] = useState({ firstname: "", lastname: "", username: "", email: "", password: "" });
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		setFormErrors(validate(signInDetails));
		setIsSubmit(true);
		console.log(signInDetails);
		dispatch(addUser(signInDetails));
		navigate("/home")
	}

	useEffect(() => {
		localStorage.setItem("signInDetails", JSON.stringify(signInDetails));
	}, [signInDetails]);

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			navigate('/home');
		}
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		if (!values.firstname) {
			errors.firstname = "First Name is required!";
		}
		if (!values.lastname) {
			errors.lastname = "Last Name is required!";
		}
		if (!values.username) {
			errors.username = "Username is required!";
		}
		if (!values.email) {
			errors.email = "Email is required!";
		}
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

	const PostData = async (e)=>{
		const {firstname, lastname, username, email, password} = signInDetails;
		fetch("http://localhost:5000/register",{
		  method: "POST",
		  headers: {
			"content-Type" : "application/json"
		  },
		  body: JSON.stringify({
			firstname, lastname, username, email, password
		  })
		})
	  }

	return (
		<div className='form-container'>
			<form onSubmit={PostData}>
				<h2 className='login'>Sign In</h2>
				<div className='form-group'>
					<label htmlFor='firstName'>First Name :</label>
					<input type="text" username="username" id="firstName" onChange={e => setsignInDetails({ ...signInDetails, firstname: e.target.value })} value={signInDetails.firstname} />
				</div>
				<p className='error'> {formErrors.firstname} </p>
				<div className='form-group'>
					<label htmlFor='lastName'>Last Name :</label>
					<input type="text" username="username" id="lastName" onChange={e => setsignInDetails({ ...signInDetails, lastname: e.target.value })} value={signInDetails.lastname} />
				</div>
				<p className='error'> {formErrors.lastname} </p>
				<div className='form-group'>
					<label htmlFor='username'>Username :</label>
					<input type="text" username="username" id="username" onChange={e => setsignInDetails({ ...signInDetails, username: e.target.value })} value={signInDetails.username} />
				</div>
				<p className='error'> {formErrors.username} </p>
				<div className='form-group'>
					<label htmlFor='email'>Email :</label>
					<input type="email" name="email" id="email" onChange={e => setsignInDetails({ ...signInDetails, email: e.target.value })} value={signInDetails.email} />
				</div>
				<p className='error'> {formErrors.email} </p>
				<div className='form-group'>
					<label htmlFor='password'>Password :</label>
					<input type="password" name="password" id="password" onChange={e => setsignInDetails({ ...signInDetails, password: e.target.value })} value={signInDetails.password} />
				</div>
				<p className='error'> {formErrors.password} </p>
				<Button type='submit' variant='contained' color='primary'>Sign In</Button>
			</form>
		</div>
	)
}

export default Login;
