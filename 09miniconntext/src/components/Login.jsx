import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/Context'




export default function Login() {
    
    const {setuser, setisUserLoggedIn} = useContext(UserContext)
    const[userName, setUsername] = useState('')
    const[password, setPassword] = useState('')
    
    const handleSubmit = (e) => {
          e.preventDefault()
          setuser({name: userName, password: password})
          setisUserLoggedIn(true)
         
          console.log(userName)
          console.log(password)
    }
  return (
    <>
    
        <h2>Login</h2>
        <input type="text"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>
        <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    
    </>
  )
}


