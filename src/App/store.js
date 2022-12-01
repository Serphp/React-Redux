import { configureStore } from "@reduxjs/toolkit";
import commentR from "../features/tasks/Slice";

export default configureStore({ 
    reducer: {
        comment: commentR
    }
});