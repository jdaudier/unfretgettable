import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import TrebleClef from '../../components/svgs/treble-clef';

// Shared Styles
import * as styles from '../common/styles';

const row = {
	display: 'flex',
	height: 44,
	margin: '0 auto',
	width: 'calc(100% - 60px)',
};

const cell = props => ({
	borderBottom: `4px solid ${props.noBorder ? 'transparent' : styles.almostBlack}`,
	flex: props.noteCol ? '0 0 96px' :
		props.lastCol ? '0 0 11%' : '1 1 auto',
	position: 'relative',
});

function getTruthyIds(noteIds) {
	return noteIds.map(noteIdArr => {
		return noteIdArr.filter(value => value !== undefined);
	});
}

function getIdsToMoveRight(noteIds) {
	const ids = noteIds.filter(noteIdArr => noteIdArr[3] === 'r');
	return getTruthyIds(ids);
}

function getIdsToMoveLeft(noteIds) {
	const ids = noteIds.filter(noteIdArr => noteIdArr[3] === 'l');
	return getTruthyIds(ids);
}

function getNotePosition({noteIds, ids}) {
	const shouldMoveLeft = getIdsToMoveLeft(noteIds) && ids.some(idArr => {
		return getIdsToMoveLeft(noteIds).some(noteArr => idArr.join() === noteArr.slice(0, 2).join());
	});

	const shouldMoveRight = getIdsToMoveRight(noteIds) && ids.some(idArr => {
		return getIdsToMoveRight(noteIds).some(noteArr => idArr.join() === noteArr.slice(0, 2).join());
	});

	if (shouldMoveLeft) {
		return '-14%';
	}

	if (shouldMoveRight) {
		return '113%';
	}

	return '50%';
}

const note = props => ({
	bottom: -3,
	display: getTruthyIds(props.noteIds) && props.ids.some(idArr => {
		return getTruthyIds(props.noteIds).some(noteIds => {
			return noteIds.filter(id => id !== 'r' && id !== 'l').join() === idArr.join();
		})
	}) ? 'block' : 'none',
	height: 'calc(100% + 5px)',
	left: getNotePosition({noteIds: props.noteIds, ids: props.ids}),
	position: 'absolute',
	transform: props.stepUp ? 'translate(-50%, -50%)' :
		props.stepDown ? 'translate(-50%, 50%)' : 'translateX(-50%)',
});

const blackPath = {
	fill: styles.almostBlack
};

const line = props => ({
	backgroundColor: styles.almostBlack,
	display: getTruthyIds(props.noteIds) && props.ids.some(idArr => {
		return getTruthyIds(props.noteIds).some(noteIds => {
			return noteIds.filter(id => id !== 'r' && id !== 'l').join() === idArr.join();
		})
	}) ? 'block' : 'none',
	height: 4,
	left: getNotePosition({noteIds: props.noteIds, ids: props.ids}),
	position: 'absolute',
	top: props.stepDown ? '100%' : -4,
	transform: props.stepUp ? 'translate(-50%, -50%)' :
		props.stepDown ? 'translate(-50%, 50%)' : 'translateX(-50%)',
	width: '100%',
});

const sharp = props => ({
	display: getTruthyIds(props.noteIds) && props.ids.some(idArr => {
		return getTruthyIds(props.noteIds).some(noteIds => {
			return noteIds.join() === idArr.join();
		})
	}) ? 'block' : 'none',
	height: 'calc(100% + 30px)',
	position: 'absolute',
	right: props.ledger ? 10 : 0,
	top: props.stepUp ? -36 :
		props.stepDown ? 7 : -15,
});

const flat = props => ({
	display: getTruthyIds(props.noteIds) && props.ids.some(idArr => {
		return getTruthyIds(props.noteIds).some(noteIds => {
			return noteIds.join() === idArr.join();
		})
	}) ? 'block' : 'none',
	fill: styles.almostBlack,
	height: 'calc(100% + 42px)',
	position: 'absolute',
	right: props.ledger ? 10 : 0,
	top: props.stepUp ? -59 :
		props.stepDown ? -14 : -38,
});

function NoteSVG(props) {
	return (
		<svg css={note(props)}
			  version="1.1" x="0px" y="0px" viewBox="0 0 57.9 36.6">
			<path css={blackPath} d="M28.6,0.8c9.8,0,28,3.5,28.4,17.3c0.4,13.5-18.1,17.3-27.6,17.3c-10.1,0-28-3.5-28.4-17.3C0.6,4.7,19.2,0.8,28.6,0.8z M32.3,32.4c5.9-0.8,8.1-3.4,7.7-11.4C39.4,10,32.5,2.5,25.7,3.6c-5.7,1-8.1,3.1-7.7,11.1C18.5,25.8,25.5,33.5,32.3,32.4z" />
		</svg>
	);
}

function SharpSVG(props) {
	return (
		<svg css={sharp(props)}
			  version="1.1" x="0px" y="0px" viewBox="0 0 16.7 57">
			<polygon css={{fill: 'none'}} points="6.1,35.4 11.1,34.1 11.1,22.7 6.1,24" />
			<path css={blackPath} d="M16.7,21.1v-7.6l-3.5,0.9V0h-2.2v15l-5,1.3V1.9H3.9v15l-3.9,1v7.7l3.9-1V36L0,37v7.7l3.9-1V57h2.2V43.1l5-1.4v13.4h2.2v-14l3.5-0.9v-7.6l-3.5,0.9V22.1L16.7,21.1z M11.1,34.1l-5,1.3V24l5-1.4V34.1z" />
		</svg>
	);
}

