import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import HomeIcon from '../svgs/home-icon';
import ChordDiagram from '../svgs/chord-diagram';
import LeftArrow from '../svgs/left-arrow';
import RightArrow from '../svgs/right-arrow';
import Search from '../common/search';

// Helpers
import { chordToNotesMapping } from '../common/chords';
import {getPatternCount} from "../common/utils";

// Shared Styles
import * as styles from '../common/styles';

const searchContainer = props => ({
	background: props.gradient === 'light' ? styles.lightGray : styles.red,
	boxShadow: props.boxShadowUpwards ? '0 -3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 -3px 1px -1px rgba(0,0,0,0.2)' : '0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2)',
	color: props.gradient === 'light' ? styles.almostBlack : styles.white,
	cursor: 'pointer',
	display: 'inline-block',
	fontFamily: 'inherit',
	fontSize: '1.3rem',
	fontWeight: props.gradient === 'light' ? 600 : 'normal',
	height: 60,
	letterSpacing: 2,
	textTransform: 'uppercase',
	verticalAlign: 'top',
	width: props.width ? props.width : '100%',
});

class ChordChart extends React.Component {
	constructor(props) {
		super(props);

		const {chord} = this.props;
		const patternCount = getPatternCount(chord);

		this.state = {
			patternNum: 1,
			patternCount,
			chordToSearch: chord,
		};
	}

	renderNextPattern = () => {
		this.setState(prevState => {
			return {
				patternNum: prevState.patternNum + 1,
			}
		})
	};

	renderPrevPattern = () => {
		this.setState(prevState => {
			return {
				patternNum: prevState.patternNum - 1,
			}
		})
	};

	startSearch = (chordToSearch) => {
		const patternCount = getPatternCount(chordToSearch);

		this.setState({
			chordToSearch,
			patternCount,
			patternNum: 1,
		});
	};

	render() {
		const {chordToSearch, patternCount, patternNum} = this.state;

		const hasMorePatterns = patternCount > patternNum;
		const isFirstPattern = patternNum === 1;
		const hasPrevPatterns = patternNum > 1;

		const noteIds = chordToNotesMapping[chordToSearch][patternNum];

		return (
			<div css={styles.row({isAnswer: true})}>
				<HomeIcon />
				<Link to="/">
					<div css={styles.nav}>
						<div css={styles.bar} />
						<h1 css={styles.header}>{chordToSearch}</h1>
					</div>
				</Link>
				<div>
					<ChordDiagram noteIds={noteIds} chord={chordToNotesMapping[chordToSearch]} />
					<div css={styles.buttonWrapper}>
						{!isFirstPattern && (
							<button css={styles.button({
								width: '50%',
								borderRadius: 0,
								gradient: 'light',
								boxShadowUpwards: true,
							})} onClick={this.renderPrevPattern}
							>
								<LeftArrow />
							</button>
						)}
						{hasMorePatterns ? (
							<button css={styles.button({
								width: isFirstPattern ? '100%' : '50%',
								borderRadius: 0,
								boxShadowUpwards: true,
							})} onClick={this.renderNextPattern}
							>
								<RightArrow />
							</button>
						) : (
							<div css={searchContainer({
								borderRadius: 0,
								boxShadowUpwards: true,
								width: hasPrevPatterns ? '50%' : '100%',
							})}
							>
								<Search onSearchRequest={this.startSearch}
										onChordChart={true}
										chordToSearch={chordToSearch}
										placeholder={hasPrevPatterns ? 'Search' : 'Search for a chord...'}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}

ChordChart.propTypes = {
	chord: PropTypes.string.isRequired,
};

export default ChordChart;
