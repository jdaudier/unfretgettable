import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	font-family: 'Roboto', sans-serif;
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
	padding-bottom: 10px;
	padding-top: 10px;
`;

export const Button = styled.button`
	background-color: ${props => props.backgroundColor ? props.backgroundColor : '#db494d'};
	border: none;
	border-radius: ${props => props.borderRadius ? props.borderRadius : '4px'};
	box-shadow: ${props => props.boxShadowUpwards ? '0 -3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 -3px 1px -1px rgba(0,0,0,0.2)' : '0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2)'};
	color: #FFF;
	cursor: pointer;
	font-family: inherit;
	font-size: 1.3rem;
	height: 60px;
	letter-spacing: 2px;
	text-transform: uppercase;
	vertical-align: top;
	width: ${props => props.width ? props.width : '100%'};
`;

export const ButtonWrapper = styled.div`
	text-align: center;
	position: fixed;
	width: 100%;
	bottom: 0;
`;

export const Row = styled.div`
	height: 100%;
`;

export const SVG = styled.svg`
	padding-top: ${props => props.addTopPadding ? '40px' : 'none'}
`;
