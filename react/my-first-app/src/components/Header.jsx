import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

function Header(){
    const {theme, toggleTheme, colors} = useContext(ThemeContext)
    return (
        <header
        style={{
            backgroundColor:colors.background,
            color:colors.text,
            padding : '20px'
        }}  
        
        >
        <h1>My application</h1>
        <button
        style={{
            backgroundColor:colors.background,
            color:colors.text,
            border:'1px  solid red',
            padding:'10px 20px'
        }}
        onClick={toggleTheme}
        >Change theme</button>
        </header>
    )
}

export default Header