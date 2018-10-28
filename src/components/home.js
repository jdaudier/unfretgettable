import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';

import Question from './templates/question';
import Answer from './templates/answer';
import ChordChart from './templates/chord-chart';
import Search from './common/search';

// Helpers
import { getShuffledNotes, getShuffledChords } from './common/shuffle';

// Shared Styles
import * as styles from './common/styles';
import {mq} from './common/styles';

export const coverImage = css(mq({
	height: [368, 'calc(100vh - 200px)'],
	background: 'url("music-book.jpg") no-repeat center center fixed',
	backgroundSize: 'cover',
	position: 'relative',
}));

const buttonContainer = css(mq({
	textAlign: 'center',
	position: 'absolute',
	width: '100%',
	top: [338, 'auto'],
	bottom: [undefined, -111],
}));

export const button = props => (css(mq({
	background: props.white ? styles.white : styles.red,
	border: props.white ? `2px solid ${styles.red}` : 'none',
	borderRadius: 8,
	boxShadow: '0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2)',
	color: props.white ? styles.red : styles.white,
	cursor: 'pointer',
	fontFamily: 'inherit',
	fontSize: '2rem',
	fontWeight: 600,
	height: 60,
	letterSpacing: 2,
	marginTop: props.white ? 20 : 0,
	textTransform: 'uppercase',
	verticalAlign: 'top',
	width: '80%',
})));

const logo = css(mq({
	backgroundColor: '#1d1d1d',
	color: styles.red,
	height: 70,
	opacity: .9,
	position: 'absolute',
	right: 0,
	top: [90, '20%'],
	width: '100%',
}));

const border = css({
	position: 'absolute',
	top: 8,
	right: 0,
	left: 0,
	bottom: 8,
	borderTop: `1px solid ${styles.red}`,
	borderBottom: `1px solid ${styles.red}`,
});

const logoCopy = css(mq({
	color: styles.red,
	height: 70,
	letterSpacing: 2,
	lineHeight: 2.2,
	margin: 0,
	position: 'absolute',
	textAlign: 'center',
	top: [90, '20%'],
	width: '100%',
}));

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showHome: this.props.path === '/',
			showNotes: false,
			currentIndex: -1,
			notes: getShuffledNotes(),
			chords: getShuffledChords(),
			showQuestion: false,
			showChordSpelling: false,
			goingBackwards: true,
			startSearch: false,
			chordToSearch: '',
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.path === '/') {
			this.setState({
				showHome: true,
				currentIndex: -1,
				notes: getShuffledNotes(),
				chords: getShuffledChords(),
				chordToSearch: '',
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
				startSearch: false,
			}
		});
	}

	renderQuestion() {
		this.setState({
			showQuestion: true,
			showChordSpelling: false,
		});
	}

	renderAnswer() {
		this.setState({
			showQuestion: false,
			goingBackwards: false,
			showChordSpelling: false,
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

	renderPrevChordSpelling() {
		this.setState(prevState => {
			const currentIndex = prevState.currentIndex - 1;

			return {
				showChordSpelling: true,
				showQuestion: false,
				goingBackwards: true,
				currentIndex,
				showHome: currentIndex === -1,
			}
		});
	}

	startSearch = (chordToSearch) => {
		this.setState({
			showHome: false,
			showQuestion: false,
			showNotes: false,
			startSearch: true,
			chordToSearch,
		});
	};

	render () {
		const {showHome, currentIndex, notes, chords, showQuestion, showNotes, showChordSpelling, goingBackwards, chordToSearch, startSearch} = this.state;

		if (showHome) {
			return (
				<div css={coverImage}>
					<Search onSearchRequest={this.startSearch} onHome={true} />
					<div css={logo} />
					<h1 css={logoCopy}>Unfretgettable
						<span css={border} />
					</h1>
					<div css={buttonContainer}>
						<button css={button} onClick={() => this.renderNextQuestion({showNotes: true})}>
							Notes
						</button>
						<button css={button({white: true})} onClick={() => this.renderNextQuestion({showNotes: false})}>
							Chords
						</button>
					</div>
				</div>
			);
		}

		const data = showNotes ? notes : chords;

		if (showQuestion) {
			return (
				<Question data={data}
						  showNotes={showNotes}
						  currentIndex={currentIndex}
						  renderAnswer={() => this.renderAnswer()}
						  renderPrevAnswer={() => this.renderPrevAnswer()}
						  renderChordSpelling={() => this.renderPrevChordSpelling()}
				/>
			)
		}

		if (startSearch) {
			return (
				<ChordChart chord={chordToSearch} />
			)
		}

		return (
			<Answer data={data}
					showNotes={showNotes}
					showChordSpelling={showChordSpelling}
					goingBackwards={goingBackwards}
					currentIndex={currentIndex}
					renderNextQuestion={() => this.renderNextQuestion({showNotes})}
					renderQuestion={() => this.renderQuestion()}
					isLastItem={currentIndex === data.length - 1}
			/>
		)
	}
}

Question.propTypes = {
	path: PropTypes.string,
};

export default Home;
