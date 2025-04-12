
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDHfYxjXUkCwEH2q8WXD37lCC5NkwPgJIo",
  authDomain: "login-de0b1.firebaseapp.com",
  projectId: "login-de0b1",
  storageBucket: "login-de0b1.firebasestorage.app",
  messagingSenderId: "966297796333",
  appId: "1:966297796333:web:5fed8ff43db963c1f496e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db= getFirestore(app);



const signup= async (name,email,password)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth,email,password);
       const user=res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email
       })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));
        
    }
}


const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(" "));
        

    }}


const logout = async () => {
    signOut(auth)
    
}
export {auth,db,signup,login,logout}