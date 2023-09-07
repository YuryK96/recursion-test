import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from "const";
import {ICreateTree, IDeleteTree, IRenameTree, ITree} from "models/ITree";


export const treeApi = createApi({
    reducerPath: 'treeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getTree: build.mutation<ITree, string>({
            query: (treeName: string) => ({
                url: `api.user.tree.get?treeName=${treeName}`,
                method: 'POST',

            }),
        }), createTree: build.mutation<null, ICreateTree>({
            query: (tree) => ({
                url: `/api.user.tree.node.create?treeName=${tree.treeName}&parentNodeId=${tree.parentNodeId}&nodeName=${tree.nodeName}`,
                method: 'POST',

            }),
        }), deleteTree: build.mutation<null, IDeleteTree>({
            query: (tree) => ({
                url: `api.user.tree.node.delete?treeName=${tree.treeName}&nodeId=${tree.nodeId}`,
                method: 'POST',

            }),
        }), renameTree: build.mutation<null, IRenameTree>({
            query: (tree) => ({
                url: `api.user.tree.node.rename?treeName=${tree.treeName}&nodeId=${tree.nodeId}&newNodeName=${tree.newNodeName}`,
                method: 'POST',

            }),
        }),

    }),
});