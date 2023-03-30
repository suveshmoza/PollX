import React from 'react';

const PollOptions = ({ value }) => {
	return (
		<div className="container">
			<div className="row p-1">
				<div className="col">
					<input
						type="radio"
						class="btn-check"
						name="options"
						id="option1"
						autocomplete="off"
					/>
					<label class="btn d-grid btn-outline-primary" for="option1">
						Option-1
					</label>
				</div>
				<div className="col">
					<input
						type="radio"
						class="btn-check"
						name="options"
						id="option2"
						autocomplete="off"
					/>
					<label class="btn d-grid btn-outline-primary" for="option2">
						Option-2
					</label>
				</div>
			</div>
			<div className="row row p-1">
				<div className="col ">
					<input
						type="radio"
						class="btn-check"
						name="options"
						id="option3"
						autocomplete="off"
					/>
					<label class="btn d-grid btn-outline-primary" for="option3">
						Option-3
					</label>
				</div>
				<div className="col d-grid">
					<input
						type="radio"
						class="btn-check"
						name="options"
						id="option4"
						autocomplete="off"
					/>
					<label class="btn d-grid btn-outline-primary" for="option4">
						Option-4
					</label>
				</div>
			</div>
		</div>
	);
};

export default PollOptions;
