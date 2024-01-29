import React, { createContext, useState } from 'react';

export const SpacecraftContext = createContext();

export const SpacecraftProvider = ({ children }) => {
    // Initialize all components as inactive
    const [activeComponents, setActiveComponents] = useState({
        BUS: false,
        RIGHT_WING: false,
        LEFT_WING: false,
        ANTENNA: false,
        NEUTRON_SPECTROMETER: false,
        GAMMA_RAY: false,
    });

    const activateComponent = (component, isActive) => {
        setActiveComponents(prev => ({ ...prev, [component]: isActive }));
    };

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
