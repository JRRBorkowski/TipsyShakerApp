import React from "react";

const IngredientsItems = ({ingredients}) => {
    return (
        ingredients.map((ingredient) => {
            return (
                <option value={ingredient.name} key={ingredient.name}>{ingredient.type}: {ingredient.name}</option>
            )
        })
    )
}

export default IngredientsItems