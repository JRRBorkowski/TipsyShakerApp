import React, {useCallback, useContext} from "react";
import style from "../../styles/Ingredients.module.scss"
import IngredientsContext from "./_ingredientsContext";


const IngredientsSelectedItems = () => {
    const {selectedIngredients, setIngredientsState} = useContext(IngredientsContext);

    return (
        <div className={style.selectedList}>
            Selected items:
            {selectedIngredients.map((ingredient, index) => {
                const deleteFromSelectedList = () => {
                    const targetSelectedItem = selectedIngredients.indexOf(ingredient);
                    const selectedIngredientsCopy = [...selectedIngredients];
                    selectedIngredientsCopy.splice(targetSelectedItem, 1);
                    setIngredientsState(selectedIngredientsCopy);
                }
                return (
                    <div key={`${ingredient}-${index}`} className={style.selectedItem}>
                        <div>
                            {ingredient}
                        </div>
                        <div className={style.deleteButton} onClick={deleteFromSelectedList}>
                            X
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default IngredientsSelectedItems