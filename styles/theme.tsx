import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ThemeProvider } from "styled-components";

const themeLocalStorageKey = "theme";

type Theme = {
  mode: "light" | "dark";
  primaryColor: string;
  textColor: string;
  secondaryTextColor: string;
  backgroundColor: string;
};

const THEMES: { light: Theme; dark: Theme } = {
  light: {
    mode: "light",
    primaryColor: "#312E81",
    textColor: "#0E0D26",
    secondaryTextColor: "#5D5C70",
    backgroundColor: "#F8F9FC",
  },
  dark: {
    mode: "dark",
    primaryColor: "#827FD1",
    textColor: "#F8F9FC",
    secondaryTextColor: "#A6A5B6",
    backgroundColor: "#0E0D26",
  },
};

type ToggleThemeContextType = {
  toggleTheme: () => void;
};

const ToggleThemeContext = createContext<ToggleThemeContextType>({
  toggleTheme: () => {},
});

const useToggleTheme = () => useContext(ToggleThemeContext);

const CustomThemeProvider: React.FC = ({ children }) => {
  const [themeMode, toggleThemeMode] = useReducer((prev) => {
    if (prev === "light") {
      localStorage.setItem(themeLocalStorageKey, "dark");
      return "dark";
    } else {
      localStorage.setItem(themeLocalStorageKey, "light");
      return "light";
    }
  }, "light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme === "dark") {
      toggleThemeMode();
    }
  }, []);

  return (
    <ToggleThemeContext.Provider
      value={{ toggleTheme: () => toggleThemeMode() }}
    >
      <ThemeProvider theme={themeMode === "light" ? THEMES.light : THEMES.dark}>
        {children}
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};

export { useToggleTheme, CustomThemeProvider };
export type { Theme };
