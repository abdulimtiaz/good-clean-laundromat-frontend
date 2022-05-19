import React, { Fragment, useState, useRef } from 'react';
import '../stylesheets/CustomerHome.css';
import CreateCard from './CreateCard.js';
import { Button, Card, Spinner, Form } from 'react-bootstrap';
const CustomerHome = () => {
	const [ cards, setCards ] = useState(null);
	const [ showForm, setShowForm ] = useState(false);
	const [ dropdownType, setDropdownType ] = useState('');
	const dropdownTypeInput = useRef(null);

	const handleChange = () => {
		setShowForm(!showForm);
	};

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
						<Card>
							<Card.Header as="h5">Featured</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
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
