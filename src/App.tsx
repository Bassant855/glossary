import {useState} from 'react'
import './App.css'
import Banner from './components/Banner'
import Category from './components/Category'
import FeatuerSection from './components/FeatuerSection'
import Footer from './components/Footer'
import Form from './components/Form'
import Hero from './components/Hero'
import MobileNav from './components/MobileNav'
import Navbar from './components/Navbar'
import News from './components/News'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart'

function App() {

  const [showCart, setShowCart] = useState(false)

  return (
    <CartContextProvider>
       <main>
        <Navbar setShowCart={setShowCart}/>
        <MobileNav setShowCart={setShowCart}/>
        <Hero/>
        <Category/>
        <FeatuerSection />
        <Banner/>
        <News/>
        <Form/>
        <Footer/>
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
      </main>

    </CartContextProvider>
   
  )
}

export default App
