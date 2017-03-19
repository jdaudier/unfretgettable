import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Helpers
import getRandomNoteId from '../common/get-random-note';

// Shared Styles
import { Bar, Header, Button, ButtonWrapper, Nav } from '../common/styles';

export default class Home extends Component {
	state = {
		nextNoteId: null,
	};

	componentDidMount() {
		const nextNoteId = getRandomNoteId();
		this.setState({nextNoteId});
	}

	render () {
		const {nextNoteId} = this.state;

		return (
			<div>
				<Nav>
					<Bar />
					<Header>Unfretgettable</Header>
				</Nav>
				<ButtonWrapper>
					<Link to={{pathname: `/notes/${nextNoteId}`}}
						  style={{display: 'inline-block', width: '100%'}}>
						<Button width='100%' borderRadius="0">Start</Button>
					</Link>
				</ButtonWrapper>
			</div>
		)
	}
}
