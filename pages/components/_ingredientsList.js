class Ingredient {
    constructor(name, type) {
        this.type = type;
        this.name = name;
    }
}

const alcohol = "alcohol";
const mixer = "mixer"

const vodkaIng = new Ingredient("Vodka", alcohol);
const rumIng = new Ingredient("Rum", alcohol);
const ginIng = new Ingredient("Gin", alcohol);
const wineIng = new Ingredient("Wine", alcohol);
const tequillaIng = new Ingredient("Tequilla", alcohol);
const whiskyIng = new Ingredient("Whisky", alcohol);

const colaIng = new Ingredient("Cola", mixer);
const ojIng = new Ingredient("Orange Juice", mixer);

const lemonIng = new Ingredient("Lemon", "garnish");

const alcohols = [vodkaIng, rumIng, ginIng, wineIng, tequillaIng, whiskyIng]
const mixers = [colaIng, ojIng]
const garnish = [lemonIng]

export {alcohols, mixers, garnish};
export {vodkaIng, rumIng, ginIng, wineIng, tequillaIng, whiskyIng}
export {colaIng, ojIng}
export {lemonIng}