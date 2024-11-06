import { useFonts } from './hooks/useFonts';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { theme } from './theme/theme';
import { fonts } from './constants/fonts';
import { Bars } from 'react-loader-spinner';

function App() {
	const fontsLoaded = useFonts(fonts);

	return fontsLoaded ? (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<SharedLayout />
		</ThemeProvider>
	) : (
		<div style={{ position: 'absolute', top: '50%', left: '50%' }}>
			<Bars
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="bars-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
}

export default App;
