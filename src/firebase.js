import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCw6iiwgjuOJs9_Gq9mlQa8jpdqKwTm84",
    authDomain: "twitter-clone-d3130.firebaseapp.com",
    databaseURL: "https://twitter-clone-d3130.firebaseio.com",
    projectId: "twitter-clone-d3130",
    storageBucket: "twitter-clone-d3130.appspot.com",
    messagingSenderId: "384585978076",
    appId: "1:384585978076:web:e6f4061206b0949d6f6419",
    measurementId: "G-8KL71EYC4H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;