function FlatSVG(props) {
	return (
		<svg css={flat(props)}
			  version="1.1" x="0px" y="0px" viewBox="0 0 106.4 311">
			<path css={blackPath} d="M0,0h17.3v162.3c13.9-10.7,28.7-20,46.9-20c21.4,0,42.7,21.4,42.2,44.9c-1.1,32-31,55.5-53.4,73.2C33.8,275.8,16,293.9,0,311V0z M17.3,274.9c17.6-20.8,49.5-53.1,49.5-83c0-16.6-9.6-27.2-20.8-28.8c-12.3-2.1-28.7,16.8-28.7,23.8V274.9z" />
		</svg>
	);
}

class StandardNotation extends React.Component {
	render () {
		const {noteIds} = this.props;

		return (
			<div css={styles.artboard}>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true, noteCol: true})} />
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})}>
						<FlatSVG ids={[[1, 6]]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={[[1, 6]]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell} />
					<div css={cell}>
						<SharpSVG ids={[[1, 4]]} noteIds={noteIds} />
						<SharpSVG stepDown ids={[[1, 2]]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG stepUp ids={[[1, 5]]} noteIds={noteIds} />
						<div css={line({
							ids: [[1, 5], [1,6]],
							noteIds
						})} />
						<NoteSVG ids={[[1, 3], [1, 4]]} noteIds={noteIds} />
						<NoteSVG stepDown ids={[[1, 1], [1, 2]]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell} />
					<div css={cell}>
						<SharpSVG stepDown ids={[[2, 4, 's']]} noteIds={noteIds} />
						<FlatSVG ids={[[2, 4, 'f']]} noteIds={noteIds} />
						<FlatSVG stepDown ids={[[2, 2, 'f']]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG ids={[[1, 0], [2, 5], [2, 4, 'f']]} noteIds={noteIds} />
						<NoteSVG stepDown ids={[[2, 2, 'f'], [2, 3], [2, 4, 's']]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell} />
					<div css={cell}>
						<SharpSVG ids={[[2, 2, 's'], [3, 6]]} noteIds={noteIds} />
						<FlatSVG stepDown ids={[[2, 0, 'f'], [3, 3, 'f']]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG ids={[[2, 1], [2, 2, 's'], [3, 5], [3, 6]]} noteIds={noteIds} />
						<NoteSVG stepDown ids={[[2, 0], [2, 0, 'f'], [3, 3, 'f'], [3, 4]]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell} />
					<div css={cell}>
						<SharpSVG stepDown ids={[[3, 1, 's'], [4, 6]]} noteIds={noteIds} />
						<SharpSVG ids={[[3, 3, 's']]} noteIds={noteIds} />
						<FlatSVG ids={[[3, 1, 'f']]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG ids={[[3, 1, 'f'], [3, 2], [3, 3, 's']]} noteIds={noteIds} />
						<NoteSVG stepDown ids={[[3, 0], [3, 1, 's'], [4, 5], [4, 6]]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell}>
						<TrebleClef />
					</div>
					<div css={cell}>
						<SharpSVG ids={[[4, 4], [4, 4, 's'], [4, 3, 's']]} noteIds={noteIds} />
						<FlatSVG ids={[[4, 3, 'f']]} noteIds={noteIds} />
						<FlatSVG stepDown ids={[[4, 2, 'f']]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG ids={[[4, 3], [4, 3, 'f'], [4, 3, 's'], [4, 4], [4, 4, 's']]} noteIds={noteIds} />
						<NoteSVG stepDown ids={[[4, 2], [4, 2, 'f']]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})}>
						<SharpSVG ids={[[4, 1]]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={[[4, 0], [4, 1]]} noteIds={noteIds} />
						<NoteSVG stepDown ids={[[5, 3]]} noteIds={noteIds} />
						<div css={line({
							stepDown: true,
							ids: [[5, 3], [5, 2], [5, 1, 'f'], [5, 0], [6, 4], [6, 3], [6, 1], [6, 2], [6, 0]],
							noteIds
						})} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})}>
						<FlatSVG ledger ids={[[5, 1, 'f']]} noteIds={noteIds} />
						<FlatSVG stepDown ledger ids={[[6, 4]]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={[[5, 1, 'f'], [5, 2]]} noteIds={noteIds} />
						<NoteSVG stepDown ids={[[5, 0], [6, 4]]} noteIds={noteIds} />
						<div css={line({
							stepDown: true,
							ids: [[5, 0], [6, 4], [6, 3], [6, 1], [6, 2], [6, 0]],
							noteIds
						})} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})}>
						<SharpSVG stepDown ledger ids={[[6, 2]]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={[[6, 3]]} noteIds={noteIds} />
						<NoteSVG stepDown ids={[[6, 1], [6, 2]]} noteIds={noteIds} />
						<div css={line({
							stepDown: true,
							ids: [[6, 1], [6, 2], [6, 0]],
							noteIds
						})} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={[[6, 0]]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
			</div>
		);
	}
}

StandardNotation.propTypes = {
	noteIds: PropTypes.arrayOf(PropTypes.array),
};

export default StandardNotation;
