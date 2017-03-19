import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
	NOTES_ACTIVE_REPLACE,
} from '../action-types';

const initialState = {
	activeNotes: Immutable.List(),
};

const notes = handleActions({
    [NOTES_ACTIVE_REPLACE]: (state, { payload }) => {
		console.log('state', state);
		console.log('payload', payload);

		return {
			...state,
			activeNotes: payload,
		}
	}

    // [notes_EDIT]: (state, { payload }) =>
    //     state
    //         .map(t => // eslint-disable-line
    //             t.id === payload.id ?
    //                 Object.assign({}, t, { text: payload.text }) :
    //                 t
    //         ),
    //
    // [notes_COMPLETE]: (state, { payload }) =>
    //     state
    //         .map(t => // eslint-disable-line
    //             t.id === payload ?
    //                 Object.assign({}, t, { completed: !t.completed }) :
    //                 t
    //         ),
    //
    // [notes_DELETE]: (state, { payload }) =>
    //     state.filter(t => t.id !== payload),
    //
    // [notes_COMPLETE_ALL]: state => {
    //     const allComplete = state.every(t => t.completed);
    //
    //     return state.map(t =>
    //         Object.assign({}, t, {
    //             completed: !allComplete,
    //         })
    //     );
    // },
    //
    // [notes_CLEAR_COMPLETE]: state =>
    //     state.filter(t => t.completed === false),

}, initialState);

export default notes;
