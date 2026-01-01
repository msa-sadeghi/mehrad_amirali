import { useState } from "react";

function FruitsList(){
    const [searchTerm, setSearchTerm] = useState('')
     const products = [
        { id: 1, name: 'لپ‌تاپ ایسوس', price: 25000000 },
        { id: 2, name: 'موبایل سامسونگ', price: 15000000 },
        { id: 3, name: 'تبلت اپل', price: 20000000 },
        { id: 4, name: 'هدفون سونی', price: 3000000 },
        { id: 5, name: 'کیبورد لاجیتک', price: 2000000 }
            ];

    const filteredProducts = products.filter(product =>
         product.name.includes(searchTerm))
    return (
       <div>
        <input type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search for product"
        style={{
            padding:'10px',
            width:'300px',
            marginBottom : '20px',
            fontSize : '16px'
        }}/>

        <div>
            {
                filteredProducts.map((product)=>(
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>price : {product.price}</p>
                    </div>

                ))
            }
        </div>
       </div>
    )
}
export default FruitsList