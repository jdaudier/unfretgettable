import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from '../templates/question';
import Answer from '../templates/answer';

// Helpers
import {getShuffledNotes, getShuffledChords, getShuffledChordNotes, getShuffledStandardNotationChordNotes} from '../common/shuffle';

// Shared Styles
import { Bar, Header, Button, ButtonWrapper, Nav } from '../common/styles';

class Home extends Component {
	state = {
		showHome: this.props.atRootPath,
		showNotes: false,
		currentIndex: -1,
		notes: getShuffledNotes(),
		chords: getShuffledChords(),
		showQuestion: false,
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.atRootPath) {
			this.setState({
				showHome: true,
				currentIndex: -1,
				notes: getShuffledNotes(),
				chords: getShuffledChords(),
			});
		}
	}

	renderNextQuestion({showNotes}) {
		this.setState(prevState => {
			return {
				showHome: false,
				showNotes,
				showQuestion: true,
				currentIndex: prevState.currentIndex + 1,
			}
		});
	}

	renderQuestion() {
		this.setState({
			showQuestion: true,
		});
	}

	renderAnswer() {
		this.setState({showQuestion: false});
	}

	renderPrevAnswer() {
		this.setState(prevState => {
			const currentIndex = prevState.currentIndex - 1;

			return {
				showQuestion: false,
				currentIndex,
				showHome: currentIndex === -1,
			}
		});
	}

	render () {
		const {showHome, currentIndex, notes, chords, showQuestion, showNotes} = this.state;

		if (showHome) {
			return (
				<div>
					<Nav>
						<Bar />
						<Header>Unfretgettable</Header>
					</Nav>
					<ButtonWrapper>
						<Button gradient="light" width='100%' borderRadius="0" onClick={() => this.renderNextQuestion({showNotes: true})}>
							Notes
						</Button>
						<Button width='100%' borderRadius="0" onClick={() => this.renderNextQuestion({showNotes: false})}>
							Chords
						</Button>
					</ButtonWrapper>
				</div>
			)
		}

		const type = showNotes ? notes : chords;
		const noteIds = showNotes ? notes[currentIndex] :
			showQuestion ? getShuffledStandardNotationChordNotes(chords)[currentIndex] : getShuffledChordNotes(chords)[currentIndex];

		if (showQuestion) {
			return (
				<Question noteIds={noteIds}
						  renderAnswer={() => this.renderAnswer()}
						  renderPrevAnswer={() => this.renderPrevAnswer()}
				/>
			)
		}

		return (
			<Answer noteIds={noteIds}
					chord={chords[currentIndex]}
					renderNextQuestion={() => this.renderNextQuestion({showNotes})}
					renderQuestion={() => this.renderQuestion()}
					isLastNote={currentIndex === type.length - 1}
			/>
		)
	}
}

Question.propTypes = {
	atRootPath: PropTypes.bool,
};

function mapStateToProps(state, {match: {path}}) {
	return {
		atRootPath: path === '/',
	}
}

export default connect(mapStateToProps)(Home)
