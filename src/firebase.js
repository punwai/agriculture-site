const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnBl4-Wd1qu9qMLl0Fp6RIruotu2sGasU",
    authDomain: "agri-app-71fce.firebaseapp.com",
    databaseURL: "https://agri-app-71fce.firebaseio.com",
    projectId: "agri-app-71fce",
    storageBucket: "agri-app-71fce.appspot.com",
    messagingSenderId: "616418823064",
    appId: "1:616418823064:web:5054976cf9704c7e8cf9ed",
    measurementId: "G-KXPBQLT3FQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();  

export const auth = firebase.auth;
export const db = firebase.firestore();
