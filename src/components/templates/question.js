import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action Creators
import { replaceActiveNotes} from '../../state/notes/actions';

import LeftArrow from '../icons/left-arrow';

// Shared Styles
import { Bar, Header, Button, ButtonWrapper, SVG, Nav} from '../common/styles';


const Line = styled.line`
    fill: none;
    stroke: #363637;
    stroke-width: 4;
    stroke-miterlimit: 10;
`;

const NoteGrouping = styled.g`
    display: ${props => props.id === props.noteId ? 'block' : 'none'}
`;

const BlackPath = styled.path`
    fill: #363637;
`;

const Path = styled.path`
    fill: none;
`;

const Polygon = styled.polygon`
    fill: none;
`;

const NotePath = styled.path`
    fill: #363637;
	display: ${props => props.id === props.noteId ? 'block' : 'none'}
`;

class Question extends Component {
	render () {
		const {noteId} = this.props;

		return (
			<div>
				<Nav>
					<Bar />
					<Header>Name This Note</Header>
				</Nav>
				<SVG version="1.1" x="0px" y="0px" viewBox="0 0 350 423">
					<g id="staff">
						<g>
							<Line x1="27" y1="116" x2="324" y2="116" />
							<Line x1="27" y1="152" x2="324" y2="152" />
							<Line x1="27" y1="188" x2="324" y2="188" />
							<Line x1="27" y1="224" x2="324" y2="224" />
							<Line x1="27" y1="260" x2="324" y2="260" />
						</g>
					</g>
					<g id="treble_clef">
						<g>
							<Path d="M86.1,72.5C86.1,72.5,86.1,72.5,86.1,72.5C86.1,72.5,86.1,72.5,86.1,72.5z" />
							<Path d="M86,72C85.9,72,85.9,72,86,72L86,72z" />
							<Path d="M92.4,122.2c0.9-2.2,1.5-4.5,2-7c0.2-1.2,0.4-2.5,0.6-3.7l0.2-2.1l0.2-1.9c0.4-5.2,0.5-10.4-0.1-15.5
								c-0.6-5.1-1.8-10.1-4.1-14.3c-1.1-2-2.6-3.9-4-4.7c-0.3-0.2-0.6-0.3-0.8-0.4c-0.1,0-0.2-0.1-0.3-0.1c0.1,0-0.2,0,0.1,0l-0.2,0
								c-0.2,0.1-0.5,0.3-0.9,0.8c-1.1,1.4-2.1,3.8-2.9,6.2c-0.8,2.4-1.3,5-1.8,7.7c-0.9,5.3-1.4,10.7-1.7,16.1
								c-0.3,5.4-0.4,10.8-0.4,16.2c0,7.6,0.3,15.1,0.6,22.6c2.1-2.4,4.1-4.8,6-7.2C88.1,130.8,90.7,126.6,92.4,122.2z" />
							<Path d="M85.2,240.6c-1.5-9-3.1-18.3-4.6-27.9c-0.7-4.5-1.3-9-2-13.6c-0.1,0-0.1,0-0.2,0.1C74,201,70.5,203.8,68,207
								c-2.5,3.2-4.1,6.8-4.8,10.1c-0.8,3.3-0.7,6.3-0.2,8.6c0.5,2.4,1.4,4.1,2.2,5.2c0.4,0.5,0.7,0.9,1,1.2c0.2,0.3,0.4,0.4,0.4,0.4
								s-0.2-0.1-0.5-0.2c-0.2-0.1-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.3-0.9-0.4c-1.3-0.7-3.2-2-4.8-4.5c-1.7-2.5-3-6-3.3-10.4
								c-0.3-4.4,0.4-9.6,2.9-14.8c2.5-5.3,7.1-10.5,13.3-14.1c0.8-0.4,1.6-0.8,2.4-1.2l1.3-0.6c0.2-0.1,0.3-0.1,0.5-0.2
								c-0.6-5.4-1.2-11-1.8-16.5c-0.3,0.2-0.5,0.5-0.8,0.7c-2,1.9-4,3.8-6,5.7c-1.9,1.7-3.7,3.6-5.4,5.4c-3.5,3.7-6.6,7.7-9.4,11.8
								c-5.5,8.3-9.4,17.6-10.2,27.1c-0.1,1.2-0.1,2.4-0.1,3.6c0.1,1.2,0.1,2.4,0.2,3.5c0.2,2.3,0.7,4.6,1.5,6.8c0.7,2.2,1.8,4.3,3,6.3
								c1.2,2,2.7,3.8,4.4,5.4c1.6,1.7,3.6,3,5.5,4.2l1.7,0.9l0.7,0.4l0.8,0.4l1.6,0.7l1.7,0.6c2.2,0.8,4.5,1.5,6.7,2
								c2.3,0.5,4.6,0.7,6.9,0.8c3.3,0.1,6.5-0.2,9.6-1c0-0.3-0.1-0.5-0.1-0.7C86.7,249.5,85.9,245.1,85.2,240.6z" />
							<Path d="M111.9,225.4l0-0.2l0-0.3l0-0.6c-0.1-0.8-0.1-1.7-0.3-2.5c-0.3-1.6-0.7-3.2-1.3-4.7c-1.1-3.1-2.8-5.9-4.6-8.4
								c-3.8-5-8.6-8.5-13.4-10.1c-2.4-0.8-4.8-1.1-7-1c-0.6,0-1.1,0.1-1.7,0.2c0,0-0.1,0-0.1,0c0.5,4.8,1,9.6,1.6,14.3
								c1.7,14.6,3.6,28.5,5.4,41.7c4.5-1.5,8.6-3.8,11.9-6.8c6.3-5.5,9.5-13.3,9.6-20L111.9,225.4C112,225.3,111.9,225.7,111.9,225.4z" />
							<BlackPath d="M122.8,213.5c-0.5-2.4-1.3-4.7-2.2-6.8c-0.9-2.2-2-4.2-3.3-6.1c-5-7.7-12.5-13.4-20.9-15.8
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
								c0.2-0.6,0.3-1.4,0.4-1.8l0.3-1.6l0.2-2.1c0.1-1.3,0.2-2.5,0.1-3.8C123.7,218.3,123.4,215.9,122.8,213.5z M86.1,72.5
								C86.1,72.5,86.1,72.5,86.1,72.5C86.1,72.5,86.1,72.5,86.1,72.5z M86,72L86,72C85.9,72,85.9,72,86,72z M78.3,119.5
								c0-5.4,0.1-10.8,0.4-16.2c0.3-5.4,0.8-10.8,1.7-16.1c0.5-2.6,1-5.2,1.8-7.7c0.7-2.4,1.7-4.8,2.9-6.2c0.4-0.5,0.7-0.7,0.9-0.8
								l0.2,0c-0.3,0,0,0-0.1,0c0.1,0,0.2,0,0.3,0.1c0.2,0.1,0.5,0.2,0.8,0.4c1.4,0.8,2.9,2.7,4,4.7c2.3,4.2,3.5,9.2,4.1,14.3
								c0.6,5.1,0.5,10.4,0.1,15.5l-0.2,1.9l-0.2,2.1c-0.2,1.2-0.4,2.5-0.6,3.7c-0.5,2.4-1.1,4.7-2,7c-1.7,4.4-4.3,8.6-7.4,12.7
								c-1.9,2.4-3.9,4.8-6,7.2C78.6,134.6,78.3,127.1,78.3,119.5z M78,255.6c-2.3-0.1-4.6-0.3-6.9-0.8c-2.3-0.4-4.5-1.1-6.7-2l-1.7-0.6
								l-1.6-0.7l-0.8-0.4l-0.7-0.4l-1.7-0.9c-1.9-1.2-3.8-2.5-5.5-4.2c-1.7-1.6-3.2-3.4-4.4-5.4c-1.2-2-2.3-4-3-6.3
								c-0.8-2.2-1.3-4.5-1.5-6.8c-0.2-1.2-0.2-2.3-0.2-3.5c0-1.2,0-2.4,0.1-3.6c0.7-9.5,4.7-18.8,10.2-27.1c2.8-4.2,5.9-8.1,9.4-11.8
								c1.7-1.9,3.5-3.7,5.4-5.4c2-1.9,4-3.8,6-5.7c0.3-0.2,0.5-0.5,0.8-0.7c0.5,5.6,1.1,11.1,1.8,16.5c-0.2,0.1-0.3,0.1-0.5,0.2
								l-1.3,0.6c-0.8,0.4-1.6,0.8-2.4,1.2c-6.3,3.6-10.8,8.8-13.3,14.1c-2.5,5.3-3.2,10.5-2.9,14.8c0.3,4.4,1.7,7.9,3.3,10.4
								c1.6,2.5,3.5,3.8,4.8,4.5c0.3,0.2,0.6,0.3,0.9,0.4c0.3,0.1,0.5,0.2,0.6,0.2c0.3,0.1,0.5,0.2,0.5,0.2s-0.1-0.1-0.4-0.4
								c-0.2-0.3-0.6-0.7-1-1.2c-0.8-1.1-1.7-2.8-2.2-5.2c-0.5-2.4-0.6-5.3,0.2-8.6c0.7-3.3,2.3-6.9,4.8-10.1c2.5-3.2,6-6,10.4-7.8
								c0.1,0,0.1,0,0.2-0.1c0.6,4.6,1.3,9.1,2,13.6c1.5,9.6,3,18.9,4.6,27.9c0.8,4.5,1.5,8.9,2.3,13.3c0,0.3,0.1,0.5,0.1,0.7
								C84.5,255.3,81.2,255.7,78,255.6z M111.9,227c-0.1,6.8-3.3,14.5-9.6,20c-3.3,3-7.4,5.3-11.9,6.8c-1.8-13.2-3.7-27.2-5.4-41.7
								c-0.5-4.7-1.1-9.5-1.6-14.3c0,0,0.1,0,0.1,0c0.6-0.1,1.1-0.2,1.7-0.2c2.3-0.1,4.7,0.2,7,1c4.7,1.6,9.6,5.1,13.4,10.1
								c1.9,2.5,3.5,5.3,4.6,8.4c0.6,1.5,1,3.1,1.3,4.7c0.2,0.8,0.2,1.6,0.3,2.5l0,0.6l0,0.3l0,0.2c0,0.2,0-0.1,0,0L111.9,227z" />
						</g>
					</g>
					<NoteGrouping id="e6s" noteId={noteId}>
						<NotePath d="M215.6,363.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
							C187.6,367.8,206.2,363.9,215.6,363.9z M219.3,395.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4
							c-5.7,1-8.1,3.1-7.7,11.1C205.5,388.9,212.5,396.7,219.3,395.6z" />
						<Line x1="180.5" y1="295" x2="250.5" y2="295" />
						<Line x1="180.5" y1="330" x2="250.5" y2="330" />
						<Line x1="180.5" y1="365" x2="250.5" y2="365" />
					</NoteGrouping>
					<NoteGrouping id="f6s1f" noteId={noteId}>
						<NotePath d="M215.6,346.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
							C187.6,350.8,206.2,346.9,215.6,346.9z M219.3,378.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4
							c-5.7,1-8.1,3.1-7.7,11.1C205.5,371.9,212.5,379.7,219.3,378.6z" />
						<Line x1="180.5" y1="295" x2="250.5" y2="295" />
						<Line x1="180.5" y1="330" x2="250.5" y2="330" />
						<Line x1="180.5" y1="365" x2="250.5" y2="365" />
					</NoteGrouping>
					<NoteGrouping id="f6s2f" noteId={noteId}>
						<g>
							<NotePath d="M215.6,346.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
								C187.6,350.8,206.2,346.9,215.6,346.9z M219.3,378.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4
								c-5.7,1-8.1,3.1-7.7,11.1C205.5,371.9,212.5,379.7,219.3,378.6z" />
							<Line x1="180.5" y1="295" x2="250.5" y2="295" />
							<Line x1="180.5" y1="330" x2="250.5" y2="330" />
							<Line x1="180.5" y1="365" x2="250.5" y2="365" />
						</g>
						<g>
							<Polygon points="167,370.8 172,369.5 172,358 167,359.4" />
							<NotePath d="M177.7,356.5v-7.6l-3.5,0.9v-14.4H172v15l-5,1.3v-14.4h-2.2v15l-3.9,1v7.7l3.9-1v11.3l-3.9,1v7.7l3.9-1v13.3h2.2v-13.9
			l5-1.4v13.4h2.2v-14l3.5-0.9V368l-3.5,0.9v-11.4L177.7,356.5z M172,369.5l-5,1.3v-11.4l5-1.4V369.5z" />
						</g>
					</NoteGrouping>
					<NoteGrouping id="g6s3f" noteId={noteId}>
						<NotePath d="M215.6,329.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
							C187.6,333.8,206.2,329.9,215.6,329.9z M219.3,361.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4
							c-5.7,1-8.1,3.1-7.7,11.1C205.5,354.9,212.5,362.7,219.3,361.6z"/>
						<Line x1="180.5" y1="295" x2="250.5" y2="295"/>
						<Line x1="180.5" y1="330" x2="250.5" y2="330"/>
					</NoteGrouping>
				 	<NoteGrouping id="a5s" noteId={noteId}>
						<NotePath  d="M215.6,312.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
							C187.6,316.8,206.2,312.9,215.6,312.9z M219.3,344.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4
							c-5.7,1-8.1,3.1-7.7,11.1C205.5,337.9,212.5,345.7,219.3,344.6z" />
						<Line x1="180.5" y1="295" x2="250.5" y2="295" />
						<Line x1="180.5" y1="330" x2="250.5" y2="330" />
					</NoteGrouping>
					<NoteGrouping id="b5s2f" noteId={noteId}>
						<NotePath d="M215.6,293.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
							C187.6,297.8,206.2,293.9,215.6,293.9z M219.3,325.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4
							c-5.7,1-8.1,3.1-7.7,11.1C205.5,318.9,212.5,326.7,219.3,325.6z" />
						<Line x1="180.5" y1="295" x2="250.5" y2="295" />
					</NoteGrouping>
					<NoteGrouping id="c5s3f" noteId={noteId}>
						<NotePath d="M215.6,276.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
							C187.6,280.8,206.2,276.9,215.6,276.9z M219.3,308.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4
							c-5.7,1-8.1,3.1-7.7,11.1C205.5,301.9,212.5,309.7,219.3,308.6z" />
						<Line x1="180.5" y1="295" x2="250.5" y2="295" />
					</NoteGrouping>
					<NotePath id="d4s" noteId={noteId} d="M215.6,258.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,262.8,206.2,258.9,215.6,258.9z M219.3,290.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,283.9,212.5,291.7,219.3,290.6z" />
					<NotePath id="e4s2f" noteId={noteId} d="M215.6,242.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,246.8,206.2,242.9,215.6,242.9z M219.3,274.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,267.9,212.5,275.7,219.3,274.6z" />
					<NotePath id="f4s3f" noteId={noteId} d="M215.6,224.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,228.8,206.2,224.9,215.6,224.9z M219.3,256.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,249.9,212.5,257.7,219.3,256.6z" />
					<NoteGrouping id="f4s4f" noteId={noteId}>
						<NotePath d="M215.6,224.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
							C187.6,228.8,206.2,224.9,215.6,224.9z M219.3,256.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4
							c-5.7,1-8.1,3.1-7.7,11.1C205.5,249.9,212.5,257.7,219.3,256.6z" />
						<g>
							<Polygon points="167,247.8 172,246.5 172,235 167,236.4" />
							<NotePath d="M177.7,233.5v-7.6l-3.5,0.9v-14.4H172v15l-5,1.3v-14.4h-2.2v15l-3.9,1v7.7l3.9-1v11.3l-3.9,1v7.7l3.9-1v13.3h2.2v-13.9
								l5-1.4v13.4h2.2v-14l3.5-0.9V245l-3.5,0.9v-11.4L177.7,233.5z M172,246.5l-5,1.3v-11.4l5-1.4V246.5z" />
						</g>
					</NoteGrouping>
					<NotePath id="g3s" noteId={noteId} d="M215.6,206.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,210.8,206.2,206.9,215.6,206.9z M219.3,238.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,231.9,212.5,239.7,219.3,238.6z" />
					<NotePath id="a3s2f" noteId={noteId} d="M215.6,187.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,191.8,206.2,187.9,215.6,187.9z M219.3,219.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,212.9,212.5,220.7,219.3,219.6z" />
					<NotePath id="b2s" noteId={noteId} d="M215.6,170.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,174.8,206.2,170.9,215.6,170.9z M219.3,202.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,195.9,212.5,203.7,219.3,202.6z" />
					<NotePath id="c2s1f" noteId={noteId} d="M215.6,151.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,155.8,206.2,151.9,215.6,151.9z M219.3,183.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,176.9,212.5,184.7,219.3,183.6z" />
					<NotePath id="d2s3f" noteId={noteId} d="M215.6,134.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,138.8,206.2,134.9,215.6,134.9z M219.3,166.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,159.9,212.5,167.7,219.3,166.6z" />
					<NotePath id="e1s" noteId={noteId} d="M215.6,115.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,119.8,206.2,115.9,215.6,115.9z M219.3,147.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,140.9,212.5,148.7,219.3,147.6z" />
					<NotePath id="f1s1f" noteId={noteId} d="M215.6,98.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,102.8,206.2,98.9,215.6,98.9z M219.3,130.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,123.9,212.5,131.7,219.3,130.6z" />
					<NoteGrouping id="f1s2f" noteId={noteId}>
						<NotePath d="M215.6,98.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
							C187.6,102.8,206.2,98.9,215.6,98.9z M219.3,130.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
							C205.5,123.9,212.5,131.7,219.3,130.6z"/>
						<g>
							<Polygon points="167,122.8 172,121.5 172,110 167,111.4" />
							<NotePath d="M177.7,108.5v-7.6l-3.5,0.9V87.4H172v15l-5,1.3V89.3h-2.2v15l-3.9,1v7.7l3.9-1v11.3l-3.9,1v7.7l3.9-1v13.3h2.2v-13.9
								l5-1.4v13.4h2.2v-14l3.5-0.9V120l-3.5,0.9v-11.4L177.7,108.5z M172,121.5l-5,1.3v-11.4l5-1.4V121.5z" />
						</g>
					</NoteGrouping>
					<NotePath id="g1s3f" noteId={noteId} d="M215.6,81.9c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3
						C187.6,85.8,206.2,81.9,215.6,81.9z M219.3,113.6c5.9-0.8,8.1-3.4,7.7-11.4c-0.7-11-7.6-18.5-14.4-17.4c-5.7,1-8.1,3.1-7.7,11.1
						C205.5,106.9,212.5,114.7,219.3,113.6z" />
				</SVG>
				<ButtonWrapper>
					<Button width='50%'
							borderRadius="0"
							gradient="light"
							boxShadowUpwards={true}
							onClick={() => {
								this.context.router.history.goBack();
							}}
					>
						<LeftArrow fill="#363637" />
					</Button>
					<Link to={{pathname: `/notes/${noteId}/answer`}}
						  style={{display: 'inline-block', width: '50%'}}>
						<Button borderRadius="0"
								boxShadowUpwards={true}
						>Answer
						</Button>
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
