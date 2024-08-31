import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { useRef } from 'react'
import { ValidateHanleder } from '../utilis/Validate'
import {  signInWithPopup, GoogleAuthProvider ,updateProfile } from "firebase/auth";
import { auth } from '../utilis/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utilis/userSlice'
import { useSelector } from 'react-redux';
import { BACKGROUND } from '../utilis/Constant'
const Login = () => {
  
    const [isSignIn,SetSignIn]= useState(true);
    const[errorMessage,SeterrorMessage]=useState();
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const user = useSelector((store)=>store.user);
    const handleSignUp=()=>{
        SetSignIn(!isSignIn);
    }
    const handleValidate=()=>{
      const provider = new GoogleAuthProvider();
      const message = ValidateHanleder(email.current.value,password.current.value);
      SeterrorMessage(message);
      if(message) return;

      if(!isSignIn){
        //create a new user
        //Sign-in/Sign-up
        signInWithPopup(auth, provider)
       .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL: user.photoURL
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL}= auth.currentUser;
      dispatch(
        addUser({
        uid:uid,
        displayName:displayName,
        photoURL:photoURL,
        })
      );

      // ...
    }).catch((error) => {
      // An error occurred
      SeterrorMessage(error.message);
      // ...
    });
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    SeterrorMessage(errorCode+ "-"+errorMessage+"-"+email);
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
      }
    }
  return (
    <div>

      <div className='bg-gradient-to-b from-black to-white '>
      <div >
  
            <img src={BACKGROUND} className='absolute'/>
        </div>
        <Header/>
        <form onSubmit={(e)=>e.preventDefault()}className='bg-black  w-3/12 text-white z-10 absolute m-40 p-10 bg-opacity-80 right-0 left-0 mx-auto'>
        <h1 className='text-white p-6 font-bold text-3xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
            <input type="email" placeholder='Email Address' className='w-full bg-black bg-opacity-80 p-4 my-2' ref={email}/>
            {!isSignIn&&<input type="text" placeholder='name' className='w-full  bg-black bg-opacity-80 p-4 my-2' ref= {name} />}
            <input type="password" placeholder='password' className='w-full bg-black bg-opacity-80 p-4 my-2' ref={password}/>
            <button className='w-full bg-red-700 p-2 my-2 font-bold rounded-lg' onClick={handleValidate}>{isSignIn?"Sign In":"Sign Up"}</button>
            <p onClick={handleSignUp} className='text-white m-2'>New to Netflix? Sign up now</p>
            <p className='py-2 text-red-500'>{errorMessage}</p>
        </form>
     
  </div>
    </div>
  )
}

export default Login