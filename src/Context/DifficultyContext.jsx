import React, { createContext, useState } from 'react';

export const DifficultyContext = createContext();

export const DifficultyProvider = ({ children }) => {
    const [difficulty, setDifficulty] = useState('Easy'); // Default difficulty is Easy

    return (
        <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
            {children}
        </DifficultyContext.Provider>
    );
};
