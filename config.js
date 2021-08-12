import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBnLOvp4NvcfQ8f7BtNU0ZKdSLc7H3hmW4",
  authDomain: "schoolattendance-17087.firebaseapp.com",
  databaseURL: "https://schoolattendance-17087-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "schoolattendance-17087",
  storageBucket: "schoolattendance-17087.appspot.com",
  messagingSenderId: "789063974350",
  appId: "1:789063974350:web:e2f5846bce8ecd0ab0bf9f"
  };



let app =   firebase.initializeApp(firebaseConfig);
export default app.database();
