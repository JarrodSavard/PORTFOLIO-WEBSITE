import Theme from '../styles/theme';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Theme>
				<ParallaxProvider>
					<Component {...pageProps} />
				</ParallaxProvider>
			</Theme>
		</>
	);
}
