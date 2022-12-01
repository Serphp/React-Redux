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

export const Storage = createSlice({
    name: "Comment",
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload);
            console.log(state, action);
        },
        delComment: (state, action) => {
            // constante CF va a buscar el array comment y buscara id y comparara con el payload.
            const commentFound = state.find((comment) => comment.id === action.payload);
            if (commentFound){
                state.splice(state.indexOf(commentFound), 1);
            }
            //state.(action.payload);
        }
    }
})

export const { delComment } = Storage.actions;
export const { addComment } = Storage.actions;
export default Storage.reducer;