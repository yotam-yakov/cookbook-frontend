import Image from 'next/image';
import Link from 'next/link';
import useUserStorage from '../../state/useUserStorage';
import styles from './Header.module.css';
import cookies from 'js-cookie';

export default function Header() {
  const { isLoggedIn, logOut } = useUserStorage((state) => ({
    isLoggedIn: state.isLoggedIn,
    logOut: state.logOut,
  }));

  const signOut = () => {
    logOut();
    localStorage.removeItem('jwt');
    cookies.remove('jwt');
    window.location.reload();
  };

  return (
    <div className={styles.header}>
      <Link className={styles.logo} href='/'>
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
        {isLoggedIn ? (
          <>
            <Link
              href='/myrecipes'
              className={`${styles.link} ${styles.click}`}
            >
              My Recipes
            </Link>
            <Link
              href='/savedrecipes'
              className={`${styles.link} ${styles.click}`}
            >
              Saved Recipes
            </Link>
            <button
              type='button'
              onClick={signOut}
              className={`${styles.button} ${styles.click}`}
            >
              Log Out
              <Image
                src='/logged-in.svg'
                alt='logged in icon'
                width={40}
                height={40}
                className={styles.account}
              />
            </button>
          </>
        ) : (
          <Link href='/signin' className={`${styles.button} ${styles.click}`}>
            Log In
            <Image
              src='/logged-out.svg'
              alt='logged out icon'
              width={40}
              height={40}
              className={styles.account}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
