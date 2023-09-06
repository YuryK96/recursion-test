import { useState } from 'react';

export const useToggleVisibility = (initialState = false) => {
    const [isVisible, setIsVisibility] = useState(initialState);

    const toggle = () => setIsVisibility((prevState) => !prevState);
    return [isVisible, toggle] as const;
};