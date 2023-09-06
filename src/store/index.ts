import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {catchErrorsMiddleware} from './errorMiddleware';
import {treeSlice} from './slices/treeSlice';
import {treeApi} from "services/tree-service";

const rootReducer = combineReducers({
    treeSlice: treeSlice.reducer,
    [treeApi.reducerPath]: treeApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(treeApi.middleware)
            .concat(catchErrorsMiddleware),
});

type RootReducerType = typeof rootReducer;
export type AppState = ReturnType<RootReducerType>;
export type AppDispatch = typeof store.dispatch;