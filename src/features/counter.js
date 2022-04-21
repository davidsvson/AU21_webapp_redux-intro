import { createAction, createReducer } from "@reduxjs/toolkit";

// filen innehåller actions och reducers

//actions
const increase = createAction('increase counter');
const decrease = createAction('decrease counter');

// samla ihop actions i ett object
const actions = {increase, decrease };

const initialState = 10;

const reducer = createReducer(initialState, {
    [increase] : (state, action ) => state + 1,
    [decrease] : (state, action) => state - 1
} )

export { reducer, actions };
