import React from 'react'
// import { userContext } from '../context/UserContext';
import { useUserData } from '../context/UserContext';

export default function Profile() {
    // const {user} = useContext(userContext)
    const { user, isUserLogggedIn  } = useUserData()
    return (
    <div>Welcome {user.name} {user.password}</div>
    )
}
