import Header from "./components/Header";
import Main from "./components/Main";
import ThemeProvider from "./components/ThemeProvider";


function App(){
  
  return (
    <ThemeProvider>
      <div>
        <Header/>
        <Main/>
      </div>
    </ThemeProvider>
  )

}

export default App;