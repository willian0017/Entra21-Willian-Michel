import {createContext, useState} from "react"
import authServices from "../services/authServices"

export const AuthContext = createContext()

export function AuthProvider ({children}) {
    const [acesstToken, setAcessToken] = useState(localStorage.getItem("acess-token"))

    async function signIn(email, password){
        const {acesstToken} = await authServices.login(email, password)

        localStorage.setItem("acess-token", acesstToken)
        
        setAcessToken(acessToken)
    }
    function signOut(){
        setAcessToken(null)
        localStorage.clear()
    }
    return(
        <AuthContext.Provider value={{acessToken, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}