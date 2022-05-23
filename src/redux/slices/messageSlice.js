import { createSlice } from "@reduxjs/toolkit"
import { axiosDeleteExtraReducer } from "../thunks/axiosDeleteThunk"
import { axiosGetExtraReducer } from "../thunks/axiosGetThunk"
import { axiosPostExtraReducer } from "../thunks/axiosPostThunk"

const initialState = {
    messageData: []
}

const messageSlice = createSlice({
    name: 'messageData',
    initialState,
    // reducers: {
    //     deleteMessagesData: (state, {payload}) => {
    //         state.messageData = payload
    //     }
    // },
    extraReducers: (builder) => {
        axiosGetExtraReducer(builder)
        axiosDeleteExtraReducer(builder)
        axiosPostExtraReducer(builder)
    }
})

export const messageDataSelector = state => state.messageData.messageData

export const {deleteMessagesData} = messageSlice.actions

export default messageSlice.reducer