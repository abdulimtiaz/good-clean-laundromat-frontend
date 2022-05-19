import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import NavbarMain from './pages/NavbarMain';
import Home from './pages/Home';
import Login from './pages/Login';
import EmployeeHome from './pages/EmployeeHome';
import Signup from './pages/Signup';
import SubmitProblem from './pages/SubmitProblem';
import CustomerHome from './pages/CustomerHome';

function App() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ userState, setUserState ] = useState();
	const [ userType, setUserType ] = useState();
	useEffect(
		() => {
			const loggedInUser = localStorage.getItem('token');
			const loggedInUserType = localStorage.getItem('type');

			if (loggedInUser) {
				// console.log('Logged in');
				// console.log(loggedInUser);
				const foundUser = loggedInUser;
				const foundUserType = loggedInUserType;

				setUserState(foundUser);
				setUserType(foundUserType);
				console.log(userType);
			}
		},
		[ userType, userState ]
	);

	return (
		<div className="App">
			<NavbarMain />
			{!userState ? (
				<Router>
					<Switch>
						<Route path="/Login">
							<Login />
						</Route>
						<Route path="/Signup">
							<Signup />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			) : (
				<Router>
					<Switch>
						{/* <Route path="/Login">
							<Login />
						</Route> */}
						{/* <Route path="/Signup">
							<Signup />
						</Route> */}
						<Route path="/SubmitProblem">
							<SubmitProblem />
						</Route>
						<Route path="/">{userType == 'Customer' ? <CustomerHome /> : <EmployeeHome />}</Route>
					</Switch>
				</Router>
			)}
		</div>
	);
}

export default App;
