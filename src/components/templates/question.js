import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action Creators
import { replaceActiveNotes} from '../../state/notes/actions';

import LeftArrow from '../icons/left-arrow';

// Helpers
import getRandomNoteId from '../common/get-random-note';

// Shared Styles
import { Bar, Header, Button, ButtonWrapper, SVG } from '../common/styles';


const Line = styled.line`
    fill: none;
    stroke: #363637;
    stroke-width: 4;
    stroke-miterlimit: 10;
`;

const BlackPath = styled.path`
    fill: #363637;
`;

const Path = styled.path`
    fill: none;
`;

const NotePath = styled.path`
    fill: #363637;
	display: ${props => props.id === props.noteId ? 'block' : 'none'}
`;

class Question extends Component {
	// state = {
	// 	nextNoteId: null,
	// };
    //
	// componentDidMount() {
	// 	this.getNextNoteId();
	// }
    //
	// componentWillReceiveProps(nextProps) {
	// 	this.getNextNoteId();
	// }
    //
	// getNextNoteId() {
	// 	const {noteId} = this.props;
    //
	// 	let nextNoteId = getRandomNoteId();
    //
	// 	// 'Cuz we don't want to stay on the same card after clicking
	// 	if (noteId === nextNoteId) {
	// 		return this.getNextNoteId();
	// 	}
	// 	this.setState({nextNoteId});
	// }

