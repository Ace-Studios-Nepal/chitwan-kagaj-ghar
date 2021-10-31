import styles from '../styles/Home.module.css';
import Hero from './api/models/Hero';
import Services from './services';
import Products from './products';
import About from './about';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <br />
      <hr />
      <br />
      <Services />
      <br />
      <hr />
      <br />
      <Products />
      <br />
      <hr />
      <br />
      <About />
    </div>
  );
}
