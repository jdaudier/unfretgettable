import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Question from '../templates/question';
import Answer from '../templates/answer';

// Helpers
import {getShuffledNotes, getShuffledChords} from '../common/shuffle';

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
		goingBackwards: true,
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
		this.setState({
			showQuestion: false,
			goingBackwards: false,
		});
	}

	renderPrevAnswer() {
		this.setState(prevState => {
			const currentIndex = prevState.currentIndex - 1;

			return {
				showQuestion: false,
				goingBackwards: true,
				currentIndex,
				showHome: currentIndex === -1,
			}
		});
	}

	render () {
		const {showHome, currentIndex, notes, chords, showQuestion, showNotes, goingBackwards} = this.state;

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

		const data = showNotes ? notes : chords;

		if (showQuestion) {
			return (
				<Question data={data}
						  showNotes={showNotes}
						  currentIndex={currentIndex}
						  renderAnswer={() => this.renderAnswer()}
						  renderPrevAnswer={() => this.renderPrevAnswer()}
				/>
			)
		}

		return (
			<Answer data={data}
					showNotes={showNotes}
					goingBackwards={goingBackwards}
					currentIndex={currentIndex}
					renderNextQuestion={() => this.renderNextQuestion({showNotes})}
					renderQuestion={() => this.renderQuestion()}
					isLastNote={currentIndex === data.length - 1}
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
