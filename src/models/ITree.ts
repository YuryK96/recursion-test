import {EnumModalWindowType} from "enum/enum";

export interface ITree {
    id: number
    name: string
    children: ITree[] | null

}

export interface ISelectedListItem {
    modalWindowType?: EnumModalWindowType
    id: number
    name: string
}

export interface ICreateTree {
    treeName: string
    parentNodeId: number
    nodeName: string

}

export interface IDeleteTree {
    treeName: string
    nodeId: number

}
export interface IRenameTree {
    treeName: string
    nodeId: number
    newNodeName: string

}