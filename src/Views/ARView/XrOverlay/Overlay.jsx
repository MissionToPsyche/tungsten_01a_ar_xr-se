import { createContext } from "react";

const OverlayContext = createContext({});

export const OverlayProvider = (props) => {
  return (
    <>
      <OverlayContext.Provider
        value={{

        }}
      >
        {props.children}
      </OverlayContext.Provider>
    </>
  );
};