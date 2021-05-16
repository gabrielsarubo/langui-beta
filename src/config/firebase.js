import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkidbMG8oQkYXUVo6KfyAZr52bZ33gfZQ",
  authDomain: "langui-app.firebaseapp.com",
  projectId: "langui-app",
  storageBucket: "langui-app.appspot.com",
  messagingSenderId: "174882594848",
  appId: "1:174882594848:web:8122708ae2aeedde191c45",
  measurementId: "G-YHS9172HGX"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
