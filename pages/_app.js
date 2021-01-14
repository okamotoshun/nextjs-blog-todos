import '../styles/globals.css';
import 'tailwindcss/tailwind.css'; //tailwindcss 読み込む
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
