import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const intialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children, store }) => {

    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(intialState);
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('ColorMode', color)
        setThemeSettings(false)
    }

    const handleClick = (state) => {
        console.log(state)
        setIsClicked({ ...intialState, [state]: true })
    }

    return (
        <StateContext.Provider
            value={{
                intialState,
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                currentColor, currentMode,
                setColor, setMode,
                themeSettings, setThemeSettings
            }}
            store={store}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)