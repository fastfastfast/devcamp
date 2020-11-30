import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB57ZdSUEC_iEd7-VRCVptl1cxyGR8vyzo",
    authDomain: "devcamp-afbdf.firebaseapp.com",
    databaseURL: "https://devcamp-afbdf.firebaseio.com",
    projectId: "devcamp-afbdf",
    storageBucket: "devcamp-afbdf.appspot.com",
    messagingSenderId: "728538298814",
    appId: "1:728538298814:web:e04dddd9f7568d5ac861ef"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }