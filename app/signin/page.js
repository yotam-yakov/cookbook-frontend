import '../globals.css';
import styles from './Signin.module.css';

export default function SignIn() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign In</h2>
      <form className={styles.form}>
        <label htmlFor='username' className={styles.label}>
          Username
        </label>
        <input
          type='text'
          id='username'
          placeholder='Username'
          autoComplete='off'
          className={styles.input}
        />
        <label htmlFor='password' className={styles.label}>
          Password
        </label>
        <input
          type='password'
          id='password'
          placeholder='Password'
          autoComplete='off'
          className={styles.input}
        />
        <button type='submit' className={styles.submit}>
          Log In
        </button>
      </form>
    </div>
  );
}
