import Popup from '../Popup/Popup';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';
import InputArray from '../InputArray/InputArray';
import useValuesStorage from '@/state/useValuesStorage';
import { addRecipe } from '@/api/cookbook/api';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './RecipeForm.module.css';

export default function RecipeForm({ onClose, recipe }) {
  const [isLoading, setIsLoading] = useState(false);
  const { values, switches, handleChange, setValue, clearAll } =
    useValuesStorage((state) => ({
      values: state.values,
      switches: state.switches,
      handleChange: state.handleChange,
      setValue: state.setValue,
      clearAll: state.clearAll,
    }));
  const router = useRouter();

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
      props: {
        onWheel: (evt) => evt.target.blur(),
      },
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
      props: {
        onWheel: (evt) => evt.target.blur(),
      },
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
          name={`ingredient${index + 1}-name`}
          onChange={handleChange}
          className={styles.ingredientName}
          placeholder='Name'
        />
        <input
          type='number'
          id={`ingredient${index + 1}-amount`}
          name={`ingredient${index + 1}-amount`}
          onChange={handleChange}
          className={styles.ingredientAmount}
          placeholder='#'
        />
        <select
          defaultValue=''
          id={`ingredient${index + 1}-measure`}
          name={`ingredient${index + 1}-measure`}
          onChange={handleChange}
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
          name={`step${index + 1}`}
          onChange={handleChange}
          placeholder={`Step ${index + 1}`}
          className={styles.stepInput}
        />
      </div>
    );
  };

  const submitAdd = (evt) => {
    evt.preventDefault();

    setIsLoading(true);

    const steps = [];
    for (let i = 0; i < 30; i++) {
      if (values[`step${i + 1}`]) {
        steps.push(values[`step${i + 1}`]);
      }
    }
    const ingredients = [];
    for (let i = 0; i < 20; i++) {
      if (values[`ingredient${i + 1}-name`]) {
        ingredients.push({
          name: values[`ingredient${i + 1}-name`],
          amount: values[`ingredient${i + 1}-amount`],
          measure: values[`ingredient${i + 1}-measure`],
        });
      }
    }

    addRecipe(
      {
        title: values.title,
        recipeId: 0,
        time: values.time,
        image: values.image,
        servings: values.servings,
        source: 'myRecipe',
        dairyFree: switches.isDairy || false,
        glutenFree: switches.isGluten || false,
        vegan: switches.isVegan || false,
        vegetarian: switches.isVegetarian || false,
        ingredients: ingredients,
        instructions: steps,
      },
      Cookies.get('jwt')
    )
      .then(() => {
        setIsPopupOpen(false);
        clearAll();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
        router.refresh();
      });
  };

  useEffect(() => {
    if (recipe) {
      const recipeKeys = Object.keys(recipe);
      console.log(recipeKeys);
      recipeKeys.forEach((key) => {
        setValue({ key, value: recipe[key] });
      });
    }
  }, [recipe]);

  return (
    <Popup onClose={onClose}>
      <form onSubmit={submitAdd} className={styles.popup}>
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
        <InputArray element={createIngredient} title='Ingredients' max={20} />
        <InputArray element={createStep} title='Steps' max={30} />
        <button
          type='submit'
          className={`${styles.saveButton} ${
            isLoading && styles.saveButtonLoading
          }`}
        >
          <Image src='/chef.svg' alt="chef's hat" width={24} height={24} />
          {isLoading ? 'Saving...' : 'Done!'}
        </button>
      </form>
    </Popup>
  );
}
