// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRbd77NIYevSk0HbE-UwCgIRaGyNS82N0",
    authDomain: "gym-trainer-7746e.firebaseapp.com",
    projectId: "gym-trainer-7746e",
    storageBucket: "gym-trainer-7746e.appspot.com",
    messagingSenderId: "945736643430",
    appId: "1:945736643430:web:677d2e09bfb6ec55158ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;