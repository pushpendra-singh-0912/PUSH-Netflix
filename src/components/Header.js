import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {
  const dispatch = useDispatch()


  const navigate = useNavigate();
   const user = useSelector(store => store.user);
  
  //  {
  //   (user !== null)?console.log(user) : null
  //  }
  

  const handleSignOut = ()=>{
    
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }



  useEffect(()=>{
     const unsunbscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;

          dispatch(addUser({uid:uid,email:email,displayName:displayName , photoURL:photoURL}));
          navigate("/browse")
          
        } else {
          dispatch(removeUser())
          navigate("/")
        }
      });

      // unsubscribing onAuthChange

      return () => unsunbscribe(); 
      
},[]);

const handleGptSearchClick = ()=>{
  // toggle button
  dispatch(toggleGptSearchView())
}

  return (
    <div>
    <div className='absolute w-full bg-gradient-to-b from-black z-40 flex justify-between'  >
        <img className=' ml-32 my-1 h-20' alt="dontknow" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>
       {
        
        user &&  <div>
        <img className='h-8 w-8 boreder border-blue-200 my-4' alt='userlogo' src={user.photoURL} ></img>


        <button className='text-white bg-purple-800' onClick={handleGptSearchClick} >GPT Search </button>  <br></br>
        
        
        <button className=' mt-5 mr-10 text-blue-800 font-bold bg-yellow-300' onClick={handleSignOut}>Sign OUT</button>
        </div>
       }
    </div>
    </div>
 

  )
}

export default Header