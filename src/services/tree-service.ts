import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from "const";
import {ITree} from "models/ITree";


export const treeApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getTree: build.mutation<ITree, string>({
            query: (treeName: string) => ({
                url: `api.user.tree.get?treeName=${treeName}`,
                method: 'POST',

            }),
        }),

    }),
});