import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import StandardNotation from '../svgs/standard-notation';
import LeftArrow from '../svgs/left-arrow';
import RightArrow from '../svgs/right-arrow';

// Shared Styles
import * as styles from '../common/styles';

class ChordSpelling extends React.Component {
	render () {
		const {noteIds, renderLastPattern, renderNextQuestion, isLastItem} = this.props;

		return (
			<div>
				<StandardNotation noteIds={noteIds} />
				<div css={styles.buttonWrapper}>
					<button
						css={styles.button({
							width: '50%',
							borderRadius: 0,
							gradient: 'light',
							boxShadowUpwards: true,
						})}
						onClick={() => renderLastPattern()}
					>
						<LeftArrow />
					</button>
					{isLastItem ? (
						<button
							css={styles.button({
								width: '50%',
								borderRadius: 0,
								boxShadowUpwards: true,
							})}
							onClick={() => navigate('/')}
						>
							Start Over
						</button>
					) : (
						<button
							css={styles.button({
								width: '50%',
								borderRadius: 0,
								boxShadowUpwards: true,
							})}
							onClick={() => renderNextQuestion()}
						>
							<RightArrow />
						</button>
					)}
				</div>
			</div>
		)
	}
}

ChordSpelling.propTypes = {
	noteIds: PropTypes.arrayOf(PropTypes.string),
	renderLastPattern: PropTypes.func.isRequired,
	renderNextQuestion: PropTypes.func.isRequired,
	isLastItem: PropTypes.bool.isRequired,
};

export default ChordSpelling;
