import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import UserCard from './components/UserCard'
import ProductCard from './components/ProductCard'
function App() {

  return (
    <div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
     {/* <Greeting name = "sara"/>
     <Greeting name = "reza"/>
     <Greeting name = "nikan"/> */}

     {/* <UserCard
     name="nikan sabouri"
     email="nikan@blalal.com"
     age={32}
     city="tehran"
     />
     <UserCard
     name="noyan sabouri"
     email="no@blalal.com"
     age={12}
     city="tehran"
     /> */}

     <ProductCard
     title="lenovo"
     price="100,000,000"
     image="image.png"
     inStock={true}
     />
     <ProductCard
     title="Apple"
     price="500,000,000"
     image="image.png"
     inStock={false}
     />
    </div>
  )
}

export default App
