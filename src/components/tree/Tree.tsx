import {FC, useEffect, useState} from "react";
import {treeApi} from "services/tree-service";
import {Branch} from "components/branch/Branch";

export const Tree: FC = () => {
    const [getTree, {data}] = treeApi.useGetTreeMutation();
    const [selectedListItem, setSelectListItem] = useState<number | null>(null)

    const handleSelectListItem = (itemId: number) => {
        setSelectListItem(itemId)
    }

    useEffect(() => {
        getTree('Root')
    }, [getTree])

    return <div className='tree'>
        {data && <Branch selectedListItem={selectedListItem} handleSelectListItem={handleSelectListItem} tree={data}/>}
    </div>
}