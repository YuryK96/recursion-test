import {FC} from "react";
import {ISelectedListItem, ITree} from "models/ITree";
import {Icons} from "components/branch/icons/Icons";
import {iconArrow} from "assets/png/icons";
import {useDispatch, useSelector} from "react-redux";
import {isOpenList} from "store/selectors/selectors";
import {AppDispatch, AppState} from "store";
import {addNewOpenListAC, removeNewOpenListAC} from "store/slices/treeSlice";

export const Branch: FC<BranchType> = ({tree, selectedListItem, handleSelectListItem}) => {
    const isOpen = useSelector((state: AppState) => isOpenList(state, tree?.id))
    const dispatch = useDispatch<AppDispatch>()
    const handleAddOpenListToArr = (listId: number | undefined) => {
        if (listId) {
            dispatch(addNewOpenListAC(listId))
        }
    }
    const handleRemoveOpenListFromArr = (listId: number | undefined) => {
        if (listId) {
            dispatch(removeNewOpenListAC(listId))
        }
    }

    return (<ul style={{height: isOpen ? 'fit-content' : '35px'}} className='parent'>
        <div className="parent__wrapper"
             style={{background: selectedListItem?.id === tree.id ? 'rgba(191,199,255,0.81)' : ''}}>

            <button className="parent__titleButton" onClick={() => {
                if (isOpen) {
                    handleRemoveOpenListFromArr(tree?.id)

                } else {
                    handleAddOpenListToArr(tree?.id);
                }
                handleSelectListItem({id: tree.id, name: tree.name})
            }}>
                {tree.children?.length ?
                    <div className="parent__arrow"><img style={{rotate: isOpen ? '90deg' : '0deg'}} src={iconArrow}
                                                        alt='list arrow'/></div> : null}
                {tree?.name}</button>
            <Icons handleSelectListItem={handleSelectListItem} itemId={tree.id} selectedListItem={selectedListItem}/>
        </div>
        {tree?.children?.map((child) => {
            return (<li className='parent__child' key={child.id}>
                {child.children && isOpen &&
                    <Branch handleSelectListItem={handleSelectListItem} selectedListItem={selectedListItem}
                            tree={child}/>}

            </li>)
        })}
    </ul>)
}


type BranchType = {
    tree: ITree
    selectedListItem: ISelectedListItem | null
    handleSelectListItem: (itemData: ISelectedListItem) => void
}