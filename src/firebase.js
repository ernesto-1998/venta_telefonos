import firebase from "firebase/compat/app"
import "firebase/storage";
import "firebase/firestore"
import "firebase/auth"

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
let auth = firebase.auth()
let db = firebase.firestore();
let st = firebase.storage();

export { firebase, auth, db, st }
