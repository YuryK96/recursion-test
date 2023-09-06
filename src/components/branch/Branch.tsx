import {FC} from "react";
import {ITree} from "models/ITree";
import {useToggleVisibility} from "hooks/useToggle";
import {Icons} from "components/branch/icons/Icons";
import {iconArrow} from "assets/png/icons";

export const Branch: FC<BranchType> = ({tree, selectedListItem, handleSelectListItem}) => {
    const [isVisible, toggleVisibility] = useToggleVisibility()

    return (<ul style={{height: isVisible ? 'fit-content' : '35px'}} className='parent'>
        <div className="parent__wrapper" style={{background: selectedListItem === tree.id ? 'rgba(191,199,255,0.81)' : ''}}>

            <button className="parent__titleButton" onClick={() => {
                toggleVisibility();
                handleSelectListItem(tree.id)
            }}>
                {tree.children?.length &&
                    <div className="parent__arrow"><img style={{rotate: isVisible ? '90deg' : '0deg'}} src={iconArrow}
                                                        alt='list arrow'/></div>}
                {tree?.name}</button>
            <Icons itemId={tree.id} selectedListItem={selectedListItem}/>
        </div>
        {tree?.children?.map((child) => {
            return (<li className='parent__child' key={child.id}>
                {child.children && isVisible &&
                    <Branch handleSelectListItem={handleSelectListItem} selectedListItem={selectedListItem}
                            tree={child}/>}

            </li>)
        })}
    </ul>)
}

type BranchType = {
    tree: ITree
    selectedListItem: number | null
    handleSelectListItem: (itemId: number) => void
}