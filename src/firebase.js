import firebase from "firebase"

//configuration keys for my messaging app
const firebaseConfig = {
    apiKey: "AIzaSyCSMgIdhzaGfjtieyDAR0a7bJCtLbScGew",
    authDomain: "messaging-app-6b787.firebaseapp.com",
    projectId: "messaging-app-6b787",
    storageBucket: "messaging-app-6b787.appspot.com",
    messagingSenderId: "92399809230",
    appId: "1:92399809230:web:7b18209b1691396c2c169f",
    measurementId: "G-TGEP1W9LRB"
  };

  // code to initialise app
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // invoking my database
  const db =firebaseApp.firestore();

  // invoking my authentication service

  const auth =firebase.auth();

  // google auth provider setup
  const provider = new firebase.auth.GoogleAuthProvider()

  //exporting my instances so that i can use them any where in my project
    export {auth,provider};
    export default db;