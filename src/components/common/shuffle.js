import {shuffle} from 'lodash/collection';

import {notes} from './notes';
import {chords, chordToNotesMapping, standardNotationChordToNotesMapping} from './chords';

export function getShuffledNotes() {
	return shuffle(notes);
}

export function getShuffledChords() {
	return shuffle(chords);
}

export function getShuffledChordNotes(chords) {
	return chords.map(chord => chordToNotesMapping[chord.name]);
}

export function getShuffledStandardNotationChordNotes(chords) {
	return chords.map(chord => standardNotationChordToNotesMapping[chord.name]);
}
