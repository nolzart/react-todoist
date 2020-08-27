import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB9tFRS0OtpTStTPoXhjUjO-WQOx4ntAMw",
    authDomain: "react-todoist-bfd00.firebaseapp.com",
    databaseURL: "https://react-todoist-bfd00.firebaseio.com",
    projectId: "react-todoist-bfd00",
    storageBucket: "react-todoist-bfd00.appspot.com",
    messagingSenderId: "842559119329",
    appId: "1:842559119329:web:969e9b879ee18da157bca0"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase