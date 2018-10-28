import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import HomeIcon from '../svgs/home-icon';

// Helpers
import { getShuffledChordNotes } from '../common/shuffle';

import StandardNotation from '../svgs/standard-notation';
import LeftArrow from '../svgs/left-arrow';

// Shared Styles
import * as styles from '../common/styles';

const musicBookImageWrapper = css({
	height: 'calc(100vh - 110px)',
	background: 'url("music-book.jpg") no-repeat center center fixed',
	backgroundSize: 'cover',
	position: 'relative',
});

const dimmer = css({
	background: styles.black,
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	opacity: .6,
	position: 'absolute',
	width: '100%',
});

const largeText = css({
	color: styles.white,
	fontSize: '5em',
	margin: 0,
	padding: 25,
	position: 'absolute',
	top: '45%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});

class Question extends React.Component {
	render () {
		const {showNotes, currentIndex, data, renderAnswer, renderPrevAnswer, renderChordSpelling} = this.props;
		const noteIds = showNotes ? data[currentIndex] : getShuffledChordNotes(data)[currentIndex];
		const chord = showNotes ? {} : data[currentIndex];

		return (
			<div css={styles.row({showNotes})}>
				<HomeIcon />
				<Link to="/">
					<div css={styles.nav}>
						<div css={styles.bar} />
						<h1 css={styles.header}>{showNotes ? 'Name This Note' : ''}</h1>
					</div>
				</Link>
				{showNotes ? <StandardNotation noteIds={noteIds} /> : (
					<div css={musicBookImageWrapper}>
						<div css={dimmer} />
						<h1 css={largeText}>{chord}</h1>
					</div>
				)}
				<div css={styles.buttonWrapper}>
					<button
						css={styles.button({
						width: '50%',
						borderRadius: 0,
						gradient: 'light',
						boxShadowUpwards: true,
					})}
						onClick={() => {
								showNotes && renderPrevAnswer();
								!showNotes && renderChordSpelling();
							}}
					>
						<LeftArrow />
					</button>
					<button
						css={styles.button({
						width: '50%',
						borderRadius: 0,
						boxShadowUpwards: true,
					})}
						onClick={() => renderAnswer()}
					>Answer
					</button>
				</div>
			</div>
		)
	}
}

Question.propTypes = {
	renderAnswer: PropTypes.func.isRequired,
	renderPrevAnswer: PropTypes.func.isRequired,
	renderChordSpelling: PropTypes.func.isRequired,
};

export default Question;
