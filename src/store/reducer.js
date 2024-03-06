import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    user:{},
    tasks:[]
}

const reduceSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload
        },
        setTask:(state,{payload})=>{

            state.tasks = payload
        }
    }
})


export const userReducer =reduceSlice.reducer
export const userActions =reduceSlice.actions