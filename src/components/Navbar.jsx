import React from 'react';

const Navbar = () => {
	return (
		<nav class="navbar bg-light">
			<div class="container">
				<a class="navbar-brand">PollX</a>
				<div class="d-flex">
					<button className="btn btn-outline-success m-1">Create Poll</button>
					<button className="btn btn-primary m-1">Login</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
