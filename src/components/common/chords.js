export const chords = ['C', 'G7', 'G', 'D7', 'Em', 'D', 'A7'];

export const chordToNotesMapping = {
	C: {
		1: ['e1s', 'c2s1f', 'g3s', 'e4s2f', 'c5s3f', 'x6s'],
	},
	G7: {
		1: ['f1s1f', 'b2s', 'g3s', 'd4s', 'b5s2f', 'g6s3f'],
	},
	G: {
		1: ['g1s3f', 'b2s', 'g3s', 'd4s', 'b5s2f1fin', 'g6s3f2fin'],
		2: ['g1s3f4fin', 'b2s', 'g3s', 'd4s', 'b5s2f', 'g6s3f'],
	},
	D7: {
		1: ['f1s2f3fin', 'c2s1f', 'a3s2f', 'd4s', 'x5s', 'x6s'],
	},
	Em: {
		1: ['e1s', 'b2s', 'g3s', 'e4s2f3fin', 'b5s2f', 'e6s'],
	},
	D: {
		1: ['f1s2f', 'd2s3f', 'a3s2f1fin', 'd4s', 'x5s', 'x6s'],
	},
	A7: {
		1: ['e1s', 'c2s2f', 'g3s', 'e4s2f1fin', 'a5s', 'x6s'],
		2: ['e1s', 'c2s2f3fin', 'g3s', 'e4s2f', 'a5s', 'x6s'],
	}
};

export const standardNotationChordToNotesMapping = {
	C: ['g3s', 'e4s2f', 'c5s3f'],
	G7: ['f1s1f', 'b2s', 'g3s', 'd4s'],
	G: ['g1s3f', 'd4s', 'b5s2f'],
	D7: ['f1s2f3fin', 'c2s1f', 'a3s2f', 'd4s'],
	Em: ['b2s', 'g3s', 'e4s2f3fin'],
	D: ['f1s2f', 'd2s3f', 'a3s2f1fin'],
	A7: ['e1s', 'c2s2f', 'g3s', 'a5s'],
};

