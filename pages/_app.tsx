import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp
