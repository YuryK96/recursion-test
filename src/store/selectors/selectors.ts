import {AppState} from '../index';
export const isMutationPendingSelector = (state: AppState) =>
    Object.values(state['treeApi'].mutations).some(
        (query) => query?.status === 'pending'
    );
export const getErrorSelector = (state: AppState) => state.treeSlice.error;
export const isOpenList = (state: AppState, branchId:number | undefined) => !!state.treeSlice.openList.find( (id)=> branchId === id );