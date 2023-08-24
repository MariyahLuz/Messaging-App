import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import {auth,provider} from "./firebase"

function Login() {
    // SignIn Functionality
    const SignIn =() =>{
        auth.signInWithPopup(provider).then(res=>{
 
        }).catch((error)=>alert(error.message))
     }
      
   return (
     <div className="login">
          <div className="login-container">
            <img src="https://i.pinimg.com/236x/5d/c5/72/5dc572148d66e89cd25704d48dca93ff.jpg"/>
            <div className="login-text">
               <h2>Sign in to My Messaging App </h2>
            </div>
            <Button onClick={SignIn} > SignIn With Google</Button>
          </div> 
     </div>
   )
 }
 
 export default Login