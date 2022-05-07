// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZCEyod4aDqQokfbay0LTIM_BK8D1tsBU",
    authDomain: "mega-grocery-bb035.firebaseapp.com",
    projectId: "mega-grocery-bb035",
    storageBucket: "mega-grocery-bb035.appspot.com",
    messagingSenderId: "384815230519",
    appId: "1:384815230519:web:ed03c83e96ef0cbfbad9b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;