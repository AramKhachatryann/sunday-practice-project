import {createAsyncThunk, current} from "@reduxjs/toolkit"
import axios from "axios"
import {baseUrl} from "../../api/api"

export const axiosPostThunk = createAsyncThunk(
  "axiosPost",
  async ({user, text, formattedDate}) => {
    const id = "id" + new Date().getTime()
   // const obj = {id, author, date, text}

    const obj = {id, text, user, formattedDate}

    console.log('author', user);
    console.log(text);

    await axios.post(`${baseUrl}/messages`, obj)
    return obj
  }
)

const axiosPostThunkPending = (state) => {
  console.log('aaaa');
    messageData: state.messageData
}

const axiosPostThunkFulfilld = (state, {payload}) => {
  console.log('ggggg');
  console.log(current(state.messageData));
  state.messageData = [payload, ...state.messageData]
}

const axiosPostThunkRejected = (state) => {
    state.messageData = state.messageData

}

export const axiosPostExtraReducer = (builder) => {
  builder
    .addCase(axiosPostThunk.pending, axiosPostThunkPending)
    .addCase(axiosPostThunk.fulfilled, axiosPostThunkFulfilld)
    .addCase(axiosPostThunk.rejected, axiosPostThunkRejected)
}
