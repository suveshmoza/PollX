import React from 'react';

const PollResult = () => {
	return (
		<div className="mx-auto p-3 border rounded shadow mt-3 poll_display">
			<h4 className="text-center">Create New Poll</h4>
			<form>
				<div className="m-2">
					<label for="exampleFormControlInput1" class="form-label">
						Poll Title
					</label>
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Eg. Will Hamilton become 8th World Champion"
					/>
				</div>
				<div class="m-2">
					<label for="exampleFormControlTextarea1" class="form-label">
						Description
					</label>
					<textarea
						class="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="Eg. The new car from Mercedes is much better than the last year."
					></textarea>
				</div>
				<div className="m-2">
					<label for="exampleFormControlInput1" class="form-label">
						Option 1
					</label>
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Eg. Yes"
					/>
				</div>
				<div className="m-2">
					<label for="exampleFormControlInput1" class="form-label">
						Option 2
					</label>
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Eg. No"
					/>
				</div>
				<div className="m-2">
					<label for="exampleFormControlInput1" class="form-label">
						Option 3
					</label>
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Eg. Maybe but RedBull is still fast"
					/>
				</div>
				<div className="m-2">
					<label for="exampleFormControlInput1" class="form-label">
						Option 4
					</label>
					<input
						type="text"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="Eg. Impossible"
					/>
				</div>

				<div className="text-center m-2 p-2">
					<button className="text-center btn btn-success">Create Poll</button>
				</div>
			</form>
		</div>
	);
};

export default PollResult;
