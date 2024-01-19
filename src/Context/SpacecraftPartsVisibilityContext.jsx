import React, { createContext, useState, useContext } from 'react';

const SpacecraftContext = createContext();

export const useSpacecraftContext = () => useContext(SpacecraftContext);

export const SpacecraftProvider = ({ children }) => {
    const [spacecraftPartsVisibility, setSpacecraftPartsVisibility] = useState({
        leftWing: false,
        rightWing: false,
        gammaRay: false,
        neutronSpectrometer: false,
        antenna: false,
        bus: false,
    });

    const value = {
        spacecraftPartsVisibility,
        setSpacecraftPartsVisibility
    };

    return (
        <SpacecraftContext.Provider value={value}>
            {children}
        </SpacecraftContext.Provider>
    );
};
