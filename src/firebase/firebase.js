// firebase
import firebase from 'firebase/app';
import 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzxcAqZh_VaguSnvw7K-XALJpkeLzXdD0",
  authDomain: "alans-print-shop.firebaseapp.com",
  databaseURL: "https://alans-print-shop.firebaseio.com",
  projectId: "alans-print-shop",
  storageBucket: "alans-print-shop.appspot.com",
  messagingSenderId: "361587388270",
  appId: "1:361587388270:web:7d52deeecd848a20619b7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export default firebase
