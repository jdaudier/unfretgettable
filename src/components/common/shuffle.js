import {shuffle} from 'lodash/collection';

import {notes} from './notes';
import {chords, chordToNotesMapping} from './chords';

export function getShuffledNotes() {
	return shuffle(notes);
}

export function getShuffledChords() {
	return shuffle(chords);
}

export function getShuffledChordNotes(chords, key = 1) {
	return chords.map(chord => chordToNotesMapping[chord][key]);
}
