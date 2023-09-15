import React, {useContext} from 'react'
import { UserContext } from '../context/Context'

export default function Profile() {
    const  { user, isUserLoggedIn } = useContext(UserContext)
    console.log(user)
    
    
   
       
    if (user.name==='') return <div>Please provide username</div>
    if (user.password==='') return <div>Please provide password</div>

    return (
    <div>{(!isUserLoggedIn) ? "Please login" : "Welcome " + user.name}</div>

    )
}
