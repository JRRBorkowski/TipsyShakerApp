const modalVisibilitySettings = {
    true: "true",
    false: "false"
}

const clickedOnWelcomeKey = "clickedOnWelcome";

const setLocalStorageWelcome = () => {
    return localStorage.setItem(clickedOnWelcomeKey, modalVisibilitySettings.true);
}

const getLocalStorageWelcome = () => {
    return localStorage.getItem(clickedOnWelcomeKey)
}

const isWelcomeClicked = () => {
     return (getLocalStorageWelcome() === modalVisibilitySettings.true) ? true : false;
}

export {modalVisibilitySettings, setLocalStorageWelcome, getLocalStorageWelcome, isWelcomeClicked}