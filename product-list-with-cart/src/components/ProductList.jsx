import ProductCard from './ProductCard'

function ProductList({ dataDessert, cart, onAddToCart, increaseQuantity, decreaseQuantity}) {


  return (
    <div className="product-list">
       {dataDessert.map(dessert => {
        const cartItem = cart.find(item => item.name === dessert.name)
        const quantityInCart = cartItem ? cartItem.quantity : 0

         // look through dessert in data.json
         // and produce a Productcard for each one
         return (
            <ProductCard 
            key={dessert.name}
            dessert={dessert}
            quantityInCart={quantityInCart}
            onAddToCart={onAddToCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
             />)
       })}

    </div>
  )
}

export default ProductList