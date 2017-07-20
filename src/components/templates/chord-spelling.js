import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StandardNotation from '../svgs/standard-notation';
import LeftArrow from '../svgs/left-arrow';
import RightArrow from '../svgs/right-arrow';

// Shared Styles
import { Button, ButtonWrapper} from '../common/styles';


class ChordSpelling extends Component {
	render () {
		const {noteIds, renderLastPattern, renderNextQuestion, isLastItem} = this.props;

		return (
			<div>
				<StandardNotation noteIds={noteIds} />
				<ButtonWrapper>
					<Button width='50%'
							borderRadius="0"
							gradient="light"
							boxShadowUpwards={true}
							onClick={() => renderLastPattern()}
					>
						<LeftArrow fill="#363637" />
					</Button>
					{isLastItem ? (
						<Button borderRadius="0"
								boxShadowUpwards={true}
								width="50%"
								onClick={() => this.context.router.history.push('/')}
						>
							Start Over
						</Button>
					) : (
						<Button borderRadius="0"
								boxShadowUpwards={true}
								width="50%"
								onClick={() => renderNextQuestion()}
						>
							<RightArrow />
						</Button>
					)}
				</ButtonWrapper>
			</div>
		)
	}
}

ChordSpelling.contextTypes = {
	router: PropTypes.object.isRequired,
};

ChordSpelling.propTypes = {
	noteIds: PropTypes.arrayOf(PropTypes.string),
	renderLastPattern: PropTypes.func.isRequired,
	renderNextQuestion: PropTypes.func.isRequired,
	isLastItem: PropTypes.bool.isRequired,
};

export default ChordSpelling;
