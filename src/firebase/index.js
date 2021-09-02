import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { 
    collection as getCollectionFromFirebase, 
    addDoc as addDocFromFirebase,
    getDocs as getDocsFromFirebase,
    query, where  
} from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBA3wY2pTZDy_aHv1lqJr6pKbWcA_Dsy3Q",
  authDomain: "partyapp-e3063.firebaseapp.com",
  projectId: "partyapp-e3063",
  storageBucket: "partyapp-e3063.appspot.com",
  messagingSenderId: "781375021137",
  appId: "1:781375021137:web:121614fe294df32d811870"
};


// Inicializa Firebase
initializeApp(firebaseConfig);
const db = getFirestore();


export const getCollection = (name) => {
    console.log(name);
    return getCollectionFromFirebase(db, name)
} 

// const querySnapshot = await getDocs(getCollection('items'))

export const getDocs = (collection) => {
    return getDocsFromFirebase(collection)
}

export const makeQuery = (nameDb, field, condition, value) => {
    const ref = getCollection(nameDb)
    return query(ref, where(field, condition, value))
}