import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      Cookbook was created by Yotam Yakov
      <Link href='/feedback' prefetch={false} className={styles.link}>
        Send Feedback
      </Link>
    </div>
  );
}
