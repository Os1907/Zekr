import { createSlice } from "@reduxjs/toolkit";



let counter = createSlice({
    name : "counter",
    initialState : 0,
    reducers : {
        increment(state){
            return state + 1
        },
        decrement(state){
            return state - 1
        },
        reset(state){
            return 0
        },
        incrementByAmount: (state, action) => {
             return state = action.payload;
          },
          decrementByAmount: (state, action) => {
            return state -= action.payload;
         },
    }
})


export let counterReducer = counter.reducer
export let {increment, decrement, reset , incrementByAmount , decrementByAmount} = counter.actions
 