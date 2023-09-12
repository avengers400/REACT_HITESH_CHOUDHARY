import React, {useContext} from 'react'
import UserContext from './Login'

export default function Profile() {
    const { user } = useContext(UserContext)
    // const { userName } = user

    if (!userName) return <div>Please login!</div>

    return (
    <div>Welcome {user.userName}</div>
    )
}
