import React, { Fragment, useEffect, useRef, useState } from 'react';
import '../stylesheets/Signup.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import axiosInstance from '../config';

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
	const [ accountType, setAccountType ] = useState('');

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
			const accessCodeTemp = accountType == 'Customer' ? '' : accessCodeInput.current.value;
			const body = {
				email: emailInput.current.value,
				password: passwordInput.current.value,
				phoneNumber: phoneInput.current.value,
				type: accountTypeInput.current.value,
				accessCode: accessCodeTemp,
				name: firstNameInput.current.value
			};
			console.log(body);
			const response = await axiosInstance.post('/auth/signup', body);

			window.location = '/';
		} catch (err) {
			console.error(err.message);
			console.log('error signing up');
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
						<Form.Control type="number" maxLength="9" placeholder="347-123-4567" ref={phoneInput} />
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

						<Form.Select
							aria-label="Default select example"
							ref={accountTypeInput}
							onChange={({ target }) => setAccountType(target.value)}
						>
							<option>Open this select menu</option>
							<option value="Customer">Customer</option>
							<option value="Employee">Employee</option>
						</Form.Select>
					</Form.Group>
					{accountType == 'Employee' ? (
						<div>
							<Form.Group className="mb-3" controlId="formBasicAccessCode">
								<Form.Label>Access Code</Form.Label>
								<Form.Control type="accesscode" placeholder="*****" ref={accessCodeInput} />
							</Form.Group>
						</div>
					) : (
						<br />
					)}

					<Button variant="dark" type="submit" className="login_button">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Signup;
