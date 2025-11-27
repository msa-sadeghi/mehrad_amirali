import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
function App(){
  

  return(
    <div style={{display:'flex'}}>
    {/* <Greeting name="amir"/>
    <Greeting name="sara"/>
    <Greeting name="mary"/>
    <Greeting name="ali"/>
    <Greeting name="nikan"/> */}

    <UserCard
    name="sara"
    email="sara@gmail.com"
    age={25}
    city="teh"
    />
    <UserCard
    name="sara"
    email="sara@gmail.com"
    age={25}
    city="teh"
    />
    </div>
  )

}

export default App;