import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import GoTop from './components/ui/GoTop'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'

function App() {

  return (
    <>
      <main className='flex flex-col min-h-screen justify-between bg-[#f5f5f5]'>
        <Header />
        <div className='container mx-auto px-4 grow'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/products' element={<Products />} />
            <Route path={`/productDetails/:id`} element={<ProductDetails />} />
          </Routes>
        </div>
        <GoTop/>
        <Footer />
      </main>
    </>
  )
}

export default App
