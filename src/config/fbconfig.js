 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAODFqTBIubJyVDu-iuIA-s9B2K-0bcl7I",
    authDomain: "marioplan-28fc8.firebaseapp.com",
    databaseURL: "https://marioplan-28fc8.firebaseio.com",
    projectId: "marioplan-28fc8",
    storageBucket: "marioplan-28fc8.appspot.com",
    messagingSenderId: "232628850267"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase