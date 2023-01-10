import Image from 'next/image';
import styles from './Search.module.css';

export default function Search() {
  return (
    <div className={styles.container}>
      search
      <Image src='/search.svg' alt='Search icon' width={36} height={36} />
    </div>
  );
}
