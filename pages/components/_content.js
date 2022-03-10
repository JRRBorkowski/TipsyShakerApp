import React, {useEffect, useState} from "react";
import WelcomeScreen from "./_welcomeScreen";
import DrinksList from "./_drinksList";
import {allRecipes} from "./_recipes";
import styles from "../../styles/Home.module.css"
import Ingredients from "./_ingredients";
import IngredientsContext from "./_ingredientsContext";
import isEveryRequiredIngredientAvailable from "./_ingredientsChecker";
import {app, database} from "../../firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import checkAllRecipes from "./_recipesChecker";


const Content = () => {
    const [selectedIngredients, setIngredientsState] = useState([]);
    const [selectedRecipes, setRecipesState] = useState([]);
    const [recipesArray, setRecipesArray] = useState([]);

    useEffect(() => {
        checkAllRecipes(allRecipes, selectedIngredients, setRecipesState);
        getRecipes(recipesDatabase);
        console.log(recipesArray)
    }, [selectedIngredients]);

    const recipesDatabase = collection(database, "Recipe");
    const getRecipes = async (recipes) => {
        const docs = await getDocs(recipes)
            .then((recipes) => {
                setRecipesArray(
                    recipes.docs.map(
                        (item => {
                            return {...item.data(), id: item.id};
                        })
                    )
                )
            });
    };

    return (
        <div className={styles.main}>
            <WelcomeScreen/>
            <IngredientsContext.Provider value={{
                selectedIngredients,
                setIngredientsState,
            }}>
                <Ingredients/>
                <DrinksList drinks={selectedRecipes}/>
            </IngredientsContext.Provider>
        </div>
    )
}

export default Content