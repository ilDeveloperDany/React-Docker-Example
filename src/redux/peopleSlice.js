import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
    }
})

export const {add} = peopleSlice.actions;
export const peopleReducer = peopleSlice.reducer;