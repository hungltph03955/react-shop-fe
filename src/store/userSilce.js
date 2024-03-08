import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => { state = action.payload },
        removeUser:state => {state={}}
    }
});

export default userSlice.reducer

export const { setUser, removeUser } = userSlice.actions