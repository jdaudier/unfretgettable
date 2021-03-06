export const chords = ['C', 'C7', 'G7', 'G', 'D7', 'Em', 'D', 'A7', 'Am', 'Dm', 'Fmaj7', 'A', 'D/F#', 'Bm/F#', 'Cadd9', 'C/E', 'E', 'E7', 'Cm/G', 'Am7', 'Dm7', 'Em7', 'Gdim', 'G/B', 'Gsus4/B', 'Am6', 'C/G', 'F', 'B7', 'C#m/G#', 'Fm', 'F#m', 'Gm', 'Cmaj7', 'Bm/A', 'Dsus2', 'Bm7(♭5)', 'B♭9(♭5)', 'F#m7(♭5)', 'Am/F#', 'C7/G', 'Am/G', 'C6', 'G7/C', 'Dm/C', 'Dm7/G', 'D#dim', 'F#7', 'Cm/A', 'C/D', 'B♭/F', 'E♭', 'Am6/9', 'Dm(maj7)', 'E7(#5)', 'Dm6', 'Am(maj7)', 'Am7(♭5)', 'Fadd9', 'Asus2', 'Caug', 'C+/E', 'Dm7/F', 'C7sus4', 'F#dim7', 'Dsus4', 'A/C#'];

export const chordInputMapping = {
	C: 'C',
	CAUG: 'Caug',
	'C AUG': 'Caug',
	'C+': 'Caug',
	'C +': 'Caug',
	'CAUGMENTED': 'Caug',
	'C AUGMENTED': 'Caug',
	'CAUG/E': 'C+/E',
	'C AUG/E': 'C+/E',
	'C+/E': 'C+/E',
	'C +/E': 'C+/E',
	'CAUGMENTED/E': 'C+/E',
	'C AUGMENTED/E': 'C+/E',
	C6: 'C6',
	C7: 'C7',
	'C 6': 'C6',
	'C 7': 'C7',
	'C7SUS4': 'C7sus4',
	'C7 SUS4': 'C7sus4',
	'C7 SUS 4': 'C7sus4',
	'C7(SUS4)': 'C7sus4',
	G7: 'G7',
	'G 7': 'G7',
	'G7/C': 'G7/C',
	'G7 / C': 'G7/C',
	G: 'G',
	D7: 'D7',
	'D 7': 'D7',
	EM: 'Em',
	'E M': 'Em',
	'E MINOR': 'Em',
	'E MIN': 'Em',
	EMIN: 'Em',
	EMINOR: 'Em',
	D: 'D',
	A7: 'A7',
	'A 7': 'A7',
	E7: 'E7',
	'E 7': 'E7',
	'E7#5': 'E7(#5)',
	'E7 #5': 'E7(#5)',
	'E7(#5)': 'E7(#5)',
	AM: 'Am',
	'A M': 'Am',
	'A MINOR': 'Am',
	'A MIN': 'Am',
	AMIN: 'Am',
	AMINOR: 'Am',
	'AMMAJ7': 'Am(maj7)',
	'AM MAJ7': 'Am(maj7)',
	'AM MAJ 7': 'Am(maj7)',
	'AMINMAJ7': 'Am(maj7)',
	'AMINORMAJ7': 'Am(maj7)',
	'AMINOR MAJ7': 'Am(maj7)',
	'AMINOR MAJ 7': 'Am(maj7)',
	'AM(MAJ7)': 'Am(maj7)',
	'AM/F#': 'Am/F#',
	'AM / F#': 'Am/F#',
	'AMIN/F#': 'Am/F#',
	'AMIN / F#': 'Am/F#',
	'A MIN / F#': 'Am/F#',
	'AM/G': 'Am/G',
	'AM / G': 'Am/G',
	'AMIN/G': 'Am/G',
	'AMIN / G': 'Am/G',
	'A MIN / G': 'Am/G',
	DM: 'Dm',
	'D M': 'Dm',
	'D MINOR': 'Dm',
	'D MIN': 'Dm',
	DMIN: 'Dm',
	DMINOR: 'Dm',
	'DM6': 'Dm6',
	'DMIN6': 'Dm6',
	'DMINOR6': 'Dm6',
	'DMIN 6': 'Dm6',
	'DM 6': 'Dm6',
	'DMMAJ7': 'Dm(maj7)',
	'DM MAJ7': 'Dm(maj7)',
	'DM MAJ 7': 'Dm(maj7)',
	'DMINORMAJ7': 'Dm(maj7)',
	'DMINOR MAJ7': 'Dm(maj7)',
	'DMINMAJ7': 'Dm(maj7)',
	'DMIN MAJ 7': 'Dm(maj7)',
	'DM(MAJ7)': 'Dm(maj7)',
	'DM/C': 'Dm/C',
	'DM / C': 'Dm/C',
	'D MINOR/C': 'Dm/C',
	'D MIN/C': 'Dm/C',
	'DMIN/C': 'Dm/C',
	'DMINOR/C': 'Dm/C',
	'DM7/G': 'Dm7/G',
	'DM7 / G': 'Dm7/G',
	'D MINOR7/G': 'Dm7/G',
	'D MIN7/G': 'Dm7/G',
	'DMIN7/G': 'Dm7/G',
	'DMINOR7/G': 'Dm7/G',
	'DM7/F': 'Dm7/F',
	'DM7 / F': 'Dm7/F',
	'D MINOR7/F': 'Dm7/F',
	'D MIN7/F': 'Dm7/F',
	'DMIN7/F': 'Dm7/F',
	'DMINOR7/F': 'Dm7/F',
	GM: 'Gm',
	'G M': 'Gm',
	'G MINOR': 'Gm',
	'G MIN': 'Gm',
	GMIN: 'Gm',
	GMINOR: 'Gm',
	'F MAJOR 7': 'Fmaj7',
	'F MAJOR7': 'Fmaj7',
	FMAJ7: 'Fmaj7',
	'FMAJ 7': 'Fmaj7',
	'F MAJ 7': 'Fmaj7',
	'F MAJ7': 'Fmaj7',
	A: 'A',
	'A MAJOR': 'A',
	'A/C#': 'A/C#',
	'A / C#': 'A/C#',
	ASUS2: 'Asus2',
	'ASUS 2': 'Asus2',
	'A SUS 2': 'Asus2',
	'D/F#': 'D/F#',
	'D / F#': 'D/F#',
	'BM/F#': 'Bm/F#',
	'BM / F#': 'Bm/F#',
	'CM/G': 'Cm/G',
	'CM / G': 'Cm/G',
	'CMIN/G': 'Cm/G',
	'CMIN / G': 'Cm/G',
	'C MIN / G': 'Cm/G',
	'C#M/G#': 'C#m/G#',
	'C#MIN/G#': 'C#m/G#',
	'C# MIN / G#': 'C#m/G#',
	'CM/A': 'Cm/A',
	'C MIN/A': 'Cm/A',
	'CMIN/A': 'Cm/A',
	'C/G': 'C/G',
	'C / G': 'C/G',
	'C/D': 'C/D',
	'C / D': 'C/D',
	'C7/G': 'C7/G',
	'C7 / G': 'C7/G',
	CADD9: 'Cadd9',
	'C ADD9': 'Cadd9',
	'C ADD 9': 'Cadd9',
	'C/E': 'C/E',
	'C / E': 'C/E',
	'G/B': 'G/B',
	'G / B': 'G/B',
	E: 'E',
	'EB': 'E♭',
	'E B': 'E♭',
	AM7: 'Am7',
	'AM 7': 'Am7',
	'A MINOR 7': 'Am7',
	'A MIN 7': 'Am7',
	AMIN7: 'Am7',
	'AMIN 7': 'Am7',
	'AM7B5': 'Am7(♭5)',
	'AM7-5': 'Am7(♭5)',
	'AM7 B5': 'Am7(♭5)',
	'AM7 -5': 'Am7(♭5)',
	'AMIN7B5': 'Am7(♭5)',
	'AMIN7-5': 'Am7(♭5)',
	'AMIN7 B5': 'Am7(♭5)',
	'AMIN7 -5': 'Am7(♭5)',
	'AM7(B5)': 'Am7(♭5)',
	'AM7(-5)': 'Am7(♭5)',
	DM7: 'Dm7',
	'DM 7': 'Dm7',
	'D MINOR 7': 'Dm7',
	'D MIN 7': 'Dm7',
	DMIN7: 'Dm7',
	'DMIN 7': 'Dm7',
	'C MAJOR 7': 'Cmaj7',
	'C MAJOR7': 'Cmaj7',
	CMAJ7: 'Cmaj7',
	'CMAJ 7': 'Cmaj7',
	'C MAJ 7': 'Cmaj7',
	'C MAJ7': 'Cmaj7',
	EM7: 'Em7',
	'EM 7': 'Em7',
	'E MINOR 7': 'Em7',
	'E MIN 7': 'Em7',
	EMIN7: 'Em7',
	'EMIN 7': 'Em7',
	GDIM: 'Gdim',
	'G DIM': 'Gdim',
	'G DIMINISHED': 'Gdim',
	'D#DIM': 'D#dim',
	'D#DIMINISHED': 'D#dim',
	'D# DIM': 'D#dim',
	'D# DIMINISHED': 'D#dim',
	'GSUS4/B': 'Gsus4/B',
	'GSUS4 / B': 'Gsus4/B',
	'GSUS 4 / B': 'Gsus4/B',
	AM6: 'Am6',
	'AM 6': 'Am6',
	'A MINOR 6': 'Am6',
	'A MIN 6': 'Am6',
	AMIN6: 'Am6',
	'AMIN 6': 'Am6',
	'Am6/9': 'Am6/9',
	'Am 6/9': 'Am6/9',
	F: 'F',
	FADD9: 'Fadd9',
	'F ADD9': 'Fadd9',
	'F ADD 9': 'Fadd9',
	B7: 'B7',
	'B 7': 'B7',
	'F#M': 'F#m',
	'F# M': 'F#m',
	'F#MIN': 'F#m',
	'F# MIN': 'F#m',
	FM: 'Fm',
	'F M': 'Fm',
	'F MINOR': 'Fm',
	'F MIN': 'Fm',
	FMIN: 'Fm',
	FMINOR: 'Fm',
	'BM/A': 'Bm/A',
	'BM / A': 'Bm/A',
	'BMIN/A': 'Bm/A',
	'B MIN/A': 'Bm/A',
	'B MIN / A': 'Bm/A',
	DSUS2: 'Dsus2',
	'DSUS 2': 'Dsus2',
	'D SUS 2': 'Dsus2',
	'D(SUS2)': 'Dsus2',
	DSUS4: 'Dsus4',
	'DSUS 4': 'Dsus4',
	'D SUS 4': 'Dsus4',
	'D(SUS4)': 'Dsus4',
	BM7B5: 'Bm7(♭5)',
	BMIN7B5: 'Bm7(♭5)',
	'BM7-5': 'Bm7(♭5)',
	'BMIN7-5': 'Bm7(♭5)',
	'B MIN7-5': 'Bm7(♭5)',
	'B MIN7 -5': 'Bm7(♭5)',
	'B M7-5': 'Bm7(♭5)',
	'B M7 -5': 'Bm7(♭5)',
	'BB9B5': 'B♭9(♭5)',
	'BB9-5': 'B♭9(♭5)',
	'B B9 B5': 'B♭9(♭5)',
	'B B9 -5': 'B♭9(♭5)',
	'BB/F': 'B♭/F',
	'BB / F': 'B♭/F',
	'F#M7B5': 'F#m7(♭5)',
	'F#M7-5': 'F#m7(♭5)',
	'F#MIN7B5': 'F#m7(♭5)',
	'F#MIN7-5': 'F#m7(♭5)',
	'F# M7 B5': 'F#m7(♭5)',
	'F# M7 -5': 'F#m7(♭5)',
	'F# MIN7 B5': 'F#m7(♭5)',
	'F# MIN7 -5': 'F#m7(♭5)',
	'F#7': 'F#7',
	'F# 7': 'F#7',
	'F#O7': 'F#dim7',
	'F# O7': 'F#dim7',
	'F#DIM7': 'F#dim7',
	'F# DIM7': 'F#dim7',
};

