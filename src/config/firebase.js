// import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import "firebase/compat/firestore";


export const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCdRwkCxwqiXmupk_nS6DGPCazny3LbYSs",
    authDomain: "questionnaire2-f448d.firebaseapp.com",
    projectId: "questionnaire2-f448d",
    storageBucket: "questionnaire2-f448d.appspot.com",
    messagingSenderId: "637880729669",
    appId: "1:637880729669:web:996fe66d0bef100d46e32c"
});

export const db=getFirestore(firebaseConfig) 

// export default firebase;
