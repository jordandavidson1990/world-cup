import { createContext, useContext, useState } from "react";

const Context = createContext();

export function SoulsProvider({ children }) {
  const [souls, setSouls] = useState();
  return (
    <Context.Provider value={[souls, setSouls]}>{children}</Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}
