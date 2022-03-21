import React, { createContext, useEffect, useReducer, useState } from "react";

const themeLocalStorageKey = "theme";

type Theme = {
  primaryColor: string;
  textColor: string;
  secondaryTextColor: string;
  backgroundColor: string;
};

const THEMES: { light: Theme; dark: Theme } = {
  light: {
    primaryColor: "#312E81",
    textColor: "#0E0D26",
    secondaryTextColor: "#5D5C70",
    backgroundColor: "#F8F9FC",
  },
  dark: {
    primaryColor: "#827FD1",
    textColor: "#F8F9FC",
    secondaryTextColor: "#A6A5B6",
    backgroundColor: "#0E0D26",
  },
};

type ThemeContextType = {
  theme: Theme;
  toggleThemeMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: THEMES.light,
  toggleThemeMode: () => {},
});

const ThemeProvider: React.FC = ({ children }) => {
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
    <ThemeContext.Provider
      value={{
        theme: themeMode === "light" ? THEMES.light : THEMES.dark,
        toggleThemeMode: () => toggleThemeMode(),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { useTheme, ThemeProvider };
export type { Theme };
