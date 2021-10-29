import styles from '../styles/Home.module.css';
import Hero from './api/models/Hero';
export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
