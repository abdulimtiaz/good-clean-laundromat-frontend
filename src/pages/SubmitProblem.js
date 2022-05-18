import React, { Fragment } from 'react';
import '../stylesheets/SubmitProblem.css';

const SubmitProblem = () => {
	return (
		<div>
			<p id="p1">
				Local Laundromat<br />
				Report your complaints!
			</p>
			<p id="p2">
				Name:
				<input type="text" id="name" placeholder="Type your name" />
				Problem:<br />
				<input type="text" id="problem" placeholder="Type your problem" />
				<button id="submit">Submit</button>
			</p>
		</div>
	);
};

export default SubmitProblem;
