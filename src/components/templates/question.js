import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeIcon from '../svgs/home-icon';

// Helpers
import { getShuffledChordNotes } from '../common/shuffle';

// Action Creators
import { replaceActiveNotes } from '../../state/notes/actions';

import StandardNotation from '../svgs/standard-notation';
import LeftArrow from '../svgs/left-arrow';

// Shared Styles
import { Row, Bar, Header, Button, MusicBookImageWrapper, Dimmer, ButtonWrapper, Nav, LargeText } from '../common/styles';


class Question extends Component {
	render () {
		const {showNotes, currentIndex, data, renderAnswer, renderPrevAnswer, renderChordSpelling} = this.props;
		const noteIds = showNotes ? data[currentIndex] : getShuffledChordNotes(data)[currentIndex];
		const chord = showNotes ? {} : data[currentIndex];

		return (
			<Row showNotes={showNotes}>
				<HomeIcon />
				<Link to={{pathname: '/'}}>
					<Nav>
						<Bar />
						<Header>{showNotes ? 'Name This Note' : ''}</Header>
					</Nav>
				</Link>
				{showNotes ? <StandardNotation noteIds={noteIds} /> : (
					<MusicBookImageWrapper>
						<Dimmer />
						<LargeText>{chord}</LargeText>
					</MusicBookImageWrapper>
				)}
				<ButtonWrapper>
					<Button width='50%'
							borderRadius="0"
							gradient="light"
							boxShadowUpwards={true}
							onClick={() => {
								showNotes && renderPrevAnswer();
								!showNotes && renderChordSpelling();
							}}
					>
						<LeftArrow fill="#363637" />
					</Button>
					<Button borderRadius="0"
							boxShadowUpwards={true}
							width="50%"
							onClick={() => renderAnswer()}
					>Answer
					</Button>
				</ButtonWrapper>
			</Row>
		)
	}
}

Question.contextTypes = {
	router: PropTypes.object.isRequired,
};

Question.propTypes = {
	renderAnswer: PropTypes.func.isRequired,
	renderPrevAnswer: PropTypes.func.isRequired,
	renderChordSpelling: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		replaceActiveNotes: bindActionCreators(replaceActiveNotes, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
