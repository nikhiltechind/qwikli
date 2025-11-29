import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    function loggedIn(){
        localStorage.setItem("IsUserLoggedIn","true")
         localStorage.setItem("User","Nikhil")
        navigate('/');
    }
  return (
    
    <div>
      <input type='text' placeholder='Enter your email'/>
      <input type='password' placeholder='Enter your password'/>
      <button onClick={loggedIn}>Login</button>
    </div>
  )
}

export default Login
