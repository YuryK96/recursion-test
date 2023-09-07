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
            if(action.payload.data.data.message) {
                next(addErrorMessageAC(action.payload.data.data.message));
            }else {
                next(addErrorMessageAC('try again later'));
            }
        }
        return next(action);
    };

export type ErrActionType = {
    data: {
        data: {
            message: string;
        }

    };
};