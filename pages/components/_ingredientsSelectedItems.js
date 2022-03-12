import React, {useCallback, useContext} from "react";
import style from "../../styles/Ingredients.module.scss"
import IngredientsContext from "./_ingredientsContext";


const IngredientsSelectedItems = () => {
    const {selectedIngredients, setIngredientsState} = useContext(IngredientsContext);

    return (
        <div className={style.selectedList}>
            <p className={style.selectedTitle}>Selected ingredients:</p>
            {selectedIngredients.map((ingredient, index) => {
                const deleteFromSelectedList = () => {
                    const targetSelectedItem = selectedIngredients.indexOf(ingredient);
                    const selectedIngredientsCopy = [...selectedIngredients];
                    selectedIngredientsCopy.splice(targetSelectedItem, 1);
                    setIngredientsState(selectedIngredientsCopy);
                }
                return (
                    <div key={`${ingredient}-${index}`} className={style.selectedItem}>
                        <div className={style.selectedItemText}>
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