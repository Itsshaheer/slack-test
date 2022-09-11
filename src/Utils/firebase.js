import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCG4LL7pZ7e5whsCPFs5poOXL5fN5lq7fU",
    authDomain: "clone-448ec.firebaseapp.com",
    projectId: "clone-448ec",
    storageBucket: "clone-448ec.appspot.com",
    messagingSenderId: "105107763061",
    appId: "1:105107763061:web:b95dc75cdbca84e0bcad3c",
    
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth= firebase.auth()
export {db, auth}