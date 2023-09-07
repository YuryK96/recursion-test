import {FC} from "react";
import {EnumModalWindowType} from "enum/enum";
import {ISelectedListItem} from "models/ITree";

export const ModalButtons: FC<ModalButtonsType> = ({selectedListItem, handleSelectListItem, acceptFn}) => {
    return (<div className="modal__buttons">
        <button onClick={() => handleSelectListItem({id: selectedListItem.id, name: selectedListItem.name})}>Cancel
        </button>
        <button
            onClick={() => {
                acceptFn();
                handleSelectListItem({id: selectedListItem.id, name: selectedListItem.name})
            }}>{selectedListItem.modalWindowType === EnumModalWindowType.creating ? 'Add' : selectedListItem.modalWindowType === EnumModalWindowType.rename ? 'Rename' : 'Delete'}</button>

    </div>)
}

type ModalButtonsType = {
    selectedListItem: ISelectedListItem
    handleSelectListItem: (itemData: ISelectedListItem) => void
    acceptFn: () => void
}