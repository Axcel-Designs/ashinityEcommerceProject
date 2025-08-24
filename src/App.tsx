import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main className='flex flex-col min-h-screen justify-between'>
        <Header />
        <div className='container mx-auto px-4 grow'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/productDetails' element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
