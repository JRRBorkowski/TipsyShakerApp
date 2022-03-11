
class Recipe {
    constructor(name, image, desc, alcohol, mixer, garnish, trivia) {
        this.name = name;
        this.image = image;
        this.desc = desc;
        this.alcohols = alcohol;
        this.mixers = mixer;
        this.garnish = garnish;
        this.trivia = trivia;
        this.concatIntoIngredientsArray();
    }
    concatIntoIngredientsArray = () => {
        const convertToIngredientsString = (recipeIngredientsCategory) => {
            return recipeIngredientsCategory.map((recipeIngredients) => {
                return recipeIngredients
            })
        }
        const ingredientsStringsArray = [];
        return this.allIngredients = ingredientsStringsArray.concat(
            convertToIngredientsString(this.alcohols),
            convertToIngredientsString(this.mixers),
            convertToIngredientsString(this.garnish)
        )
    }
}

export default Recipe;