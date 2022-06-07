import React, { useState, useEffect } from 'react';
import "./styles/Login.css";
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SignIn = () => {
	const [details, setDetails] = useState({ firstname: "", lastname: "", username: "", email: "", password: "" });
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const navigate = useNavigate();

	// const submitHandler = (e) => {
	// 	e.preventDefault();
	// 	setFormErrors(validate(details));
	// 	setIsSubmit(true);
	// 	console.log(signInDetails);
	// 	dispatch(addUser(signInDetails));
	// 	navigate("/home")
	// }

	useEffect(() => {
		localStorage.setItem("details", JSON.stringify(details));
	}, [details]);

	const PostData = async (e)=>{
		const {firstname, lastname, username, email, password} = details;
		e.preventDefault();
		setFormErrors(validate(details));
		setIsSubmit(true);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
		localStorage.setItem("details", JSON.stringify(details));
		 await fetch("http://localhost:7000/register",{
		  method: "POST",
		  headers: {
			"content-Type" : "application/json"
		  },
		  body: JSON.stringify({
			firstname, lastname, username, email, password
		  })
		})
		console.log("csdv",details);
			navigate('/home');
		}
	  }

	//   useEffect(() => {
	// 	console.log(formErrors);
	// 	if (Object.keys(formErrors).length === 0 && isSubmit) {
	// 		navigate('/home');
	// 	}
	// }, [formErrors]);

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



	return (
		<div className='form-container'>
			<form onSubmit={PostData}>
				<h2 className='login'>Sign Up</h2>
				<div className='form-group'>
					<label htmlFor='firstName'>First Name :</label>
					<input type="text" username="username" id="firstName" onChange={e => setDetails({ ...details, firstname: e.target.value })} value={details.firstname} />
				</div>
				<p className='error'> {formErrors.firstname} </p>
				<div className='form-group'>
					<label htmlFor='lastName'>Last Name :</label>
					<input type="text" username="username" id="lastName" onChange={e => setDetails({ ...details, lastname: e.target.value })} value={details.lastname} />
				</div>
				<p className='error'> {formErrors.lastname} </p>
				<div className='form-group'>
					<label htmlFor='username'>Username :</label>
					<input type="text" username="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
				</div>
				<p className='error'> {formErrors.username} </p>
				<div className='form-group'>
					<label htmlFor='email'>Email :</label>
					<input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
				</div>
				<p className='error'> {formErrors.email} </p>
				<div className='form-group'>
					<label htmlFor='password'>Password :</label>
					<input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
				</div>
				<p className='error'> {formErrors.password} </p>
				<Button type='submit' variant='contained' color='primary' >Sign Up</Button>
			</form>
		</div>
	)
}

export default SignIn;
