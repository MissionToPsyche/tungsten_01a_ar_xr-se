// ARContext.js
import React, { createContext, useContext, useRef } from 'react';

const ARContext = createContext();

export const useARContext = () => {
  return useContext(ARContext);
};

export const ARContextProvider = ({ children }) => {
  const arViewRef = useRef(null);

  return (
    <ARContext.Provider value={arViewRef}>
      {children}
    </ARContext.Provider>
  );
};
