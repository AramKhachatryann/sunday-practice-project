import { createSlice } from "@reduxjs/toolkit";
import { OUR_PROFILE } from "../../helpers/constants";

const [OURMESSAGES] = OUR_PROFILE

const initialState = {
    ourProfileRoute: OURMESSAGES
}

const ourProfileSlice = createSlice({
    name: 'ourProfileRoute',
    initialState,
    reducers: {
        setOurProfileRoute: (state, {payload}) => {
            state.ourProfileRoute = payload
        }
    }
})

export const ourProfileRouteSelector = state => state.ourProfileRoute.ourProfileRoute

export const {setOurProfileRoute} = ourProfileSlice.actions

export default ourProfileSlice.reducer