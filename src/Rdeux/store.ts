import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { saveReducer } from "./save";










export let store = configureStore(
    {
        reducer:{
            reducerOne:counterReducer,
                save:saveReducer,

        }
        
    }
)


export type RootState = ReturnType<typeof store.getState>