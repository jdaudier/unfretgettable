import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

const SVG = styled.svg`
	fill: ${props => props.fill ? props.fill : '#FFF'};
	height: 26px;
	position: relative;
	top: 2px;
`;

export default function LeftArrow({fill}) {
	return (
		<SVG fill={fill} version="1.1" x="0px" y="0px" viewBox="0 0 20 20">
			<polygon points="4.7,8.6 3.6,9.7 12.7,18.8 15,16.6 8.2,9.7 15,2.9 12.7,0.6"/>
		</SVG>
	)
}
