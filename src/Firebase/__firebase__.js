// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJviBIcjz-jSBRwtVcg3UwOd2I8seCilk",
    authDomain: "login-and-register-bafac.firebaseapp.com",
    projectId: "login-and-register-bafac",
    storageBucket: "login-and-register-bafac.appspot.com",
    messagingSenderId: "268235227354",
    appId: "1:268235227354:web:a56d0514b435be398de5e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
