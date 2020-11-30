import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3qTIL1Cw1xcvCEf5WBbjnbmx3q2gIUPs",
  authDomain: "devcamp-815f5.firebaseapp.com",
  databaseURL: "https://devcamp-815f5.firebaseio.com",
  projectId: "devcamp-815f5",
  storageBucket: "devcamp-815f5.appspot.com",
  messagingSenderId: "391773705169",
  appId: "1:391773705169:web:e68f644c7ebde18a4d86f0"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
export default firebase.auth()