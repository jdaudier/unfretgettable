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
    stroke-width: 2;
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
				<SVG version="1.1" x="0px" y="0px" viewBox="0 0 217 268">
					<g id="fret_board">
						<Rect x="19" y="27.6" width="179.2" height="6.8" />
						<Path d="M196.8,201.4V257V201.4z M196.8,145.7v55.6 M196.8,90.1v55.6 M196.8,34.4v55.6 M161.5,257h35.3 M161.5,201.4
		V257 M161.5,201.4h35.3 M161.5,145.7v55.6 M161.5,145.7h35.3 M161.5,90.1v55.6 M161.5,90.1h35.3 M161.5,34.4v55.6 M126.2,257h35.3
		 M126.2,201.4V257 M126.2,201.4h35.3 M126.2,145.7v55.6 M126.2,145.7h35.3 M126.2,90.1v55.6 M126.2,90.1h35.3 M126.2,34.4v55.6
		 M90.9,257h35.3 M90.9,201.4V257 M90.9,201.4h35.3 M90.9,145.7v55.6 M90.9,145.7h35.3 M90.9,90.1v55.6 M90.9,90.1h35.3 M90.9,34.4
		v55.6 M55.6,257h35.3 M55.6,201.4V257 M55.6,201.4h35.3 M55.6,145.7v55.6 M55.6,145.7h35.3 M55.6,90.1v55.6 M55.6,90.1h35.3
		 M55.6,34.4v55.6 M20.4,257h35.3 M20.4,201.4V257 M20.4,201.4h35.3 M20.4,145.7v55.6 M20.4,145.7h35.3 M20.4,90.1v55.6 M20.4,90.1
		h35.3 M20.4,34.4v55.6" />
					</g>
					<Dot id="f1s1f" noteId={noteId}>
						<SolidCircle cx="198" cy="62" r="16" />
						<WhitePath d="M200.7,52.8v16.7h-4.6V58.6c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
				c0.9-0.7,1.5-1.6,2-2.6H200.7z" />
					</Dot>
					<Dot id="c2s1f" noteId={noteId}>
						<SolidCircle cx="161" cy="62" r="16" />
						<WhitePath d="M163.7,52.8v16.7h-4.6V58.6c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
				c0.9-0.7,1.5-1.6,2-2.6H163.7z" />
					</Dot>
					<Dot id="a3s2f" noteId={noteId}>
						<SolidCircle cx="127" cy="118" r="16" />
						<WhitePath d="M132.7,125.5H119c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
				c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
				c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
				c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V125.5z" />
					</Dot>
					<Dot id="e4s2f" noteId={noteId}>
						<SolidCircle cx="91" cy="118" r="16" />
						<WhitePath d="M96.7,125.5H83c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
				c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
				c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
				c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V125.5z" />
					</Dot>
					<Dot id="g1s3f" noteId={noteId}>
						<SolidCircle cx="198" cy="174" r="16"/>
						<WhitePath d="M194.8,169.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C195.1,168.5,194.9,169,194.8,169.9z" />
					</Dot>
					<Dot id="d2s3f" noteId={noteId}>
						<SolidCircle cx="162" cy="174" r="16"/>
						<WhitePath d="M158.8,169.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C159.1,168.5,158.9,169,158.8,169.9z" />
					</Dot>
					<Dot id="f4s3f" noteId={noteId}>
						<SolidCircle cx="92" cy="174" r="16" />
						<WhitePath class="st1" d="M88.8,169.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C89.1,168.5,88.9,169,88.8,169.9z" />
					</Dot>
					<Circle id="e1s" noteId={noteId} cx="198" cy="15" r="9" />
					<Circle id="b2s" noteId={noteId} cx="162" cy="15" r="9" />
					<Circle id="g3s" noteId={noteId} cx="127.2" cy="15" r="9" />
					<Circle id="d4s" noteId={noteId} cx="91.2" cy="15" r="9" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
