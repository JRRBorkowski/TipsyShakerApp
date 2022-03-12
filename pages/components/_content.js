import React, {useEffect, useState} from "react";
import WelcomeScreen from "./_welcomeScreen";
import DrinksList from "./_drinksList";
import styles from "../../styles/Home.module.scss"
import Ingredients from "./_ingredients";
import IngredientsContext from "./_ingredientsContext";
import {app, database} from "../../firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import checkAllRecipes from "./_recipesChecker";
import parseRecipesDTO from "./_parseRecipesDTO";


const Content = () => {
    const [selectedIngredients, setIngredientsState] = useState([]);
    const [selectedRecipes, setRecipesState] = useState([]);
    const [recipesArray, setRecipesArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRecipes(setRecipesArray);
    }, []);

    useEffect(() => {
        if (!loading) {
            console.log(recipesArray);
            checkAllRecipes(recipesArray, selectedIngredients, setRecipesState);
        }
    } ,[loading, selectedIngredients]);

    const getRecipes = async (setter) => {
        const recipesDatabase = collection(database, "Recipes");

        let docs = await getDocs(recipesDatabase);
        docs = docs.docs.map(item => {
            return {...item.data(), id: item.id};
        });
        docs = parseRecipesDTO(docs);
        setter(docs);
        setLoading(false);
        return docs;
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