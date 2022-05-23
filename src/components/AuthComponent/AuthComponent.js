import { useMemo } from "react"
import { useSelector } from "react-redux"
import { AUTH_TABS } from "../../helpers/constants"
import { authRouteSelector } from "../../redux/slices/authTabSlice"
import Login from "../Login/Login"
import Register from "../Register/Register"

const [LOGIN, REGISTRATION] = AUTH_TABS

const authComponent = {
    [LOGIN]: <Login/>,
    [REGISTRATION]: <Register />
}

const AuthComponent = () => {
    const authRoute = useSelector(authRouteSelector)

    const MainComponent = useMemo(() => authComponent[authRoute], [authRoute])

    return (
        <>
            {MainComponent}
        </>
    )
}

export default AuthComponent