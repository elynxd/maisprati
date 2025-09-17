import { useTheme } from "../context/ThemeProvider.jsx";

export const ThemeToggle = () => {
  const { theme, themeMode, setThemeMode } = useTheme();

  console.log(themeMode);

  return (
      <select
        theme={theme}
        value={themeMode}
        onChange={(e) => setThemeMode(e.target.value)}
      >
        <option value="system">Sistema</option>
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
      </select>
  );
};
