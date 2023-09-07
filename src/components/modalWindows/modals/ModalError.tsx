import {FC} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "store";
import {removeErrorMessageAC} from "store/slices/treeSlice";

export const ModalError: FC<ModalErrorType> = ({error}) => {
    const dispatch = useDispatch<AppDispatch>()

    const handleRemoveError = () => {
        dispatch(removeErrorMessageAC(null))
    }
    return (<div className="modal_bg">
        <div className="modal modal_error">
            <h3>Error: {error}</h3>
            <button onClick={handleRemoveError}>Ok</button>
        </div>
    </div>)
}
type ModalErrorType = {
    error: string
}