import React from 'react';
import { ThemeStyles } from './ThemeStyles.jsx';


export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {

    const [mode, setMode] = React.useState(ThemeStyles.dark)

    const toggleChange = (value) => {
        setMode(value)
    }

    return <ThemeContext.Provider value={{
        ThemeStyles,
        mode,
        toggleChange
    }}>
        {children}
    </ThemeContext.Provider>
}