// chord diagram: [string, fret, finger]
// chord spelling: [string, fret, accidental, position]
export const chordToNotesMapping = {
	C: {
		1: [[1, 0], [2, 1, 1], [3, 0], [4, 2, 2], [5, 3, 3], [6, 'x']],
		chordSpelling: [[3, 0], [4, 2], [5, 3]],
		position: 1,
	},
	Caug: {
		1: [[1, 'x'], [2, 1, 1], [3, 1, 1], [4, 2, 2], [5, 3, 3], [6, 'x']],
		chordSpelling: [[3, 1, 's'], [4, 2], [5, 3]],
		position: 1,
	},
	'C+/E': {
		1: [[1, 'x'], [2, 1, 1], [3, 1, 1], [4, 2, 2], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 1], [3, 1, 's'], [4, 2]],
		position: 1,
	},
	C6: {
		1: [[1, 0], [2, 1, 1], [3, 2, 3], [4, 2, 2], [5, 3, 4], [6, 'x']],
		chordSpelling: [[3, 0], [3, 2, undefined, 'r'], [4, 2], [5, 3]],
		position: 1,
	},
	C7: {
		1: [[1, 0], [2, 1, 1], [3, 3, 4], [4, 2, 2], [5, 3, 3], [6, 'x']],
		chordSpelling: [[3, 0], [3, 3, 'f'], [4, 2], [5, 3]],
		position: 1,
	},
	C7sus4: {
		1: [[1, 'x'], [2, 1, 1], [3, 3, 4], [4, 3, 3], [5, 3, 2], [6, 'x']],
		chordSpelling: [[2, 0, 'f'], [3, 0, undefined, 'r'], [4, 3], [5, 3]],
		position: 1,
	},
	'C/E': {
		1: [[1, 0], [2, 1, 1], [3, 0], [4, 2, 2], [5, 3, 3], [6, 0]],
		chordSpelling: [[3, 0], [4, 2], [2, 1]],
		position: 1,
	},
	G7: {
		1: [[1, 1, 1], [2, 0], [3, 0], [4, 0], [5, 2, 2], [6, 3, 3]],
		chordSpelling: [[1, 1], [2, 0], [3, 0], [2, 3]],
		position: 1,
	},
	'G7/C': {
		1: [[1, 1, 1], [2, 0], [3, 0], [4, 0], [5, 3, 3], [6, 'x']],
		chordSpelling: [[1, 1], [2, 0], [2, 3], [3, 0], [5, 3]],
		position: 1,
	},
	G: {
		1: [[1, 3, 3], [2, 0], [3, 0], [4, 0], [5, 2, 1], [6, 3, 2]],
		2: [[1, 3, 4], [2, 0], [3, 0], [4, 0], [5, 2, 2], [6, 3, 3]],
		3: [[1, 3, 4], [2, 3, 3], [3, 0], [4, 0], [5, 2, 1], [6, 3, 2]],
		4: [[1, 3, 1], [2, 3, 1], [3, 4, 2], [4, 5, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[3, 0], [2, 3], [2, 0]],
		position: 1,
	},
	D7: {
		1: [[1, 2, 3], [2, 1, 1], [3, 2, 2], [4, 0], [5, 'x'], [6, 'x']],
		2: [[1, 'x'], [2, 3, 1], [3, 5, 4], [4, 4, 2], [5, 5 , 3], [6, 'x']],
		chordSpelling: [[4, 4], [2, 1], [3, 2], [4, 0]],
		position: 1,
	},
	Em: {
		1: [[1, 0], [2, 0], [3, 0], [4, 2, 3], [5, 2, 2], [6, 0]],
		chordSpelling: [[2, 0], [3, 0], [4, 2]],
		position: 1,
	},
	D: {
		1: [[1, 2, 2], [2, 3, 3], [3, 2, 1], [4, 0], [5, 'x'], [6, 'x']],
		chordSpelling: [[4, 4], [4, 0], [3, 2]],
		position: 1,
	},
	A7: {
		1: [[1, 0], [2, 2, 2], [3, 0], [4, 2, 1], [5, 0], [6, 'x']],
		2: [[1, 0], [2, 2, 3], [3, 0], [4, 2, 2], [5, 0], [6, 'x']],
		chordSpelling: [[1, 0], [2, 2, 's'], [1, 3], [3, 2]],
		position: 1,
	},
	Am: {
		1: [[1, 0], [2, 1, 1], [3, 2, 3], [4, 2, 2], [5, 0], [6, 'x']],
		chordSpelling: [[1, 0], [2, 1], [3, 2]],
		position: 1,
	},
	'Am(maj7)': {
		1: [[1, 0], [2, 1, 2], [3, 1, 1], [4, 2, 3], [5, 0], [6, 'x']],
		chordSpelling: [[1, 0], [1, 4, 's'], [2, 1], [3, 1], [3, 2]],
		position: 1,
	},
	'Am7(♭5)': {
		1: [[1, 3, 4], [2, 1, 2], [3, 2, 3], [4, 1, 1], [5, 0], [6, 'x']],
		chordSpelling: [[2, 4, 'f'], [1, 3], [2, 1], [3, 2], [4, 1]],
		position: 1,
	},
	'Am/G': {
		1: [[1, 0], [2, 1, 1], [3, 2, 3], [4, 2, 2], [5, 0], [6, 3, 4]],
		chordSpelling: [[1, 0], [2, 1], [3, 2], [3, 0, undefined, 'l']],
		position: 1,
	},
	Dm: {
		1: [[1, 1, 1], [2, 3, 3], [3, 2, 2], [4, 0], [5, 'x'], [6, 'x']],
		2: [[1, 1, 1], [2, 3, 4], [3, 2, 2], [4, 0], [5, 'x'], [6, 'x']],
		chordSpelling: [[4, 0], [4, 3], [3, 2]],
		position: 1,
	},
	Dm6: {
		1: [[1, 1, 1], [2, 0], [3, 2, 2], [4, 0], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 0, undefined, 'r'], [3, 2], [4, 0], [4, 3]],
		position: 1,
	},
	'Dm(maj7)': {
		1: [[1, 1, 1], [2, 2, 3], [3, 2, 2], [4, 0], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 2, 's'], [3, 2], [4, 0], [4, 3]],
		position: 1,
	},
	'Dm/C': {
		1: [[1, 1, 1], [2, 3, 4], [3, 2, 2], [4, 0], [5, 3, 3], [6, 'x']],
		chordSpelling: [[3, 2], [4, 0], [4, 3], [5, 3, undefined, 'l']],
		position: 1,
	},
	Fmaj7: {
		1: [[1, 0], [2, 1, 1], [3, 2, 2], [4, 3, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[1, 0], [2, 1], [3, 2], [4, 3]],
		position: 1,
	},
	A: {
		1: [[1, 0], [2, 2, 3], [3, 2, 2], [4, 2, 1], [5, 0], [6, 'x']],
		chordSpelling: [[1, 0], [2, 2, 's'], [3, 2]],
		position: 1,
	},
	'A/C#': {
		1: [[1, 'x'], [2, 2, 1], [3, 2, 1], [4, 2, 1], [5, 4, 3], [6, 'x']],
		chordSpelling: [[3, 2], [4, 2], [5, 4, 's']],
		position: 1,
	},
	Asus2: {
		1: [[1, 0], [2, 0], [3, 2, 3], [4, 2, 2], [5, 0], [6, 'x']],
		chordSpelling: [[2, 0, undefined, 'r'], [3, 2], [4, 2]],
		position: 1,
	},
	'D/F#': {
		1: [[1, 'x'], [2, 3, 4], [3, 2, 3], [4, 0], [5, 0], [6, 2, 2]],
		chordSpelling: [[2, 3], [3, 2], [4, 4]],
		position: 1,
	},
	'Bm/F#': {
		1: [[1, 2, 1], [2, 3, 2], [3, 4, 4], [4, 4, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[1, 2], [2, 3], [3, 4], [4, 4]],
		position: 1,
	},
	Cadd9: {
		1: [[1, 0], [2, 3, 3], [3, 0], [4, 2, 1], [5, 3, 2], [6, 'x']],
		2: [[1, 3, 4], [2, 3, 3], [3, 0], [4, 2, 1], [5, 3, 2], [6, 'x']],
		chordSpelling: [[2, 3], [3, 0], [4, 2], [5, 3]],
		position: 1,
	},
	E: {
		1: [[1, 0], [2, 0], [3, 1, 1], [4, 2, 3], [5, 2, 2], [6, 0]],
		chordSpelling: [[2, 0], [3, 1, 's'], [4, 2]],
		position: 1,
	},
	'E♭': {
		1: [[1, 3, 1], [2, 4, 2], [3, 3, 1], [4, 5, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 0, 'f'], [4, 5], [4, 2, 'f']],
		position: 3,
	},
	E7: {
		1: [[1, 0], [2, 0], [3, 1, 1], [4, 0], [5, 2, 2], [6, 0]],
		chordSpelling: [[2, 3], [2, 0], [3, 1, 's'], [4, 2]],
		position: 1,
	},
	'E7(#5)': {
		1: [[1, 0], [2, 1, 2], [3, 1, 1], [4, 0], [5, 2, 3], [6, 0]],
		chordSpelling: [[2, 1, 's'], [2, 3], [3, 1, 's'], [4, 2]],
		position: 1,
	},
	'Cm/G': {
		1: [[1, 3, 1], [2, 4, 2], [3, 5, 4], [4, 5, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 4, 'f'], [3, 5], [4, 5]],
		position: 3,
	},
	'Cm/A': {
		1: [[1, 3, 1], [2, 4, 2], [3, 5, 4], [4, 5, 3], [5, 0], [6, 'x']],
		chordSpelling: [[4, 1, 'f'], [4, 5], [5, 0], [5, 3]],
		position: 3,
	},
	'C#m/G#': {
		1: [[1, 4, 1], [2, 5, 2], [3, 6, 4], [4, 6, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 5], [3, 6], [4, 6]],
		position: 4,
	},
	'C/G': {
		1: [[1, 0], [2, 1, 1], [3, 0], [4, 2, 2], [5, 3, 4], [6, 3, 3]],
		chordSpelling: [[1, 0], [2, 1], [3, 0]],
		position: 1,
	},
	'C/D': {
		1: [[1, 0], [2, 1, 1], [3, 0], [4, 0], [5, 'x'], [6, 'x']],
		chordSpelling: [[1, 3], [1, 0], [2, 1], [4, 0]],
		position: 1,
	},
	'C7/G': {
		1: [[1, 0], [2, 1, 1], [3, 3, 4], [4, 2, 2], [5, 'x'], [6, 3, 3]],
		chordSpelling: [[1, 0], [1, 6], [2, 1], [3, 0]],
		position: 1,
	},
	Am7: {
		1: [[1, 3, 4], [2, 1, 1], [3, 2, 3], [4, 2, 2], [5, 0], [6, 'x']],
		2: [[1, 0], [2, 1, 1], [3, 0], [4, 2, 2], [5, 0], [6, 'x']],
		chordSpelling: [[1, 3], [1, 0], [2, 1], [3, 2]],
		position: 1,
	},
	Gdim: {
		1: [[1, 3, 4], [2, 2, 2], [3, 3, 3], [4, 2, 1], [5, 'x'], [6, 'x']],
		chordSpelling: [[3, 0], [3, 3, 'f'], [2, 2, 'f']],
		position: 1,
	},
	'D#dim': {
		1: [[1, 2, 4], [2, 1, 2], [3, 2, 3], [4, 1, 1], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 1], [3, 2], [4, 1, 's'], [4, 4]],
		position: 1,
	},
	'G/B': {
		1: [[1, 3, 4], [2, 0], [3, 0], [4, 0], [5, 2, 2], [6, 'x']],
		chordSpelling: [[2, 0], [2, 3], [1, 3]],
		position: 1,
	},
	'Gsus4/B': {
		1: [[1, 'x'], [2, 1, 1], [3, 0], [4, 0], [5, 2, 2], [6, 'x']],
		chordSpelling: [[2, 1], [3, 0], [4, 0], [5, 2]],
		position: 1,
	},
	Am6: {
		1: [[1, 2, 4], [2, 1, 1], [3, 2, 3], [4, 2, 2], [5, 0], [6, 'x']],
		2: [[1, 0], [2, 1, 1], [3, 2, 2], [4, 4, 4], [5, 0], [6, 'x']],
		chordSpelling: [[1, 0], [1, 2, undefined, 'r'], [1, 2], [2, 1], [3, 2]],
		position: 1,
	},
	'Am6/9': {
		1: [[1, 2, 4], [2, 0], [3, 2, 3], [4, 2, 2], [5, 0], [6, 'x']],
		chordSpelling: [[1, 7], [1, 2, undefined, 'r'], [1, 2], [1, 0], [2, 1], [3, 2]],
		position: 1,
	},
	F: {
		1: [[1, 1, 1], [2, 1, 1], [3, 2, 2], [4, 3, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 1], [3, 2], [4, 3]],
		position: 1,
	},
	Fadd9: {
		1: [[1, 3, 4], [2, 1, 1], [3, 2, 2], [4, 3, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[1, 3], [2, 1], [3, 2], [4, 3]],
		position: 1,
	},
	B7: {
		1: [[1, 2, 4], [2, 0], [3, 2, 3], [4, 1, 1], [5, 2, 2], [6, 'x']],
		chordSpelling: [[3, 2], [4, 4], [4, 1, 's'], [5, 2]],
		position: 1,
	},
	'F#m': {
		1: [[1, 2, 1], [2, 2, 1], [3, 2, 1], [4, 4, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 2, 's'], [3, 2], [4, 4]],
		position: 1,
	},
	Gm: {
		1: [[1, 3, 1], [2, 3, 1], [3, 3, 1], [4, 5, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 3], [3, 3, 'f'], [4, 5]],
		position: 3,
	},
	Em7: {
		1: [[1, 0], [2, 3, 4], [3, 0], [4, 2, 3], [5, 2, 2], [6, 0]],
		2: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 2, 2], [6, 0]],
		chordSpelling: [[2, 3], [2, 0], [3, 0], [4, 2]],
		position: 1,
	},
	Fm: {
		1: [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 3, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 1], [3, 1, 'f'], [4, 3]],
		position: 1,
	},
	Cmaj7: {
		1: [[1, 0], [2, 0], [3, 0], [4, 2, 2], [5, 3, 3], [6, 'x']],
		chordSpelling: [[2, 0], [3, 0], [4, 2], [5, 3]],
		position: 1,
	},
	Dm7: {
		1: [[1, 1, 1], [2, 1, 1], [3, 2, 2], [4, 0], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 1], [3, 2], [4, 3], [4, 0]],
		position: 1,
	},
	'Dm7/F': {
		1: [[1, 1, 1], [2, 1, 1], [3, 2, 2], [4, 0], [5, 0], [6, 1, 'T']],
		2: [[1, 1, 3], [2, 1, 2], [3, 2, 4], [4, 0], [5, 0], [6, 1, 1]],
		chordSpelling: [[2, 1], [2, 3, undefined, 'r'], [3, 2], [4, 3]],
		position: 1,
	},
	'Dm7/G': {
		1: [[1, 1, 1], [2, 1, 1], [3, 2, 2], [4, 0], [5, 0], [6, 3, 3]],
		chordSpelling: [[2, 1], [3, 2], [4, 3], [4, 0], [6, 3]],
		position: 1,
	},
	'Bm/A': {
		1: [[1, 2, 1], [2, 3, 2], [3, 4, 3], [4, 'x'], [5, 0], [6, 'x']],
		chordSpelling: [[1, 2], [2, 3], [3, 4], [3, 2, undefined, 'l']],
		position: 1,
	},
	Dsus2: {
		1: [[1, 0], [2, 3, 3], [3, 2, 1], [4, 0], [5, 'x'], [6, 'x']],
		chordSpelling: [[4, 2, undefined, 'r'], [3, 2], [4, 0]],
		position: 1,
	},
	Dsus4: {
		1: [[1, 3, 4], [2, 3, 3], [3, 2, 1], [4, 0], [5, 'x'], [6, 'x']],
		chordSpelling: [[3, 0, undefined, 'r'], [3, 2], [4, 0]],
		position: 1,
	},
	'Bm7(♭5)': {
		1: [[1, 'x'], [2, 3, 4], [3, 2, 2], [4, 3, 3], [5, 2, 1], [6, 'x']],
		chordSpelling: [[3, 2], [4, 0], [4, 3], [5, 2]],
		position: 1,
	},
	'B♭9(♭5)': {
		1: [[1, 0], [2, 1, 3], [3, 1, 2], [4, 0], [5, 1, 1], [6, 'x']],
		chordSpelling: [[2, 1], [3, 1, 'f'], [4, 0], [4, 3, 'f'], [5, 1, 'f']],
		position: 1,
	},
	'B♭/F': {
		1: [[1, 1, 1], [2, 3, 4], [3, 3, 3], [4, 3, 2], [5, 'x'], [6, 'x']],
		chordSpelling: [[2, 0, 'f'], [2, 3], [4, 3]],
		position: 1,
	},
	'F#m7(♭5)': {
		1: [[1, 0], [2, 1, 1], [3, 2, 4], [4, 2, 3], [5, 0], [6, 2, 2]],
		chordSpelling: [[1, 0], [2, 1], [3, 2], [4, 3, 's']],
		position: 1,
	},
	'Am/F#': {
		1: [[1, 0], [2, 1, 1], [3, 2, 4], [4, 2, 3], [5, 0], [6, 2, 2]],
		chordSpelling: [[1, 0], [2, 1], [3, 2], [4, 3, 's']],
		position: 1,
	},
	'F#7': {
		1: [[1, 0], [2, 2, 1], [3, 3, 2], [4, 4, 3], [5, 'x'], [6, 'x']],
		chordSpelling: [[1, 0], [2, 2, 's'], [3, 3, 's'], [4, 4, 's']],
		position: 2,
	},
	'F#dim7': {
		1: [[1, 2, 4], [2, 1, 2], [3, 2, 3], [4, 1, 1], [5, 'x'], [6, 'x']],
		chordSpelling: [ [2, 1], [3, 2], [4, 1, 's'], [4, 4, 's']],
		position: 1,
	}
};
