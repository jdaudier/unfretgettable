import {notes} from './notes';
import {shuffle} from 'lodash/collection';

export function getShuffledNotes() {
	return shuffle(notes);
}
