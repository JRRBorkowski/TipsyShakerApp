import React, {useContext, useEffect} from "react";
import IngredientsItems from "./_ingredientsListItem";
import {alcohols, garnish, mixers} from "./_ingredientsList";
import IngredientsContext from "./_ingredientsContext";
import IngredientsSelectedItems from "./_ingredientsSelectedItems";
import IngredientsCategory from "./_ingredientsCategoryFilter";
import style from "../../styles/Ingredients.module.scss"

const Ingredients = () => {
    const {selectedIngredients, setIngredientsState} = useContext(IngredientsContext);
    const handleIngredientsSelection = (e) => {
        const newValue = [...selectedIngredients, e.target.value];
        setIngredientsState(newValue);
    }
    const ingredientsCategories = ["alcohol", "mixer", "garnish"]

    return (
        <div className={style.container}>
            <div>Please select your ingredients</div>
            <IngredientsCategory ingredientsList={alcohols} ingredientsCategory={ingredientsCategories[0]}/>
            <IngredientsCategory ingredientsList={mixers} ingredientsCategory={ingredientsCategories[1]}/>
            <IngredientsCategory ingredientsList={garnish} ingredientsCategory={ingredientsCategories[2]} />
            <IngredientsSelectedItems selectedIngredients={selectedIngredients}/>
        </div>
    )
}

export default Ingredients