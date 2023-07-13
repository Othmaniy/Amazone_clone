import React, { createContext, useContext, useReducer } from "react";

// create context
export const StateContext = createContext();

// wrap and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// get state value
export const useStateValue = () => useContext(StateContext);
