import React, { createContext, useContext, useReducer } from "react";

import { initialState } from "./UserReducer";

export const UserContext = createContext([initialState, () => initialState]);

export const UserProvider = ({ reducer, children, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};