import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './home';

// Shared Styles
import { Container } from '../common/styles';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Container>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route render={() => <h3>No Match</h3>} />
					</Switch>
				</Container>
			</BrowserRouter>
		);
	}
}
