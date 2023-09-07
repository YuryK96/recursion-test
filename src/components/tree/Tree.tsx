import {FC, useCallback, useEffect, useState} from "react";
import {treeApi} from "services/tree-service";
import {Branch} from "components/branch/Branch";
import {ISelectedListItem} from "models/ITree";
import {ConfirmWindow} from "components/modalWindows/ConfirmWindow";
import {BASE_TREE} from "const";

export const Tree: FC = () => {
    const [getTree, {data}] = treeApi.useGetTreeMutation();
    const [selectedListItem, setSelectListItem] = useState<ISelectedListItem | null>(null)
    const handleSelectListItem = (itemData: ISelectedListItem) => {
        setSelectListItem(itemData)
    }

    const handleGetTree = useCallback(() => {
        getTree(BASE_TREE)
    }, [getTree])

    useEffect(() => {
        handleGetTree()
    }, [handleGetTree])

    return <div className='tree'>
        {data && <Branch selectedListItem={selectedListItem} handleSelectListItem={handleSelectListItem} tree={data}/>}
        {selectedListItem?.modalWindowType && <ConfirmWindow
            handleGetTree={handleGetTree}
            selectedListItem={selectedListItem} handleSelectListItem={handleSelectListItem}/>}
    </div>
}