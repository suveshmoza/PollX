import React from 'react';

const Navbar = () => {
	return (
		<nav class="navbar bg-light">
			<div class="container">
				<a class="navbar-brand">PollX</a>
				<div class="d-flex">
					<button className="btn btn-outline-success mx-1">Create Poll</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
