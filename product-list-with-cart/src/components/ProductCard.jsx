import styles from './ProductCard.module.css'

function ProductCard({ dessert, quantityInCart, onAddToCart, increaseQuantity, decreaseQuantity}) {
   return (
    <div className={styles.product_card}>
       
        <img src={dessert.image.desktop} alt={dessert.name} />
        <p className={styles.category}>{dessert.category}</p>
        <h3 className={styles.name}>{dessert.name}</h3>
        <p className={styles.price}>${dessert.price.toFixed(2)}</p>

        { quantityInCart === 0 ? (
            <button onClick={() => onAddToCart(dessert)}>Add To Cart</button> 
        ) : (
            <div className={styles.quantity_cart}>
            <button onClick={() => decreaseQuantity(dessert)}>-</button>
            <span>{quantityInCart}</span> 
            <button onClick={() => increaseQuantity(dessert)}>+</button> 
            
               </div>
        )}
    </div>
   )
}

export default ProductCard