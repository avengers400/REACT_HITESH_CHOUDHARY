import { createContext, useState, useContext } from "react";

const userContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState("Aneena");

    return (
        <userContext.Provider value={{user}}>
            {children}
        </userContext.Provider>
    )
}

export const useUserData = () => {
    return useContext(userContext)
}