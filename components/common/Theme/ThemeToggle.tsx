import styled, { useTheme } from "styled-components";
import { useToggleTheme } from "../../../styles/theme";
import Toggle from "./Toggle";

const ThemeToggle = () => {
  const theme = useTheme();
  const { toggleTheme } = useToggleTheme();
  return <Toggle onChange={toggleTheme} checked={theme.mode === "dark"} />;
};

const ToggleWrapper = styled.div``;

export default ThemeToggle;
