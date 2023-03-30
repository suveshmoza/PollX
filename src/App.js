import React from 'react';
import { Layout } from './components';
import { Home, Poll, PollResult } from './pages';
import './css/index.css';
const App = () => {
	return (
		<Layout>
			<PollResult />
		</Layout>
	);
};

export default App;
