import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdrK4QFLfZik_XDXeUI6Vb5fvsBt7jhAQ",
    authDomain: "address-list-3b8a6.firebaseapp.com",
    databaseURL: "https://address-list-3b8a6.firebaseio.com",
    projectId: "address-list-3b8a6",
    storageBucket: "address-list-3b8a6.appspot.com",
    messagingSenderId: "903524870115"
})

const rsf = new ReduxSagaFirebase(firebaseApp)
export default rsf;
