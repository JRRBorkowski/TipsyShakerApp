import React from "react";
import style from "../../styles/DrinksList.module.scss";

export const DrinksListItem = ({recipe}) => {
    return (
        <li key={recipe.name} className={style.listItem}>
            <ul>
                {recipe.name}
                <li>{recipe.image}</li>
                {recipe.alcohols.map((ing) => {
                        return (
                                <li key={ing.type}>Type: {ing.type} Ingredient: {ing.name}</li>
                        )
                    }
                )
                }
                {recipe.mixers.map((ing) => {
                        return (
                            <li key={ing.type}>Type:{ing.type} Ingredient: {ing.name}</li>
                        )
                    }
                )
                }
                {recipe.garnish.map((ing) => {
                        return (
                            <li key={ing.type}>Type:{ing.type} Ingredient: {ing.name}</li>
                        )
                    }
                )
                }
                <li>{recipe.desc}</li>
                <li>{recipe.trivia}</li>
            </ul>
        </li>
    )
}