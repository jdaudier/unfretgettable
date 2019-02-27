/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as styles from '../common/styles';

const svg = props => ({
	fill: props.fill ? props.fill : styles.white,
	height: 26,
	position: 'relative',
	top: 2,
});

export default function RightArrow() {
	return (
		<svg css={svg} version="1.1" x="0px" y="0px" viewBox="0 0 20 20">
			<polygon points="15,10.8 16.1,9.7 7,0.5 4.7,2.8 11.6,9.7 4.7,16.5 7,18.8"/>
		</svg>
	)
}
