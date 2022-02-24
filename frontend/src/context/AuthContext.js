import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [IsAuth,setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={IsAuth,setIsAuth}>
            {children}
        </AuthContext.Provider>
    )
}

