import React from "react";
import style from "../../styles/DrinksList.module.scss";

export const DrinksListItem = ({recipe}) => {
    return (
        <li key={recipe.name} className={style.listItem}>
            <ul>
                <h2 className={style.title}>{recipe.name}</h2>
                <img src={recipe.image} className={style.image}></img>
                <ul> <h3>Alcohols:</h3>
                    {recipe.alcohols.map((ing) => {
                            return (
                                <li key={ing} className={style.ingredients}>{ing}</li>
                            )
                        }
                    )
                    }
                </ul>
                <ul> <h3>Mixers:</h3>
                    {recipe.mixers.map((ing) => {
                            return (
                                <li key={ing} className={style.ingredients}>{ing}</li>
                            )
                        }
                    )
                    }</ul>
                <ul> <h3>Garnishes:</h3>
                    {recipe.garnish.map((ing) => {
                            return (
                                <li key={ing} className={style.ingredients}>{ing}</li>
                            )
                        }
                    )
                    }
                </ul>
                <li><p className={style.description}>{recipe.desc}</p></li>
                <li><p className={style.trivia}>{recipe.trivia}</p></li>
            </ul>
        </li>
    )
}