export const chords = ['C', 'C7', 'G7', 'G', 'D7', 'Em', 'D', 'A7', 'Am', 'Dm', 'Fmaj7', 'A', 'D/F#', 'Bm/F#', 'Cadd9', 'C/E', 'E', 'E7', 'Cm/G', 'Am7', 'Dm7', 'Em7', 'Gdim', 'G/B', 'Gsus4/B', 'Am6', 'C/G', 'F', 'B7', 'C#m/G#', 'Fm', 'F#m', 'Gm', 'Cmaj7'];

export const chordInputMapping = {
	C: 'C',
	C7: 'C7',
	'C 7': 'C7',
	G7: 'G7',
	'G 7': 'G7',
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
	AM: 'Am',
	'A M': 'Am',
	'A MINOR': 'Am',
	'A MIN': 'Am',
	AMIN: 'Am',
	AMINOR: 'Am',
	DM: 'Dm',
	'D M': 'Dm',
	'D MINOR': 'Dm',
	'D MIN': 'Dm',
	DMIN: 'Dm',
	DMINOR: 'Dm',
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
	'C/G': 'C/G',
	'C / G': 'C/G',
	CADD9: 'Cadd9',
	'C ADD9': 'Cadd9',
	'C ADD 9': 'Cadd9',
	'C/E': 'C/E',
	'C / E': 'C/E',
	'G/B': 'G/B',
	'G / B': 'G/B',
	E: 'E',
	AM7: 'Am7',
	'AM 7': 'Am7',
	'A MINOR 7': 'Am7',
	'A MIN 7': 'Am7',
	AMIN7: 'Am7',
	'AMIN 7': 'Am7',
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
	'GSUS4/B': 'Gsus4/B',
	'GSUS4 / B': 'Gsus4/B',
	'GSUS 4 / B': 'Gsus4/B',
	AM6: 'Am6',
	'AM 6': 'Am6',
	'A MINOR 6': 'Am6',
	'A MIN 6': 'Am6',
	AMIN6: 'Am6',
	'AMIN 6': 'Am6',
	F: 'F',
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
};

