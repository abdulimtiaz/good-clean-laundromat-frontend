import React, { Fragment } from 'react';
import '../stylesheets/CustomerHome.css';

const CustomerHome = () => {
	return (
		<Fragment>
			<p id="p1">
				Local Laundromat<br />
				Customer Home
			</p>

			<p id="p2">
				Customer Name:
				<input type="text" id="customername" readOnly />
				<br />
				<br />
			</p>
			<p id="p3">
				<a id="h1" href="p8.html">
					Request pickup<br />
				</a>
				<br />

				<p id="p5">
					Order Status
					<input type="text" id="p5" placeholder="No order to show" readOnly />
				</p>
			</p>
			<br />
			<br />
			<br />

			<p id="p4">
				<a id="h1" href="p7.html">
					Report a Problem<br />
				</a>

				<a id="h1" href="p1.html">
					Homepage<br />
				</a>
			</p>
		</Fragment>
	);
};

export default CustomerHome;
