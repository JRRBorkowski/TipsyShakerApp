import React from "react";
import style from "../../styles/DrinksList.module.scss"
import {DrinksListItem} from "./_drinksListItem";

const DrinksList = ({drinks}) => {
    return (
        drinks.map((recipe) => {
                return <DrinksListItem key={recipe.name} recipe={recipe}/>
            }
        )
    )
}

export default DrinksList;