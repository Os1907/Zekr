import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";










export let store = configureStore(
    {
        reducer:{
            reducerOne:counterReducer
        }
    }
)


export type RootState = ReturnType<typeof store.getState>