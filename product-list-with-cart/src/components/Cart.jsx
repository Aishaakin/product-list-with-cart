function Cart({ cart, cartTotal, removeFromCart }) {
    return (
        <div className="cart">
            <h2>Your Cart ({cart.length}) </h2>

            {cart.length === 0 ? (
                <p>Your added items will appear here</p>

            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.name}>
                        <span>{item.name}</span>    
                        <span>{item.quantity}X</span> 
                        <span>${(item.price * item.quantity).toFixed(2)}</span> 
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                  
                </div>
                  ))}
                  <p>Order Total: ${cartTotal.toFixed(2)}</p>
                  </div>
            )}
        </div>
    )
}

export default Cart