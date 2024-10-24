import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDF0lcgaUW-4dYc1Wg15S_bfpHsN7W1_3Q",
    authDomain: "my-2nd-project-7c837.firebaseapp.com",
    databaseURL: "https://my-2nd-project-7c837-default-rtdb.firebaseio.com",
    projectId: "my-2nd-project-7c837",
    storageBucket: "my-2nd-project-7c837.appspot.com",
    messagingSenderId: "638751698507",
    appId: "1:638751698507:web:ea4f89e715e8ded760e7ce"
  };
  const initial = initializeApp(firebaseConfig);
  export const Authenticate = getAuth(initial);
