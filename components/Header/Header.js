import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.logo} href='/' prefetch={false}>
        <Image
          src='/cookbook.png'
          alt='Cookbook Logo'
          width={56}
          height={56}
          priority
        />
        Cookbook
      </Link>
      <div className={styles.navbar}>
        <Link
          href='/myrecipes'
          prefetch={false}
          className={`${styles.link} ${styles.click}`}
        >
          My Recipes
        </Link>
        <Link
          href='https://google.com/'
          target='__blank'
          className={`${styles.link} ${styles.click}`}
        >
          Link 2
        </Link>
        <Link
          href='https://google.com/'
          target='__blank'
          className={`${styles.link} ${styles.click}`}
        >
          Link 3
        </Link>
        <Image
          src='/logged-out.svg'
          alt='logged out icon'
          width={40}
          height={40}
          className={`${styles.account} ${styles.click}`}
        />
        <Image
          src='/logged-in.svg'
          alt='logged in icon'
          width={40}
          height={40}
          className={`${styles.account} ${styles.click}`}
        />
      </div>
    </div>
  );
}
