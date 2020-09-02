import React,{useEffect,useState,useContext} from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import firebase from 'firebase'
import {AuthContext} from "../Auth";


const SignIn = () => {
  const {authuser}=useContext(AuthContext)
  const uiConfig={
    signInFlow:"popup",
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signInSuccess :() => false
    }
  }
  
  return (  
    <div>
      {authuser ?
        window.location.href = "/"
      : 
      (<StyledFirebaseAuth 
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />)}
     
    </div>
  )
}
 
export default SignIn;
