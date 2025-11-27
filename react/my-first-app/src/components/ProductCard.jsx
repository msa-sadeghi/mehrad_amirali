function ProductCard({title, price, image, inStock}){
    return(
        <div style={{
            border:'2px solid #eee',
            padding:'15px',
            width:'250px',
            textAlign:'center'

        }}>
            <img src={image} alt={title} 
            style={{ width:'100%', height:'200px'}}
            />
            <h3>{title}</h3>
            <p>
                {price}تومان
            </p>
            {inStock ?  (
                <button
                style={{ fontSize:'24px', color:'#2ecc71'}}
                >add to basket</button>
            ):(<p style={{color:'red'}}>ناموجود</p>)}
        </div>
    )
}


export default ProductCard