import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Helpers
import getRandomNoteId from '../common/get-random-note';

// Shared Styles
import { Bar, Header, Button, ButtonWrapper, SVG } from '../common/styles';

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
				<Bar />
				<Header>Unfretgettable</Header>
				<ButtonWrapper>
					<Link to={{pathname: `/notes/${nextNoteId}`}}>
						<Button width='90%'>Start</Button>
					</Link>
				</ButtonWrapper>
			</div>
		)
	}
}
