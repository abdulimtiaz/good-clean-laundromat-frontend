import React, { Fragment } from 'react';
import '../stylesheets/EmployeeHome.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const EmployeeHome = () => {
	return (
		<div>
			<div id="p1">
				Local Laundromat<br />
				Employee Homepage<br />
			</div>

			<div id="p2">
				Employee name
				<input type="text" id="employeename" className="order" placeholder="Lily" readOnly />
			</div>

			<div id="p">
				<ol id="p">
					List of orders:
					<li>
						<Card className="text-center">
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
							<Card.Footer className="text-muted">2 days ago</Card.Footer>
						</Card>
					</li>
				</ol>
			</div>
			<p id="p4">
				<a id="h1" href="p7.html">
					Report a Problem<br />
				</a>

				<a id="h1" href="p1.html">
					Homepage<br />
				</a>
				{/* <Link to="/">
					<Button variant="contained" className={classes.buttonCancel}>
						Cancel
					</Button>
				</Link> */}
			</p>
		</div>
	);
};

export default EmployeeHome;
