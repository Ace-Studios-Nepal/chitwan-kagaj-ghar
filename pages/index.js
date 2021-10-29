import styles from '../styles/Home.module.css';
import CarouselImage from './api/models/carousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <CarouselImage />
      <CarouselImage />
      <CarouselImage />
      <CarouselImage />
    </div>
  );
}
