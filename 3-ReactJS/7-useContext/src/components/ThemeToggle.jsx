import { useTheme } from "../context/themeProvider";

export function ThemeToggle() {
    const { theme, themeMode, toggleTheme } = useTheme()

    return (
        <>
            <select theme={theme} value={themeMode} onChange={(e) => toggleTheme(e.target.value)}>
                <option value="system">Sistema</option>
                <option value="light">Claro</option>
                <option value="dark">Escuro</option>
            </select>
        </>
    )
}