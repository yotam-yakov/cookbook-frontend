import Popup from '../Popup/Popup';
import Image from 'next/image';
import styles from './Recipe.module.css';
import { useState } from 'react';

export default function Recipe({
  title,
  image,
  time,
  source,
  servings,
  dairy,
  gluten,
  vegan,
  vegetarian,
  ingredients,
  steps,
  onClose,
}) {
  const [dishes, setDishes] = useState(servings);

  const moreServings = () => {
    setDishes(Number(dishes) + 1);
  };

  const lessServings = () => {
    if (dishes != 1) {
      setDishes(Number(dishes) - 1);
    }
  };

  const changeServings = (evt) => {
    setDishes(evt.target.value);
  };

  return (
    <Popup onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <Image src={image} alt='recipe image' fill className={styles.image} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.info}>
          <p className={styles.infoItem}>
            <Image src='/logged-in.svg' alt='source' width={24} height={24} />
            {source}
          </p>
          <p className={styles.infoItem}>
            <Image src='/clock.svg' alt='time' width={24} height={24} />
            {time}
          </p>
        </div>
        <div className={styles.diets}>
          <p className={`${styles.diet} ${dairy ? '' : styles.dietOff}`}>
            <Image src='/dairy.svg' width={28} height={28} />
            Dairy Free
          </p>
          <p className={`${styles.diet} ${gluten ? '' : styles.dietOff}`}>
            <Image src='/gluten.svg' width={28} height={28} />
            Gluten Free
          </p>
          <p className={`${styles.diet} ${vegan ? '' : styles.dietOff}`}>
            <Image src='/vegan.svg' width={28} height={28} />
            Vegan
          </p>
          <p className={`${styles.diet} ${vegetarian ? '' : styles.dietOff}`}>
            <Image src='/vegetarian.svg' width={28} height={28} />
            Vegetarian
          </p>
        </div>
        <div className={styles.dishes}>
          <button
            type='button'
            onClick={lessServings}
            className={styles.button}
          >
            <Image src='/minus.svg' alt='lower number of dishes' fill />
          </button>
          <input
            type='number'
            value={dishes}
            onChange={changeServings}
            className={styles.dishesInput}
          />
          <button
            type='button'
            onClick={moreServings}
            className={styles.button}
          >
            <Image src='/plus.svg' alt='add number of dishes' fill />
          </button>
        </div>
        <div className={styles.ingredients}>
          {ingredients &&
            ingredients.map((ingredient, index) => {
              return (
                <div className={styles.ingredient} key={index}>
                  <p className={styles.iName}>{ingredient.name}</p>
                  <p className={styles.iAmount}>
                    {ingredient.amount * (dishes / servings) +
                      ' ' +
                      ingredient.measure}
                  </p>
                </div>
              );
            })}
        </div>
        <div className={styles.steps}>
          {steps &&
            steps.map((step, index) => {
              return (
                <p className={styles.step} key={index}>
                  {index + 1 + '. ' + step}
                </p>
              );
            })}
        </div>
      </div>
    </Popup>
  );
}
