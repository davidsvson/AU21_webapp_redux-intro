import { createAction, createReducer } from "@reduxjs/toolkit";

//actions
const changeAlias = createAction('change alias');
const changeName = createAction('change name');
const resetProfile = createAction('reset user profile');

const actions = {changeAlias, changeName, resetProfile };

//reducer
const initialState = {
    alias : '',
    name : ''
}

const reducer = createReducer(initialState, {
    [changeAlias] : (state, action) => ( 
        {...state, alias: action.payload }
    ),
    [changeName] : (state, action) => (
        {...state, name: action.payload}
    ),
    [resetProfile] : (state, action) => (
        initialState
    )

    /* alternativ
        [changeAll] : (state, action) => (
            {
                alias: action.payload.alias,
                name: action.payload.name
            }
        )

    */

});

export {actions, reducer};