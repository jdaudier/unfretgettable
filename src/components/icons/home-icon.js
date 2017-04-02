import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SVG = styled.svg`
	height: 24px
	position: absolute;
	right: 10px;
	top: 3px;
	z-index: 1;
`;
const Polygon = styled.polygon`
	fill: none;
	stroke: #FFF;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
`;

const Rect = styled.rect`
	fill: none;
	stroke: #FFF;
	stroke-width: 2;
	stroke-linecap: round;
	stroke-linejoin: round;
`;


const Circle = styled.circle`
	fill: none;
	stroke: #FFF;
	stroke-width: 2;
	stroke-miterlimit: 10;
`;

export default function HomeIcon() {
	return (
		<Link to={{pathname: '/'}}>
			<SVG version="1.1" x="0px" y="0px" viewBox="0 0 30 30">
				<Polygon points="15,2 2,16.2 6.7,16.2 6.7,28 23.3,28 23.3,16.2 28,16.2 	"/>
				<Rect x="12.6" y="20.9" class="st0" width="4.7" height="7.1"/>
				<Circle cx="15" cy="12.6" r="2.4"/>
			</SVG>
		</Link>
	)
}
