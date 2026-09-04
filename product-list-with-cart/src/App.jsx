// import nav from '../components/Nav'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dessert from './pages/Dessert'
import About from './pages/About'

function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />}  />
    <Route path="/dessert" element={<Dessert />} />
  </Routes>
  </BrowserRouter>
 )
}


export default App
