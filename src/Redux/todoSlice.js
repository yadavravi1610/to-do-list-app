import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    completed: [],
    unCompleted : [] 
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTotasks:(state, action)=>{
            state.tasks.push(action.payload);
        }
    }
})

export const { addTotasks} = todoSlice.actions;

export default todoSlice.reducer;