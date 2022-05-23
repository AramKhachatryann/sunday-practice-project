import { createContext, useContext, useState } from "react"
import { AUTH_TABS } from "../helpers/constants"

const AuthTabContext = createContext(null)

const [LOGIN] = AUTH_TABS

const AuthTabProvider = ({children}) => {
    const [authRoute, setAuthRoute] = useState(LOGIN)


    return(<AuthTabContext.Provider value={{authRoute, setAuthRoute}}>
        {children}
    </AuthTabContext.Provider>)
}

export const useAuthTab = () => useContext(AuthTabContext)

export default AuthTabProvider