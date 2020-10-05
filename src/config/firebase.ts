import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAXiW4FuA2gQ_qtF1gNy386xooxFVeBYNw",
  authDomain: "simpledemo-app-e181c.firebaseapp.com",
  databaseURL: "https://simpledemo-app-e181c.firebaseio.com",
  projectId: "simpledemo-app-e181c",
  storageBucket: "simpledemo-app-e181c.appspot.com",
  messagingSenderId: "13354771290",
  appId: "1:13354771290:web:c0e831af75bcd074b74963"
};

firebase.initializeApp(firebaseConfig);

export async function loginUser(email: string, password: string) {
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    console.log(res)
    return true
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    return false
  }
}

export async function registerUser(email: string, password: string) {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(res)
    return true
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    return false
  }
}

// export default firebase