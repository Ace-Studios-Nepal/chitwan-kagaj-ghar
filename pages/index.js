import styles from '../styles/Home.module.css';
import Hero from './api/models/Hero';
import Services from './services';
import Products from './products';
import About from './about';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <hr />
      <Services />
      <hr />
      <Products />
      <hr />
      <About />
    </div>
  );
}
