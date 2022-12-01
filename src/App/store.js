import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/Slice";

export default configureStore({ 
    reducer: {
        tasks: tasksReducer
    }
});