import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
//firebaseConfigValues
apiKey: "AIzaSyD9hILKeldSLH219sSh4MtzFknO1ZqFZY4",
authDomain: "myfirebase-f2412.firebaseapp.com",
projectId: "myfirebase-f2412",
storageBucket: "myfirebase-f2412.appspot.com",
messagingSenderId: "749062265693",
appId: "1:749062265693:web:53264e7a3075b75158e6b4",
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

/*

*/