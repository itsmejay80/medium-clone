import React,{useEffect,useState,useContext} from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {app} from './firebase'
import firebase from 'firebase'

export const AuthContext =React.createContext();

export const AuthProvider =( {children} ) =>{
    const [authuser,setAuthUser]=useState(null)
    const [userName,setUserName]=useState()
    const [userEmail,setUserEmail]=useState()
    const [signedIn,setsignIn]=useState(false)
    let isLogged=false
      useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
          setAuthUser(user)
          setUserEmail(user.email)
          setUserName(user.displayName)
        })
      },[])
      
      return (
          <AuthContext.Provider value={{authuser,setAuthUser,userName,userEmail}} >
              {children}
          </AuthContext.Provider>
      );
};