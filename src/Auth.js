import React,{useEffect,useState,useContext} from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {app} from './firebase'
import firebase from 'firebase'

export const AuthContext =React.createContext();

export const AuthProvider =( {children} ) =>{
    const [authuser,setAuthUser]=useState()
    const [userName,setUserName]=useState()
    const [userEmail,setUserEmail]=useState()
    const [signedIn,setsignIn]=useState(false)
    
      useEffect(()=>{
        firebase.auth().onAuthStateChanged(user =>{
          // if(user){
          //   return setAuthUser(user)
          // }
          setAuthUser(user)
          setUserEmail(user.email)
          setUserName(user.displayName)
          
        })
      },[])
      return (
          <AuthContext.Provider value={{authuser,userName,userEmail}} >
              {children}
          </AuthContext.Provider>
      );
};