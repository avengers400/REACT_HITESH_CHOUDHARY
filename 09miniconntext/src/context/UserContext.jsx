import { createContext, useState, useContext } from "react";

const userContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState({});
    const isUserLogggedIn = false;

    return (
        <userContext.Provider value={{user,setUser,isUserLogggedIn}}>
            {children}
        </userContext.Provider>
    )
}

export const useUserData = () => {
    return useContext(userContext)
}