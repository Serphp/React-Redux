import { createSlice } from "@reduxjs/toolkit";


    const initialState = [
        {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            completed: false,
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            completed: false,
        },
    ]

export const Slice = createSlice({
    name: "Comment",
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload);
            //console.log(state, action);
        }
    }
})

export const { addComment } = Slice.actions;
export default Slice.reducer;