import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validation';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
    
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
        // now to check validation
        const message = checkValidData(email.current.value,password.current.value)
        setErrorMessage(message)

       if(message) return;

    if(!isSignInForm){
        // sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;


        updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/161035733?v=4"
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser;

            dispatch(addUser({uid:uid,email:email,displayName:displayName , photoURL:photoURL}))
            


            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message, error.code)
          });


          
        

    // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode  + "-" + errorMessage)

        });
    }else{
        // sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user)
        
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+ errorMessage)
  });

    }
        
    }

    const toggleForm = ()=>{
        setIsSignInForm(!isSignInForm);

    }

  return (
    <div className='relative'>
        <Header/>
        <div >
            <img alt="logo" className='absolute'   src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg'></img>
        </div>
        <div className=' w-full absolute my-44  text-white'>
            <form className=' h-[30rem]  w-3/12  bg-black mx-auto my-auto bg-opacity-80' onSubmit={(e)=>e.preventDefault()}>
                <h2 className='p-4  text-white text-4xl font-bold'>{isSignInForm?"Sing In":"Sign Up"}</h2>
                {!isSignInForm && <input ref={name} className=' text-white bg-gray-600 border-none px-12 py-3 mx-12 mt-4' type='text' placeholder='Name' ></input> }<br></br>


                <input ref={email} className=' text-white bg-gray-600 border-none px-12 py-3 mx-12 mt-5' type='text' placeholder='Email' ></input>
                <br></br>


                <input ref={password} className='  text-white bg-gray-600 border-none px-12 py-3 mx-12 mt-10' type='password' placeholder='Password' ></input>
                <br></br>

                <p className='pl-32 pt-3 mt-3 text-red-400' >{errorMessage}</p>

                <button className= ' rounded-lg bg-red-500 text-white w-[275px]  p-3  mt-5 ml-[52px]' onClick={handleButtonClick} >{isSignInForm?"Sing In":"Sign Up"} </button>
                <p className=' pl-10 py-7 cursor-pointer' onClick={() => toggleForm()}>
                {isSignInForm?"New to netflix ? Sign Un now":"Already a User Sign In now "}
                    </p>
                   

            </form>
        </div>
    </div>
    
  )
}

export default Login