import React from 'react';
import PropTypes from 'prop-types';
import { ChordBox } from 'vexchords';

class ChordDiagram extends React.Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}

	componentDidMount() {
		this.drawChordDiagram();
	}

	drawChordDiagram = () => {
		const {noteIds, chord} = this.props;
		const isMobile = window.innerWidth < 700;
		const canvasRef = this.canvasRef.current;

		const chordDiagram = new ChordBox(canvasRef, {
			width: isMobile ? window.innerWidth : 650,
			height: isMobile? window.innerHeight - 150 : 750,
			showTuning: false,
			defaultColor: '#444',
			fretWidth: 2,
			stringWidth: 2,
			strokeWidth: 2,
			labelWeight: 3,
			numFrets: chord ? 5 : 6,
		});

		chordDiagram.draw({
			chord: noteIds,
			position: chord ? chord.position : 0,
			barres: [],
		});
	};

	componentDidUpdate(prevProps) {
		const {noteIds}= this.props;

		if (prevProps.noteIds !== noteIds) {
			const canvasRef = this.canvasRef.current;
			canvasRef.querySelector('svg').remove();
			this.drawChordDiagram();
		}
	}

	render() {
		return (
			<div id='canvas' ref={this.canvasRef} />
		)
	}
}

ChordDiagram.propTypes = {
	noteIds: PropTypes.arrayOf(PropTypes.array),
	chord: PropTypes.object,
};

export default ChordDiagram;
