import styles from './Form.module.css';

export default function Form({ title, submit, inputs }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form}>
        {inputs.map((input, index) => {
          return (
            <>
              <label htmlFor={input.id} className={styles.label} key={index}>
                {input.title}
              </label>
              <input
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                autoComplete='off'
                className={styles.input}
                key={index}
              />
            </>
          );
        })}
        <button type='submit' className={styles.submit}>
          {submit}
        </button>
      </form>
    </div>
  );
}
