import {iconAddItem, iconDelete, iconRename} from "assets/png/icons";
import {EnumModalWindowType} from "enum/enum";

export const iconsArr = [{
    img: iconAddItem,
    alt: 'add new item in the list',
    type: EnumModalWindowType.creating
}, {
    img: iconDelete,
    alt: 'delete item in the list',
    type: EnumModalWindowType.deleting
}, {
    img: iconRename,
    alt: 'rename item in the list',
    type: EnumModalWindowType.rename
},]