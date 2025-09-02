import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types/products';

export default function Products(){
  const { addToCart } = useCart();
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <div >
      <main className="pt-24 pb-8 px-4 md:px-12 flex flex-col md:flex-row gap-8">
        {/* Mobile Filters */}
        <div className="flex flex-col md:hidden">
          <div className="flex items-center justify-between text-lg font-bold mb-4">
            <span>Filters</span>
            <span className="text-gray-500 cursor-pointer" onClick={toggleFilters}>
              {showFilters ? 'Hide' : 'Show'}
            </span>
          </div>
          {showFilters && (
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-2 border rounded-full text-sm">NEW</span>
              <span className="px-4 py-2 border rounded-full text-sm">SHIRTS</span>
              <span className="px-4 py-2 border rounded-full text-sm">POLO SHIRTS</span>
              <span className="px-4 py-2 border rounded-full text-sm">JEANS</span>
            </div>
          )}
        </div>

        {/* Desktop Filters */}
        <aside className="w-full md:w-1/4 hidden md:block">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-bold">Size</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['XS', 'S', 'M', 'L', 'XL', '2X'].map(size => (
                  <span key={size} className="px-3 py-1 border rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors">{size}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold">Availability</h3>
              <div className="mt-2 space-y-1">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-black focus:ring-black" />
                  <span>Available (450)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-black focus:ring-black" />
                  <span>Out of Stock (10)</span>
                </label>
              </div>
            </div>
            {['Category', 'Colors', 'Price Range', 'Collections', 'Tags', 'Ratings'].map(section => (
              <div key={section} className="flex items-center justify-between border-t pt-4">
                <h3 className="font-bold">{section}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </aside>

        <section className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 md:mb-0">PRODUCTS</h1>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center text-gray-500 text-lg">Loading products...</div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {products.map(product => (
                <div key={product.id} className="group relative">
                  <img src={product.images[0]} alt={product.title} className="w-full h-80 object-cover rounded-lg" onError={(e) => e.currentTarget.src = 'https://placehold.co/400x500/000000/FFFFFF?text=Image+Not+Found'} />
                  <div className="mt-2 text-center">
                    <h3 className="text-sm md:text-base font-medium">{product.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 truncate">{product.description}</p>
                    <p className="mt-1 text-sm md:text-base font-bold">${product.price}</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-16 md:bottom-20 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-gray-100 transition-colors"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};



