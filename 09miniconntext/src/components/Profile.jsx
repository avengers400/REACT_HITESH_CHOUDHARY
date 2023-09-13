import React, {useContext} from 'react'
import UserContext from './Login'

export default function Profile() {
    const { user } = useContext(UserContext)
    const {userName} = user
    
    

   

    return (
    <div>Welcome {userName} </div>
    )
}
