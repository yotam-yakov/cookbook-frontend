import Image from 'next/image';
import styles from './Add.module.css';
import Popup from '../Popup/Popup';
import React from 'react';

export default function Add() {
  let ingredients = 3;
  let steps = 3;

  return (
    <div className={styles.container}>
      <button className={styles.toggle}>
        <Image src='/plus.svg' alt='add recipe button' width={40} height={40} />
      </button>
      <Popup>
        <form className={styles.popup}>
          <h2 className={styles.title}>Add Your Own Recipe</h2>
          <label htmlFor='title' className={styles.label}>
            Title
          </label>
          <input
            type='text'
            id='title'
            placeholder='Give your recipe a title'
            className={styles.input}
          />
          <label htmlFor='time' className={styles.label}>
            Time
          </label>
          <input
            type='number'
            id='time'
            min='5'
            max='240'
            placeholder='Minutes'
            className={styles.input}
          />
          <label htmlFor='image' className={styles.label}>
            Image (optional)
          </label>
          <input
            type='text'
            id='image'
            placeholder='URL'
            className={styles.input}
          />
          <div className={styles.diets}>
            <label className={styles.switch}>
              <input type='checkbox' id='isDairy' className={styles.checkbox} />
              <span className={styles.slider}>
                <Image
                  src='/dairy.svg'
                  alt='dairy icon'
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Dairy Free
              </span>
            </label>
            <label className={styles.switch}>
              <input
                type='checkbox'
                id='isGluten'
                className={styles.checkbox}
              />
              <span className={styles.slider}>
                <Image
                  src='/gluten.svg'
                  alt='gluten icon'
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Gluten Free
              </span>
            </label>
            <label className={styles.switch}>
              <input type='checkbox' id='isVegan' className={styles.checkbox} />
              <span className={styles.slider}>
                <Image
                  src='/vegan.svg'
                  alt='vegan icon'
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Vegan
              </span>
            </label>
            <label className={styles.switch}>
              <input
                type='checkbox'
                id='isVegetarian'
                className={styles.checkbox}
              />
              <span className={styles.slider}>
                <Image
                  src='/vegetarian.svg'
                  alt='vegetarian icon'
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Vegetarian
              </span>
            </label>
          </div>
          <div className={styles.ingredients}>
            <label className={styles.label}>Ingredients</label>
            {[...Array(ingredients)].map((e, i) => {
              return (
                <div
                  id={`ingredient${i + 1}`}
                  key={i}
                  className={styles.ingredient}
                >
                  <input
                    type='text'
                    id={`ingredient${i + 1}-name`}
                    className={styles.ingredientName}
                    placeholder='Name'
                  />
                  <input
                    type='number'
                    id={`ingredient${i + 1}-amount`}
                    className={styles.ingredientAmount}
                    placeholder='#'
                  />
                  <select
                    id={`ingredient${i + 1}-measure`}
                    name={`ingredient${i + 1}-measure`}
                    className={styles.ingredientMeasure}
                  >
                    <option value='' disabled hidden selected>
                      Units
                    </option>
                    <option value='tsp'>tsp</option>
                    <option value='tbsp'>tbsp</option>
                    <option value='cups'>cups</option>
                    <option value='g'>g</option>
                    <option value='kg'>kg</option>
                    <option value='ml'>ml</option>
                    <option value='l'>l</option>
                    <option value='oz'>oz</option>
                    <option value='lb'>lb</option>
                    <option value='pinch'>pinch</option>
                    <option value='pcs'>pcs</option>
                  </select>
                </div>
              );
            })}
            <button type='button' className={styles.addButton}>
              <Image
                src='/plus.svg'
                alt='add recipe button'
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className={styles.steps}>
            <label className={styles.label}>Steps</label>
            {[...Array(steps)].map((e, i) => {
              return (
                <div className={styles.step}>
                  {i + 1}
                  <textarea
                    key={i}
                    id={`step${i + 1}`}
                    className={styles.stepInput}
                  />
                </div>
              );
            })}
            <button type='button' className={styles.addButton}>
              <Image
                src='/plus.svg'
                alt='add recipe button'
                width={24}
                height={24}
              />
            </button>
          </div>
          <button type='button' className={styles.saveButton}>
            <Image src='/chef.svg' alt="chef's hat" width={24} height={24} />
            Done!
          </button>
        </form>
      </Popup>
    </div>
  );
}
