import firebase from "firebase/compat/app"
import "firebase/compat/storage";
import "firebase/compat/firestore"
// import "firebase/auth"

// Agregar configuración firebase:
var firebaseConfig = {
    apiKey: "AIzaSyDrMXAfgmfFCsPwwhq2Q_fitLqfFugiWpw",
    authDomain: "venta-telefonos.firebaseapp.com",
    projectId: "venta-telefonos",
    storageBucket: "venta-telefonos.appspot.com",
    messagingSenderId: "142095938797",
    appId: "1:142095938797:web:1b4612fe7a1fcef7b0c8e4"
}


let firebaseApp = firebase.initializeApp(firebaseConfig)
// let auth = firebase.auth()
let db = firebase.firestore();
let st = firebase.storage();

export { firebase, db, st }


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDrMXAfgmfFCsPwwhq2Q_fitLqfFugiWpw",
//   authDomain: "venta-telefonos.firebaseapp.com",
//   projectId: "venta-telefonos",
//   storageBucket: "venta-telefonos.appspot.com",
//   messagingSenderId: "142095938797",
//   appId: "1:142095938797:web:1b4612fe7a1fcef7b0c8e4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const st = getStorage(app);
// export {app, db, st}
