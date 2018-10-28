import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link, navigate } from '@reach/router';
import PropTypes from 'prop-types';

import HomeIcon from '../svgs/home-icon';
import ChordSpelling from './chord-spelling';
import ChordDiagram from '../svgs/chord-diagram';
import LeftArrow from '../svgs/left-arrow';
import RightArrow from '../svgs/right-arrow';

// Helpers
import { noteNameMapping } from '../common/notes';
import { getShuffledChordNotes } from '../common/shuffle';
import { chordToNotesMapping } from '../common/chords';
import { getPatternCount } from '../common/utils';

// Shared Styles
import * as styles from '../common/styles';

class Answer extends React.Component {
	constructor(props) {
		super(props);

		const {goingBackwards, showNotes, data, currentIndex, showChordSpelling} = this.props;

		const chord = showNotes ? {} : data[currentIndex];
		const patternCount = showNotes ? 1 : getPatternCount(chord);

		this.state = {
			patternNum: goingBackwards ? patternCount : 1,
			showChordSpelling,
			patternCount,
		};
	}

	renderNextPattern() {
		this.setState(prevState => {
			return {
				patternNum: prevState.patternNum + 1,
			}
		})
	}

	renderPrevPattern() {
		this.setState(prevState => {
			return {
				patternNum: prevState.patternNum - 1,
			}
		})
	}

	renderChordSpelling() {
		this.setState({showChordSpelling: true});
	}

	renderLastPattern() {
		this.setState({showChordSpelling: false});
	}

	render() {
		const {patternCount, patternNum, showChordSpelling} = this.state;
		const {showNotes, data, currentIndex, isLastItem, renderNextQuestion, renderQuestion} = this.props;

		const chord = showNotes ? undefined : data[currentIndex];
		const isFirstPattern = showNotes || patternNum === 1;
		const isLastPattern = showNotes || patternNum === patternCount;

		const noteIds = showNotes ? data[currentIndex] :
			showChordSpelling ? getShuffledChordNotes(data, 'chordSpelling')[currentIndex] : getShuffledChordNotes(data, patternNum)[currentIndex];

		const currentNote = noteIds[0];

		return (
			<div css={styles.row({showNotes, isAnswer: true})}>
				<HomeIcon />
				<Link to="/">
					<div css={styles.nav}>
						<div css={styles.bar} />
						<h1 css={styles.header}>{showNotes ? noteNameMapping[currentNote] : chord}</h1>
					</div>
				</Link>
				{showChordSpelling ? (
					<ChordSpelling noteIds={noteIds}
								   isLastItem={isLastItem}
								   renderLastPattern={() => this.renderLastPattern()}
								   renderNextQuestion={() => renderNextQuestion()}
					/>
				) : (
					<div>
						<ChordDiagram noteIds={noteIds} chord={chordToNotesMapping[chord]} />
						<div css={styles.buttonWrapper}>
							<button
								css={styles.button({
									width: '50%',
									borderRadius: 0,
									gradient: 'light',
									boxShadowUpwards: true,
								})}
								onClick={() => {
									if (isFirstPattern) {
										return renderQuestion();
									}

									this.renderPrevPattern();
								}}
							>
								<LeftArrow />
							</button>
							{(!isLastItem || !showNotes) && (
								<button
									css={styles.button({
										width: '50%',
										borderRadius: 0,
										boxShadowUpwards: true,
									})}
									onClick={() => {
										if (isLastPattern) {
											if (showNotes) {
												return renderNextQuestion();
											}

											return this.renderChordSpelling();
										}

										this.renderNextPattern();
									}}
								>
									<RightArrow />
								</button>
							)}
							{isLastItem && showNotes && (
								<button
									css={styles.button({
										width: '50%',
										borderRadius: 0,
										boxShadowUpwards: true,
									})}
									onClick={() => navigate('/')}
								>
									Start Over
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		)
	}
}

Answer.propTypes = {
	goingBackwards: PropTypes.bool.isRequired,
	renderQuestion: PropTypes.func.isRequired,
	renderNextQuestion: PropTypes.func.isRequired,
	isLastItem: PropTypes.bool.isRequired,
	showChordSpelling: PropTypes.bool.isRequired,
};

export default Answer;
