import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	font-family: 'proxima-nova', Arial, sans-serif;
`;

export const Bar = styled.div`
	background-color: #db494d;
	height: 30px;
`;

export const Header = styled.h1`
	background-color: #e7e8e8;
	box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    color: #363637;
	text-align: center;
	margin: 0;
	padding-bottom: 30px;
	padding-top: 30px;
`;

export const Button = styled.button`
	background-color: ${props => props.backgroundColor ? props.backgroundColor : '#db494d'};
	border: none;
	border-bottom-right-radius: ${props => props.touchRight ? 0 : '4px'};
	border-top-right-radius: ${props => props.touchRight ? 0 : '4px'};
	border-bottom-left-radius: ${props => props.touchLeft ? 0 : '4px'};
	border-top-left-radius: ${props => props.touchLeft ? 0 : '4px'};
	box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
	color: #FFF;
	cursor: pointer;
	font-family: inherit;
	font-size: 1.3rem;
	height: 66px;
	letter-spacing: 2px;
	text-transform: uppercase;
	vertical-align: top;
	width: ${props => props.width ? props.width : '100%'};
`;

export const ButtonWrapper = styled.div`
	text-align: center;
	position: fixed;
	width: 100%;
	bottom: 50px;
`;

export const Row = styled.div`
	height: 100%;
`;

export const SVG = styled.svg`
	padding-top: ${props => props.addTopPadding ? '50px' : 'none'}
`;
