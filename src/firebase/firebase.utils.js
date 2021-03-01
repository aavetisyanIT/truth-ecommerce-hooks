import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAl9hxWwYPf1sBo3kB4xwd8KS5HrfPkzoQ',
	authDomain: 'truth-ecommerce-db.firebaseapp.com',
	databaseURL: 'https://truth-ecommerce-db-default-rtdb.firebaseio.com',
	projectId: 'truth-ecommerce-db',
	storageBucket: 'truth-ecommerce-db.appspot.com',
	messagingSenderId: '878051015321',
	appId: '1:878051015321:web:487683a156947ef4285608',
	measurementId: 'G-9JV69MJ0RJ',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
