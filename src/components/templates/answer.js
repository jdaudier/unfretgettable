import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChordDiagram from '../svgs/chord-diagram';
import LeftArrow from '../svgs/left-arrow';
import RightArrow from '../svgs/right-arrow';

// Helpers
import { noteNameMapping } from '../common/notes';

// Shared Styles
import { Bar, Header, Button, ButtonWrapper, Nav } from '../common/styles';


class Answer extends Component {
	render() {
		const {noteIds, chord, isLastNote, renderNextQuestion, renderQuestion} = this.props;

		return (
			<div>
				<Link to={{pathname: '/'}}>
					<Nav>
						<Bar />
						<Header>{chord ? chord.name : noteNameMapping[noteIds][0]}</Header>
					</Nav>
				</Link>
				<ChordDiagram noteIds={noteIds} />
				<ButtonWrapper>
					<Button width='50%'
							borderRadius="0"
							gradient="light"
							boxShadowUpwards={true}
							onClick={() => renderQuestion()}
					>
						<LeftArrow fill="#363637" />
					</Button>
					{!isLastNote && (
						<Button borderRadius="0"
								boxShadowUpwards={true}
								width="50%"
								onClick={() => renderNextQuestion()}
						>
							<RightArrow />
						</Button>
					)}
					{isLastNote && (
						<Button borderRadius="0"
								boxShadowUpwards={true}
								width="50%"
								onClick={() => this.context.router.history.push('/')}
						>
							Start Over
						</Button>
					)}

				</ButtonWrapper>
			</div>
		)
	}
}

Answer.contextTypes = {
	router: PropTypes.object.isRequired,
};

Answer.propTypes = {
	renderQuestion: PropTypes.func.isRequired,
	renderNextQuestion: PropTypes.func.isRequired,
	isLastNote: PropTypes.bool.isRequired,
	noteIds: PropTypes.arrayOf(PropTypes.string),
	chord: PropTypes.object,
};

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
