import React, {useContext, useEffect} from "react";
import {alcohols, garnish, mixers} from "./_ingredientsList";
import IngredientsContext from "./_ingredientsContext";
import IngredientsSelectedItems from "./_ingredientsSelectedItems";
import IngredientsCategory from "./_ingredientsCategoryFilter";
import style from "../../styles/Ingredients.module.scss"
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";

const Ingredients = () => {
    const {selectedIngredients, setIngredientsState} = useContext(IngredientsContext);
    const handleIngredientsSelection = (e) => {
        const newValue = [...selectedIngredients, e.target.value];
        setIngredientsState(newValue);
    }
    const ingredientsCategories = ["alcohol", "mixer", "garnish"]

    return (
        <div className={style.container}>
            <div className={style.title}>Please select your ingredients</div>
            <Accordion className={style.accordion}>
                <AccordionSummary>Alcohols</AccordionSummary>
                <AccordionDetails>
                    <IngredientsCategory ingredientsList={alcohols} ingredientsCategory={ingredientsCategories[0]}/>
                </AccordionDetails>
            </Accordion>
            <Accordion className={style.accordion}>
                <AccordionSummary>Mixers</AccordionSummary>
                <AccordionDetails>
                    <IngredientsCategory ingredientsList={mixers} ingredientsCategory={ingredientsCategories[0]}/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary className={style.accordion}>Garnishes</AccordionSummary>
                <AccordionDetails>
                    <IngredientsCategory ingredientsList={garnish} ingredientsCategory={ingredientsCategories[0]}/>
                </AccordionDetails>
            </Accordion>
            <IngredientsSelectedItems className={"hello"} selectedIngredients={selectedIngredients}/>
        </div>
    )
}

export default Ingredients