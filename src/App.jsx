import { useFonts } from './hooks/useFonts';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { theme } from './theme/theme';
import { fonts } from './constants/fonts';

function App() {
  const fontsLoaded = useFonts(fonts);

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SharedLayout />
    </ThemeProvider>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
