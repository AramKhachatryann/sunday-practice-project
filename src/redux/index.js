import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/userSlice"
import authTabReducer from "./slices/authTabSlice";
import ourProfileReducer from "./slices/ourProfileSlice";
import messageReducer from "./slices/messageSlice";

export const rootReducer = combineReducers({
    user: userReducer,
    authRoute: authTabReducer,
    ourProfileRoute: ourProfileReducer,
    messageData: messageReducer
})