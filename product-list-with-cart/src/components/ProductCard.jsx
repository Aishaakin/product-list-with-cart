

function ProductCard({ dessert, quantityInCart, onAddToCart}) {
   return (
    <div className="product-card">
        <img src={dessert.image.desktop} alt={dessert.name} />
        <p className="category">{dessert.category}</p>
        <h3 className="name">{dessert.name}</h3>
        <p className="price">${dessert.price.toFixed(2)}</p>

        { quantityInCart === 0 ? (
            <button onClick={() => onAddToCart(dessert)}>Add To Cart</button> 
        ) : (
            <button>{quantityInCart}</button> 
        )}
    </div>
   )
}

export default ProductCard