import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './home';

// Shared Styles
import { Container, Row } from '../common/styles';
import HomeIcon from '../icons/home-icon';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Container>
						<HomeIcon />
						<Row>
							<Switch>
								<Route path='/' exact component={Home} />
								<Route render={() => <h3>No Match</h3>} />
							</Switch>
						</Row>
					</Container>
				</div>
			</BrowserRouter>
		);
	}
}
