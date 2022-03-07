import React from "react";

const defaultIngredients = {
    selectedIngredients: [],
    setIngredientsState: () => {    }
}

const IngredientsContext = React.createContext(defaultIngredients);

export default IngredientsContext