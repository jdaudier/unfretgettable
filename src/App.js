import React from 'react';
import { Router } from '@reach/router';

import Home from './components/home';

const App = () => (
	<Router>
		<Home path="/" />
	</Router>
);

export default App;
