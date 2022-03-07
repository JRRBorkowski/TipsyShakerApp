import React, {useContext} from "react";
import IngredientsItems from "./_ingredientsListItem";
import IngredientsContext from "./_ingredientsContext";

const IngredientsCategory = ({ingredientsCategory, ingredientsList}) => {
    const {selectedIngredients, setIngredientsState} = useContext(IngredientsContext);

    const handleIngredientsSelection = (e) => {
        const newValue = [...selectedIngredients, e.target.value];
        setIngredientsState(newValue);
    }
    return (
        ingredientsCategory.map((ingredientsArr) => {
                return (
                    <label key={ingredientsArr}> Please select {ingredientsArr}
                        <select onChange={handleIngredientsSelection} placeholder={"Please select your ingredients"}>
                            <option disabled selected value>--Please select alcohol--</option>
                            <IngredientsItems ingredients={ingredientsList}/>
                        </select>
                    </label>
                )
            }
        )
    )
}

export default IngredientsCategory