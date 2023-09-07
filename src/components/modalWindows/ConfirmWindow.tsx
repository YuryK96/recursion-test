import {FC} from "react";
import {ISelectedListItem} from "models/ITree";
import {ModalInput} from "components/modalWindows/modals/ModalInput";
import {EnumModalWindowType} from "enum/enum";
import {ModalDelete} from "components/modalWindows/modals/ModalDelete";

export const ConfirmWindow: FC<ConfirmDeletingType> = ({selectedListItem, handleSelectListItem,handleGetTree}) => {
    return (
        <div className="modal_bg">
            <div className="modal">
            {selectedListItem.modalWindowType && selectedListItem.modalWindowType !== EnumModalWindowType.deleting &&
                <ModalInput selectedListItem={selectedListItem} handleSelectListItem={handleSelectListItem} handleGetTree={handleGetTree}/>}

            {selectedListItem.modalWindowType === EnumModalWindowType.deleting &&
                <ModalDelete selectedListItem={selectedListItem} handleSelectListItem={handleSelectListItem} handleGetTree={handleGetTree}/>}</div>
        </div>
    )
}

type ConfirmDeletingType = {
    selectedListItem: ISelectedListItem
    handleSelectListItem: (itemData: ISelectedListItem) => void
    handleGetTree:()=>void
}