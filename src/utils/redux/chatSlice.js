import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        mesaage: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.mesaage.slice(25, 1)
            state.mesaage.unshift(action.payload)
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;