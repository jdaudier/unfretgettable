import { combineReducers } from 'redux';
import todos from './spaces/reducer';

const reducers = combineReducers({
    todos,
});

export default reducers;