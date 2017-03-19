import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import LeftArrow from '../icons/left-arrow';
import RightArrow from '../icons/right-arrow';

// Helpers
import { noteNameMapping } from '../common/notes';
import getRandomNoteId from '../common/get-random-note';

// Shared Styles
import { Bar, Header, Button, ButtonWrapper, SVG } from '../common/styles';

const Path = styled.path`
    fill: none;
    stroke: #363637;
    stroke-width: 1.6;
    stroke-miterlimit: 10;
`;

const Dot = styled.g`
    display: ${props => props.id === props.noteId ? 'block' : 'none'}
`;

const WhitePath = styled.path`
    fill: #FFF;
`;

const Circle = styled.circle`
    fill: none;
    stroke: #363637;
    stroke-miterlimit: 10;
    display: ${props => props.id === props.noteId ? 'block' : 'none'}
`;

const SolidCircle = styled.circle`
	fill: #363637;
`;

const Rect = styled.rect`
	fill: #363637;
`;

class Answer extends Component {
	state = {
		nextNoteId: null,
	};

	componentDidMount() {
		this.getNextNoteId();
	}

	getNextNoteId() {
		const {noteId} = this.props;
		const nextNoteId = getRandomNoteId();

		// 'Cuz we don't want to stay on the same card after clicking
		if (noteId === nextNoteId) {
			return this.getNextNoteId();
		}
		this.setState({nextNoteId});
	}

	render() {
		const {nextNoteId} = this.state;
		const {noteId} = this.props;

		return (
			<div>
				<Bar />
				<Header>{noteNameMapping[noteId]}</Header>
				<SVG version="1.1" x="0px" y="0px" viewBox="0 0 320 350">
					<g id="fret_board">
						<Rect x="73" y="62.6" width="179.2" height="6.8"/>
						<Path d="M250.8,236.4V292V236.4z M250.8,180.7v55.6 M250.8,125.1v55.6 M250.8,69.4v55.6 M215.5,292h35.3 M215.5,236.4
		V292 M215.5,236.4h35.3 M215.5,180.7v55.6 M215.5,180.7h35.3 M215.5,125.1v55.6 M215.5,125.1h35.3 M215.5,69.4v55.6 M180.2,292
		h35.3 M180.2,236.4V292 M180.2,236.4h35.3 M180.2,180.7v55.6 M180.2,180.7h35.3 M180.2,125.1v55.6 M180.2,125.1h35.3 M180.2,69.4
		v55.6 M144.9,292h35.3 M144.9,236.4V292 M144.9,236.4h35.3 M144.9,180.7v55.6 M144.9,180.7h35.3 M144.9,125.1v55.6 M144.9,125.1
		h35.3 M144.9,69.4v55.6 M109.6,292h35.3 M109.6,236.4V292 M109.6,236.4h35.3 M109.6,180.7v55.6 M109.6,180.7h35.3 M109.6,125.1
		v55.6 M109.6,125.1h35.3 M109.6,69.4v55.6 M74.4,292h35.3 M74.4,236.4V292 M74.4,236.4h35.3 M74.4,180.7v55.6 M74.4,180.7h35.3
		 M74.4,125.1v55.6 M74.4,125.1h35.3 M74.4,69.4v55.6"/>
					</g>
					<Dot id="f1s1f" noteId={noteId}>
						<SolidCircle cx="252" cy="97" r="16"/>
						<WhitePath d="M254.7,87.8v16.7h-4.6V93.6c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
			c0.9-0.7,1.5-1.6,2-2.6H254.7z"/>
					</Dot>
					<Dot id="c2s1f" noteId={noteId}>
						<SolidCircle cx="215" cy="97" r="16"/>
						<WhitePath d="M217.7,87.8v16.7h-4.6V93.6c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
				c0.9-0.7,1.5-1.6,2-2.6H217.7z"/>
					</Dot>
					<Dot id="a3s2f" noteId={noteId}>
						<SolidCircle cx="181" cy="153" r="16"/>
						<WhitePath d="M186.7,160.5H173c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
				c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
				c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
				c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V160.5z"/>
					</Dot>
					<Dot id="e4s2f" noteId={noteId}>
						<SolidCircle cx="145" cy="153" r="16"/>
						<WhitePath d="M150.7,160.5H137c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
				c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
				c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
				c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V160.5z"/>
					</Dot>
					<Dot id="g1s3f" noteId={noteId}>
						<SolidCircle cx="252" cy="209" r="16"/>
						<WhitePath d="M248.8,204.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C249.1,203.5,248.9,204,248.8,204.9z"/>
					</Dot>
					<Dot id="d2s3f" noteId={noteId}>
						<SolidCircle cx="216" cy="209" r="16"/>
						<WhitePath d="M212.8,204.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C213.1,203.5,212.9,204,212.8,204.9z"/>
					</Dot>
					<Dot id="f4s3f" noteId={noteId}>
						<SolidCircle cx="146" cy="209" r="16"/>
						<WhitePath d="M142.8,204.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C143.1,203.5,142.9,204,142.8,204.9z"/>
					</Dot>
					<Circle id="e1s" noteId={noteId} cx="250.8" cy="40.8" r="11.2"/>
					<Circle id="b2s" noteId={noteId} cx="215.8" cy="40.8" r="11.2"/>
					<Circle id="g3s" noteId={noteId} cx="179.8" cy="40.8" r="11.2"/>
					<Circle id="d4s" noteId={noteId} cx="144.8" cy="40.8" r="11.2"/>
				</SVG>
				<ButtonWrapper>
					<Button width='45%'
							touchRight={true}
							backgroundColor="#e7e8e8"
							onClick={() => {
								this.context.router.history.goBack();
							}}
					>
						<LeftArrow fill="#363637" />
					</Button>
					<Link to={{pathname: `/notes/${nextNoteId}`}}
						  style={{display: 'inline-block', width: '45%'}}>
						<Button touchLeft={true}>
							<RightArrow />
						</Button>
					</Link>
				</ButtonWrapper>
			</div>
		)
	}
}

Answer.contextTypes = {
	router: PropTypes.object.isRequired,
};

function mapStateToProps(state, {match: {params: {noteId}}}) {
	return {
		noteId: noteId,
	}
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer)
