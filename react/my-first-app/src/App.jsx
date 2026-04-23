import {BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
function App(){
  return (
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/user/:userId/:section?" element={<UserProfile/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    
  )

}

export default App;