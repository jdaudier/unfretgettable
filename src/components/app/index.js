import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Question from '../templates/question';
import Answer from '../templates/answer';
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
								<Route path='/notes/:noteId' exact component={Question} />
								<Route path='/notes/:noteId/answer' component={Answer} />
								<Route render={() => <h3>No Match</h3>} />
							</Switch>
						</Row>
					</Container>
				</div>
			</BrowserRouter>
		);
	}
}
