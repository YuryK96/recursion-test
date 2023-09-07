import React from 'react';
import {Tree} from "components/tree/Tree";
import {ModalError} from "components/modalWindows/modals/ModalError";
import {useSelector} from "react-redux";
import {getErrorSelector} from "store/selectors/selectors";
import {Loader} from "components/loader/Loader";


function App() {
    const error = useSelector(getErrorSelector)
    return (
        <div className="App">
            <Tree/>
            {error && <ModalError error={error}/>}
            <Loader/>
        </div>
    );
}

export default App;