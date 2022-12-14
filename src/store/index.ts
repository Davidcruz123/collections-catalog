import { configureStore } from "@reduxjs/toolkit";
import logInSlice, { LogInState } from "./log-in-slice";

export interface RootState {
    logIn:LogInState;
}

const store = configureStore({
    reducer: {
        logIn: logInSlice.reducer
    }
})


export default store;
