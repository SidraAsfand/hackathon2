import React from "react";

const Footer: React.FC = () => {
  return (
<>

  <footer className="text-gray-600 body-font bg-[#E7E4F8] py-10 border-t">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Company Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Hekto</h2>
          <form className="flex flex-col sm:flex-row items-center mb-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 border rounded-md sm:rounded-l-md text-sm focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-6 py-2 text-sm font-medium rounded-md sm:rounded-r-md mt-2 sm:mt-0">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-600">Contact Info</p>
          <p className="text-sm text-gray-600">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Laptops &amp; Computers</li>
            <li>Cameras &amp; Photography</li>
            <li>Smart Phones &amp; Tablets</li>
            <li>Video Games &amp; Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>
        {/* Customer Care Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Customer Care
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>
        {/* Pages Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>The Best Pages</li>
            <li>Virtual Composite Elements</li>
            <li>Woocommerce Pages</li>
          </ul>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 text-center">
        <p className="text-sm text-gray-600">©Webecy. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</>

    
  )};

export default Footer;

