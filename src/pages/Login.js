import React, { Fragment, useRef, useState } from 'react';
// import '../stylesheets/Signup.css';
import { Button, Form, FormControl } from 'react-bootstrap';

const axios = require('axios');

const Login = () => {
	// const [ count, setCount ] = useState(0);

	const [ email, setEmail ] = useState('');
	const [ errorMsg, setErrorMsg ] = useState('');

	const [ password, setPassword ] = useState('');
	const [ userState, setUserState ] = useState();
	const [ userType, setUserType ] = useState();
	const emailInput = useRef(null);
	const passwordInput = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		/*
			 email,
            password,
            phoneNumber,
            type
			const { email, password, phoneNumber, type, accessCode } = req.body;

		*/
		// console.log(firstNameInput.current.value);
		try {
			const body = {
				email: emailInput.current.value,
				password: passwordInput.current.value
			};
			const response = await axios.post('https://good-clean-laundromat.herokuapp.com/api/auth/signin', body);
			setUserState(response.data.token);
			setUserType(response.data.type);

			// console.log(userState);
			// store the user in localStorage
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('type', response.data.type);

			console.log(response.data.token);
			// console.log(user, employee);

			window.location = '/';
		} catch (err) {
			console.error(err.message);
			setErrorMsg(true);
		}
	};
	return (
		<div>
			<p id="p1">
				Local Laundromat<br />
				Customer Signup form<br />
			</p>
			<div className="signup-form">
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							ref={emailInput}
							onChange={({ target }) => setEmail(target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							ref={passwordInput}
							onChange={({ target }) => setPassword(target.value)}
						/>
					</Form.Group>
					{errorMsg ? (
						<div class="alert alert-danger" role="alert">
							Please type a valid Email/Password.
							{/* <a href="#" class="alert-link">
								an example link
							</a>. Give it a click if you like. */}
						</div>
					) : null}
					<Button variant="dark" type="submit" className="login_button">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Login;
