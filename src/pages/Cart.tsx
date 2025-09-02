import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = 10;
  const total = subtotal + shipping;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-8 px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">SHOPPING BAG</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500">Your cart is empty.</div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex flex-col md:flex-row border-b pb-6 last:border-b-0 last:pb-0">
                    <img src={item.product.images[0]} alt={item.product.title} className="w-full md:w-1/3 h-60 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" onError={(e) => e.currentTarget.src = 'https://placehold.co/400x500/000000/FFFFFF?text=Image+Not+Found'} />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-lg font-medium">{item.product.title}</h2>
                          <p className="text-sm text-gray-500">{item.product.description}</p>
                          <p className="text-sm font-bold mt-2">${item.product.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.product.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="border rounded-full w-8 h-8 flex items-center justify-center">-</button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="border rounded-full w-8 h-8 flex items-center justify-center">+</button>
                        </div>
                        <span className="text-lg font-bold">${(item.product.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <aside className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">ORDER SUMMARY</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between font-bold text-lg text-black">
                <span>TOTAL <span className="text-xs text-gray-500">(TAX INCL.)</span></span>
                <span>${total}</span>
              </div>
            </div>
            <div className="mt-6">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded text-black focus:ring-black" />
                <span>I agree to the Terms and Conditions</span>
              </label>
            </div>
            <button
              onClick={() => navigate('../checkout')}
              className="mt-4 w-full bg-black text-white py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
              CONTINUE
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
};