import { configureStore } from "@reduxjs/toolkit";
import commentR from "../features/tasks/Storage";

export default configureStore({ 
    reducer: {
        comment: commentR
    }
});