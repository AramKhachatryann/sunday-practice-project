import {createAsyncThunk, current} from "@reduxjs/toolkit"
import axios from "axios"
import {baseUrl} from "../../api/api"

export const axiosDeleteThunk = createAsyncThunk("axiosDelete", async ({id}) => {
  await axios.delete(`${baseUrl}/messages/${id}`)
  return id
})

const axiosDeleteThunkPending = (state) => {
  messageData: state.messageData
}

const axiosDeleteThunkFulfilld = (state, {payload}) => {
  const arr = state.messageData
  const filteredData = arr.filter((item) =>  item.id !== payload)
  state.messageData = filteredData
}

const axiosDeleteThunkRejected = (state) => {
    state.messageData = state.messageData
}

export const axiosDeleteExtraReducer = (builder) => {
  builder
    .addCase(axiosDeleteThunk.pending, axiosDeleteThunkPending)
    .addCase(axiosDeleteThunk.fulfilled, axiosDeleteThunkFulfilld)
    .addCase(axiosDeleteThunk.rejected, axiosDeleteThunkRejected)
}
