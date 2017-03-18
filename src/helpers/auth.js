import { ref, firebaseAuth } from '../config/.constants'

export function auth (user) {
	const {email, pw, company, address} = user;

    return firebaseAuth().createUserWithEmailAndPassword(email, pw)
        .then(user => {
        	const fullUserData = {
				email: user.email,
				uid: user.uid,
				company,
				address,
			};

			saveUser(fullUserData);
		})
        .catch((error) => console.log('Oops', error))
}

export function logout () {
    return firebaseAuth().signOut()
}

export function login (email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
	return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
    return ref.child(`users/${user.uid}`)
        .set({
            email: user.email,
            uid: user.uid,
			company: user.company,
			address: user.address,
        })
        .then(() => user)
}
