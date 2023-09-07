import {FC, useState} from "react";
import {ISelectedListItem} from "models/ITree";
import {EnumModalWindowType} from "enum/enum";
import {ModalButtons} from "components/modalWindows/common/ModalButtons";
import {treeApi} from "services/tree-service";
import {BASE_TREE} from "const";


export const ModalInput: FC<ModalInputType> = ({selectedListItem, handleSelectListItem, handleGetTree}) => {
    const [inputValue, setInput] = useState(selectedListItem.modalWindowType === EnumModalWindowType.rename ? selectedListItem.name : '')
    const [createTree] = treeApi.useCreateTreeMutation();
    const [renameTree] = treeApi.useRenameTreeMutation();


    const handleRenameTree = async () => {
        await renameTree({
            treeName: BASE_TREE,
            nodeId: selectedListItem.id,
            newNodeName: inputValue
        }).then(() => handleGetTree())
    }
    const handleCreateTree = async () => {
        await createTree({
            parentNodeId: selectedListItem.id,
            treeName: BASE_TREE,
            nodeName: inputValue
        }).then(() => handleGetTree())
    }
    return (<div className="modal__wrapper">
            <h3>{selectedListItem.modalWindowType === EnumModalWindowType.creating ? 'Add' : 'Rename'}</h3>
            <input
                className="modal__input" onChange={(event) => setInput(event.target.value)} value={inputValue}
                type='text'/>
            <ModalButtons acceptFn={selectedListItem.modalWindowType === EnumModalWindowType.creating ? handleCreateTree : handleRenameTree}
                          selectedListItem={selectedListItem} handleSelectListItem={handleSelectListItem}/>
        </div>

    )
}
type ModalInputType = {
    selectedListItem: ISelectedListItem
    handleSelectListItem: (itemData: ISelectedListItem) => void
    handleGetTree: () => void
}