
import { createSlice , PayloadAction } from "@reduxjs/toolkit";


const getInitialState = () => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem("data") || "[]");
    }
    return [];
  };
  
  const initialState: number[] = getInitialState();

const save = createSlice({
  name: "save",
  initialState,
  reducers: {
    store(state, action: PayloadAction<number>) {
        state.push(action.payload);
        // localStorage.setItem("data", JSON.stringify(state));
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem("data", JSON.stringify(state));
          }
    },
    remove(state, action: PayloadAction<number>) {
        state.splice(action.payload, 1);
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem("data", JSON.stringify(state));
          }
    },
    empty(state) {
      state = [];
    },
  },
});

export let saveReducer = save.reducer;
export let { store, remove , empty } = save.actions