import { useSelector } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import { selectIsDarkMode } from './components/Header/Switch/themeSlice';
import PersonalHomepage from './features/Homepage';

function App() {
  const isDarkMode = useSelector(selectIsDarkMode)
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
