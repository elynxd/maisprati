import { useTheme } from "../../context/ThemeProvider.jsx";
import styled from 'styled-components';

const Select = styled.select`
  border-radius: 8px;
  border: 1px solid var(--border-color);
  padding: 0.4em 1em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--select-bg);
  color: var(--select-text);
  cursor: pointer;
  transition: border-color 0.25s, background-color 0.3s ease;

  &:hover {
    border-color: var(--link-color);
  }
`;

export const ThemeToggle = () => {
  const { theme, themeMode, setThemeMode } = useTheme();

  console.log(themeMode);

  return (
      <Select
        theme={theme}
        value={themeMode}
        onChange={(e) => setThemeMode(e.target.value)}
      >
        <option value="system">Sistema</option>
        <option value="light">Claro</option>
        <option value="dark">Escuro</option>
      </Select>
  );
};
