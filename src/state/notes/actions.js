import { createAction } from 'redux-actions';

import {
	NOTES_ACTIVE_REPLACE,
} from '../action-types';

export const replaceActiveNotes = createAction(NOTES_ACTIVE_REPLACE);

