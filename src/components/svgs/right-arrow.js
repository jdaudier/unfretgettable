import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
	fill: ${props => props.fill ? props.fill : '#FFF'};
	height: 26px;
	position: relative;
	top: 2px;
`;

export default function RightArrow() {
	return (
		<SVG version="1.1" x="0px" y="0px" viewBox="0 0 20 20">
			<polygon id="Combined-Shape_1_" points="15,10.8 16.1,9.7 7,0.5 4.7,2.8 11.6,9.7 4.7,16.5 7,18.8"/>
		</SVG>
	)
}
