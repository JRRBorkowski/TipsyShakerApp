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
                <div>First time image and text</div>
                <Button variant={"contained"} onClick={handleClose}>
                    Get started now!
                </Button>
            </div>
        </Modal>
    )
}

export default WelcomeScreen