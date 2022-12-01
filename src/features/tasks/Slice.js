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
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        }
    }
})

export default Slice.reducer;