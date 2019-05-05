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

const fret = props => {
	return {
		display: !props.chord || (props.number >= props.chord.position && props.number <= props.chord.position + 4) ? 'flex': 'none',
		height: 76,
		'div:not(:first-of-type):not(:last-child)': {
			borderTop: props.number === 1 ? `10px solid ${styles.almostBlack}` :
				props.chord && (props.number === props.chord.position) ? `2px solid ${styles.almostBlack}` : 'none',
		}
	};
};

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
	visibility: props.noteIds.findIndex(id => id[0] === props.id[0] && id[1] === props.id[1]) >=0 ? 'visible' : 'hidden',
	width: 'calc(76px / 2)',

	animation: props.noteIds.findIndex(id => id[0] === props.id[0] && id[1] === props.id[1]) >=0 ? `1.5s ${fadeIn} ease-in, 1.5s ${scaleIn} cubic-bezier(0.5, -0.5, 0.5, 1.5)` : 'none',
});

const fretNumberForNotes = [5];

function shouldShowFretNumber(props) {
	if (!props.chord) {
		if (fretNumberForNotes.includes(props.number)) {
			return 'block';
		}
		return 'none';
	}

	return (props.number === props.chord.position) || (props.number === 5 && props.chord.position === 1) ? 'block': 'none';
}

function getFretNumberColor(props) {
	if ((!props.chord && fretNumberForNotes.includes(props.number)) || (props.number === 5 && props.chord.position === 1)) {
		return lightGray;
	}
	return styles.almostBlack;
}

function getFretNumberOpacity(props) {
	if ((!props.chord && fretNumberForNotes.includes(props.number)) || (props.number === 5 && props.chord.position === 1)) {
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
	display: props.noteIds.findIndex(id => id[0] === props.id[0] && id[1] === props.id[1]) >=0 ? 'block' : 'none',
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
	visibility: props.noteIds.findIndex(id => id[0] === props.id[0] && id[1] === props.id[1]) >=0 ? 'visible' : 'hidden',
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

	getFinger(noteIds, origNoteIds) {
		const foundIndex = origNoteIds.findIndex(id => id[0] === noteIds[0] && id[1] === noteIds[1]);
		return origNoteIds[foundIndex]?  origNoteIds[foundIndex][2] : undefined;
	}

	hasNoOpenStrings(noteIdsWithoutFinger) {
		const openStrings = [[6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0]];
		return !noteIdsWithoutFinger.some(noteIds => openStrings.filter(openNoteIds => noteIds[0] === openNoteIds[0] && noteIds[1] === openNoteIds[1]).length > 0);
	}

	hasNoMuteStrings(noteIdsWithoutFinger) {
		const muteStrings = [[6, 'x'], [5, 'x'], [4, 'x'], [3, 'x'], [2, 'x'], [1, 'x']];
		return !noteIdsWithoutFinger.some(noteIds => muteStrings.filter(muteNoteIds => noteIds[0] === muteNoteIds[0] && noteIds[1] === muteNoteIds[1]).length > 0);
	}

	render() {
		const {noteIds, chord}= this.props;
		const {fretHeight} = this;

		const noteIdsWithoutFinger = noteIds.map(noteIdArr => {
			const [string, fret] = noteIdArr;
			return [string, fret];
		});

		return (
			<div css={styles.artboard}>
				<div css={openNotes({
					hasNoOpenOrMuteStrings: this.hasNoOpenStrings(noteIdsWithoutFinger) && this.hasNoMuteStrings(noteIdsWithoutFinger)
				})}>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							id: [6, 0],
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							id: [6, 'x'],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							id: [5, 0],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							id: [5, 'x'],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							id: [4, 0],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							id: [4, 'x'],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							id: [3, 0],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							id: [3, 'x'],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							id: [2, 0],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							id: [2, 'x'],
							noteIds,
						})}>
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
							<div css={slash({hasNoOpenStrings: this.hasNoOpenStrings(noteIdsWithoutFinger)})} />
						</div>
					</div>
					<div css={cell({noBorder: true})}>
						<svg css={circleSVG({
							id: [1, 0],
							chord,
							noteIds: noteIdsWithoutFinger,
						})}>
							<circle css={circle({chord})} cx={fretHeight/2/2} cy={fretHeight/2/2} r={fretHeight/2/2.2} />
						</svg>
						<div css={x({
							id: [1, 'x'],
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
								id: [6, 1],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([6, 1], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [5, 1],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([5, 1], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [4, 1],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([4, 1], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [3, 1],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([3, 1], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [2, 1],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([2, 1], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [1, 1],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([1, 1], noteIds)}
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
								id: [6, 2],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([6, 2], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [5, 2],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([5, 2], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [4, 2],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([4, 2], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [3, 2],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([3, 2], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [2, 2],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([2, 2], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [1, 2],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([1, 2], noteIds)}
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
								id: [6, 3],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([6, 3], noteIds)}
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
								id: [5, 3],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([5, 3], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [4, 3],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([4, 3], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [3, 3],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([3, 3], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [2, 3],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([2, 3], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [1, 3],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([1, 3], noteIds)}
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
								id: [6, 4],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([6, 4], noteIds)}
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
								id: [5, 4],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([5, 4], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [4, 4],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([4, 4], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [3, 4],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([3, 4], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [2, 4],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([2, 4], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [1, 4],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([1, 4], noteIds)}
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
								id: [6, 5],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([6, 5], noteIds)}
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
								id: [5, 5],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([5, 5], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [4, 5],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([4, 5], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [3, 5],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([3, 5], noteIds)}
							</div>
							<div css={fretDot} />
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [2, 5],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([2, 5], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [1, 5],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([1, 5], noteIds)}
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
								id: [4, 6],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([4, 6], noteIds)}
							</div>
						</div>
						<div css={cell({noBorder: false})}>
							<div css={note({
								id: [3, 6],
								noteIds: noteIdsWithoutFinger,
							})}>
								{this.getFinger([3, 6], noteIds)}
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
	noteIds: PropTypes.arrayOf(PropTypes.array),
	chord: PropTypes.object,
};

export default ChordDiagram;
