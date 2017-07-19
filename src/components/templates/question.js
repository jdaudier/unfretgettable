import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action Creators
import { replaceActiveNotes} from '../../state/notes/actions';

import StandardNotation from '../svgs/standard-notation';
import LeftArrow from '../svgs/left-arrow';

// Shared Styles
import { Bar, Header, Button, ButtonWrapper, Nav} from '../common/styles';


class Question extends Component {
	render () {
		const {noteIds, chord, renderAnswer, renderPrevAnswer} = this.props;

		return (
			<div>
				<Link to={{pathname: '/'}}>
					<Nav>
						<Bar />
						<Header>{chord ? chord.name : 'Name This Note'}</Header>
					</Nav>
				</Link>
				<StandardNotation noteIds={noteIds} />
				<ButtonWrapper>
					<Button width='50%'
							borderRadius="0"
							gradient="light"
							boxShadowUpwards={true}
							onClick={() => renderPrevAnswer()}
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
			</div>
		)
	}
}

Question.contextTypes = {
	router: PropTypes.object.isRequired,
};

Question.propTypes = {
	renderAnswer: PropTypes.func.isRequired,
	renderPrevAnswer: PropTypes.func.isRequired,
	noteIds: PropTypes.arrayOf(PropTypes.string),
	chord: PropTypes.object,
};

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		replaceActiveNotes: bindActionCreators(replaceActiveNotes, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
