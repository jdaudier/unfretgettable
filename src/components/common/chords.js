export const chords = ['C', 'G7', 'G', 'D7', 'Em', 'D', 'A7'];

export const chordToNotesMapping = {
	C: {
		1: ['e1s', 'c2s1f', 'g3s', 'e4s2f', 'c5s3f', 'x6s'],
		chordSpelling: ['g3s', 'e4s2f', 'c5s3f'],
	},
	G7: {
		1: ['f1s1f', 'b2s', 'g3s', 'd4s', 'b5s2f', 'g6s3f'],
		chordSpelling: ['f1s1f', 'b2s', 'g3s', 'd2s3f'],
	},
	G: {
		1: ['g1s3f', 'b2s', 'g3s', 'd4s', 'b5s2f1fin', 'g6s3f2fin'],
		2: ['g1s3f4fin', 'b2s', 'g3s', 'd4s', 'b5s2f', 'g6s3f'],
		chordSpelling: ['g3s', 'd2s3f', 'b2s'],
	},
	D7: {
		1: ['f1s2f3fin', 'c2s1f', 'a3s2f', 'd4s', 'x5s', 'x6s'],
		chordSpelling: ['f4s4f', 'c2s1f', 'a3s2f', 'd4s'],
	},
	Em: {
		1: ['e1s', 'b2s', 'g3s', 'e4s2f3fin', 'b5s2f', 'e6s'],
		chordSpelling: ['b2s', 'g3s', 'e4s2f3fin'],
	},
	D: {
		1: ['f1s2f', 'd2s3f', 'a3s2f1fin', 'd4s', 'x5s', 'x6s'],
		chordSpelling: ['f4s4f', 'd4s', 'a3s2f'],
	},
	A7: {
		1: ['e1s', 'c2s2f', 'g3s', 'e4s2f1fin', 'a5s', 'x6s'],
		2: ['e1s', 'c2s2f3fin', 'g3s', 'e4s2f', 'a5s', 'x6s'],
		chordSpelling: ['e1s', 'c2s2f', 'g1s3f', 'a3s2f'],
	}
};
