const convertTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60 >= 10 ? time % 60 : `0${time % 60}`;

  return `${hours}:${minutes}`;
};

const convertIngredients = (ingredients) => {
  const newIngredients = ingredients.map((item) => {
    return {
      name: item.originalName,
      amount: item.measures.metric.amount,
      measure: item.measures.metric.unitShort,
    };
  });

  return newIngredients;
};

const convertInstructions = (instructions) => {
  let newInstructions = [];
  for (let i = 0; i < instructions.length; i++) {
    newInstructions = [...newInstructions, instructions[i].steps];
  }
  newInstructions = newInstructions.flat().map((item) => item.step);

  return newInstructions;
};

const convertRecipe = (recipe) => {
  const {
    id,
    title,
    image,
    readyInMinutes,
    servings,
    sourceName,
    dairyFree,
    glutenFree,
    vegan,
    vegetarian,
    extendedIngredients,
    analyzedInstructions,
  } = recipe;

  const newRecipe = {
    title: title,
    recipeId: id,
    image: image,
    time: convertTime(readyInMinutes),
    servings: servings,
    source: sourceName,
    dairyFree: dairyFree,
    glutenFree: glutenFree,
    vegan: vegan,
    vegetarian: vegetarian,
    ingredients: convertIngredients(extendedIngredients),
    instructions: convertInstructions(analyzedInstructions),
  };

  return newRecipe;
};

export default { convertRecipe, convertTime };
