import React, {useContext, useState} from "react";
import IngredientsItems from "./_ingredientsListItem";
import IngredientsContext from "./_ingredientsContext";
import style from "../../styles/Ingredients.module.scss"


const IngredientsCategory = ({ingredientsCategory, ingredientsList}) => {
    const {selectedIngredients, setIngredientsState} = useContext(IngredientsContext);
    const [selectedValue, setValue] = useState("defaultValue")

    const handleIngredientsSelection = (selectedValue) => {
        const newValue = [...selectedIngredients, selectedValue.target.value];
        setIngredientsState(newValue);
        setValue("defaultValue");
    }
    const unselectedItems = ingredientsList.filter(ing => !selectedIngredients.includes(ing))
    return (
        <label key={ingredientsCategory} className={style.list}>
            <select onChange={handleIngredientsSelection} defaultValue={"defaultValue"}>
                <option value={"defaultValue"}>--Please select {ingredientsCategory}--</option>
                <IngredientsItems ingredients={unselectedItems}/>
            </select>
        </label>
    )
}

export default IngredientsCategory;