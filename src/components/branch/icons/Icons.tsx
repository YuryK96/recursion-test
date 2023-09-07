import {FC} from "react";
import {ISelectedListItem} from "models/ITree";
import {iconsArr} from "components/branch/icons/icons-data";
import {BASE_TREE} from "const";
import {EnumModalWindowType} from "enum/enum";

export const Icons: FC<IconsType> = ({selectedListItem, itemId, handleSelectListItem}) => {
    return (<>  {selectedListItem?.id === itemId && <div className='parent__icons'>
        {iconsArr.map((icon) => {
            if (selectedListItem.name === BASE_TREE && icon.type !== EnumModalWindowType.creating) {
                return null
            }
            return (
                <button key={icon.alt}
                        onClick={() => handleSelectListItem({...selectedListItem, modalWindowType: icon.type})}>
                    <img src={icon.img} alt={icon.alt}/></button>
            )
        })}
    </div>}</>)
}

type IconsType = {
    selectedListItem: ISelectedListItem | null
    itemId: number
    handleSelectListItem: (itemData: ISelectedListItem) => void
}