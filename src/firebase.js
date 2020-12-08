import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHOhpDS2MQUBrNY4vHGKrkEiBcE3tNzOQ",
    authDomain: "twitter-clone-b29c3.firebaseapp.com",
    projectId: "twitter-clone-b29c3",
    storageBucket: "twitter-clone-b29c3.appspot.com",
    messagingSenderId: "432911639169",
    appId: "1:432911639169:web:fa53f8dad6292cd974e380",
    measurementId: "G-TGSRYSB1BS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;