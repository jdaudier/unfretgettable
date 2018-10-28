import {chordToNotesMapping} from "./chords";

export function getPatternCount(chordString) {
	const chord = chordToNotesMapping[chordString];
	const {chordSpelling, startingFret, ...rest} = chord;
	return Object.keys(rest).length;
}
