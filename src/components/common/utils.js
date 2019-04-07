import {chordToNotesMapping} from "./chords";

export function getPatternCount(chordString) {
	const chord = chordToNotesMapping[chordString];
	const {chordSpelling, position, ...rest} = chord;
	return Object.keys(rest).length;
}
