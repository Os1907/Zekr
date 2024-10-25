
import { createSlice , PayloadAction } from "@reduxjs/toolkit";


const getInitialState = () => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem("data") || "[]");
    }
    return [];
  };
  
  const initialState: Array<any> = getInitialState();

const save = createSlice({
  name: "save",
  initialState,
  reducers: {
    store(state, action: PayloadAction<any>) {
        state.push(action.payload);
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem("data", JSON.stringify(state));
          }
    },
    remove(state, action: PayloadAction<any>) {
      state.splice(action.payload, 1);
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem("data", JSON.stringify(state.splice(action.payload, 1)));
          }
    },
    empty(state) {
      state = [];
    },
  },
});

export let saveReducer = save.reducer;
export let { store, remove , empty } = save.actions