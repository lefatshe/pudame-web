// import firebase from 'firebase';
// import firestore from 'firebase/firestore';

import firebase from 'firebase/app';
import 'firebase/firestore';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSa8wygcBWJVfMrhN91sLfnlMbaf1Y2O0",
    authDomain: "pudame-dafb6.firebaseapp.com",
    databaseURL: "https://pudame-dafb6.firebaseio.com",
    projectId: "pudame-dafb6",
    storageBucket: "pudame-dafb6.appspot.com",
    messagingSenderId: "13955114447"
  };

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
