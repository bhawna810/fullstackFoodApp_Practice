import React, { useState } from 'react'
import { login } from '../assets';
import { Logo } from '../assets';
import LoginInput from '../components/LoginInput';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {

    const [isSignup , setIsSignUp] = useState('false');

    const isSignupToggle = () => {
          setIsSignUp(!isSignup);
    }

  return (
    <div className='main_div'>
          <div className='second_div'>
            <div className='third_div'>
               
                <img src={Logo} className='logo' alt='company logo'/>
                <span>City</span>
                <h2 className='heading1'>Welcome Back</h2>
                {isSignup ? <p className='para1'> Sign Up with following </p>  : <p>Sign In with the following</p> }

                <div className='fourth_div'>
                  <LoginInput placeholder={'Email Here'} icon = {<FaEnvelope/>} className ='logininput1'/>
                  <LoginInput placeholder={'password Here'} icon = {<FaEnvelope/>} className ='logininput2'/>
                  {isSignup ? <LoginInput placeholder={'Confirm password Here'} icon = {<FaEnvelope/>} className ='logininput2'/> : null }
                  {isSignup ? 
                    <div>
                      <p>Doesn't have an account:</p>
                      <p onClick={isSignupToggle}>Create one</p> 
                    </div> :
                    <div>
                      <p>Already have an account: </p>
                      <p onClick={isSignupToggle}> Sign-in here</p>
                    </div> }
                    {isSignup ? 
                       <button>Sign Up</button>
                       :
                       <button>Sign In</button>
                    }
                  <button><FaEnvelope></FaEnvelope>Signin with Google</button>
                </div>
            </div>   
         </div>
    </div>
  )
}

export default Login