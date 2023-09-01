/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { themeReducer } from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("themeSetting")) || {
  primary: "color-5",
  background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchtheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (buttonClassName) => {
    dispatchtheme({ type: buttonClassName });
  };

  //save theme setting to local storage
  useEffect(() => {
    localStorage.setItem("themeSetting", JSON.stringify(themeState));
  }, [themeState.primary, themeState.background]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

// create cutom hook to use our theme context
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
