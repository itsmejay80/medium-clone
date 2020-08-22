import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBYRNUi68WQDQ-xNzZDZsLVsQfEogtcqWo",
  authDomain: "medium-clone-e47d2.firebaseapp.com",
  databaseURL: "https://medium-clone-e47d2.firebaseio.com",
  projectId: "medium-clone-e47d2",
  storageBucket: "medium-clone-e47d2.appspot.com",
  messagingSenderId: "870472339397",
  appId: "1:870472339397:web:b042750e17729e8d39c5ac",
  measurementId: "G-H8Q5EE09NQ"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db =firebaseApp.firestore();

  export default db;