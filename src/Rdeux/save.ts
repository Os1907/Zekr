'use client'
import { createSlice , PayloadAction } from "@reduxjs/toolkit";


const initialState: number[] = JSON.parse(localStorage.getItem("data") || "[]");

const save = createSlice({
  name: "save",
  initialState,
  reducers: {
    store(state, action: PayloadAction<number>) {
        state.push(action.payload);
        localStorage.setItem("data", JSON.stringify(state));
    },
    remove(state, action: PayloadAction<number>) {
        state.splice(action.payload, 1);
        localStorage.setItem("data", JSON.stringify(state));
    },
    empty(state) {
      state = [];
    },
  },
});

export let saveReducer = save.reducer;
export let { store, remove , empty } = save.actions