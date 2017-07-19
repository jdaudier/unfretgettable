import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


// Shared Styles
import { SVG } from '../common/styles';

const Path = styled.path`
    fill: none;
    stroke: #363637;
    stroke-width: 1.6;
    stroke-miterlimit: 10;
`;

const Dot = styled.g`
    display: ${props => props.noteIds && props.noteIds.indexOf(props.id) > -1 ? 'block' : 'none'}
`;

const WhitePath = styled.path`
    fill: #FFF;
`;

const Circle = styled.circle`
    fill: none;
    stroke: #363637;
    stroke-miterlimit: 10;
    stroke-width: 2;
    display: ${props => props.noteIds && props.noteIds.indexOf(props.id) > -1 ? 'block' : 'none'}
`;

const X = styled.g`
    fill: #363637;
    display: ${props => props.noteIds && props.noteIds.indexOf(props.id) > -1 ? 'block' : 'none'}
`;

const SolidCircle = styled.circle`
	fill: #363637;
`;

const Rect = styled.rect`
	fill: #363637;
`;

class ChordDiagram extends Component {
	render() {
		const {noteIds} = this.props;

		return (
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
				<Dot id="b5s2f" noteIds={noteIds}>
					<SolidCircle cx="55" cy="118" r="16" />
					<WhitePath d="M60.7,125.5H47c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
							c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
							c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
							c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V125.5z" />
				</Dot>
				<Dot id="b5s2f1fin" noteIds={noteIds}>
					<SolidCircle cx="55" cy="118" r="16" />
					<WhitePath d="M57.7,108.8v16.7h-4.6v-10.9c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
				c0.9-0.7,1.5-1.6,2-2.6H57.7z" />
				</Dot>
				<Dot id="c5s3f" noteIds={noteIds}>
					<SolidCircle cx="55" cy="174" r="16" />
					<WhitePath d="M51.8,169.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
							c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
							c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
							c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
							c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
							c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
							C52.1,168.5,51.9,169,51.8,169.9z" />
				</Dot>
				<Dot id="f1s1f" noteIds={noteIds}>
					<SolidCircle cx="198" cy="62" r="16" />
					<WhitePath d="M200.7,52.8v16.7h-4.6V58.6c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
							c0.9-0.7,1.5-1.6,2-2.6H200.7z" />
				</Dot>
				<Dot id="c2s1f" noteIds={noteIds}>
					<SolidCircle cx="161" cy="62" r="16" />
					<WhitePath d="M163.7,52.8v16.7h-4.6V58.6c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
							c0.9-0.7,1.5-1.6,2-2.6H163.7z" />
				</Dot>
				<Dot id="c2s2f" noteIds={noteIds}>
					<SolidCircle cx="163" cy="118" r="16" />
					<WhitePath d="M168.7,125.5H155c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
		c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
		c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
		c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V125.5z" />
				</Dot>
				<Dot id="c2s2f3fin" noteIds={noteIds}>
					<SolidCircle cx="163" cy="118" r="16" />
					<WhitePath d="M160.8,113.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C161.1,112.5,160.9,113,160.8,113.9z" />
				</Dot>
				<Dot id="a3s2f" noteIds={noteIds}>
					<SolidCircle cx="127" cy="118" r="16" />
					<WhitePath d="M132.7,125.5H119c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
							c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
							c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
							c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V125.5z" />
				</Dot>
				<Dot id="a3s2f1fin" noteIds={noteIds}>
					<SolidCircle cx="127" cy="118" r="16" />
					<WhitePath d="M129.7,108.8v16.7h-4.6v-10.9c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
			c0.9-0.7,1.5-1.6,2-2.6H129.7z" />
				</Dot>
				<Dot id="e4s2f" noteIds={noteIds}>
					<SolidCircle cx="91" cy="118" r="16" />
					<WhitePath d="M96.7,125.5H83c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
							c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
							c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
							c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V125.5z" />
				</Dot>
				<Dot id="e4s2f1fin" noteIds={noteIds}>
					<SolidCircle cx="91" cy="118" r="16" />
					<WhitePath d="M93.7,108.8v16.7h-4.6v-10.9c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
			c0.9-0.7,1.5-1.6,2-2.6H93.7z" />
				</Dot>
				<Dot id="e4s2f3fin" noteIds={noteIds}>
					<SolidCircle cx="91" cy="118" r="16" />
					<WhitePath d="M88.8,113.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C89.1,112.5,88.9,113,88.8,113.9z" />
				</Dot>
				<Dot id="g1s3f" noteIds={noteIds}>
					<SolidCircle cx="198" cy="174" r="16" />
					<WhitePath d="M194.8,169.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
							c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
							c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
							c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
							c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
							c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
							C195.1,168.5,194.9,169,194.8,169.9z" />
				</Dot>
				<Dot id="g1s3f4fin" noteIds={noteIds}>
					<SolidCircle cx="198" cy="174" r="16" />
					<WhitePath d="M198.6,179.1h-8.3v-3.7l8.3-9.8h4v10.1h2.1v3.5h-2.1v3.1h-4V179.1z M198.6,175.6v-5.2l-4.4,5.2H198.6z" />
				</Dot>
				<Dot id="d2s3f" noteIds={noteIds}>
					<SolidCircle cx="162" cy="174" r="16" />
					<WhitePath d="M158.8,169.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
							c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
							c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
							c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
							c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
							c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
							C159.1,168.5,158.9,169,158.8,169.9z" />
				</Dot>
				<Dot id="f4s3f" noteIds={noteIds}>
					<SolidCircle cx="92" cy="174" r="16" />
					<WhitePath d="M88.8,169.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
							c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
							c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
							c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
							c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
							c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
							C89.1,168.5,88.9,169,88.8,169.9z" />
				</Dot>
				<Dot id="f1s2f" noteIds={noteIds}>
					<SolidCircle cx="198" cy="118" r="16" />
					<WhitePath d="M203.7,125.5H190c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
							c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
							c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
							c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V125.5z" />
				</Dot>
				<Dot id="f1s2f3fin" noteIds={noteIds}>
					<SolidCircle cx="198" cy="118" r="16" />
					<WhitePath d="M195.8,113.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
				c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
				c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
				c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
				c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
				c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
				C196.1,112.5,195.9,113,195.8,113.9z" />
				</Dot>
				<Dot id="f4s4f" noteIds={noteIds}>
					<SolidCircle cx="92" cy="229" r="16" />
					<WhitePath d="M91.6,234.1h-8.3v-3.7l8.3-9.8h4v10.1h2.1v3.5h-2.1v3.1h-4V234.1z M91.6,230.6v-5.2l-4.4,5.2H91.6z" />
				</Dot>
				<Dot id="f6s2f" noteIds={noteIds}>
					<SolidCircle cx="20" cy="118" r="16" />
					<WhitePath d="M25.7,125.5H12c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
							c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
							c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
							c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V125.5z" />
				</Dot>
				<Dot id="g6s3f" noteIds={noteIds}>
					<SolidCircle cx="20" cy="174" r="16" />
					<WhitePath d="M16.8,169.9l-4.3-0.8c0.4-1.4,1-2.4,2.1-3.1c1-0.7,2.5-1.1,4.3-1.1c2.1,0,3.7,0.4,4.6,1.2
							c1,0.8,1.4,1.8,1.4,3c0,0.7-0.2,1.3-0.6,1.9c-0.4,0.6-1,1.1-1.8,1.5c0.6,0.2,1.1,0.3,1.5,0.5c0.5,0.3,1,0.8,1.3,1.3
							c0.3,0.5,0.5,1.2,0.5,2c0,1-0.2,1.9-0.7,2.7s-1.2,1.5-2.2,2c-0.9,0.5-2.2,0.7-3.7,0.7c-1.5,0-2.7-0.2-3.5-0.5
							c-0.9-0.3-1.6-0.9-2.1-1.5s-1-1.5-1.3-2.5l4.5-0.6c0.2,0.9,0.5,1.6,0.8,1.9s0.9,0.5,1.4,0.5c0.6,0,1.1-0.2,1.5-0.7
							c0.4-0.4,0.6-1,0.6-1.8c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.4,0-0.8,0.1-1.5,0.3l0.2-3.2c0.3,0,0.5,0.1,0.6,0.1
							c0.6,0,1.1-0.2,1.5-0.6s0.6-0.8,0.6-1.4c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.4-1.2-0.4c-0.5,0-1,0.2-1.3,0.5
							C17.1,168.5,16.9,169,16.8,169.9z" />
				</Dot>
				<Dot id="g6s3f2fin" noteIds={noteIds}>
					<SolidCircle cx="20" cy="174" r="16" />
					<WhitePath d="M26.7,181.5H13c0.2-1.3,0.6-2.6,1.4-3.8s2.3-2.6,4.5-4.2c1.3-1,2.2-1.7,2.6-2.3s0.6-1,0.6-1.5
				c0-0.5-0.2-0.9-0.6-1.3c-0.4-0.4-0.8-0.5-1.4-0.5c-0.6,0-1.1,0.2-1.4,0.5c-0.4,0.4-0.6,1-0.7,1.9l-4.6-0.4c0.2-1.3,0.5-2.3,1-3
				c0.5-0.7,1.1-1.3,2-1.7c0.9-0.4,2.1-0.6,3.6-0.6c1.6,0,2.8,0.2,3.7,0.5s1.6,0.9,2.1,1.7c0.5,0.8,0.8,1.6,0.8,2.5
				c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.6,1.9-3.2,3c-0.9,0.6-1.5,1.1-1.8,1.3c-0.3,0.3-0.7,0.6-1.1,1h7.1V181.5z" />
				</Dot>
				<Dot id="f6s1f" noteIds={noteIds}>
					<SolidCircle cx="20" cy="62" r="16" />
					<WhitePath d="M22.7,52.8v16.7h-4.6V58.6c-0.7,0.6-1.5,1-2.2,1.4c-0.7,0.4-1.6,0.7-2.6,1v-3.7c1.5-0.5,2.8-1.1,3.6-1.8
							c0.9-0.7,1.5-1.6,2-2.6H22.7z" />
				</Dot>
				<Circle id="e1s" noteIds={noteIds} cx="198" cy="15" r="9" />
				<Circle id="b2s" noteIds={noteIds} cx="162" cy="15" r="9" />
				<Circle id="g3s" noteIds={noteIds} cx="127.2" cy="15" r="9" />
				<Circle id="d4s" noteIds={noteIds} cx="91.2" cy="15" r="9" />
				<Circle id="a5s" noteIds={noteIds} cx="55.2" cy="15" r="9" />
				<Circle id="e6s" noteIds={noteIds} cx="20.2" cy="15" r="9" />
				<X id="x6s" noteIds={noteIds}>
					<path d="M27.7,7L27.7,7c0.4,0.4,0.4,1.1,0,1.6L13.5,22.7c-0.4,0.4-1.1,0.4-1.6,0l0,0c-0.4-0.4-0.4-1.1,0-1.6L26.1,7
				C26.5,6.5,27.2,6.5,27.7,7z" />
					<path d="M13.5,7l14.1,14.1c0.4,0.4,0.4,1.1,0,1.6l0,0c-0.4,0.4-1.1,0.4-1.6,0L12,8.5c-0.4-0.4-0.4-1.1,0-1.6l0,0
				C12.4,6.5,13.1,6.5,13.5,7z" />
				</X>
				<X id="x5s" noteIds={noteIds}>
					<path d="M62.7,7L62.7,7c0.4,0.4,0.4,1.1,0,1.6L48.5,22.7c-0.4,0.4-1.1,0.4-1.6,0l0,0c-0.4-0.4-0.4-1.1,0-1.6L61.1,7
				C61.5,6.5,62.2,6.5,62.7,7z" />
					<path d="M48.5,7l14.1,14.1c0.4,0.4,0.4,1.1,0,1.6l0,0c-0.4,0.4-1.1,0.4-1.6,0L47,8.5c-0.4-0.4-0.4-1.1,0-1.6l0,0
				C47.4,6.5,48.1,6.5,48.5,7z" />
				</X>
				<X id="x4s" noteIds={noteIds}>
					<path d="M97.7,7L97.7,7c0.4,0.4,0.4,1.1,0,1.6L83.5,22.7c-0.4,0.4-1.1,0.4-1.6,0l0,0c-0.4-0.4-0.4-1.1,0-1.6L96.1,7
				C96.5,6.5,97.2,6.5,97.7,7z" />
					<path d="M83.5,7l14.1,14.1c0.4,0.4,0.4,1.1,0,1.6l0,0c-0.4,0.4-1.1,0.4-1.6,0L82,8.5c-0.4-0.4-0.4-1.1,0-1.6l0,0
				C82.4,6.5,83.1,6.5,83.5,7z" />
				</X>
				<X id="x3s" noteIds={noteIds}>
					<path d="M133.7,7L133.7,7c0.4,0.4,0.4,1.1,0,1.6l-14.1,14.1c-0.4,0.4-1.1,0.4-1.6,0l0,0c-0.4-0.4-0.4-1.1,0-1.6L132.1,7
				C132.5,6.5,133.2,6.5,133.7,7z" />
					<path d="M119.5,7l14.1,14.1c0.4,0.4,0.4,1.1,0,1.6l0,0c-0.4,0.4-1.1,0.4-1.6,0L118,8.5c-0.4-0.4-0.4-1.1,0-1.6l0,0
				C118.4,6.5,119.1,6.5,119.5,7z" />
				</X>
				<X id="x2s" noteIds={noteIds}>
					<path d="M169.7,7L169.7,7c0.4,0.4,0.4,1.1,0,1.6l-14.1,14.1c-0.4,0.4-1.1,0.4-1.6,0l0,0c-0.4-0.4-0.4-1.1,0-1.6L168.1,7
				C168.5,6.5,169.2,6.5,169.7,7z" />
					<path d="M155.5,7l14.1,14.1c0.4,0.4,0.4,1.1,0,1.6l0,0c-0.4,0.4-1.1,0.4-1.6,0L154,8.5c-0.4-0.4-0.4-1.1,0-1.6l0,0
				C154.4,6.5,155.1,6.5,155.5,7z" />
				</X>
				<X id="x1s" noteIds={noteIds}>
					<path d="M203.7,7L203.7,7c0.4,0.4,0.4,1.1,0,1.6l-14.1,14.1c-0.4,0.4-1.1,0.4-1.6,0l0,0c-0.4-0.4-0.4-1.1,0-1.6L202.1,7
				C202.5,6.5,203.2,6.5,203.7,7z" />
					<path d="M189.5,7l14.1,14.1c0.4,0.4,0.4,1.1,0,1.6l0,0c-0.4,0.4-1.1,0.4-1.6,0L188,8.5c-0.4-0.4-0.4-1.1,0-1.6l0,0
				C188.4,6.5,189.1,6.5,189.5,7z" />
				</X>
			</SVG>
		)
	}
}

ChordDiagram.propTypes = {
	noteIds: PropTypes.arrayOf(PropTypes.string),
};

export default ChordDiagram;