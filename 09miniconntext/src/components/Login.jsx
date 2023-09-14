import React from 'react'
import { useState } from 'react'

export default function Login() {
    
    const[user,setUser] = useState({})
    const[userName, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const handleSubmit = (e) => {
          e.preventDefault()
          setUser({userName: userName, password: password})
          console.log(user)
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
