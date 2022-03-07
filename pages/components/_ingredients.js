import React, {useContext} from "react";
import IngredientsItems from "./_ingredientsListItem";
import {alcohols, garnish, mixers} from "./_ingredientsList";
import IngredientsContext from "./_ingredientsContext";
import IngredientsSelectedItems from "./_ingredientsSelectedItems";
import IngredientsCategory from "./_ingredientsCategoryFilter";

//TODO: dodać pustą wartość selectów
const Ingredients = () => {
    // const [submit, setSubmit] = useState("");
    //
    const {selectedIngredients, setIngredientsState} = useContext(IngredientsContext);
    const handleIngredientsSelection = (e) => {
        const newValue = [...selectedIngredients, e.target.value];
        setIngredientsState(newValue);
    }
    const ingredientsCategories = ["Alcohol", "Mixer"]
    return (
        <div>
            <div>Please select your ingredients</div>
            <IngredientsCategory ingredientsList={alcohols} ingredientsCategory={ingredientsCategories}></IngredientsCategory>
            <label>
                <select onChange={handleIngredientsSelection} placeholder={"Please select your ingredients"}>
                    <option disabled selected value>--Please select alcohol--</option>
                    <IngredientsItems ingredients={alcohols}/>
                </select>
            </label>
            <label>
                <select onChange={handleIngredientsSelection} placeholder={"Please select your ingredients"}>
                    <option disabled selected value>--Please select mixer--</option>
                    <IngredientsItems ingredients={mixers}/>
                </select>
            </label>
            <label>
                <select onChange={handleIngredientsSelection} placeholder={"Please select your ingredients"}>
                    <option disabled selected value>--Please select garnish--</option>
                    <IngredientsItems ingredients={garnish}/>
                </select>
            </label>
            <IngredientsSelectedItems selectedIngredients={selectedIngredients}/>
        </div>
    )
}

export default Ingredients