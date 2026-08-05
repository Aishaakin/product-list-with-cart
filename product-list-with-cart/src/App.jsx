import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import dataDessert from './data.json'
import Cart from "./components/Cart"
import './App.css'

import ProductList from './components/ProductList'

function App() {
  const [cart, setCart] = useState([])

   const cartTotal = cart.reduce((total, item) => {
      return total + item.price * item.quantity
   }, 0)

  const cartItemCount = cart.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  function onAddToCart(dessert) {
    const existingItem = cart.find(item => item.name === dessert.name)

    if (existingItem) {
      // when a user clicks a cart that is there already 
      // just increase it quantity than adding the whole cart property again
      setCart(cart.map(item => {
        if (item.name === dessert.name) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      }))
    } else {
      // if the cart is not there, add it whole property and upade it
      // quantity to 1
      setCart([...cart, { ...dessert, quantity: 1}])
    }
  }
  function increaseQuantity(dessert) {
    const existingItem = cart.find(item => item.name === dessert.name)

    if(existingItem) {
      setCart(cart.map(item => {
        if(item.name === dessert.name) {

        return { ...item, quantity: item.quantity + 1}
        }
        return item
      }))
    }
  }

  function decreaseQuantity(dessert) { 
  const existingItem = cart.find(item => item.name === dessert.name)

  if (existingItem.quantity > 1) {
    // if the qunatity in cart is more than 1
    setCart(cart.map(item => {
      if (item.name === dessert.name) {
        return { ...item, quantity: item.quantity - 1 }
      
      }
      return item
    })) 
  }   else {
    // quantity is exactly 1 so remove it from the cart entirely
    setCart(cart.filter(item => item.name !== dessert.name))
  }
}
  function removeFromCart(dessert) {
        setCart(cart.filter(item => item.name !== dessert.name))
        
       }

  return (
    <div className="app">
      <ProductList 
      dataDessert={dataDessert}
      cart={cart}
      onAddToCart={onAddToCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      
      />
      <Cart 
      cart={cart}
      cartTotal={cartTotal}
      removeFromCart={removeFromCart}
      /> 
    </div>
  )

}
 


export default App
