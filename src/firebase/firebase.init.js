// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1KXEYRRQZgblvobA6cbYVZl8wmEla8cc",
    authDomain: "user-authentication-a029d.firebaseapp.com",
    projectId: "user-authentication-a029d",
    storageBucket: "user-authentication-a029d.appspot.com",
    messagingSenderId: "217947609043",
    appId: "1:217947609043:web:509fb05af15ee5c5a20126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;