import Head from 'next/head';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import Navbar from './api/models/navbar';
import Footer from './api/models/footer';
import MyDocument from './_document';


function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>
          CKG | Chitwan Kagaz Ghar | The wholeseller of weeding cards and
          printing materials | Nepal | chitwan | narayanghat | press marga
        </title>

        <meta
          name='title'
          content='CKG | Chitwan Kagaz Ghar | The wholeseller of weeding cards and printing materials | Nepal | chitwan | narayanghat | press marga'
        />
        <meta
          name='description'
          content='CKG means Chitwan Kagaz Ghar. The wholeseller of weeding cards and printing materials. we print wedding cards, provide offset printing material, screen printing materials, bending materials and more'
        />
        <meta
          name='keywords'
          content='wedding card, offset printing material, screen printing material, bending material, file and copy udhyog material, painting material, stamp material, mini machinery for printing'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <motion.div
        key={router.route}
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
   
    </>
  );
}

export default MyApp;
