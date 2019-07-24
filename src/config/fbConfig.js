import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwGGXZRuCzLCHS5T15JyPeR5CGZvHHHcQ",
  authDomain: "marioplan-d006b.firebaseapp.com",
  databaseURL: "https://marioplan-d006b.firebaseio.com",
  projectId: "marioplan-d006b",
  storageBucket: "",
  messagingSenderId: "72042804035",
  appId: "1:72042804035:web:65c31af743c5ecb2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
