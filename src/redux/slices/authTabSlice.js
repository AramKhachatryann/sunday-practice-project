import { createSlice } from "@reduxjs/toolkit"
import { AUTH_TABS } from "../../helpers/constants"

const [LOGIN] = AUTH_TABS

const initialState = {
    authRoute: LOGIN
}

const authTabSlice = createSlice({
    name: 'authRoute',
    initialState,
    reducers: {
        setAuthRoute: (state, {payload}) => {
            state.authRoute = payload
        }
    }
})

export const authRouteSelector = state => state.authRoute.authRoute

export const {setAuthRoute} = authTabSlice.actions

export default authTabSlice.reducer