	render () {
		// const {nextNoteId} = this.state;
		const {noteId} = this.props;

		return (
			<div>
				<Bar />
				<Header>Name This Note</Header>
				<SVG addTopPadding={true} version="1.1" x="0px" y="0px" viewBox="0 0 350 350">
					<g id="staff">
						<g>
							<Line x1="27" y1="62" x2="324" y2="62" />
							<Line x1="27" y1="98" x2="324" y2="98" />
							<Line x1="27" y1="134" x2="324" y2="134" />
							<Line x1="27" y1="170" x2="324" y2="170" />
							<Line x1="27" y1="170" x2="324" y2="170" />
							<Line x1="27" y1="206" x2="324" y2="206" />
						</g>
					</g>
					<g id="treble_clef">
						<g>
							<Path d="M86.1,18.5C86.1,18.5,86.1,18.5,86.1,18.5C86.1,18.5,86.1,18.5,86.1,18.5z" />
							<Path d="M86,18C85.9,18,85.9,18,86,18L86,18z" />
							<Path d="M92.4,68.2c0.9-2.2,1.5-4.5,2-7c0.2-1.2,0.4-2.5,0.6-3.7l0.2-2.1l0.2-1.9c0.4-5.2,0.5-10.4-0.1-15.5
			c-0.6-5.1-1.8-10.1-4.1-14.3c-1.1-2-2.6-3.9-4-4.7c-0.3-0.2-0.6-0.3-0.8-0.4c-0.1,0-0.2-0.1-0.3-0.1c0.1,0-0.2,0,0.1,0l-0.2,0
			c-0.2,0.1-0.5,0.3-0.9,0.8c-1.1,1.4-2.1,3.8-2.9,6.2c-0.8,2.4-1.3,5-1.8,7.7c-0.9,5.3-1.4,10.7-1.7,16.1
			c-0.3,5.4-0.4,10.8-0.4,16.2c0,7.6,0.3,15.1,0.6,22.6c2.1-2.4,4.1-4.8,6-7.2C88.1,76.8,90.7,72.6,92.4,68.2z" />
							<Path d="M85.2,186.6c-1.5-9-3.1-18.3-4.6-27.9c-0.7-4.5-1.3-9-2-13.6c-0.1,0-0.1,0-0.2,0.1C74,147,70.5,149.8,68,153
			c-2.5,3.2-4.1,6.8-4.8,10.1c-0.8,3.3-0.7,6.3-0.2,8.6c0.5,2.4,1.4,4.1,2.2,5.2c0.4,0.5,0.7,0.9,1,1.2c0.2,0.3,0.4,0.4,0.4,0.4
			s-0.2-0.1-0.5-0.2c-0.2-0.1-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.3-0.9-0.4c-1.3-0.7-3.2-2-4.8-4.5c-1.7-2.5-3-6-3.3-10.4
			c-0.3-4.4,0.4-9.6,2.9-14.8c2.5-5.3,7.1-10.5,13.3-14.1c0.8-0.4,1.6-0.8,2.4-1.2l1.3-0.6c0.2-0.1,0.3-0.1,0.5-0.2
			c-0.6-5.4-1.2-11-1.8-16.5c-0.3,0.2-0.5,0.5-0.8,0.7c-2,1.9-4,3.8-6,5.7c-1.9,1.7-3.7,3.6-5.4,5.4c-3.5,3.7-6.6,7.7-9.4,11.8
			c-5.5,8.3-9.4,17.6-10.2,27.1c-0.1,1.2-0.1,2.4-0.1,3.6c0.1,1.2,0.1,2.4,0.2,3.5c0.2,2.3,0.7,4.6,1.5,6.8c0.7,2.2,1.8,4.3,3,6.3
			c1.2,2,2.7,3.8,4.4,5.4c1.6,1.7,3.6,3,5.5,4.2l1.7,0.9l0.7,0.4l0.8,0.4l1.6,0.7l1.7,0.6c2.2,0.8,4.5,1.5,6.7,2
			c2.3,0.5,4.6,0.7,6.9,0.8c3.3,0.1,6.5-0.2,9.6-1c0-0.3-0.1-0.5-0.1-0.7C86.7,195.5,85.9,191.1,85.2,186.6z"/>
							<Path d="M111.9,171.4l0-0.2l0-0.3l0-0.6c-0.1-0.8-0.1-1.7-0.3-2.5c-0.3-1.6-0.7-3.2-1.3-4.7c-1.1-3.1-2.8-5.9-4.6-8.4
			c-3.8-5-8.6-8.5-13.4-10.1c-2.4-0.8-4.8-1.1-7-1c-0.6,0-1.1,0.1-1.7,0.2c0,0-0.1,0-0.1,0c0.5,4.8,1,9.6,1.6,14.3
			c1.7,14.6,3.6,28.5,5.4,41.7c4.5-1.5,8.6-3.8,11.9-6.8c6.3-5.5,9.5-13.3,9.6-20L111.9,171.4C112,171.3,111.9,171.7,111.9,171.4z"
							/>
							<BlackPath d="M122.8,159.5c-0.5-2.4-1.3-4.7-2.2-6.8c-0.9-2.2-2-4.2-3.3-6.1c-5-7.7-12.5-13.4-20.9-15.8
			c-2.1-0.6-4.2-1-6.4-1.1c-2.1-0.1-4.3-0.1-6.3,0.3c-0.6,0.1-1.1,0.2-1.6,0.3c-0.6-6.6-1.2-13.3-1.7-20.1
			c6.1-6.2,12-12.7,17.2-20.4c3.4-5.1,6.5-10.7,8.4-17c1-3.1,1.6-6.3,2-9.5c0.2-1.6,0.3-3.1,0.4-4.7l0.1-2.1l0-2.3
			c0.1-6.1-0.6-12.2-2.1-18.2c-1.5-6-3.7-11.9-7.4-17.2c-0.9-1.3-2-2.6-3.2-3.9c-1.2-1.2-2.6-2.4-4.4-3.4c-0.9-0.5-1.9-0.9-3.1-1.1
			c-0.6-0.1-1.2-0.2-1.8-0.2c-0.2,0-0.2,0-0.6,0l-0.3,0c-0.3,0-0.9,0.1-1.2,0.2c-1.4,0.3-2.6,1-3.5,1.7c-0.9,0.7-1.6,1.5-2.2,2.3
			c-2.2,3.1-3.1,6.1-3.9,9c-0.8,2.9-1.2,5.8-1.6,8.7c-1.4,11.4-1.4,22.5-1.2,33.5c0.2,9.6,0.7,19.1,1.4,28.5
			c-3.3,3.5-6.7,7-10.1,10.5c-1.9,2-3.9,3.9-5.9,6c-2.1,2.1-4,4.3-5.9,6.7c-3.7,4.6-7,9.6-9.7,14.8c-2.8,5.2-4.9,10.8-6.3,16.5
			c-1.4,5.7-2,11.6-1.7,17.5c0,1.5,0.3,2.9,0.4,4.4c0.3,1.4,0.5,2.9,0.9,4.3c0.7,2.8,1.7,5.6,2.9,8.2c2.4,5.2,6.1,9.7,10.4,13.2
			l1.6,1.3l1.7,1.1c1.1,0.8,2.4,1.4,3.6,2.1l1.7,0.8l0.9,0.4l0.9,0.4l1.8,0.7l1.9,0.6c4.9,1.7,10.1,2.6,15.2,2.8
			c3.5,0.1,7.1-0.2,10.5-0.8c0.4,2.4,0.7,4.8,1.1,7.1c0.6,4.2,1.1,8.3,1.4,12.3c0.3,4,0.6,7.9,0.4,11.7c-0.1,1.9-0.2,3.7-0.5,5.5
			c-0.1,0.4-0.1,0.9-0.2,1.3l-0.3,1.4c-0.2,0.8-0.4,1.6-0.8,2.4c-1.1,3.2-3,6.1-5.3,8.2c-2.3,2.1-5.1,3.6-7.9,4.4l-1.1,0.2l-0.3,0.1
			c0,0-0.1,0-0.1,0l-0.1,0l-0.6,0.1c-0.7,0.1-1.4,0.1-2.1,0.2c-1.4,0-2.8-0.1-4.1-0.4c-1.3-0.3-2.5-0.7-3.6-1.2
			c-1.1-0.6-2.1-1.2-3-2c-1.7-1.5-2.8-3.3-3.4-5.2c-0.3-0.9-0.4-1.9-0.5-2.8c0-0.4,0-0.9,0-1.3l0.1-0.7c0,0.2,0,0,0,0l0-0.1l0-0.2
			l0-0.4c0.1-0.6,0.3-1.5,0.5-2.2c0.2-0.7,0.5-1.4,0.9-1.9c0.4-0.7,0.9-1.3,1.4-1.8c1.8,1.3,4,2.1,6.3,2.1c6,0,10.8-4.8,10.8-10.8
			c0-6-4.7-11-10.7-11.1c-4.3-0.1-8.6,1.1-12.6,5.3c-3.2,3.4-5.8,8.2-6.4,13.3c-0.2,1.3-0.3,2.6-0.2,3.9c0.1,1.4,0.2,2.6,0.4,4.2
			c0.6,2.5,1.7,5.4,3.3,7.9c1.7,2.6,4,4.8,6.8,6.5c1.4,0.8,2.8,1.5,4.4,2c1.5,0.5,3.1,0.9,4.8,1.1c1.6,0.2,3.3,0.2,5,0.1
			c0.8-0.1,1.7-0.2,2.6-0.4l0.6-0.1l0.3-0.1l0.3-0.1l1.3-0.4c1.7-0.6,3.3-1.3,4.9-2.2c1.5-1,3-2.1,4.3-3.4c2.6-2.7,4.6-6,5.8-9.7
			c0.3-0.9,0.5-1.9,0.8-2.9l0.2-1.4c0.1-0.6,0.1-1,0.2-1.5c0.2-1.9,0.3-3.9,0.3-5.8c0.1-7.9-0.9-16-1.9-24.4c-0.3-2.4-0.6-4.8-1-7.3
			c5.5-1.3,10.7-3.5,15.4-6.6c4.1-2.8,7.8-6.3,10.7-10.4c1.5-2,2.7-4.3,3.7-6.6c0.5-1.1,0.9-2.3,1.3-3.5c0.2-0.6,0.4-1.3,0.5-1.9
			c0.2-0.6,0.3-1.4,0.4-1.8l0.3-1.6l0.2-2.1c0.1-1.3,0.2-2.5,0.1-3.8C123.7,164.3,123.4,161.9,122.8,159.5z M86.1,18.5
			C86.1,18.5,86.1,18.5,86.1,18.5C86.1,18.5,86.1,18.5,86.1,18.5z M86,18L86,18C85.9,18,85.9,18,86,18z M78.3,65.5
			c0-5.4,0.1-10.8,0.4-16.2c0.3-5.4,0.8-10.8,1.7-16.1c0.5-2.6,1-5.2,1.8-7.7c0.7-2.4,1.7-4.8,2.9-6.2c0.4-0.5,0.7-0.7,0.9-0.8
			l0.2,0c-0.3,0,0,0-0.1,0c0.1,0,0.2,0,0.3,0.1c0.2,0.1,0.5,0.2,0.8,0.4c1.4,0.8,2.9,2.7,4,4.7c2.3,4.2,3.5,9.2,4.1,14.3
			c0.6,5.1,0.5,10.4,0.1,15.5l-0.2,1.9L95,57.6c-0.2,1.2-0.4,2.5-0.6,3.7c-0.5,2.4-1.1,4.7-2,7c-1.7,4.4-4.3,8.6-7.4,12.7
			c-1.9,2.4-3.9,4.8-6,7.2C78.6,80.6,78.3,73.1,78.3,65.5z M78,201.6c-2.3-0.1-4.6-0.3-6.9-0.8c-2.3-0.4-4.5-1.1-6.7-2l-1.7-0.6
			l-1.6-0.7l-0.8-0.4l-0.7-0.4l-1.7-0.9c-1.9-1.2-3.8-2.5-5.5-4.2c-1.7-1.6-3.2-3.4-4.4-5.4c-1.2-2-2.3-4-3-6.3
			c-0.8-2.2-1.3-4.5-1.5-6.8c-0.2-1.2-0.2-2.3-0.2-3.5c0-1.2,0-2.4,0.1-3.6c0.7-9.5,4.7-18.8,10.2-27.1c2.8-4.2,5.9-8.1,9.4-11.8
			c1.7-1.9,3.5-3.7,5.4-5.4c2-1.9,4-3.8,6-5.7c0.3-0.2,0.5-0.5,0.8-0.7c0.5,5.6,1.1,11.1,1.8,16.5c-0.2,0.1-0.3,0.1-0.5,0.2
			l-1.3,0.6c-0.8,0.4-1.6,0.8-2.4,1.2c-6.3,3.6-10.8,8.8-13.3,14.1c-2.5,5.3-3.2,10.5-2.9,14.8c0.3,4.4,1.7,7.9,3.3,10.4
			c1.6,2.5,3.5,3.8,4.8,4.5c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.5,0.2,0.6,0.2c0.3,0.1,0.5,0.2,0.5,0.2s-0.1-0.1-0.4-0.4
			c-0.2-0.3-0.6-0.7-1-1.2c-0.8-1.1-1.7-2.8-2.2-5.2c-0.5-2.4-0.6-5.3,0.2-8.6c0.7-3.3,2.3-6.9,4.8-10.1c2.5-3.2,6-6,10.4-7.8
			c0.1,0,0.1,0,0.2-0.1c0.6,4.6,1.3,9.1,2,13.6c1.5,9.6,3,18.9,4.6,27.9c0.8,4.5,1.5,8.9,2.3,13.3c0,0.3,0.1,0.5,0.1,0.7
			C84.5,201.3,81.2,201.7,78,201.6z M111.9,173c-0.1,6.8-3.3,14.5-9.6,20c-3.3,3-7.4,5.3-11.9,6.8c-1.8-13.2-3.7-27.2-5.4-41.7
			c-0.5-4.7-1.1-9.5-1.6-14.3c0,0,0.1,0,0.1,0c0.6-0.1,1.1-0.2,1.7-0.2c2.3-0.1,4.7,0.2,7,1c4.7,1.6,9.6,5.1,13.4,10.1
			c1.9,2.5,3.5,5.3,4.6,8.4c0.6,1.5,1,3.1,1.3,4.7c0.2,0.8,0.2,1.6,0.3,2.5l0,0.6l0,0.3l0,0.2c0,0.2,0-0.1,0,0L111.9,173z"/>
						</g>
					</g>
					<NotePath id="d4s" noteId={noteId} d="M215.6,204.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,208.8,206.2,204.9,215.6,204.9z M219.3,236.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,229.9,212.5,237.7,219.3,236.6z"/>
					<NotePath id="e4s2f" noteId={noteId} d="M215.6,188.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,192.8,206.2,188.9,215.6,188.9z M219.3,220.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,213.9,212.5,221.7,219.3,220.6z"/>
					<NotePath id="f4s3f" noteId={noteId} d="M215.6,170.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,174.8,206.2,170.9,215.6,170.9z M219.3,202.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,195.9,212.5,203.7,219.3,202.6z"/>
					<NotePath id="g3s" noteId={noteId} d="M215.6,152.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,156.8,206.2,152.9,215.6,152.9z M219.3,184.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,177.9,212.5,185.7,219.3,184.6z"/>
					<NotePath id="a3s2f" noteId={noteId} d="M215.6,133.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,137.8,206.2,133.9,215.6,133.9z M219.3,165.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,158.9,212.5,166.7,219.3,165.6z"/>
					<NotePath id="b2s" noteId={noteId} d="M215.6,116.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,120.8,206.2,116.9,215.6,116.9z M219.3,148.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,141.9,212.5,149.7,219.3,148.6z"/>
					<NotePath id="c2s1f" noteId={noteId} d="M215.6,97.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,101.8,206.2,97.9,215.6,97.9z M219.3,129.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,122.9,212.5,130.7,219.3,129.6z"/>
					<NotePath id="d2s3f" noteId={noteId} d="M215.6,80.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,84.8,206.2,80.9,215.6,80.9z M219.3,112.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,105.9,212.5,113.7,219.3,112.6z"/>
					<NotePath id="e1s" noteId={noteId} d="M215.6,61.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,65.8,206.2,61.9,215.6,61.9z M219.3,93.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,86.9,212.5,94.7,219.3,93.6z"/>
					<NotePath id="f1s1f" noteId={noteId} d="M215.6,44.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,48.8,206.2,44.9,215.6,44.9z M219.3,76.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,69.9,212.5,77.7,219.3,76.6z"/>
					<NotePath id="g1s3f" noteId={noteId} d="M215.6,27.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
	C187.6,31.8,206.2,27.9,215.6,27.9z M219.3,59.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
	C205.5,52.9,212.5,60.7,219.3,59.6z"/>
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
					<Link to={{pathname: `/notes/${noteId}/answer`}}
						  style={{display: 'inline-block', width: '45%'}}>
						<Button touchLeft={true}>Answer</Button>
					</Link>
				</ButtonWrapper>
			</div>
		)
	}
}

Question.contextTypes = {
	router: PropTypes.object.isRequired,
};


function mapStateToProps(state, {match: {params: {noteId}}}) {
	return {
		noteId: noteId,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		replaceActiveNotes: bindActionCreators(replaceActiveNotes, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)