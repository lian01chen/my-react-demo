import React from "react";

export const providerContext = React.createContext(null);

export function Provider(props) {
  return (
    <providerContext.Provider value={props.store}>
      {props.children}
    </providerContext.Provider>
  )
}