/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from '@reach/router';
import * as styles from '../common/styles';

const svg = css({
	height: 24,
	position: 'absolute',
	right: 10,
	top: 3,
	zIndex: 1,
});

const whiteStroke = css({
	fill: 'none',
	stroke: styles.white,
	strokeWidth: 2,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
});

const circle = css({
	fill: 'none',
	stroke: styles.white,
	strokeWidth: 2,
	strokeMiterlimit: 10,
});

export default function HomeIcon() {
	return (
		<Link to="/">
			<svg css={svg} version="1.1" x="0px" y="0px" viewBox="0 0 30 30">
				<polygon css={whiteStroke} points="15,2 2,16.2 6.7,16.2 6.7,28 23.3,28 23.3,16.2 28,16.2 	"/>
				<rect css={whiteStroke} x="12.6" y="20.9" width="4.7" height="7.1" />
				<circle css={circle} cx="15" cy="12.6" r="2.4"/>
			</svg>
		</Link>
	)
}
