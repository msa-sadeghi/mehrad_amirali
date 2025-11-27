import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";
function App(){
  

  return(
    <div style={{display:'flex'}}>
    {/* <Greeting name="amir"/>
    <Greeting name="sara"/>
    <Greeting name="mary"/>
    <Greeting name="ali"/>
    <Greeting name="nikan"/> */}

    {/* <UserCard
    name="مریم"
    email="sara@gmail.com"
    age={25}
    city="teh"
    />
    <UserCard
    name="امیر"
    email="sara@gmail.com"
    age={25}
    city="teh"
    /> */}

    <ProductCard
    
    price="80,000,000"
    image="https://www.asus.com/WebsitesBanner/US/banners/55bn9zdhrldb8ayt/55bn9zdhrldb8ayt-0_0_tablet_0_2X.webp?webp"
    inStock={true}
    />
    <ProductCard
    title="لپ تاپ ایسر"
    price="80,000,000"
    image="https://www.asus.com/WebsitesBanner/US/banners/55bn9zdhrldb8ayt/55bn9zdhrldb8ayt-0_0_tablet_0_2X.webp?webp"
    inStock={false}
    />
    </div>
  )

}

export default App;