import React from "react";
import WelcomeScreen from "./_welcomeScreen";
import DrinksList from "./_drinksList";
import {rum, vodkaShot} from "./_recipes";
import styles from "../../styles/Home.module.css"

const Content = () => {
    return (
        <div className={styles.main}>
            <WelcomeScreen/>
            <div>List</div>
            <DrinksList drinks={[vodkaShot, rum]}/>
        </div>
    )
}

export default Content