import Recipe from "./_drinks";

const parseRecipesDTO = (recipesDTO) => {
    return recipesDTO.map((dtoItem) => {
        return new Recipe(
            dtoItem.name ?? "No item name!",
            dtoItem.image ?? "empty url",
            dtoItem.desc ?? "please fill the item description",
            dtoItem.alcohols ?? [],
            dtoItem.mixers ?? [],
            dtoItem.garnish ?? [],
            dtoItem.trivia ?? "Please fill the trivia")
    })
}

export default parseRecipesDTO