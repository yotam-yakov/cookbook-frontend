'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Add.module.css';
import Popup from '../Popup/Popup';
import InputArray from '../InputArray/InputArray';
import Switch from '../Switch/Switch';
import Input from '../Input/Input';

export default function Add() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const inputs = [
    {
      id: 'title',
      title: 'Title',
      type: 'text',
      placeholder: 'Give your recipe a title',
      style: styles.input,
    },
    {
      id: 'time',
      title: 'Time',
      type: 'number',
      placeholder: 'How much time does it take?',
      style: styles.input,
    },
    {
      id: 'image',
      title: 'Image',
      type: 'text',
      placeholder: 'You can link an image',
      style: styles.input,
    },
    {
      id: 'servings',
      title: 'Dishes',
      type: 'number',
      placeholder: 'How many dishes?',
      style: styles.input,
    },
  ];

  const createIngredient = (index) => {
    return (
      <div
        id={`ingredient${index + 1}`}
        key={index}
        className={styles.ingredient}
      >
        <input
          type='text'
          id={`ingredient${index + 1}-name`}
          className={styles.ingredientName}
          placeholder='Name'
        />
        <input
          type='number'
          id={`ingredient${index + 1}-amount`}
          className={styles.ingredientAmount}
          placeholder='#'
        />
        <select
          defaultValue=''
          id={`ingredient${index + 1}-measure`}
          name={`ingredient${index + 1}-measure`}
          className={styles.ingredientMeasure}
        >
          <option value='' hidden>
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
  };

  const createStep = (index) => {
    return (
      <div className={styles.step}>
        <textarea
          key={index}
          id={`step${index + 1}`}
          placeholder={`Step ${index + 1}`}
          className={styles.stepInput}
        />
      </div>
    );
  };

  return (
    <div className={styles.add}>
      <button onClick={() => setIsPopupOpen(true)} className={styles.toggle}>
        <Image src='/plus.svg' alt='add recipe button' width={40} height={40} />
      </button>
      {isPopupOpen && (
        <Popup onClose={() => setIsPopupOpen(false)}>
          <form className={styles.popup}>
            {inputs.map((input, index) => {
              return <Input input={input} key={index} />;
            })}
            <h2 className={styles.title}>Add Your Own Recipe</h2>
            <div className={styles.diets}>
              <Switch id='isDairy'>
                <Image
                  src='/dairy.svg'
                  alt='dairy icon'
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Dairy Free
              </Switch>
              <Switch id='isGluten'>
                <Image
                  src='/gluten.svg'
                  alt='gluten icon'
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Gluten Free
              </Switch>
              <Switch id='isVegan'>
                <Image
                  src='/vegan.svg'
                  alt='vegan icon'
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Vegan
              </Switch>
              <Switch id='isVegetarian'>
                <Image
                  src='/vegetarian.svg'
                  alt='vegetarian icon'
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                Vegetarian
              </Switch>
            </div>
            <InputArray element={createIngredient} title='Ingredients' />
            <InputArray element={createStep} title='Steps' />
            <button type='button' className={styles.saveButton}>
              <Image src='/chef.svg' alt="chef's hat" width={24} height={24} />
              Done!
            </button>
          </form>
        </Popup>
      )}
    </div>
  );
}
