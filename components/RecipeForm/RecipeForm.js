import Popup from '../Popup/Popup';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';
import InputArray from '../InputArray/InputArray';
import useValuesStorage from '@/state/useValuesStorage';
import { addRecipe, updateRecipe, getSavedRecipes } from '@/api/cookbook/api';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './RecipeForm.module.css';

export default function RecipeForm({ onClose, recipe }) {
  const [isLoading, setIsLoading] = useState(false);
  const { values, switches, handleChange, setValue, setSwitch, clearAll } =
    useValuesStorage((state) => ({
      values: state.values,
      switches: state.switches,
      handleChange: state.handleChange,
      setValue: state.setValue,
      setSwitch: state.setSwitch,
      clearAll: state.clearAll,
    }));
  const router = useRouter();

  const closeForm = () => {
    clearAll();
    onClose();
  };

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
          value={values[`ingredient${index + 1}-name`] || ''}
          type='text'
          id={`ingredient${index + 1}-name`}
          name={`ingredient${index + 1}-name`}
          onChange={handleChange}
          className={styles.ingredientName}
          placeholder='Name'
        />
        <input
          value={values[`ingredient${index + 1}-amount`] || ''}
          type='number'
          id={`ingredient${index + 1}-amount`}
          name={`ingredient${index + 1}-amount`}
          onChange={handleChange}
          className={styles.ingredientAmount}
          placeholder='#'
        />
        <select
          value={values[`ingredient${index + 1}-measure`] || ''}
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
          value={values[`step${index + 1}`]}
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

    const recipeForm = {
      title: values.title,
      recipeId: 0,
      time: values.time,
      image: values.image,
      servings: values.servings,
      source: 'myRecipe',
      dairyFree: switches.dairyFree || false,
      glutenFree: switches.glutenFree || false,
      vegan: switches.vegan || false,
      vegetarian: switches.vegetarian || false,
      ingredients: ingredients,
      instructions: steps,
    };

    if (recipe) {
      const changes = Object.keys(recipeForm).filter(
        (key) => JSON.stringify(recipe[key]) !== JSON.stringify(recipeForm[key])
      );
      const apiData = {};
      changes.forEach((change) => {
        apiData[change] = recipeForm[change];
      });

      if (changes.length === 0) {
        setIsLoading(false);
        onClose();
        clearAll();
      } else {
        updateRecipe(recipe._id, apiData, Cookies.get('jwt'))
          .then(() => {
            onClose();
            clearAll();
            router.refresh();
          })
          .catch((err) => console.error(err))
          .finally(() => setIsLoading(false));
      }
    } else {
      addRecipe(newRecipe, Cookies.get('jwt'))
        .then(() => {
          onClose();
          clearAll();
          router.refresh();
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    if (recipe) {
      ['title', 'image', 'time', 'servings'].forEach((key) => {
        setValue({ key, value: recipe[key] });
      });
      ['dairyFree', 'glutenFree', 'vegan', 'vegetarian'].forEach((key) => {
        setSwitch({ key, value: recipe[key] });
      });
      recipe.instructions.forEach((step, index) => {
        setValue({ key: `step${index + 1}`, value: step });
      });
      recipe.ingredients.forEach((ingredient, index) => {
        setValue({
          key: `ingredient${index + 1}-name`,
          value: ingredient.name,
        });
        setValue({
          key: `ingredient${index + 1}-amount`,
          value: ingredient.amount,
        });
        setValue({
          key: `ingredient${index + 1}-measure`,
          value: ingredient.measure,
        });
      });
      console.log(recipe);
    }
  }, [recipe]);

  return (
    <Popup onClose={closeForm}>
      <form onSubmit={submitAdd} className={styles.popup}>
        {inputs.map((input, index) => {
          return <Input input={input} key={index} />;
        })}
        <h2 className={styles.title}>
          {recipe ? 'Edit Recipe' : 'Add Your Own Recipe'}
        </h2>
        <div className={styles.diets}>
          <Switch id='dairyFree'>
            <Image
              src='/dairy.svg'
              alt='dairy icon'
              width={24}
              height={24}
              className={styles.icon}
            />
            Dairy Free
          </Switch>
          <Switch id='glutenFree'>
            <Image
              src='/gluten.svg'
              alt='gluten icon'
              width={24}
              height={24}
              className={styles.icon}
            />
            Gluten Free
          </Switch>
          <Switch id='vegan'>
            <Image
              src='/vegan.svg'
              alt='vegan icon'
              width={24}
              height={24}
              className={styles.icon}
            />
            Vegan
          </Switch>
          <Switch id='vegetarian'>
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
        <InputArray
          element={createIngredient}
          title='Ingredients'
          max={20}
          init={recipe ? recipe.ingredients.length : undefined}
        />
        <InputArray
          element={createStep}
          title='Steps'
          max={30}
          init={recipe ? recipe.instructions.length : undefined}
        />
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
