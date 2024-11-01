import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { Authenticate } from "./firebaseConfig";



const provider = new GoogleAuthProvider();


export const signWithEmailAndPassword = (email, password) => {
    return new Promise((resolve,reject)=>{
        signInWithEmailAndPassword(Authenticate, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            resolve({user})
            // ...
        })
        .catch((error) => {
            console.log(error.message)
            reject({error})
        });
    })
   
};
//finished
export const createEmailAndPassword = (email, password) => {
    return new Promise((resolve,reject)=>{
        createUserWithEmailAndPassword(Authenticate, email, password)
        .then((userCredential) => {
            //Signed up 
            const user = userCredential.user;
            console.log(user)
            resolve({ user});
            // ...
        })
        .catch((error) => {
            
            reject({error})
            console.log(error.message)
            // ..
        });
    })
    
};
//finished
    
export const signWithPopupGoogle = () => {
    //this return line use for every function have to gave a return promise;
    return new Promise((resolve,reject)=>{
        signInWithPopup(Authenticate, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // Send a promise
            resolve({ user, token });
            
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            reject({ errorCode, errorMessage, email, credential });

            // ...
        });
    })
    
};
// this thing not use this time because this authentication need facebook developer setup. 
export const logInWithFacebook = () => {
    signInWithPopup(Authenticate, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            console.log(accessToken)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log(errorCode,errorMessage,email,credential)

            // ...
        });
}