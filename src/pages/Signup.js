import React, { Fragment, useRef, useState } from 'react';
import '../stylesheets/Signup.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const axios = require('axios');

const Signup = () => {
	// const [ count, setCount ] = useState(0);
	const [ { user, employee }, dispatch ] = useStateValue();

	const firstNameInput = useRef(null);
	const lastNameInput = useRef(null);
	const phoneInput = useRef(null);
	const addressInput = useRef(null);
	const emailInput = useRef(null);
	const usernameInput = useRef(null);
	const passwordInput = useRef(null);
	const accountTypeInput = useRef(null);
	const accessCodeInput = useRef(null);

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ userState, setUserState ] = useState();

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
				password: passwordInput.current.value,
				phoneNumber: phoneInput.current.value,
				type: accountTypeInput.current.value,
				accessCode: accessCodeInput.current.value,
				name: firstNameInput.current.value
			};
			const response = await axios.post('https://good-clean-laundromat.herokuapp.com/api/auth/signup', body);

			setUserState(response.data);
			localStorage.setItem('user', response.data);
			console.log('it wokred ');
			console.log(response.data);
			window.location = '/';
		} catch (err) {
			console.error(err.message);
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
					<Form.Group className="mb-3" controlId="formBasicLastName">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="firstName" placeholder="John..." ref={firstNameInput} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicFirstName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="lastName" placeholder="Doe..." ref={lastNameInput} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPhone">
						<Form.Label>Phone #</Form.Label>
						<Form.Control type="phone" placeholder="347-123-4567" ref={phoneInput} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicAddress">
						<Form.Label>Address</Form.Label>
						<Form.Control type="address" placeholder="8 Clarkson St, West Village, NY" ref={addressInput} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							ref={emailInput}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicLastUsername">
						<Form.Label>User Name</Form.Label>
						<Form.Control type="username" placeholder="JohnDoe123" ref={usernameInput} />
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
					<Form.Group>
						<Form.Label>Account Type</Form.Label>

						<Form.Select aria-label="Default select example" ref={accountTypeInput}>
							<option>Open this select menu</option>
							<option value="Customer">Customer</option>
							<option value="Employee">Employee</option>
						</Form.Select>
					</Form.Group>

					<div>
						<Form.Group className="mb-3" controlId="formBasicAccessCode">
							<Form.Label>Access Code</Form.Label>
							<Form.Control type="accesscode" placeholder="*****" ref={accessCodeInput} />
						</Form.Group>
					</div>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Signup;
