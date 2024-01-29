
import React, { createContext, useState } from 'react';

export const SpacecraftContext = createContext();

export const SpacecraftProvider = ({ children }) => {
    const [activeComponents, setActiveComponents] = useState({});

    const activateComponent = (component) => {
        setActiveComponents(prev => ({ ...prev, [component]: true }));
    };

    return (
        <SpacecraftContext.Provider value={{ activeComponents, activateComponent }}>
            {children}
        </SpacecraftContext.Provider>
    );
};
