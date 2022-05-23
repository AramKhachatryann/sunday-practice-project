import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from ".";

const store = configureStore({
    reducer: rootReducer,
    middleware:  getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})
// karanq concat metodov anenq avelacnenq me sarqac middlaware-nery

//toolkit-um ka 3 hat middleware
//1. thunk, amenakarevorna
//2. immutableJS
//3 u ankarevor ban mi hat

export default store