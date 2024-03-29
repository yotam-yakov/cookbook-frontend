import Image from 'next/image';
import { useState } from 'react';
import styles from './Search.module.css';
import useValuesStorage from '@/state/useValuesStorage';
import useRecipeStorage from '@/state/useRecipeStorage';
import useMessageStorage from '@/state/useMessageStorage';
import { submitSearch } from '@/api/spoonacular';
import { signIn } from '@/api/cookbook';
import Cookies from 'js-cookie';

export default function Search() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setMessageProps = useMessageStorage((state) => state.setMessageProps);
  const { values, switches, handleChange, handleSwitches } = useValuesStorage(
    (state) => ({
      values: state.values,
      switches: state.switches,
      handleChange: state.handleChange,
      handleSwitches: state.handleSwitches,
    })
  );
  const setSearchResults = useRecipeStorage((state) => state.setSearchResults);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    console.log(signIn);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setSearchResults([]);

    const search = {
      query: values.search,
      diet: `${switches.vegan ? 'vegan,' : ''}${
        switches.vegetarian ? 'vegetarian' : ''
      }`,
      intolerances: `${switches.dairy ? 'dairy,' : ''}${
        switches.gluten ? 'gluten' : ''
      }`,
      maxReadyTime: values.time ? values.time : undefined,
    };
    const cookie = Cookies.get('savedRecipes');

    submitSearch(search)
      .then((recipes) => {
        if (recipes.length === 0) {
          setSearchResults(['empty']);
          return;
        }
        if (cookie) {
          recipes.forEach((recipe) => {
            if (JSON.parse(cookie).includes(recipe.recipeId)) {
              recipe.saved = true;
            }
          });
        }
        console.log(recipes);
        setSearchResults(recipes);
        setIsFilterOpen(false);
      })
      .catch((err) => {
        setMessageProps({
          message: `Search could not be completed. Message: '${
            err.response ? err.response.data.message : 'Client Side Error'
          }'`,
          isError: true,
          onClose: () => {},
        });
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={`${styles.search}  ${isLoading && styles.searchLoading}`}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          value={values.search || ''}
          onChange={handleChange}
          type='text'
          id='search'
          name='search'
          placeholder='I am hungry...'
          autoComplete='off'
          className={styles.query}
          required
        />
        <button type='button' onClick={toggleFilter} className={styles.button}>
          <Image src='/filter.svg' alt='Filter icon' width={28} height={28} />
        </button>
        <button type='submit' className={styles.button}>
          <Image src='/search.svg' alt='Search icon' width={44} height={44} />
        </button>
        <div
          className={`${styles.filter} ${isFilterOpen && styles.filterOpen}`}
        >
          <label htmlFor='time' className={styles.label}>
            <Image
              src='/clock.svg'
              alt='Time icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Max Time to make
          </label>
          <input
            type='number'
            onChange={handleChange}
            name='time'
            id='time'
            min='5'
            max='240'
            placeholder='Minutes'
            className={styles.input}
          />
          <label htmlFor='dairy' className={styles.label}>
            <Image
              src='/dairy.svg'
              alt='Dairy icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Dairy Free
          </label>
          <input
            type='checkbox'
            name='dairy'
            onChange={handleSwitches}
            className={styles.input}
            id='dairy'
          />
          <label htmlFor='gluten' className={styles.label}>
            <Image
              src='/gluten.svg'
              alt='Gluten icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Gluten Free
          </label>
          <input
            type='checkbox'
            name='gluten'
            onChange={handleSwitches}
            className={styles.input}
            id='gluten'
          />
          <label htmlFor='vegan' className={styles.label}>
            <Image
              src='/vegan.svg'
              alt='Vegan icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Vegan
          </label>
          <input
            type='checkbox'
            name='vegan'
            onChange={handleSwitches}
            className={styles.input}
            id='vegan'
          />
          <label htmlFor='vegetarian' className={styles.label}>
            <Image
              src='/vegetarian.svg'
              alt='Vegetarian icon'
              width={32}
              height={32}
              className={styles.icon}
            />
            Vegetarian
          </label>
          <input
            type='checkbox'
            name='vegetarian'
            onChange={handleSwitches}
            className={styles.input}
            id='vegetarian'
          />
        </div>
      </form>
    </div>
  );
}
