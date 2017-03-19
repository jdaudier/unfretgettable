import {notes} from './notes';

export default function getRandomNoteId() {
	return notes[Math.floor(Math.random() * notes.length)];
}
