import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBINdAO4YmZyoYMOZwgcMIv3aI_kB4rkUc",
  authDomain: "netflix-demo-4b6cb.firebaseapp.com",
  projectId: "netflix-demo-4b6cb",
  storageBucket: "netflix-demo-4b6cb.appspot.com",
  messagingSenderId: "598721371615",
  appId: "1:598721371615:web:d699479714d53c8c47f86a",
};

const firebase = initializeApp(config);
const firestore = getFirestore(firebase);

export { firestore };
export { firebase };
