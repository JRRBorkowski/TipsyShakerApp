
const isEveryRequiredIngredientAvailable = (requirements, available) => {
    return requirements.every(requiredIngredient => available.includes(requiredIngredient))
}

export default isEveryRequiredIngredientAvailable