import {createContext,useState} from "react";

export const UserContext =  createContext();

export const UserProvider = ({children})=>{
    const[loggedInUser,setLoggedInUser]=useState(null);
    const[addToCartLength,setAddToCartLength]= useState(0);
    return(
        <UserContext.Provider value={{loggedInUser,setLoggedInUser,addToCartLength,setAddToCartLength}}>
            {children}
        </UserContext.Provider>
    )

}