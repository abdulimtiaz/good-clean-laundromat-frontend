import React, { Fragment, useState, useRef, useEffect } from 'react';
import '../stylesheets/CustomerHome.css';
import CreateCard from './CreateCard.js';
import { Button, Card, Spinner, Form } from 'react-bootstrap';
import axiosInstance from '../config';

const CustomerHome = () => {
	const [ cards, setCards ] = useState(null);
	const [ showForm, setShowForm ] = useState(false);
	const [ dropdownType, setDropdownType ] = useState('');
	const dropdownTypeInput = useRef(null);

	const handleChange = () => {
		setShowForm(!showForm);
	};

	useEffect(() => {
		try {
			const header = { authorization: 'Bearer ' + localStorage.getItem('token') };

			axiosInstance
				.get('/cards/getUserCards', {
					headers: header
				})
				.then((result) => {
					setCards(result.data);
					console.log(cards);
					console.log(result.data);
				});
			// setCards()
		} catch (error) {
			console.log('error while retrieving cards ');
			console.error(error.message);
		}
	}, []);

	return (
		<div>
			<div className="heading">
				<h1>Customer Home</h1>
			</div>

			<div className="content">
				<div className="create_card">
					<button
						type="button"
						className="btn btn-outline-dark"
						onClick={() => {
							setShowForm(true);
						}}
					>
						Create Card
					</button>
				</div>
				<div>
					<h1 className="heading">My Notes</h1>
				</div>
				{cards ? (
					<div className="cards">
						{cards.map((currentCard) => (
							<Card key={currentCard.id} className="card_single">
								<Card.Header as="h5">{currentCard.creator}</Card.Header>
								<Card.Body>
									<Card.Title>{currentCard.type}</Card.Title>
									<Card.Text>{currentCard.message}</Card.Text>
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</Card>
						))}
						{showForm ? (
							// message, type ={ },
							<CreateCard value={showForm} onChange={handleChange} />
						) : null}
					</div>
				) : (
					<div className="no_cards">
						<Spinner animation="grow" />
						<span>No cards to show at the moment!</span>
						<Spinner animation="grow" />
						{showForm ? (
							// message, type ={ },
							<CreateCard value={showForm} onChange={handleChange} />
						) : null}
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomerHome;
