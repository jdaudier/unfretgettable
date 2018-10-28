import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

import SearchIcon from '../svgs/search-icon';

// Helpers
import { chordInputMapping } from '../common/chords';
import {red, white} from "./styles";

const searchForm = props => (css({
	height: 60,
	left: props.onHome ? 10 : 0,
	position: props.onHome ? 'absolute' : 'static',
	right: props.onHome ? 10 : 0,
	top: props.onHome ? 10 : 0,
}));

const searchLabel = props => (css({
	backgroundColor: props.onChordChart ? 'transparent' : 'rgba(0, 0, 0, .25)',
	borderColor: props.hasError ? red : '#f2f2f2',
	borderRadius: 30,
	borderWidth: props.isSearchExpanded && !props.onChordChart ? 3 : 0,
	borderStyle: props.isSearchExpanded && !props.onChordChart ? 'solid' : 'none',
	display: 'inline-block',
	height: '100%',
	position: 'relative',
	width: props.isSearchExpanded ? '100%' : 70,
	transition: 'all .5s',
}));

const searchInput = props => (css({
	backgroundColor: props.onChordChart ? 'transparent' : 'rgba(0, 0, 0, .25)',
	border: 'none',
	borderRadius: 30,
	color: white,
	fontSize: 20,
	height: '100%',
	paddingRight: props.isSearchExpanded ? 20 : 0,
	paddingLeft: props.isSearchExpanded ? 70 : 0,
	width: props.isSearchExpanded ? '100%' : 0,
	transition: 'all .5s',

	'&::placeholder': {
		color: white,
	}
}));

const searchToggle = css({
	color: white,
	cursor: 'pointer',
	display: 'inline-block',
	height: '100%',
	left: 0,
	width: 70,
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
});

const homeSearchIconWrapper = css({
	color: white,
	cursor: 'pointer',
	display: 'inline-block',
	height: 30,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
});

class Search extends React.Component {
	state = {
		hasError: false,
		isSearchExpanded: false,
		searchTerm: '',
	};

	componentWillReceiveProps(nextProps) {
		const {chordToSearch} = this.props;

		if (chordToSearch !== nextProps.chordToSearch) {
			this.setState({
				hasError: false,
				isSearchExpanded: false,
				searchTerm: '',
			})
		}
	}

	handleSearchIconClick = () => {
		const {searchTerm} = this.state;
		const {onSearchRequest} = this.props;

		const matchedChordName = chordInputMapping[searchTerm.trim().toUpperCase()];

		if (searchTerm.trim() && !matchedChordName) {
			return this.handleSearchError();
		}

		if (searchTerm.trim() && matchedChordName) {
			return onSearchRequest(matchedChordName);
		}

		if (!searchTerm.trim()) {
			this.setState(prevState => {
				return {
					isSearchExpanded: !prevState.isSearchExpanded,
					hasError: false,
				}
			});
		}
	};

	handleInputChange = e => {
		this.setState({
			searchTerm: e.target.value,
		});
	};

	handleSearchSubmit = e => {
		const {searchTerm} = this.state;
		const {onSearchRequest} = this.props;
		e.preventDefault();

		const matchedChordName = chordInputMapping[searchTerm.trim().toUpperCase()];

		if ((searchTerm.trim() && !matchedChordName) || !searchTerm.trim()) {
			return this.handleSearchError();
		}

		onSearchRequest(matchedChordName);
	};

	handleSearchError = () => {
		this.setState({
			hasError: true,
		});
	};

	render() {
		const {isSearchExpanded, searchTerm, hasError} = this.state;
		const {placeholder, onHome, onChordChart} = this.props;

		return (
			<form css={searchForm({onHome})} onSubmit={this.handleSearchSubmit}
			>
				<label css={searchLabel({
					hasError,
					isSearchExpanded,
					onChordChart,
				})}>
					<span css={searchToggle} onClick={this.handleSearchIconClick}>
						<span css={homeSearchIconWrapper}>
							<SearchIcon />
						</span>
					</span>
					{isSearchExpanded && (
						<input css={searchInput({
							isSearchExpanded,
							onChordChart,
						})}
							onChange={this.handleInputChange}
							type="search"
							autoComplete="off"
							value={searchTerm}
							placeholder={isSearchExpanded ? (placeholder || 'Search for a chord...') : ''}
						/>
					)}
				</label>
			</form>
		)
	}
}

Search.propTypes = {
	chordToSearch: PropTypes.string,
	placeholder: PropTypes.string,
	onSearchRequest: PropTypes.func.isRequired,
	onHome: PropTypes.bool,
	onChordChart: PropTypes.bool,
};

export default Search;
