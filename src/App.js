import { useSelector } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import { selectIsDarkMode } from './components/Header/Switch/themeSlice';
import PersonalHomepage from './features/Homepage';
import { useEffect } from 'react';

function App() {
  const isDarkMode = useSelector(selectIsDarkMode)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
