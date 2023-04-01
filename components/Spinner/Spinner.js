import { Fragment } from 'react';
import styles from './Spinner.module.css';

export default function Spinner() {
  return (
    <Fragment>
      <div className={styles.spinnerWrap}>
        <div className={styles.spinner}></div>
      </div>
    </Fragment>
  );
}
