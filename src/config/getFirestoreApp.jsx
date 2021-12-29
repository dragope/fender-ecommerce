import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBoMcGui5nDgmrG34MGqxyPJSmik81BXf8",
  authDomain: "ecommercefender.firebaseapp.com",
  projectId: "ecommercefender",
  storageBucket: "ecommercefender.appspot.com",
  messagingSenderId: "161200428670",
  appId: "1:161200428670:web:7611a352ff3cd71d49aa2f"
};
 
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}