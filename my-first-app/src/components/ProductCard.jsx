function ProductCard({title, price,image, inStock}){
    return(
        <div
        style={{
            border:'2px solid #eee',
            padding:'15px',
            width:'250px',
            textAlign:'center'
        }}
        >
            <img src={image} alt={title} 
            style={{width:'100%', height:'200px'}}
            />
            <h3>{title}</h3>
            <p>{price} toman</p>
            {inStock ? (
                <button
                style={
                    {backgroundColor:'#3498db', color:'white',
                        padding:'10px 20px'
                    }
                }>Add to basket</button>
            ) : (
                <p>Not found</p>
            )
        } 
        </div>
    )
}

export default ProductCard