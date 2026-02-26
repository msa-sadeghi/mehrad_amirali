import { createContext, useState } from "react"

const ThemeContext = createContext()
function ThemeProvider({children}){
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')     
    }

    const colors =  {
        light  :{
            background :'green',
            text : 'red'
        },
        dark  :{
            background :'blue',
            text : 'yellow'
        },
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, colors:colors[theme]}}>
            { children }
        </ThemeContext.Provider>
        
    )

}

export default ThemeProvider
export {ThemeContext}