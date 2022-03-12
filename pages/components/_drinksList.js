import React from "react";
import style from "../../styles/DrinksList.module.scss"
import {DrinksListItem} from "./_drinksListItem";

const DrinksList = ({drinks}) => {
    if (drinks === []) {
        return <div>Get tipsy!</div>
    } else {
        return (
            <div className={style.listBody}>
                <div className={style.listText}>
                    <h2>Get tipsy!</h2>
                    <p>Drinks you can make:</p>
                </div>
                {drinks.map((recipe) => {
                        return <DrinksListItem key={recipe.name} recipe={recipe}/>
                    }
                )
                }
            </div>
        )
    }
}

export default DrinksList;