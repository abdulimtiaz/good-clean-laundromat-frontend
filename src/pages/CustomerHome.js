import React, { Fragment, useState } from 'react';
import '../stylesheets/CustomerHome.css';
import { Button, Card, Spinner } from 'react-bootstrap';
const CustomerHome = () => {
	const [ cards, setCards ] = useState(null);

	return (
		<div>
			<div className="heading">
				<h1>Customer Home</h1>
			</div>

			<div className="content">
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
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomerHome;
