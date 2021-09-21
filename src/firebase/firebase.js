import { initializeApp } from "firebase/app";
import { doc, getFirestore } from 'firebase/firestore';
import { collection, getDocs, where, query, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA3wY2pTZDy_aHv1lqJr6pKbWcA_Dsy3Q",
  authDomain: "partyapp-e3063.firebaseapp.com",
  projectId: "partyapp-e3063",
  storageBucket: "partyapp-e3063.appspot.com",
  messagingSenderId: "781375021137",
  appId: "1:781375021137:web:121614fe294df32d811870"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export const allItem = () => {
    const query = getDocs(collection(db, 'items'))
    return query
}

export const itemCat = ( categoria ) => {
    const q = collection(db, 'items')
    const q2 = query(q, where('categoria', '==', categoria))
    const q3 = getDocs(q2)
    return q3
}

export const only = (id) => {
    const q = doc(db, 'items', id)
    const q2 = getDoc(q)
    return q2
}

