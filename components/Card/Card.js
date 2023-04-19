'use client';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';
import { addRecipe, deleteRecipe } from '@/api/cookbook/api';
import useRecipeStorage from '@/state/useRecipeStorage';
import useUserStorage from '@/state/useUserStorage';
import useMessageStorage from '@/state/useMessageStorage';
import styles from './Card.module.css';
import Cookies from 'js-cookie';
import RecipeForm from '../RecipeForm/RecipeForm';

export default function Card({ recipe }) {
  const [isActive, setIsActive] = useState(
    recipe.recipeId === 0 ? true : recipe.saved
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const setRecipe = useRecipeStorage((state) => state.setRecipe);
  const isLoggedIn = useUserStorage((state) => state.isLoggedIn);
  const setMessageProps = useMessageStorage((state) => state.setMessageProps);
  const router = useRouter();
  const pathname = usePathname();
  const jwt = Cookies.get('jwt');

  const saveRecipe = (evt) => {
    evt.stopPropagation();
    if (isLoggedIn) {
      setIsLoading(true);

      delete recipe.saved;

      addRecipe(recipe, jwt)
        .then(() => {
          if (recipe.recipeId !== 0) {
            const recipesIds = JSON.parse(Cookies.get('savedRecipes'));
            if (!recipesIds.includes(recipe.recipeId)) {
              recipesIds.push(recipe.recipeId);
              Cookies.set('savedRecipes', JSON.stringify(recipesIds));
            }
          }
          setIsActive(true);
          router.refresh();
          recipe.saved = true;
        })
        .catch((err) => {
          setMessageProps({
            message: `The request returned an error, try again later.
            Message: '${err.response.data.message}'`,
            isError: true,
            onClose: () => {},
          });
          console.error(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      router.push('/signin');
    }
  };

  const removeRecipe = (evt) => {
    evt.stopPropagation();
    const cardId = recipe.recipeId === 0 ? recipe._id : recipe.recipeId;

    setIsLoading(true);
    deleteRecipe(cardId, jwt)
      .then(() => {
        setIsActive(false);
        if (recipe.recipeId !== 0) {
          const recipesIds = JSON.parse(Cookies.get('savedRecipes'));
          const filteredIds = recipesIds.filter((id) => id !== recipe.recipeId);
          Cookies.set('savedRecipes', JSON.stringify(filteredIds));
          recipe.saved = false;
        }
        if (pathname === 'savedrecipes' || 'myrecipes') {
          router.refresh();
        }
      })
      .catch((err) => {
        setMessageProps({
          message: `The request returned an error, try again later.
          Message: '${err.response.data.message}'`,
          isError: true,
          onClose: () => {},
        });
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  const openRecipe = () => {
    setRecipe(recipe);
  };

  const editRecipe = (evt) => {
    evt.stopPropagation();
    setIsEditOpen(true);
  };

  return (
    <Fragment>
      <div onClick={openRecipe} className={styles.container}>
        <h2
          className={`${styles.title} ${
            recipe.source === 'myRecipe' && styles.titleSmall
          }`}
        >
          {recipe.title}
        </h2>
        {recipe.source === 'myRecipe' && (
          <button
            type='button'
            onClick={editRecipe}
            className={`${styles.button} ${styles.edit}`}
          >
            <Image
              src='/edit.svg'
              alt='Add button'
              width={32}
              height={32}
              className={`${styles.icon}`}
            />
          </button>
        )}
        <Image
          src={recipe.image}
          alt='Recipe image'
          width={264}
          height={120}
          className={styles.image}
        />
        <p className={styles.time}>
          <Image
            src='/clock.svg'
            alt='Time icon'
            width={24}
            height={24}
            className={styles.clock}
          />
          {recipe.time} Min
        </p>
        <p className={styles.source}>{recipe.source}</p>
        <Image
          src='/dairy.svg'
          alt='Dairy icon'
          width={32}
          height={32}
          className={`${styles.diet} ${recipe.dairyFree && styles.dietActive}`}
        />
        <Image
          src='/gluten.svg'
          alt='Gluten icon'
          width={32}
          height={32}
          className={`${styles.diet} ${recipe.glutenFree && styles.dietActive}`}
        />
        <Image
          src='/vegan.svg'
          alt='Vegan icon'
          width={32}
          height={32}
          className={`${styles.diet} ${recipe.vegan && styles.dietActive}`}
        />
        <Image
          src='/vegetarian.svg'
          alt='Vegetarian icon'
          width={32}
          height={32}
          className={`${styles.diet} ${recipe.vegetarian && styles.dietActive}`}
        />
        <button
          type='button'
          onClick={isActive ? removeRecipe : saveRecipe}
          className={`${styles.button} ${isActive && styles.buttonActive}`}
        >
          <Image
            src={isLoggedIn ? '/plus.svg' : '/logged-out.svg'}
            alt='Add button'
            width={32}
            height={32}
            className={`${styles.icon} ${isLoading && styles.loading}`}
          />
          {/* {isLoggedIn ? (
            <Image
              src='/plus.svg'
              alt='Add button'
              width={32}
              height={32}
              className={`${styles.icon} ${isLoading && styles.loading}`}
            />
          ) : (
            <Image
              src='/logged-out.svg'
              alt='logged out button'
              width={32}
              height={32}
              className={`${styles.icon} ${isLoading && styles.loading}`}
            />
          )} */}
        </button>
      </div>
      {isEditOpen && (
        <RecipeForm onClose={() => setIsEditOpen(false)} recipe={recipe} />
      )}
    </Fragment>
  );
}
