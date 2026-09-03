import styles from './Cart.module.css'

function Cart({ cart, cartTotal, removeFromCart, onConfirmOrder }) {
    return (
        <div className={styles.cart}>
            <h2>Your Cart ({cart.length}) </h2>

            {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                    <img src="/assets/images/illustration-empty-cart.svg" alt="Empty Icon" />
                <p>Your added items will appear here</p>
        </div>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.name} className={styles.cartItem}>
                        <div>
                            <p className={styles.itemName}>{item.name}</p>
                            <div className={styles.itemDetails}>
                        <span className={styles.itemQty}>{item.quantity}x</span>    
                        <span className={styles.itemPrice}>@ ${item.price.toFixed(2)}</span> 
                        <span className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</span> 
                        </div>
                        </div>
                        <button onClick={() => removeFromCart(item)} className={styles.removeBtn}>×</button>
                   
                </div>
                  ))}
                  <div className={styles.orderTotal}>
                    <span>Order Total</span>
                    <span className={styles.totalAmount}>${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className={styles.carbonBanner}>
                    <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
                    This is a <strong>carbon-neutral</strong> delivery
                  </div>
                  <button className={styles.confirmBtn} onClick={() => onConfirmOrder()}>Confirm Order</button>
                  </div>
            )}
        </div>
    )
}

export default Cart