export const chordToNotesMapping = {
	C: {
		1: ['e1s', 'c2s1f-1', 'g3s', 'e4s2f-2', 'c5s3f-3', 'x6s'],
		chordSpelling: ['g3s', 'e4s2f', 'c5s3f'],
		startingFret: 1,
	},
	C7: {
		1: ['e1s', 'c2s1f-1', 'b3s3f-4', 'e4s2f-2', 'c5s3f-3', 'x6s'],
		chordSpelling: ['g3s', 'b3s3f', 'e4s2f', 'c5s3f'],
		startingFret: 1,
	},
	'C/E': {
		1: ['e1s', 'c2s1f-1', 'g3s', 'e4s2f-2', 'c5s3f-3', 'e6s'],
		chordSpelling: ['g3s', 'e4s2f', 'c2s1f'],
		startingFret: 1,
	},
	G7: {
		1: ['f1s1f-1', 'b2s', 'g3s', 'd4s', 'b5s2f-2', 'g6s3f-3'],
		chordSpelling: ['f1s1f', 'b2s', 'g3s', 'd2s3f'],
		startingFret: 1,
	},
	G: {
		1: ['g1s3f-3', 'b2s', 'g3s', 'd4s', 'b5s2f-1', 'g6s3f-2'],
		2: ['g1s3f-4', 'b2s', 'g3s', 'd4s', 'b5s2f-2', 'g6s3f-3'],
		3: ['g1s3f-4', 'd2s3f-3', 'g3s', 'd4s', 'b5s2f-1', 'g6s3f-2'],
		chordSpelling: ['g3s', 'd2s3f', 'b2s'],
		startingFret: 1,
	},
	D7: {
		1: ['f1s2f-3', 'c2s1f-1', 'a3s2f-2', 'd4s', 'x5s', 'x6s'],
		chordSpelling: ['f4s4f', 'c2s1f', 'a3s2f', 'd4s'],
		startingFret: 1,
	},
	Em: {
		1: ['e1s', 'b2s', 'g3s', 'e4s2f-3', 'b5s2f-2', 'e6s'],
		chordSpelling: ['b2s', 'g3s', 'e4s2f'],
		startingFret: 1,
	},
	D: {
		1: ['f1s2f-2', 'd2s3f-3', 'a3s2f-1', 'd4s', 'x5s', 'x6s'],
		chordSpelling: ['f4s4f', 'd4s', 'a3s2f'],
		startingFret: 1,
	},
	A7: {
		1: ['e1s', 'c2s2f-2', 'g3s', 'e4s2f-1', 'a5s', 'x6s'],
		2: ['e1s', 'c2s2f-3', 'g3s', 'e4s2f-2', 'a5s', 'x6s'],
		chordSpelling: ['e1s', 'c2s2f', 'g1s3f', 'a3s2f'],
		startingFret: 1,
	},
	Am: {
		1: ['e1s', 'c2s1f-1', 'a3s2f-3', 'e4s2f-2', 'a5s', 'x6s'],
		chordSpelling: ['e1s', 'c2s1f', 'a3s2f'],
		startingFret: 1,
	},
	Dm: {
		1: ['f1s1f-1', 'd2s3f-3', 'a3s2f-2', 'd4s', 'x5s', 'x6s'],
		2: ['f1s1f-1', 'd2s3f-4', 'a3s2f-2', 'd4s', 'x5s', 'x6s'],
		chordSpelling: ['d4s', 'f4s3f', 'a3s2f'],
		startingFret: 1,
	},
	Fmaj7: {
		1: ['e1s', 'c2s1f-1', 'a3s2f-2', 'f4s3f-3', 'x5s', 'x6s'],
		chordSpelling: ['e1s', 'c2s1f', 'a3s2f', 'f4s3f'],
		startingFret: 1,
	},
	A: {
		1: ['e1s', 'c2s2f-3', 'a3s2f-2', 'e4s2f-1', 'a5s', 'x6s'],
		chordSpelling: ['e1s', 'c2s2f', 'a3s2f'],
		startingFret: 1,
	},
	'D/F#': {
		1: ['x1s', 'd2s3f-4', 'a3s2f-3', 'd4s', 'a5s', 'f6s2f-2'],
		chordSpelling: ['d2s3f', 'a3s2f', 'f4s4f'],
		startingFret: 1,
	},
	'Bm/F#': {
		1: ['f1s2f-1', 'd2s3f-2', 'b3s4f-4', 'f4s4f-3', 'x5s', 'x6s'],
		chordSpelling: ['f1s2f', 'd2s3f', 'b3s4f', 'f4s4f'],
		startingFret: 1,
	},
	Cadd9: {
		1: ['e1s', 'd2s3f-3', 'g3s', 'e4s2f-1', 'c5s3f-2', 'x6s'],
		2: ['g1s3f-4', 'd2s3f-3', 'g3s', 'e4s2f-1', 'c5s3f-2', 'x6s'],
		chordSpelling: ['d2s3f', 'g3s', 'e4s2f', 'c5s3f'],
		startingFret: 1,
	},
	E: {
		1: ['e1s', 'b2s', 'g3s1f-1', 'e4s2f-3', 'b5s2f-2', 'e6s'],
		chordSpelling: ['b2s', 'g3s1f', 'e4s2f'],
		startingFret: 1,
	},
	E7: {
		1: ['e1s', 'b2s', 'g3s1f-1', 'd4s', 'b5s2f-2', 'e6s'],
		chordSpelling: ['d2s3f', 'b2s', 'g3s1f', 'e4s2f'],
		startingFret: 1,
	},
	'Cm/G': {
		1: ['g1s3f-1', 'd2s4f-2', 'c3s5f-4', 'g4s5f-3', 'x5s', 'x6s'],
		chordSpelling: ['e2s4f', 'c3s5f', 'g4s5f'],
		startingFret: 3,
	},
	'C#m/G#': {
		1: ['g1s4f-1', 'e2s5f-2', 'c3s6f-4', 'g4s6f-3', 'x5s', 'x6s'],
		chordSpelling: ['e2s5f', 'c3s6f', 'g4s6f'],
		startingFret: 3,
	},
	'C/G': {
		1: ['e1s', 'c2s1f-1', 'g3s', 'e4s2f-2', 'c5s3f-4', 'g6s3f-3'],
		chordSpelling: ['e1s', 'c2s1f-1', 'g3s'],
		startingFret: 1,
	},
	Am7: {
		1: ['g1s3f-4', 'c2s1f-1', 'a3s2f-3', 'e4s2f-2', 'a5s', 'x6s'],
		2: ['e1s', 'c2s1f-1', 'g3s', 'e4s2f-2', 'a5s', 'x6s'],
		chordSpelling: ['g1s3f', 'e1s', 'c2s1f', 'a3s2f'],
		startingFret: 1,
	},
	Gdim: {
		1: ['g1s3f-4', 'c2s2f-2', 'a3s3f-3', 'e4s2f-1', 'x5s', 'x6s'],
		chordSpelling: ['g3s', 'b3s3f', 'd2s2f'],
		startingFret: 1,
	},
	'G/B': {
		1: ['g1s3f-4', 'b2s', 'g3s', 'd4s', 'b5s2f-2', 'x6s'],
		chordSpelling: ['b2s', 'd2s3f', 'g1s3f'],
		startingFret: 1,
	},
	'Gsus4/B': {
		1: ['x1s', 'c2s1f-1', 'g3s', 'd4s', 'b5s2f-2', 'x6s'],
		chordSpelling: ['c2s1f', 'g3s', 'd4s', 'b5s2f'],
		startingFret: 1,
	},
	Am6: {
		1: ['f1s2f-4', 'c2s1f-1', 'a3s2f-3', 'e4s2f-2', 'a5s', 'x6s'],
		chordSpelling: ['e1s', 'f1s2f-r', 'g1s2f', 'c2s1f', 'a3s2f'],
		startingFret: 1,
	},
	F: {
		1: ['f1s1f-1', 'c2s1f-1', 'a3s2f-2', 'f4s3f-3', 'x5s', 'x6s'],
		chordSpelling: ['c2s1f', 'a3s2f', 'f4s3f'],
		startingFret: 1,
	},
	B7: {
		1: ['f1s2f-4', 'b2s', 'a3s2f-3', 'd4s1f-1', 'b5s2f-2', 'x6s'],
		chordSpelling: ['a3s2f', 'f4s4f', 'd4s1f', 'b5s2f'],
		startingFret: 1,
	},
	'F#m': {
		1: ['f1s2f-1', 'c2s2f-1', 'a3s2f-1', 'f4s4f-3', 'x5s', 'x6s'],
		chordSpelling: ['c2s2f', 'a3s2f', 'f4s4f'],
		startingFret: 1,
	},
	Gm: {
		1: ['g1s3f-1', 'd2s3f-1', 'a3s3f-1', 'g4s5f-3', 'x5s', 'x6s'],
		chordSpelling: ['d2s3f', 'b3s3f', 'g4s5f'],
		startingFret: 3,
	},
	Em7: {
		1: ['e1s', 'd2s3f-4', 'g3s', 'e4s2f-3', 'b5s2f-2', 'e6s'],
		chordSpelling: ['d2s3f', 'b2s', 'g3s', 'e4s2f'],
		startingFret: 1,
	},
	Fm: {
		1: ['f1s1f-1', 'c2s1f-1', 'g3s1f-1', 'f4s3f-3', 'x5s', 'x6s'],
		chordSpelling: ['c2s1f', 'a3s1f', 'f4s3f'],
		startingFret: 1,
	},
	Cmaj7: {
		1: ['e1s', 'b2s', 'g3s', 'e4s2f-2', 'c5s3f-3', 'x6s'],
		chordSpelling: ['b2s', 'g3s', 'e4s2f', 'c5s3f'],
		startingFret: 1,
	},
	Dm7: {
		1: ['f1s1f-1', 'c2s1f-1', 'a3s2f-2', 'd4s', 'x5s', 'x6s'],
		chordSpelling: ['c2s1f', 'a3s2f', 'f4s3f', 'd4s'],
		startingFret: 1,
	}
};
