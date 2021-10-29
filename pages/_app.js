import Head from 'next/head';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Navbar from './api/models/navbar';
import Footer from './api/models/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chitwan Kagaj</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
