import React from 'react'
import { Styles } from './Styles'



export const FAQContext = React.createContext();

export const FAQContextProvider = ({ children }) => {

    const [theme, setTheme] = React.useState(Styles.hide);

    const handleThemeChange = (value) => {
        setTheme(value)
    }

    return <FAQContext.Provider
        value={{
            Styles,
            theme,
            handleThemeChange
        }}>
        {children}
    </FAQContext.Provider>
}