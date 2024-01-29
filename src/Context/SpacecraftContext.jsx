import React, { createContext, useState } from 'react';

// Create the context
export const SpacecraftContext = createContext();

export const SpacecraftProvider = ({ children }) => {
    const [activeComponents, setActiveComponents] = useState({});

    const activateComponent = (component, isActive) => {
        setActiveComponents(prev => ({ ...prev, [component]: isActive }));
    };

    // The value that will be supplied to any components
    const contextValue = {
        activeComponents,
        activateComponent,
    };

    return (
        <SpacecraftContext.Provider value={contextValue}>
            {children}
        </SpacecraftContext.Provider>
    );
};
