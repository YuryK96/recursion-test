import {FC} from "react";
import {ISelectedListItem} from "models/ITree";
import {ModalButtons} from "components/modalWindows/common/ModalButtons";
import {treeApi} from "services/tree-service";
import {BASE_TREE} from "const";


export const ModalDelete: FC<ModalInputType> = ({selectedListItem, handleSelectListItem, handleGetTree}) => {
    const [deleteTree] = treeApi.useDeleteTreeMutation();

    const handleDeleteTree = async () => {
        await deleteTree({nodeId: selectedListItem.id, treeName:BASE_TREE}).then(() => handleGetTree())
    }

    return (<div className="modal__wrapper">
            <h3>Delete</h3>
            <h3>Do you want to delete {selectedListItem.name}?</h3>
            <ModalButtons acceptFn={handleDeleteTree} selectedListItem={selectedListItem}
                          handleSelectListItem={handleSelectListItem}/>
        </div>

    )
}
type ModalInputType = {
    selectedListItem: ISelectedListItem
    handleSelectListItem: (itemData: ISelectedListItem) => void
    handleGetTree: () => void
}