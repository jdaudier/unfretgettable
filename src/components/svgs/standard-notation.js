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

function getIdsMinusPosition(noteIds) {
	return noteIds.map(noteId => {
		return noteId.split('-')[0];
	});
}

function getIdsToMoveRight(noteIds) {
	const ids = noteIds.filter(noteId => noteId.split('-')[1] === 'r');
	return getIdsMinusPosition(ids);
}

function getIdsToMoveLeft(noteIds) {
	const ids = noteIds.filter(noteId => noteId.split('-')[1] === 'l');
	return getIdsMinusPosition(ids);
}

function getNotePosition({noteIds, ids}) {
	const shouldMoveLeft = getIdsToMoveLeft(noteIds) && ids.some(id => getIdsToMoveLeft(noteIds).indexOf(id) > -1);

	const shouldMoveRight = getIdsToMoveRight(noteIds) && ids.some(id => getIdsToMoveRight(noteIds).indexOf(id) > -1);

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
	display: getIdsMinusPosition(props.noteIds) && props.ids.some(id => getIdsMinusPosition(props.noteIds).indexOf(id) > -1) ? 'block' : 'none',
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
	display: getIdsMinusPosition(props.noteIds) && props.ids.some(id => getIdsMinusPosition(props.noteIds).indexOf(id) > -1) ? 'block' : 'none',
	height: 4,
	position: 'absolute',
	top: props.stepDown ? '100%' : -4,
	width: '100%',
});

const sharp = props => ({
	display: getIdsMinusPosition(props.noteIds) && props.ids.some(id => getIdsMinusPosition(props.noteIds).indexOf(id) > -1) ? 'block' : 'none',
	height: 'calc(100% + 30px)',
	position: 'absolute',
	right: props.ledger ? 10 : 0,
	top: props.stepUp ? -36 :
		props.stepDown ? 7 : -15,
});

const flat = props => ({
	display: getIdsMinusPosition(props.noteIds) && props.ids.some(id => getIdsMinusPosition(props.noteIds).indexOf(id) > -1) ? 'block' : 'none',
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
					<div css={cell} />
					<div css={cell}>
						<SharpSVG ids={["g1s4f"]} noteIds={noteIds} />
						<SharpSVG stepDown ids={["f1s2f"]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG stepUp ids={["a1s5f"]} noteIds={noteIds} />
						<div css={line({
							ids: ["a1s5f"],
							noteIds
						})} />
						<NoteSVG ids={["g1s3f", "g1s4f"]} noteIds={noteIds} />
						<NoteSVG stepDown ids={["f1s1f", "f1s2f"]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell} />
					<div css={cell}>
						<SharpSVG stepDown ids={["d2s4f"]} noteIds={noteIds} />
						<FlatSVG ids={["e2s4f"]} noteIds={noteIds} />
						<FlatSVG stepDown ids={["d2s2f"]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG ids={["e1s", "e2s5f", "e2s4f"]} noteIds={noteIds} />
						<NoteSVG stepDown ids={["d2s2f", "d2s3f", "d2s4f"]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell} />
					<div css={cell}>
						<SharpSVG ids={["c2s2f", "c3s6f"]} noteIds={noteIds} />
						<FlatSVG stepDown ids={["b3s3f"]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG ids={["c2s1f", "c2s2f", "c3s5f", "c3s6f"]} noteIds={noteIds} />
						<NoteSVG stepDown ids={["b2s", "b3s3f", "b3s4f"]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell} />
					<div css={cell}>
						<SharpSVG stepDown ids={["g3s1f", "g4s6f"]} noteIds={noteIds} />
						<SharpSVG ids={["a3s3f"]} noteIds={noteIds} />
						<FlatSVG ids={["a3s1f"]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG ids={["a3s1f", "a3s2f", "a3s3f"]} noteIds={noteIds} />
						<NoteSVG stepDown ids={["g3s", "g3s1f", "g4s5f", "g4s6f"]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell}>
						<TrebleClef />
					</div>
					<div css={cell}>
						<SharpSVG ids={["f4s4f"]} noteIds={noteIds} />
					</div>
					<div css={cell({noteCol: true})}>
						<NoteSVG ids={["f4s3f", "f4s4f"]} noteIds={noteIds} />
						<NoteSVG stepDown ids={["e4s2f"]} noteIds={noteIds} />
					</div>
					<div css={cell({lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})}>
						<SharpSVG ids={["d4s1f"]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={["d4s", "d4s1f"]} noteIds={noteIds} />
						<NoteSVG stepDown ids={["c5s3f"]} noteIds={noteIds} />
						<div css={line({
							stepDown: true,
							ids: ["c5s3f", "b5s2f", "a5s", "a6s4f", "g6s3f", "f6s1f", "f6s2f", "e6s"],
							noteIds
						})} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})}>
						<FlatSVG stepDown ledger ids={["a6s4f"]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={["b5s2f"]} noteIds={noteIds} />
						<NoteSVG stepDown ids={["a5s", "a6s4f"]} noteIds={noteIds} />
						<div css={line({
							stepDown: true,
							ids: ["a5s", "a6s4f", "g6s3f", "f6s1f", "f6s2f", "e6s"],
							noteIds
						})} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})}>
						<SharpSVG stepDown ledger ids={["f6s2f"]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={["g6s3f"]} noteIds={noteIds} />
						<NoteSVG stepDown ids={["f6s1f", "f6s2f"]} noteIds={noteIds} />
						<div css={line({
							stepDown: true,
							ids: ["f6s1f", "f6s2f", "e6s"],
							noteIds
						})} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
				<div css={row}>
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true})} />
					<div css={cell({noBorder: true, noteCol: true})}>
						<NoteSVG ids={["e6s"]} noteIds={noteIds} />
					</div>
					<div css={cell({noBorder: true, lastCol: true})} />
				</div>
			</div>
		);
	}
}

StandardNotation.propTypes = {
	noteIds: PropTypes.arrayOf(PropTypes.string),
};

export default StandardNotation;
