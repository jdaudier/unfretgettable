import facepaint from 'facepaint';
import { css } from '@emotion/core';

export const almostBlack = '#363637';
export const red = '#FC1051';
export const lightGray = '#E3E4E6';
export const white = '#FFF';
export const black = '#000';

export const mq = facepaint([
	'@media(min-width: 0)',
	'@media(min-width: 768px)',
]);

export const center = {
	position: 'absolute',
	left: '50%',
	top:' 50%',
	transform: 'translate(-50%, -50%)',
};

export const row = props => (css({
	marginTop: props.showNotes || props.isAnswer ? 86 : 50,
	height: props.showNotes || props.isAnswer ? 'calc(100vh - 146px)' : 'calc(100vh - 110px)',
	textAlign: 'center',
	overflow: 'auto',
}));

export const artboard = css(mq({
	height: 'calc(100vh - 200px)',
	margin: '0 auto 40px',
	width: ['100%', 450],
}));

export const nav = css({
	position: 'fixed',
	top: 0,
	width: '100%',
});

export const bar = css({
	background: red,
	height: 30,
});

export const header = css({
	background: lightGray,
	boxShadow: '0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2)',
	color: almostBlack,
	textAlign: 'center',
	margin: 0,
	paddingBottom: 10,
	paddingTop: 10,
});

export const buttonWrapper = css({
	textAlign: 'center',
	position: 'fixed',
	width: '100%',
	bottom: 0,
});

export const button = props => (css({
	background: props.gradient === 'light' ? lightGray : red,
	border: 'none',
	borderRadius: typeof props.borderRadius !== 'undefined' ? props.borderRadius : 4,
	boxShadow: props.boxShadowUpwards ? '0 -3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 -3px 1px -1px rgba(0,0,0,0.2)' : '0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2)',
	color: props.gradient === 'light' ? almostBlack : white,
	cursor: 'pointer',
	fontFamily: 'inherit',
	fontSize: '1.3rem',
	fontWeight: props.gradient === 'light' ? 600 : 'normal',
	height: 60,
	letterSpacing: 2,
	textTransform: 'uppercase',
	verticalAlign: 'top',
	width: props.width ? props.width : '100%',
}));
