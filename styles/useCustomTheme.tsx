import { createTheming } from "@callstack/react-theme-provider";
import React, { useEffect, useReducer, useState } from "react";

const themeLocalStorageKey = "theme";

type ThemeMode = "light" | "dark";

type Theme = {
  primaryColor: string;
  textColor: string;
  secondaryTextColor: string;
  backgroundColor: string;
};

const THEME: { light: Theme; dark: Theme } = {
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

const { ThemeProvider, useTheme } = createTheming(THEME.light);

const useCustomTheme = () => {
  const [theme, changeTheme] = useReducer((prev) => {
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
      changeTheme();
    }
  }, []);

  return {
    theme,
    changeTheme,
  };
};

type Prop = {
  children: React.ReactNode;
};

const CustomThemeProvider = ({ children }: Prop) => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme === "light" ? THEME.light : THEME.dark}>
      {children}
    </ThemeProvider>
  );
};

export { CustomThemeProvider, useTheme };
