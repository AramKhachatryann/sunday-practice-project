import { createSlice, current } from "@reduxjs/toolkit";
import { testExtraReducer } from "../thunks/testThunk";

const initialState = {
    user: localStorage.getItem('user') ||
    sessionStorage.getItem("user") ||
    null,
    allUsers: []
}

const userSlice = createSlice({
    name: 'user', // reduceri anuny, partadira
    initialState,
    reducers: { //ays dashtum sarqum enq action creatornery, dranq funkcianer en
        setUser: (state, {payload}) => { // argumentneri state mer initialstate-na
            //console.log(current(state)) //current funkciaya mer mez tuyl e talis nayel mer state-y te che cheinq kara, proxynerov paka
            state.user = payload //payload en arjeqna vor menq poxancum enq dispatch-i jamanak vor ga nsti stex
        },
        removeUser: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        testExtraReducer(builder)
    }
})

export const userSelector = state => state.user.user // stexi state-y amboxj reduxi store-na
export const allUsersSelector = state => state.user.allUsers
//2-rd user-y mer reduceri anunna, vory graca userSlice-i mej
//3-rd user-y mer initialState-i anunna
// selectory da funkciaya vor ogtagorcelu enq tvyal reducer-in dimelu hamar
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer