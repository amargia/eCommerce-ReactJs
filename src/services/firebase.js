import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQAQpgP2iSLupopZ392DtwIzo1dYWmSxw",
  authDomain: "ecommerce-react-js-8735d.firebaseapp.com",
  projectId: "ecommerce-react-js-8735d",
  storageBucket: "ecommerce-react-js-8735d.appspot.com",
  messagingSenderId: "1073342896251",
  appId: "1:1073342896251:web:8b9f5d10ed11c1f70e6ade"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;