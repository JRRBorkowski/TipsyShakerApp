import React from "react";
import style from "../../styles/DrinksList.module.scss";

export const DrinksListItem = ({recipe}) => {
    return (
        <li key={recipe.name} className={style.listItem}>
            <ul>
                {recipe.name}
                <li>{recipe.image}</li>
                <li>{recipe.desc}</li>
                <li>{recipe.trivia}</li>
            </ul>
        </li>
    )
}