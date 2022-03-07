import React, {useEffect} from "react";

const IngredientsSelectedItems = ({selectedIngredients}) => {
    return (
        <div>
            {selectedIngredients.map((ingredient) => {
                return (
                    <div key={ingredient.name}>
                        {ingredient.name}
                    </div>
                )
            })}
        </div>
    )
}

export default IngredientsSelectedItems