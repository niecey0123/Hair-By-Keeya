import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
 
        apiKey: 
        "AIzaSyC_sHEPvKUIGdJ0mQOPSKeq-b30tHOTmyQ",
        authDomain: 
        "hairbk-1e06f.firebaseapp.com",
        databaseURL:
        "https://hairbk-1e06f-default-rtdb.firebaseio.com",
        projectId: 
        "hairbk-1e06f",
        storageBucket:
         "hairbk-1e06f.appspot.com",
        messagingSenderId: 
        "888126433237",
        appId: 
        "1:888126433237:web:fb77af97fd0ec0b0dabf5c"
      
})

var db = firebaseApp.firestore();

export { db };