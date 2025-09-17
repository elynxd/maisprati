import { useTheme } from "../../context/ThemeProvider.jsx";

export const ThemeToggle = () => {
  const { theme, themeMode, setThemeMode } = useTheme();

  console.log(themeMode);

  return (
      <select
        theme={theme}
        value={themeMode}
        onChange={(e) => setThemeMode(e.target.value)}
        className="cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--select-bg)] px-4 py-2 text-base font-medium text-[var(--select-text)] transition-colors duration-300 hover:border-[var(--link-color)]"
      >
        <option value="system">Sistema</option>
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
      </select>
  );
};
