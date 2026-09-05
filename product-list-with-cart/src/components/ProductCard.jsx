import styles from './ProductCard.module.css'

function ProductCard({ dessert, quantityInCart, onAddToCart, increaseQuantity, decreaseQuantity}) {
   return (
    <div className={`${styles.productCard} ${quantityInCart > 0 ? styles.productCardActive : ''}`}>
       <div className={styles.imageWrapper}>
        <img src={dessert.image.desktop} alt={dessert.name} />
         { quantityInCart === 0 ? (
    <button onClick={() => onAddToCart(dessert)} className={styles.btn}>
      <img src="/assets/images/icon-add-to-cart.svg" alt="" width="16" height="16" className={styles.cartIcon} />
      Add To Cart
    </button> 
) : (
            <div className={styles.quantityCart}>
            <button onClick={() => decreaseQuantity(dessert)} className={styles.quantityBtn}>-</button>
            <span>{quantityInCart}</span> 
            <button onClick={() => increaseQuantity(dessert)} className={styles.quantityBtn}>+</button> 
    </div>
         )}
        </div>

        <p className={styles.category}>{dessert.category}</p>
        <h3 className={styles.name}>{dessert.name}</h3>
        <p className={styles.price}>${dessert.price.toFixed(2)}</p>
    </div>
   )
}

export default ProductCard