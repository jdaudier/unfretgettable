import styled from 'styled-components';

export const Row = styled.div`
	margin-top: ${props => (props.showNotes || props.isAnswer) ? '86px' : '50px'};
	height: ${props => (props.showNotes || props.isAnswer) ? 'calc(100vh - 146px)' : 'calc(100vh - 110px'};
	text-align: center;
	overflow: auto;
`;

export const Nav = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
`;

export const Container = styled.div`
	font-family: 'Roboto', sans-serif;
`;

export const Bar = styled.div`
	background-color: #ff5454;
	background: -webkit-linear-gradient(to left, #ff5454 , #EA384D);
	background: linear-gradient(to left, #ff5454 , #EA384D);
	height: 30px;
`;

export const Logo = styled.div`
	background-color: #1d1d1d;
	color: #ff5454;
	height: 70px;
	opacity: .9;
	position: absolute;
	right: 0;
	top: 20%;
	width: 100%;
`;

export const LogoCopy = styled.h1`
	color: #ff5454;
	height: 70px;
	letter-spacing: 2px;
	line-height: 70px;
	margin: 0;
	position: absolute;
	text-align: center;
	top: 20%;
	width: 100%;
`;

export const Border = styled.span`
	position: absolute;
	top: 8px;
	right: 0;
	left: 0;
	bottom: 8px;
	border-top: 1px solid #ff5454;
	border-bottom: 1px solid #ff5454;
`;

export const ButtonContainer = styled.div`
	text-align: center;
	position: absolute;
	width: 100%;
	bottom: -111px;
`;

export const HomePageButton = styled.button`
	background-color: ${props => props.white ? '#FFF' : '#EA384D'};
	background: ${props => props.white ? '#FFF' : '-webkit-linear-gradient(to left, #ff5454 , #EA384D)'};
	background: ${props => props.white ? '#FFF' : 'linear-gradient(to left, #ff5454 , #EA384D)'};
	border: ${props => props.white ? '2px solid #ff5454' : 'none'};;
	border-radius: 8px;
	box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
	color: ${props => props.white ? '#ff5454' : '#FFF'};
	cursor: pointer;
	font-family: inherit;
	font-size: 2rem;
	font-weight: 600;
	height: 60px;
	letter-spacing: 2px;
	margin-top: ${props => props.white ? '20px' : 0};
	text-transform: uppercase;
	vertical-align: top;
	width: 80%;
`;

// Gradients from https://uigradients.com/#Orca
export const Header = styled.h1`
	background: #8e9eab;
	background: -webkit-linear-gradient(to right, #c4ccd5 , #FFF);
	background: linear-gradient(to right, #c4ccd5 , #FFF);
	box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    color: #363637;
	text-align: center;
	margin: 0;
	padding-bottom: 10px;
	padding-top: 10px;
`;

export const CoverImageWrapper = styled.div`
	height: calc(100vh - 200px);
	background: url('music-book.jpg') no-repeat center center fixed;
  	background-size: cover;
  	position: relative;
`;

export const MusicBookImageWrapper = styled.div`
	height: calc(100vh - 110px);
	background: url('music-book.jpg') no-repeat center center fixed;
  	background-size: cover;
  	margin-top: 50px;
  	position: relative;
`;

export const Dimmer = styled.div`
	background: black;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: .6;
	position: absolute;
	width: 100%;
`;

export const LargeText = styled.h1`
	color: white;
	font-size: 9em;
	margin: 0;
	padding: 25px;
 	position: absolute;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Button = styled.button`
	background-color: ${props => props.gradient === 'light' ? '#8e9eab' : '#ff5454'};
	background: ${props => props.gradient === 'light' ? '-webkit-linear-gradient(to right, #c4ccd5 , #FFF)' : '-webkit-linear-gradient(to left, #ff5454 , #EA384D)'};
	background: ${props => props.gradient === 'light' ? 'linear-gradient(to right, #c4ccd5 , #FFF)' : 'linear-gradient(to left, #ff5454 , #EA384D)'};
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

export const SVG = styled.svg`
	max-height: calc(100vh - 250px);
	margin-top: ${props => props.marginTop ? '20px' : 0};
`;
