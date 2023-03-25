import { Fragment } from 'react';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <Fragment>
      <div className={styles.loadingWrap}>
        <div className={styles.loading}></div>
      </div>
    </Fragment>
  );
}
