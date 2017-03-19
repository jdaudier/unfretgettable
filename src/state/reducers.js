import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notes from './notes/reducer';

const reducers = combineReducers({
	notes,
	router: routerReducer,
});

export default reducers;
