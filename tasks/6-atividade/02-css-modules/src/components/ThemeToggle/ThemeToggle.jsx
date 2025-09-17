import { useTheme } from "../../context/ThemeProvider.jsx";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, themeMode, setThemeMode } = useTheme();

  console.log(themeMode);

  return (
      <select
        theme={theme}
        className={styles.select}
        value={themeMode}
        onChange={(e) => setThemeMode(e.target.value)}
      >
        <option value="system">Sistema</option>
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
      </select>
  );
};
