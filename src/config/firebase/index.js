import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDoXSQhXxWyCYME5zyRG79r6RpEy1Eonqo",
    authDomain: "crud-reactt.firebaseapp.com",
    databaseURL: "https://crud-reactt.firebaseio.com",
    projectId: "crud-reactt",
    storageBucket: "crud-reactt.appspot.com",
    messagingSenderId: "573546867254",
    appId: "1:573546867254:web:3ab1c06c2b78d3c2a08697",
    measurementId: "G-PWGCNGV5EG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;