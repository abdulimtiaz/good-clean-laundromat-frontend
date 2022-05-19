import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavbarMain = () => {
	const [ userState, setUserState ] = useState();

	useEffect(() => {
		const loggedInUser = localStorage.getItem('token');
		// const loggedInUserType = localStorage.getItem('type');

		if (loggedInUser) {
			// console.log('Logged in');
			// console.log(loggedInUser);
			const foundUser = loggedInUser;
			// const foundUserType = JSON.parse(loggedInUserType);

			setUserState(foundUser);
			// setUserType(foundUserType);
		}
	}, []);
	const logout = () => {
		localStorage.clear();
	};
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>Good Clean Laundromat</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home Page</Nav.Link>
							{/* <Nav.Link href="#pricing">Sign</Nav.Link> */}
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								{/* <NavDropdown.Item href="/Login"></NavDropdown.Item> */}
								{/* <NavDropdown.Item href="/Signup">Sign Up</NavDropdown.Item> */}
								<NavDropdown.Item href="/">Incoming Feature</NavDropdown.Item>

								{/* <NavDropdown.Item href="#action/3.3"></NavDropdown.Item> */}
								<NavDropdown.Divider />
								<NavDropdown.Item href="/SubmitProblem">Submit Problem</NavDropdown.Item>
							</NavDropdown>
						</Nav>

						{!userState ? (
							<Nav>
								<Nav.Link href="/Login">Sign In</Nav.Link>
								<Nav.Link href="/Signup">Sign Up</Nav.Link>
							</Nav>
						) : (
							<Nav>
								<Nav.Link href="home" onClick={logout}>
									Log Out
								</Nav.Link>
							</Nav>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarMain;
