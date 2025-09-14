import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null)


const getSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
}

export function ThemeProvider({ children }) {
    const [themeMode, setThemeMode] = useState('system')
    const [systemTheme, setSystemTheme] = useState(getSystemTheme())

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            setSystemTheme(e.matches ? 'dark' : 'light')
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [])

    const currentTheme = themeMode === 'system' ? systemTheme : themeMode;

    const toggleTheme = useCallback(() => {
        setThemeMode((currentTheme) => {
            if (currentTheme === 'system') return 'light';
            if(currentTheme === 'light') return 'dark';
            return 'system';
        })
    }, [])

    const value = useMemo(() => ({
        theme: currentTheme,
        themeMode,
        toggleTheme,
        setThemeMode
    }), [currentTheme, themeMode, toggleTheme])

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
} 

export const useTheme = () => {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error('useTheme must be used within an themeContext!') 
    return ctx;
}