import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Card, Spinner, Form } from 'react-bootstrap';
import axiosInstance from '../config';
const CreateCard = (props) => {
	const [ dropdownType, setDropdownType ] = useState('');
	const [ message, setMessage ] = useState('');

	const handleChange = (event) => {
		// Here, we invoke the callback with the new value
		props.onChange(event.target.value);
	};
	const handleSubmit = async (event) => {
		// Here, we invoke the callback with the new value
		event.preventDefault();

		console.log(message, dropdownType);
		try {
			const body = { message: message, type: dropdownType };
			const header = { authorization: 'Bearer ' + localStorage.getItem('token') };

			const response = await axiosInstance.post('/cards', body, {
				headers: header
			});

			window.location = '/';
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<div className="form-group">
						<label for="exampleFormControlTextarea1">Message</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							onChange={({ target }) => setMessage(target.value)}
						/>
					</div>
				</Form.Group>

				<Form.Group>
					<Form.Label>Card Type</Form.Label>

					<Form.Select
						aria-label="Default select example"
						onChange={({ target }) => setDropdownType(target.value)}
					>
						<option>Open this select menu</option>
						<option value="Note">Note</option>
						<option value="Delivery">Delivery</option>
					</Form.Select>
				</Form.Group>
				<Button variant="light" className="login_button" onClick={handleChange}>
					Cancel
				</Button>
				<Button variant="dark" type="submit" className="login_button">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default CreateCard;
