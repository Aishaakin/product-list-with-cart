import styles from "./OrderConfirmModal.module.css"

function OrderConfirmModal ({cart, cartTotal, onStartNewOrder}) {

    return (
        <div>
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        <div className={styles.foodModal}>
         {cart.map(item => (
        <div key={item.name} className={styles.cartItem}>
        <div>
        <p className={styles.itemName}>{item.name}</p>
        <div className={styles.itemDetails}>
        <span className={styles.itemQty}>{item.quantity}</span>
        <span className={styles.itemPrice}>@{item.price.toFixed(2)}</span>
        <span className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
        </div>
        </div>
        ))}
        <div className={styles.orderTotal}>
        <span>Order Total</span>
        <span className={styles.totalAmount}>${cartTotal.toFixed(2)}</span>
        </div>
        <button className={styles.modalBtn} onClick={ ()=> onStartNewOrder()}>Start New Order</button>
            </div>
          
       
        </div>
    )
}

export default OrderConfirmModal