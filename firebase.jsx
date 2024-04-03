// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBO7EhGL7VGhB4nIF7iSyGBHkmeLLa5osw",
    authDomain: "mad-mid-app.firebaseapp.com",
    projectId: "mad-mid-app",
    storageBucket: "mad-mid-app.appspot.com",
    messagingSenderId: "440566911704",
    appId: "1:440566911704:web:0c3548a0db39caf614bdad",
    measurementId: "G-Y9QFK9KS5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {app,auth};