import * as firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyAabK2Ke_0ie6sKMb4IcdDj876pf1scSjY",
    authDomain: "storyhub-364fe.firebaseapp.com",
    projectId: "storyhub-364fe",
    storageBucket: "storyhub-364fe.appspot.com",
    messagingSenderId: "589069270425",
    appId: "1:589069270425:web:0e7c07ab2813301e732708"
  };

    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    
    export default firebase.firestore()