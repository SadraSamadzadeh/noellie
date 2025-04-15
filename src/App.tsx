import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import { useState } from 'react';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './globalStyles';
function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
    <Navbar isDark={isDark} toggleTheme={toggleTheme}></Navbar>
    </ThemeProvider>
    </>
  )
}

export default App
