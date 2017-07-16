import React, { Component } from 'react';
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
		const {noteId, isLastNote, renderNextQuestion, renderQuestion} = this.props;

		return (
			<div>
				<Nav>
					<Bar />
					<Header>{noteNameMapping[noteId]}</Header>
				</Nav>
				<ChordDiagram noteId={noteId} />
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
};

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
