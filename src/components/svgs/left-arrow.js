/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as styles from '../common/styles';

const svg = css({
	fill: styles.almostBlack,
	height: 26,
	position: 'relative',
	top: 2,
});

export default function LeftArrow({fill}) {
	return (
		<svg css={svg} version="1.1" x="0px" y="0px" viewBox="0 0 20 20">
			<polygon points="4.7,8.6 3.6,9.7 12.7,18.8 15,16.6 8.2,9.7 15,2.9 12.7,0.6"/>
		</svg>
	)
}
