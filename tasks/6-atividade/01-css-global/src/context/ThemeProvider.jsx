import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

const ThemeStorageKey = "prefers-theme";

const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getStoredTheme = () => {
  try {
    return localStorage.getItem(ThemeStorageKey) || "system";
  } catch {
    return "system";
  }
}

const setStoredTheme = (theme) => {
  try {
    localStorage.setItem(ThemeStorageKey, theme);
  } catch(err) {
    throw new Error("Failed to store theme preference", { cause: err });
  }
}

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(getStoredTheme);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    setStoredTheme(themeMode)
  }, [themeMode])

  const currentTheme = themeMode === "system" ? systemTheme : themeMode;

  const toggleTheme = useCallback(() => {
    setThemeMode((currentTheme) => {
      if (currentTheme === "system") return "light";
      if (currentTheme === "light") return "dark";
      return "system";
    });
  }, []);

  const value = useMemo(
    () => ({
      theme: currentTheme,
      themeMode,
      toggleTheme,
      setThemeMode,
    }),
    [currentTheme, themeMode, toggleTheme, setThemeMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};
