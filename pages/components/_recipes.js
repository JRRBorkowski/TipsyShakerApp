import Recipe from "./_drinks";
import {alcohols, colaIng, lemonIng, ojIng, rumIng, vodkaIng, whiskyIng} from "./_ingredientsList";


export const vodkaShot = new Recipe(
    "Screwdriver",
    "url",
    "This is a shot of vodka",
    ["Vodka"],
    ["Orange juice"],
    [],
    "vodkavodkavodkavodkavodka"
);

export const vodkaCola = new Recipe(
    "Screwdriver with cola",
    "url",
    "This is a shot of vodka",
    ["Vodka"],
    ["Orange juice", "Cola"],
    [],
    "vodkavodkavodkavodkavodka"
);

export const rum = new Recipe(
    "Cuba Libre",
    "url",
    "This is a shot of rum",
    ["Rum"],
    ["Cola"],
    ["Lemon"],
    "what do we do with the drunken sailor?"
);

export const whisky = new Recipe(
    "Whisky with cola",
    "url",
    "This is whisky with cola",
    [whiskyIng],
    [colaIng],
    [],
    "whisky"
);

// export const allRecipes = [whisky, rum, vodkaShot, vodkaCola]