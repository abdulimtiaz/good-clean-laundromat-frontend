import React, { Fragment } from 'react';
import '../stylesheets/Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Fragment>
			<p id="p1">
				Local Laundromat<br />Welcome to Local Laundromat<br />
			</p>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div id="links">
				<div className="d-grid gap-2">
					<Button href="/Login" variant="primary" size="lg">
						Login
					</Button>

					<Button href="/Signup" variant="secondary" size="lg">
						Customer Signup<br />
					</Button>
				</div>

				{/* <a id = "h2" href = "/">Customer login<br/></a> */}
			</div>
			<br />
			<br />
			<br />
			<br />

			<p id="p2">
				Address:123-45 HelloWorld Blvd, Washington Heights, New York<br />Phone:(123)-111-1111<br />Email:<ins>localaundromat@gmail.com</ins>
				<br />Hours of operations:<b>We are open 24/7!</b>
				<br />
			</p>
		</Fragment>
	);
};

export default Home;
