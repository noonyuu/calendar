import React from "react";

export const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
});
