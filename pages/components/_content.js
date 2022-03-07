import React, {useState} from "react";
import WelcomeScreen from "./_welcomeScreen";
import DrinksList from "./_drinksList";
import {rum, vodkaShot} from "./_recipes";
import styles from "../../styles/Home.module.css"
import Ingredients from "./_ingredients";
import IngredientsContext from "./_ingredientsContext";

const Content = () => {
    const [selectedIngredients, setIngredientsState] = useState([])

    return (
        <div className={styles.main}>
            <WelcomeScreen/>
            <IngredientsContext.Provider value={{
                selectedIngredients,
                setIngredientsState,
            }}>
                <Ingredients/>
                <DrinksList drinks={[vodkaShot, rum]}/>
            </IngredientsContext.Provider>
        </div>
    )
}

export default Content