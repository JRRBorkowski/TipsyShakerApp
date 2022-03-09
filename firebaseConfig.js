// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_0M0NrX0j0PynI7gL2FkFJSPjjwhv5dg",
    authDomain: "tipsy-app-5a8a0.firebaseapp.com",
    projectId: "tipsy-app-5a8a0",
    storageBucket: "tipsy-app-5a8a0.appspot.com",
    messagingSenderId: "514297956522",
    appId: "1:514297956522:web:902379271921849ba728d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)