import {FC} from "react";

export const ConfirmDeleting: FC<ConfirmDeletingType> = () => {
    return (
        <div>
            <h1>Действительно хотите удалить?</h1>
            <button>Да</button>
            <button>Нет</button>
        </div>
    )
}

type ConfirmDeletingType = {}