import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to MyShop</h1>
            <p className="text-lg mb-8">Discover our latest collection of amazing products.</p>
            <Link to="/shop" className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product Cards */}

            {/* Example Product Card */}
            <div className="bg-white shadow-md rounded-md p-4">
              <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between">
                <span className="text-gray-800 font-semibold">$99.99</span>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between">
                <span className="text-gray-800 font-semibold">$99.99</span>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between">
                <span className="text-gray-800 font-semibold">$99.99</span>
                
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between">
                <span className="text-gray-800 font-semibold">$99.99</span>
              </div>
            </div>
            {/* End Example Product Card */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bottom-0 fixed w-full bg-gray-800 text-white py-8">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p>&copy; 2024 MyShop. All rights reserved.</p>
          <div className="flex">
            <Link to="/terms" className="text-gray-300 hover:text-white mx-4">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white mx-4">Privacy Policy</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white mx-4">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
