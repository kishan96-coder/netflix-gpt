import { signOut,onAuthStateChanged  } from 'firebase/auth'
import React from 'react'
import { auth } from '../utilis/firebase'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utilis/userSlice';
import { LOGO } from '../utilis/Constant';
const Header = () => {
const navigate = useNavigate();
const[errorMessage,SeterrorMessage]=useState();
const dispatch = useDispatch();

const user = useSelector((store)=>store.user);
  const signoutHandle=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      navigate("/");
      }).catch((error) => {
        // An error happened.
      SeterrorMessage(error);
      });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(
            addUser(
              {
                ui:uid, 
                email:email,
                displayName:displayName,
                photoURL:photoURL
          }));
          navigate("/browse");
          // ...
        } else {
          // User is signed out
          // ...
        
          dispatch(removeUser());
          navigate("/");
  
        }
      });
      //unsubscribe when component unmounts
      return ()=>unsubscribe();
},[]);
  return (
    <div className='w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between z-10 absolute '>
          <div > 
          <img className="w-36 m-4 relative" src={LOGO} alt="logo" />
          
        </div>  
        <div className='py-5 flex'>
        {user && <img className="w-8 m-4 relative" src={user.photoURL} alt="logo" />}
            <button className='bg-red-600 py-1 rounded-lg w-24 text-white text-lg' onClick={signoutHandle}>Sign out</button>
          </div>
    </div>
  )
}

export default Header