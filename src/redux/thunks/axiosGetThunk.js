import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {baseUrl} from "../../api/api"

export const axiosGetThunk = createAsyncThunk("axiosGet", async () => {
  const response = await axios.get(`${baseUrl}/messages`)
  return response.data
})

const axiosGetThunkPending = () => {
  messageData: []
}

const axiosGetThunkFulfilld = (state, {payload}) => {
  state.messageData = payload
}

const axiosGetThunkRejected = (state) => {
  state.messageData = []
}

export const axiosGetExtraReducer = (builder) => {
  builder
    .addCase(axiosGetThunk.pending, axiosGetThunkPending)
    .addCase(axiosGetThunk.fulfilled, axiosGetThunkFulfilld)
    .addCase(axiosGetThunk.rejected, axiosGetThunkRejected)
}
