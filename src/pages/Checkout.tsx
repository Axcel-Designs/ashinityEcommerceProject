import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal } = useCart();
  const total = getCartTotal() + 10; 

  return (
    <div className="min-h-screen bg-white">
      {/* <Header onPageChange={onPageChange} /> */}
      <main className="pt-24 pb-8 px-4 md:px-12">
        <div className="flex items-center mb-8 space-x-2 cursor-pointer" onClick={() => navigate('/cart')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          <span className="text-sm">Back to Cart</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">CHECKOUT</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <nav className="flex space-x-4 mb-8 text-gray-500 font-medium">
              <span className="text-black">INFORMATION</span>
              <span>SHIPPING</span>
              <span>PAYMENT</span>
            </nav>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold mb-2">CONTACT INFO</h2>
                <div className="space-y-4">
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">SHIPPING ADDRESS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                  <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                    <option>Country</option>
                  </select>
                  <input type="text" placeholder="State / Region" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                  <input type="text" placeholder="Address" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                  <input type="text" placeholder="City" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                  <input type="text" placeholder="Postal Code" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
              </div>
              <button className="w-full flex items-center justify-between bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                <span>Shipping</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
          <aside className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">YOUR ORDER ({cart.length})</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4">
                  <img src={item.product.images[0]} alt={item.product.title} className="w-16 h-16 rounded-lg object-cover" onError={(e) => e.currentTarget.src = 'https://placehold.co/400x500/000000/FFFFFF?text=Image+Not+Found'} />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.product.title}</h3>
                    <p className="text-xs text-gray-500">{item.product.description}</p>
                    <p className="text-xs text-gray-500">Black/L ({item.quantity})</p>
                  </div>
                  <span className="font-medium text-sm">${item.product.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-300 mt-6 pt-6 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-black mt-4">
                <span>TOTAL</span>
                <span>${total}</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Checkout;