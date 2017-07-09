import {notes} from './notes';
import {shuffle} from 'lodash/collection';

export default function getShuffledNotes() {
	return shuffle(notes);
}
