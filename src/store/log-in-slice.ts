import { createSlice } from "@reduxjs/toolkit";
export interface LogInState {
    isLoggedIn:boolean;
    user: string;
}

const logInSlice = createSlice({
    name:"login",
    initialState: {
        isLoggedIn:false,
        user:""
    },
    reducers: {
        login(state, action){
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        setUser(state, action){
            state.user = action.payload;
        }
    }
}
)

export const logInActions = logInSlice.actions;
export const selectUser = (state:LogInState) => state.user;
export default logInSlice;