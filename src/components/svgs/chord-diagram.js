import React from 'react';
/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core'
import PropTypes from 'prop-types';
import * as styles from '../common/styles';

const lightGray = '#909090';

const fadeIn = keyframes({
	'0%, 33.33%': {
		opacity: 0
	},
	'49.995%, 100%': {
		opacity: 1
	},
});

const fillIn = keyframes({
	'0%, 33.33%': {
		opacity: 0
	},
	'49.995%, 100%': {
		opacity: 1,
		fill: styles.red,
	},
});

const scaleIn = keyframes({
	0: {
		transform: 'translate(-50%, -50%) scale(0.9)',
	},
	100: {
		transform: 'translate(-50%, -50%) scale(1)',
	}
});

const drawLine = keyframes({
	from: {
		strokeDashoffset: 628.3185307179587,
	},
	to: {
		strokeDashoffset: 0,
	}
});

const openNotes = props => ({
	display: 'flex',
	height: props.hasNoOpenOrMuteStrings ? 30 : 76,
	margin: '0 auto',
	width: '100%',
});

const fret = props => ({
	display: !props.chord || (props.number >= props.chord.startingFret && props.number <= props.chord.startingFret + 4) ? 'flex': 'none',
	height: 76,
	'div:not(:first-of-type):not(:last-child)': {
		borderTop: props.number === 1 ? `10px solid ${styles.almostBlack}` :
			props.chord && (props.number === props.chord.startingFret) ? `2px solid ${styles.almostBlack}` : 'none',
	}
});

const cell = props => ({
	borderBottom: props.noBorder ? 'none' : `2px solid ${styles.almostBlack}`,
	borderRight: props.noBorder ? 'none' : `2px solid ${styles.almostBlack}`,
	flex: '1 1 auto',
	position: 'relative',

	'&:first-of-type': {
		borderBottom: 'none',
	},

	'&:last-child': {
		borderBottom: 'none',
		borderRight: 'none',
	}
});

const note = props => ({
	borderRadius: '50%',
	backgroundColor: styles.almostBlack,
	color: styles.white,
	fontSize: 26,
	fontWeight: 'bold',
	height: 'calc(76px / 2)',
	left: '100%',
	lineHeight: 1.55,
	position: 'absolute',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	transformOrigin: '50% 50%',
	visibility: props.noteIds && props.ids.some(id => props.noteIds.indexOf(id) > -1) ? 'visible' : 'hidden',
	width: 'calc(76px / 2)',

	animation: props.noteIds && props.ids.some(id => props.noteIds.indexOf(id) > -1) ? `1.5s ${fadeIn} ease-in, 1.5s ${scaleIn} cubic-bezier(0.5, -0.5, 0.5, 1.5)` : 'none',
});

const fretNumberForNotes = [5];

function shouldShowFretNumber(props) {
	if (!props.chord) {
		if (fretNumberForNotes.includes(props.number)) {
			return 'block';
		}
		return 'none';
	}
	return (props.number === props.chord.startingFret) || (props.number === 5 && props.chord.startingFret === 1) ? 'block': 'none';
}

function getFretNumberColor(props) {
	if ((!props.chord && fretNumberForNotes.includes(props.number)) || (props.number === 5 && props.chord.startingFret === 1)) {
		return lightGray;
	}
	return styles.almostBlack;
}

function getFretNumberOpacity(props) {
	if ((!props.chord && fretNumberForNotes.includes(props.number)) || (props.number === 5 && props.chord.startingFret === 1)) {
		return 0.7;
	}
	return 1;
}

const fretNumber = props => ({
	color: getFretNumberColor(props),
	display: shouldShowFretNumber(props),
	fontSize: 26,
	opacity: getFretNumberOpacity(props),
	...styles.center,
});

const fretDot = {
	borderRadius: '50%',
	backgroundColor: lightGray,
	height: 'calc(76px / 2 / 1.5)',
	opacity: 0.5,
	width: 'calc(76px / 2 / 1.5)',
	zIndex: -1,
	...styles.center,
};

const circleSVG = props => ({
	height: 'calc(76px / 2)',
	left: '100%',
	position: 'absolute',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'calc(76px / 2)',
	display: props.noteIds && props.ids.some(id => props.noteIds.indexOf(id) > -1) ? 'block' : 'none',
});

const circle = props => ({
	fill: styles.white,
	stroke: styles.black,
	strokeWidth: 3,
	strokeDasharray: 628.3185307179587,
	strokeDashoffset: 1000,
	animation: `${drawLine} 4s ${!props.chord ? '0s' : '1s'} linear forwards`,
});

const x = props => ({
	height: 'calc(76px / 2)',
	left: '100%',
	position: 'absolute',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	visibility: props.noteIds && props.ids.some(id => props.noteIds.indexOf(id) > -1) ? 'visible' : 'hidden',
	width: 'calc(76px / 1.8)',
});

