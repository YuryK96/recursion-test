import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {ErrActionType} from '../errorMiddleware';

type initialStateType = {
    error: string | null;
};

const initialState = {error: null} as initialStateType;

export const treeSlice = createSlice({
    name: 'accountSlice',
    initialState,
    reducers: {
        addErrorMessageAC(state, action: PayloadAction<ErrActionType>) {
            if (action.payload.data.message) {
                state.error = action.payload.data.message;
            } else {
                state.error = 'Произошла ошибка, попробуйте позже';
            }
        },
        removeErrorMessageAC(state, action) {
            state.error = null;
        },
    },
});

export const {addErrorMessageAC, removeErrorMessageAC} = treeSlice.actions;