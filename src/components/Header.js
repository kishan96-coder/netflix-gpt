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
import { addSearch } from '../utilis/showSearcGptSlice';
import { langChange } from '../utilis/configSlice';

const Header = () => {

const showGptSearch = useSelector(show=>(show.search?.ShowSearch));
const hanleSearchGpt=()=>{
  dispatch(addSearch());
  }
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

const handleLanguage=(e)=>{
  dispatch(langChange(e.target.value));
}

  return (
    <div className='w-screen px-8 bg-gradient-to-b from-black flex  justify-between z-10 absolute flex-col md:flex-row ' >
        <div> 
          <img className="w-36 relative mx-auto md:m-2" src={LOGO} alt="logo" /> 
        </div>  
        <div className='my-4 flex justify-between'>
      {showGptSearch && <select className='w-1/4 px-2 mx-2 bg-gray-800 text-white' onChange={handleLanguage}>
          <option value="en">English</option>
          <option value="es"> Spanish</option>
          <option value="hi">Hindi</option>
          <option value="jp">Japanese</option>
        </select>}
      
        <button className='bg-indigo-500 px-2 rounded-lg md:w-24 text-white text-lg' onClick={hanleSearchGpt}>{showGptSearch?"HomePage":"GptSearch"}</button>
        {user && (<>
        <img className="hidden w-8 m-2 relative md:block" src={user.photoURL} alt="logo" />
            <button className='bg-red-600 px-2  py-1 rounded-lg md:w-24 text-white text-lg' onClick={signoutHandle}>Sign out</button></>)}
          </div>
    </div>
  )
}

export default Header