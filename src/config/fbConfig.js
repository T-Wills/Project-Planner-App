import * as firebase from "firebase";
import "firebase/firebase-app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

//Initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyDaL9K28722llNh1-4Ic54jKU55ze0dJus",
  authDomain: "project-planner-ad95c.firebaseapp.com",
  databaseURL: "https://project-planner-ad95c.firebaseio.com",
  projectId: "project-planner-ad95c",
  storageBucket: "project-planner-ad95c.appspot.com",
  messagingSenderId: "495138146183",
  appId: "1:495138146183:web:a97497fabc4a03f076b522",
  measurementId: "G-D2GRK77MRH"
};

//initialize firebase instance
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default firebase;
