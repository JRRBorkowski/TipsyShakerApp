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
                                <li key={ing}>Type: {ing} Ingredient: {ing}</li>
                        )
                    }
                )
                }
                {recipe.mixers.map((ing) => {
                        return (
                            <li key={ing}>Type:{ing} Ingredient: {ing}</li>
                        )
                    }
                )
                }
                {recipe.garnish.map((ing) => {
                        return (
                            <li key={ing}>Type:{ing} Ingredient: {ing}</li>
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