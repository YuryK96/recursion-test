import {FC} from 'react';
import {useSelector} from 'react-redux';
import {
    isMutationPendingSelector,
} from 'store/selectors/selectors';

export const Loader: FC = () => {
    const isPendingMutation = useSelector(isMutationPendingSelector);
    return (
        <div
            style={{display: isPendingMutation ? 'flex' : 'none'}}
            className="pending"
        >
            <span className="loader"></span>
        </div>
    );
};