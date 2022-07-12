import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBZIbNjbAfbHoZVwUsVsIUv0-o3_YrzMSg",
  authDomain: "login-work-schedule.firebaseapp.com",
  projectId: "login-work-schedule",
  storageBucket: "login-work-schedule.appspot.com",
  messagingSenderId: "406325205065",
  appId: "1:406325205065:web:d51a710f282ecddd310798",
  measurementId: "G-CXMF7D8R12"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = getFirestore(firebaseApp)
const auth = firebase.auth();

export { auth, db, firebase };