const slash = props => ({
	backgroundColor: styles.red,
	borderRadius: 5,
	height: 4,
	position: 'absolute',
	top: '50%',
	width: '100%',

	'&:first-of-type': {
		animation: `.2s ${props.hasNoOpenStrings ? '1.4s' : '2.2s'} ${fillIn} ease-in both`,
		transform: 'translateY(-50%) rotate(45deg)',
	},

	'&:last-child': {
		animation: `.2s ${props.hasNoOpenStrings ? '1s' : '1.8s'} ${fillIn} ease-in both`,
		transform: 'translateY(-50%) rotate(-45deg)',
	},
});

class ChordDiagram extends React.Component {
	fretHeight = 76;

	getFinger(noteIds, origNoteIds, noteIdsWithoutFinger) {
		const foundIndex = noteIdsWithoutFinger.findIndex(note => noteIds.some(noteId => noteId === note));
		const foundNoteId = origNoteIds[foundIndex];
		return foundNoteId && foundNoteId.split('-').length > 1 ? Number(foundNoteId.split('-')[1]) : undefined;
	}

	hasNoOpenStrings(noteIdsWithoutFinger) {
		const openStrings = ['e6s', 'a5s', 'd4s', 'g3s', 'b2s', 'e1s'];
		return !noteIdsWithoutFinger.some(note => openStrings.indexOf(note) > -1);
	}

	hasNoMuteStrings(noteIdsWithoutFinger) {
		const muteStrings = ['x6s', 'x5s', 'x4s', 'x3s', 'x2s', 'x1s'];
		return !noteIdsWithoutFinger.some(note => muteStrings.indexOf(note) > -1);
	}

	render() {
		const {noteIds, chord}= this.props;
		const {fretHeight} = this;

		const noteIdsWithoutFinger = noteIds.map(noteId => {
			return noteId.split('-')[0];
		});

		return (
			<div css={styles.artboard}>
				<div css={openNotes({
					hasNoOpenOrMuteStrings: this.hasNoOpenStrings(noteIdsWithoutFinger) && this.hasNoMuteStrings(noteIdsWithoutFinger)
				})}>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							ids: ["e6s"],
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							ids: ["x6s"],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							ids: ["a5s"],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							ids: ["x5s"],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							ids: ["d4s"],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							ids: ["x4s"],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							ids: ["g3s"],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							ids: ["x3s"],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							ids: ["b2s"],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							ids: ["x2s"],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							ids: ["e1s"],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							ids: ["x1s"],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: false})} />
				</div>
				<div css={{margin: '0 auto', width: '100%'}}>
					<div css={fret({
						number: 1,
						chord,
					})}>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["f6s1f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['f6s1f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["a5s1f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['a5s1f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["d4s1f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['d4s1f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["g3s1f", "a3s1f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['g3s1f', 'a3s1f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["c2s1f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['c2s1f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["f1s1f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['f1s1f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})} />
					</div>
					<div css={fret({
						number: 2,
						chord,
					})}>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["f6s2f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['f6s2f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["b5s2f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['b5s2f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["e4s2f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['e4s2f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["a3s2f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['a3s2f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["c2s2f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['c2s2f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["f1s2f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['f1s2f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})} />
					</div>
					<div css={fret({
						number: 3,
						chord,
					})}>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["g6s3f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['g6s3f'], noteIds, noteIdsWithoutFinger)}
							</div>
							<div css={fretNumber({
								number: 3,
								chord,
							})}>
								3
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["c5s3f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['c5s3f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["f4s3f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['f4s3f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["a3s3f", "b3s3f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['a3s3f', 'b3s3f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["d2s3f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['d2s3f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["g1s3f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['g1s3f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})} />
					</div>
					<div css={fret({
						number: 4,
						chord,
					})}>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["g6s4f", "a6s4f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['g6s4f', 'a6s4f'], noteIds, noteIdsWithoutFinger)}
							</div>
							<div css={fretNumber({
								number: 4,
								chord,
							})}>
								4
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["c5s4f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['c5s4f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["f4s4f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['f4s4f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["b3s4f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['b3s4f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["d2s4f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['d2s4f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["g1s4f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['g1s4f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})} />
					</div>
					<div css={fret({
						number: 5,
						chord,
					})}>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["a6s5f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['a6s5f'], noteIds, noteIdsWithoutFinger)}
							</div>
							<div css={fretNumber({
								number: 5,
								chord,
							})}>
								5
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["d5s5f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['d5s5f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["g4s5f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['g4s5f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["c3s5f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['c3s5f'], noteIds, noteIdsWithoutFinger)}
							</div>
							<div css={fretDot} />
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["e2s5f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['e2s5f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["a1s5f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['a1s5f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})} />
					</div>
					<div css={fret({
						number: 6,
						chord,
					})}>
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["g4s6f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['g4s6f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								ids: ["c3s6f"],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger(['c3s6f'], noteIds, noteIdsWithoutFinger)}
							</div>
						</div>
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
					</div>
					<div css={fret({
						number: 7,
						chord,
					})}>
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})}>
							<div css={fretDot} />
						</div>
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
					</div>
					<div css={fret({
						number: 8,
						chord,
					})}>
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
						<div css={cell({noBorder: false})} />
					</div>
				</div>
			</div>
		)
	}
}

ChordDiagram.propTypes = {
	noteIds: PropTypes.arrayOf(PropTypes.string),
	chord: PropTypes.object,
};

export default ChordDiagram;
