import {FC} from "react";
import {iconAddItem, iconDelete, iconRename} from "assets/png/icons";

export const Icons: FC<IconsType> = ({selectedListItem,itemId}) => {
    return (<>  {selectedListItem === itemId && <div className='parent__icons'>
        <button><img src={iconAddItem} alt='add new item in the list'/></button>
        <button><img src={iconRename} alt='rename item in the list'/></button>
        <button><img src={iconDelete} alt='delete item in the list'/></button>
    </div>}</>)
}

type IconsType = {
    selectedListItem: number | null
    itemId: number
}