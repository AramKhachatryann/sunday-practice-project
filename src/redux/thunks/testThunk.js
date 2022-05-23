import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const testThunk = createAsyncThunk("testFetch", async ({url}) => {
  const response =  await axios.get(url)
    console.log('res', response)
    return response.data
})


// const testThunkPending = (state, {payload}) => { // payload-y returnn-na verevi, isk state-y extraReducernerica stanum
//     state.user = 'admin'
// }

const testThunkPending = (state) => {
    state.allUsers = []
}

const testThunkFulfilled = (state, {payload}) => {
    state.allUsers = payload
}

export const testExtraReducer = builder => {
    builder
    .addCase(testThunk.pending, testThunkPending)
    .addCase(testThunk.fulfilled, testThunkFulfilled)
}