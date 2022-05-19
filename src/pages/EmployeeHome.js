import React, { Fragment, useState, useEffect, useRef } from 'react';
import '../stylesheets/EmployeeHome.css';
import { Button, Card, Spinner, Cards } from 'react-bootstrap';
import CreateCard from './CreateCard.js';
import axiosInstance from '../config';

const EmployeeHome = () => {
	const [ cards, setCards ] = useState(null);
	// const [ closedCard, setClosedCard ] = useState(false);

	const [ showForm, setShowForm ] = useState(false);
	const [ dropdownType, setDropdownType ] = useState('');
	const dropdownTypeInput = useRef(null);

	const handleChange = () => {
		setShowForm(!showForm);
	};
	const closeCard = async (id) => {
		try {
			const header = { authorization: 'Bearer ' + localStorage.getItem('token') };
			const response = await axiosInstance.delete('/cards/' + id, {
				headers: header
			});
			window.location = '/';

			// setClosedCard(!closedCard);
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		try {
			axiosInstance.get('/cards/getAllCards').then((result) => {
				setCards(result.data);
				console.log(cards);
				console.log(result.data);
			});
		} catch (error) {
			console.log('error while retrieving cards ');
			console.error(error.message);
		}
	}, []);
	return (
		<div>
			<div className="heading">
				<h1>Employee Home</h1>
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
									{currentCard.activestatus ? (
										<Button
											variant="dark"
											onClick={() => {
												closeCard(currentCard.id);
											}}
										>
											Close{' '}
										</Button>
									) : null}
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

export default EmployeeHome;
