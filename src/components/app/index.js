import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Login from './login';
import Question from '../templates/question';
import Answer from '../templates/answer';
import Register from './register';
import Home from './home';
import Dashboard from '../protected/dashboard';
import { logout } from '../../helpers/auth';
import { firebaseAuth } from '../../config/.constants';

// Shared Styles
import { Container, Row } from '../common/styles';

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const spinLogo = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
    animation: ${spinLogo} infinite 20s linear;
    height: 80px;
`;

const Heading = styled.div`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

const Intro = styled.p`
    font-size: large;
`;


function PrivateRoute ({component: Component, authed, ...rest}) {
	return (
		<Route
			{...rest}
			render={(props) => authed === true
				? <Component {...props} />
				: <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
		/>
	)
}

function PublicRoute ({component: Component, authed, ...rest}) {
	return (
		<Route
			{...rest}
			render={(props) => authed === false
				? <Component {...props} />
				: <Redirect to='/dashboard' />}
		/>
	)
}

export default class App extends Component {
	state = {
		authed: false,
		loading: true,
	};
	componentDidMount () {
		this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					authed: true,
					loading: false,
				})
			} else {
				this.setState({
					loading: false
				})
			}
		})
	}
	componentWillUnmount () {
		this.removeListener()
	}
	render() {
		return this.state.loading === true ? <h1>Loading</h1> : (
				<BrowserRouter>
					<div>
						{/*<nav className="navbar navbar-default navbar-static-top">*/}
							{/*<div className="container">*/}
								{/*<div className="navbar-header">*/}
									{/*<Link to="/" className="navbar-brand">React Router + Firebase Auth</Link>*/}
								{/*</div>*/}
								{/*<ul className="nav navbar-nav pull-right">*/}
									{/*<li>*/}
										{/*<Link to="/" className="navbar-brand">Home</Link>*/}
									{/*</li>*/}
									{/*<li>*/}
										{/*<Link to="/dashboard" className="navbar-brand">Dashboard</Link>*/}
									{/*</li>*/}
									{/*<li>*/}
										{/*{this.state.authed*/}
											{/*? <button*/}
												{/*style={{border: 'none', background: 'transparent'}}*/}
												{/*onClick={() => {*/}
													{/*logout();*/}
													{/*this.setState({authed: false})*/}
												{/*}}*/}
												{/*className="navbar-brand">Logout</button>*/}
											{/*: <span>*/}
                        {/*<Link to="/login" className="navbar-brand">Login</Link>*/}
                        {/*<Link to="/register" className="navbar-brand">Become a Host</Link>*/}
                      {/*</span>}*/}
									{/*</li>*/}
								{/*</ul>*/}
							{/*</div>*/}
						{/*</nav>*/}
						<Container>
							<Row>
								<Switch>
									<Route path='/' exact component={Home} />
									<PublicRoute authed={this.state.authed} path='/notes/:noteId' exact component={Question} />
									<PublicRoute authed={this.state.authed} path='/notes/:noteId/answer' component={Answer} />
									<PublicRoute authed={this.state.authed} path='/login' component={Login} />
									<PublicRoute authed={this.state.authed} path='/register' component={Register} />
									<PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
									<Route render={() => <h3>No Match</h3>} />
								</Switch>
							</Row>
						</Container>
					</div>
				</BrowserRouter>
			);
	}
}
