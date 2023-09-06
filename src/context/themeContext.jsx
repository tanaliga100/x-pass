import React, { createContext, useContext } from "react";

// type Theme = "light" | "dark";
// // types
// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// create context
const ThemeContext = createContext(undefined);
// create hook
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("Must be within the provider");
  }
  return ctx;
};

// create provider
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  // states and functions
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const values = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
