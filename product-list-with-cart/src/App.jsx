import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import dataDessert from './data.json'
import './App.css'

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

}
 


export default App
