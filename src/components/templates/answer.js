import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ChordSpelling from './chord-spelling';
import ChordDiagram from '../svgs/chord-diagram';
import LeftArrow from '../svgs/left-arrow';
import RightArrow from '../svgs/right-arrow';

// Helpers
import { noteNameMapping } from '../common/notes';
import { getShuffledChordNotes } from '../common/shuffle';
import { chordToNotesMapping } from '../common/chords';


// Shared Styles
import { Bar, Header, Button, ButtonWrapper, Nav } from '../common/styles';


class Answer extends Component {
	constructor(props) {
		super(props);

		const {goingBackwards, showNotes, data, currentIndex, showChordSpelling} = this.props;

		const chord = showNotes ? {} : data[currentIndex];
		const patternCount = showNotes ? 1 : Object.keys(chordToNotesMapping[chord]).length - 1;

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

		const chord = showNotes ? {} : data[currentIndex];
		const isFirstPattern = showNotes || patternNum === 1;
		const isLastPattern = showNotes || patternNum === patternCount;

		const noteIds = showNotes ? data[currentIndex] :
			showChordSpelling ? getShuffledChordNotes(data, 'chordSpelling')[currentIndex] : getShuffledChordNotes(data, patternNum)[currentIndex];

		return (
			<div>
				<Link to={{pathname: '/'}}>
					<Nav>
						<Bar />
						<Header>{showNotes ? noteNameMapping[[noteIds][0]] : chord}</Header>
					</Nav>
				</Link>
				{showChordSpelling ? (
					<ChordSpelling noteIds={noteIds}
								   isLastItem={isLastItem}
								   renderLastPattern={() => this.renderLastPattern()}
								   renderNextQuestion={() => renderNextQuestion()}
					/>
				) : (
					<div>
						<ChordDiagram noteIds={noteIds} />
						<ButtonWrapper>
							<Button width='50%'
									borderRadius="0"
									gradient="light"
									boxShadowUpwards={true}
									onClick={() => {
										if (isFirstPattern) {
											return renderQuestion();
										}

										this.renderPrevPattern();
									}}
							>
								<LeftArrow fill="#363637" />
							</Button>
							{(!isLastItem || !showNotes) && (
								<Button borderRadius="0"
										boxShadowUpwards={true}
										width="50%"
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
								</Button>
							)}
							{isLastItem && showNotes && (
								<Button borderRadius="0"
										boxShadowUpwards={true}
										width="50%"
										onClick={() => this.context.router.history.push('/')}
								>
									Start Over
								</Button>
							)}
						</ButtonWrapper>
					</div>
				)}
			</div>
		)
	}
}

Answer.contextTypes = {
	router: PropTypes.object.isRequired,
};

Answer.propTypes = {
	goingBackwards: PropTypes.bool.isRequired,
	renderQuestion: PropTypes.func.isRequired,
	renderNextQuestion: PropTypes.func.isRequired,
	isLastItem: PropTypes.bool.isRequired,
	showChordSpelling: PropTypes.bool.isRequired,
};

export default Answer;
