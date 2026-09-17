import styles from "./OrderConfirmModal.module.css";

function OrderConfirmModal({ cart, cartTotal, onStartNewOrder }) {
  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img
            src={`${import.meta.env.BASE_URL}assets/images/icon-order-confirmed.svg`}
            alt="successful icon"
          />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
          <div className={styles.foodModal}>
            {cart.map((item) => (
              <div key={item.name} className={styles.cartItem}>
                <img
                  src={item.image.thumbnail}
                  alt={item.name}
                  className={styles.itemImage}
                />
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemQty}>{item.quantity}x</span>
                    <span className={styles.itemPrice}>
                      @ ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <span className={styles.itemTotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className={styles.orderTotal}>
              <span className={styles.total}>Order Total</span>
              <span className={styles.totalAmount}>
                ${cartTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <button className={styles.modalBtn} onClick={() => onStartNewOrder()}>
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmModal;
