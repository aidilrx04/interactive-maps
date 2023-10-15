import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDeN4eX2cqQUKPImY4GhxMlb5pQ8Wtn3Ag',
	authDomain: 'interactive-maps-8b886.firebaseapp.com',
	projectId: 'interactive-maps-8b886',
	storageBucket: 'interactive-maps-8b886.appspot.com',
	messagingSenderId: '344138386424',
	appId: '1:344138386424:web:2bdb752b11a07c1f38640d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
