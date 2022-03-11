import React from "react";

const IngredientsItems = ({ingredients}) => {
    return (
        ingredients.map((ingredient) => {
            return (
                <option value={ingredient} key={ingredient}>{ingredient}</option>
            )
        })
    )
}

export default IngredientsItems