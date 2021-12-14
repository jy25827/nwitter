import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBBEr8SLQe69fkfF8l5v0pOJ9RJA0lxXx0",
    authDomain: "nwitter-ae508.firebaseapp.com",
    projectId: "nwitter-ae508",
    storageBucket: "nwitter-ae508.appspot.com",
    messagingSenderId: "222585799700",
    appId: "1:222585799700:web:258c6142bd688290b81301"
  };

  export default firebase.initializeApp(firebaseConfig);