import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjko5qYxlDFU6Ace2LhYLn2s7PfVHPNp4",
  authDomain: "fitnest-1543682211826.firebaseapp.com",
  databaseURL: "https://fitnest-1543682211826.firebaseio.com",
  projectId: "fitnest-1543682211826",
  storageBucket: "",
  messagingSenderId: "724367327759"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;