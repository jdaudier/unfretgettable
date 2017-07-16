import styled from 'styled-components';

export const Nav = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
`;

export const Container = styled.div`
	font-family: 'Roboto', sans-serif;
	margin-top: 100px;
`;

export const Bar = styled.div`
	background-color: #D31027;
	background: -webkit-linear-gradient(to left, #D31027 , #EA384D);
	background: linear-gradient(to left, #D31027 , #EA384D);
	height: 30px;
`;

// Gradients from https://uigradients.com/#Orca
export const Header = styled.h1`
	background: #8e9eab;
	background: -webkit-linear-gradient(to left, #bdc1c5 , #eef2f3);
	background: linear-gradient(to left, #bdc1c5 , #eef2f3);
	box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    color: #363637;
	text-align: center;
	margin: 0;
	padding-bottom: 10px;
	padding-top: 10px;
`;

export const Button = styled.button`
	background-color: ${props => props.gradient === 'light' ? '#8e9eab' : '#D31027'};
	background: ${props => props.gradient === 'light' ? '-webkit-linear-gradient(to left, #bdc1c5 , #eef2f3)' : '-webkit-linear-gradient(to left, #D31027 , #EA384D)'};
	background: ${props => props.gradient === 'light' ? 'linear-gradient(to left, #bdc1c5 , #eef2f3)' : 'linear-gradient(to left, #D31027 , #EA384D)'};
	border: none;
	border-radius: ${props => props.borderRadius ? props.borderRadius : '4px'};
	box-shadow: ${props => props.boxShadowUpwards ? '0 -3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 -3px 1px -1px rgba(0,0,0,0.2)' : '0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2)'};
	color: ${props => props.gradient === 'light' ? '#363637' : '#FFF'};
	cursor: pointer;
	font-family: inherit;
	font-size: 1.3rem;
	font-weight: ${props => props.gradient === 'light' ? 600 : 'normal'};
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
	height: calc(100vh - 180px);
	text-align: center;
	overflow: auto;
`;

export const SVG = styled.svg`
	max-height: calc(100vh - 250px);
`;
