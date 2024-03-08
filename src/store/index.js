import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSilce";
import adminReducer from "./adminSlice";
//Not function

export const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer
    }
});