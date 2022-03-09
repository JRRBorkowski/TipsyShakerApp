import React, {useEffect, useState} from "react";
import WelcomeScreen from "./_welcomeScreen";
import DrinksList from "./_drinksList";
import {allRecipes} from "./_recipes";
import styles from "../../styles/Home.module.css"
import Ingredients from "./_ingredients";
import IngredientsContext from "./_ingredientsContext";
import isEveryRequiredIngredientAvailable from "./_ingredientsChecker";
import { app, database } from "../../firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import checkAllRecipes from "./_recipesChecker";


const Content = () => {
    const [selectedIngredients, setIngredientsState] = useState([]);
    const [selectedRecipes, setRecipesState] = useState([]);

    useEffect(() => {
        checkAllRecipes(allRecipes, selectedIngredients, setRecipesState)
    }, [selectedIngredients])

    const recipesDatabase = collection(database, "Recipe");
    const getRecipes = (recipes) => {
        getDocs(recipes)
            .then(
                (data) => {
                console.log(data)
            })
    }

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