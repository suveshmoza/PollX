import React from 'react';
import { PollOptions } from '../components';

const Poll = () => {
	return (
		<div className="mx-auto p-3 border rounded shadow mt-3 poll_display">
			<figure class="p-1">
				<blockquote class="text-center display-6">
					<p>Which one is best under 10K?</p>
				</blockquote>
				<p className="text-center">Total Votes Received: 156</p>
				<p className="p-2">
					<em>
						Hey, I'm looking for a new smartphone that's under 10k INR. I'm
						mostly interested in a phone that has a decent camera and good sound
						quality. I really like taking pictures, so I want something that can
						capture clear and sharp photos. And when it comes to sound, I listen
						to a lot of music and podcasts, so I want a phone that has a loud
						and clear speaker output. It would also be great if the phone had
						some cool features like device control and smart assistant support,
						so I can easily manage my other devices and get things done
						hands-free. Which one should I buy?
					</em>
				</p>
			</figure>
			<PollOptions />
		</div>
	);
};

export default Poll;
