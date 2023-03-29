import styles from './Switch.module.css';
import useValuesStorage from '../../state/useValuesStorage';

export default function Switch({ id, children }) {
  const handleSwitches = useValuesStorage((state) => state.handleSwitches);
  return (
    <label className={styles.switch}>
      <input
        type='checkbox'
        id={id}
        name={id}
        onChange={handleSwitches}
        className={styles.checkbox}
      />
      <span className={styles.slider}>{children}</span>
    </label>
  );
}
