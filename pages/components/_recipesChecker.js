import isEveryRequiredIngredientAvailable from "./_ingredientsChecker";
import React, {useState} from "react";

const checkAllRecipes = (recipesArray, selectedIngredients, setRecipesState) => {
    let newRecipeArray = [];
    recipesArray.forEach(recipe => {
        if (isEveryRequiredIngredientAvailable(recipe.allIngredients, selectedIngredients)) {
            newRecipeArray = [...newRecipeArray, recipe]
        }
    })
    setRecipesState(newRecipeArray);
}

export default checkAllRecipes