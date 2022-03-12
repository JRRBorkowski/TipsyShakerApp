import React, {useEffect, useState} from "react";
import {Button, Modal} from "@mui/material";
import style from "../../styles/WelcomeScreen.module.scss";
import {
    isWelcomeClicked,
    setLocalStorageWelcome
} from "./_localStorageRepository";

const WelcomeScreen = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setLocalStorageWelcome()
        setOpen(false);
    }
    useEffect(() => {
        if (isWelcomeClicked()) {
            setOpen(false)
        }
    },[])
    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={style.welcomeModal}
        >
            <div className={style.welcomeScreen}>
                <div>
                    <h2>Welcome to Tipsy Shaker app!</h2>
                    <p>This application lets you know what kind of drinks you can make from whatever you got in your disposition!</p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>How to use it? It's very simple. Click on the ingredients to select them and start <span>shaking up!</span> The final list of your recipes is going to show up below!</p>
                </div>
                <Button variant={"contained"} onClick={handleClose}>
                    Get started now!
                </Button>
            </div>
        </Modal>
    )
}

export default WelcomeScreen