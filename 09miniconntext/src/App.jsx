import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { UserContext } from './context/Context'

function App() {

  const[user,setuser] = useState({})
  const[isUserLoggedIn, setisUserLoggedIn] = useState(false)
  

  return (
    <> 
    <UserContext.Provider value={{user, setuser, isUserLoggedIn, setisUserLoggedIn}}>
      <Login />
      <Profile />
    </UserContext.Provider>
    </>
  )
}

export default App
