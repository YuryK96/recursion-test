import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

type initialStateType = {
    error: string | null;
    openList: number[]
};

const initialState = {error: null, openList: []} as initialStateType;

export const treeSlice = createSlice({
    name: 'treeSlice',
    initialState,
    reducers: {
        addErrorMessageAC(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        removeErrorMessageAC(state, action) {
            state.error = null;
        },
        addNewOpenListAC(state, action: PayloadAction<number>) {
            state.openList.push(action.payload)
        }, removeNewOpenListAC(state, action: PayloadAction<number>) {
            state.openList = state.openList.filter((id) => id !== action.payload
            )
        }
    },
});

export const {addErrorMessageAC, removeErrorMessageAC, addNewOpenListAC, removeNewOpenListAC} = treeSlice.actions;