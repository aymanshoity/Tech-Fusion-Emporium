import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext()
const GoogleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const GoogleSignIn=()=>{
        return signInWithPopup(auth,GoogleProvider)
    }

    const LogOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('currently seen',currentUser)
        })
        return ()=>{unsubscribe()}
    },[])
    const userInfo={user,createUser,signInUser,GoogleSignIn,LogOut}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;