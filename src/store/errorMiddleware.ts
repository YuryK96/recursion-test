import {
    isRejectedWithValue,
    Middleware,
    MiddlewareAPI,
    PayloadAction,
} from '@reduxjs/toolkit';
import {addErrorMessageAC} from './slices/treeSlice';

export const catchErrorsMiddleware: Middleware =
    (api: MiddlewareAPI) => (next) => (action: PayloadAction<ErrActionType>) => {
        if (isRejectedWithValue(action)) {
            next(addErrorMessageAC(action.payload));
        }
        return next(action);
    };

export type ErrActionType = {
    status: number;
    data: {
        message: string;
    };
};