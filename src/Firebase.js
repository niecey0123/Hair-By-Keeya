import firebase from 'firebase'

var firebaseApp =firebase.initializeApp({
 
        apiKey: "AIzaSyBveUzeHRNEepP0YUqILdoAuIIb9rEbhi0",
        authDomain: "hair-by-keeya-3f847.firebaseapp.com",
        projectId: "hair-by-keeya-3f847",
        storageBucket: "hair-by-keeya-3f847.appspot.com",
        messagingSenderId: "241469590971",
        appId: "1:241469590971:web:0413b80df9b02d60f2489e"
      
})

var db = firebaseApp.firestore();

export {db}