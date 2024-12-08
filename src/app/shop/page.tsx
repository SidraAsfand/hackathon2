"use client";
import React from "react";
import Image from "next/image";
const ShopList = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}

      <header className="bg-purple-50  h-[286px flex items-center">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-[#111C85]">Shop List</h1>
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mt-2">
            <span className="text-[#727272]">Home</span>
            <span className="mx-2">›</span>
            <span className="text-[#727272]">Pages</span>
            <span className="mx-2">›</span>
            <span className="text-pink-500 font-semibold">Shop List</span>
          </p>
        </div>
      </header>

      {/* Content */}

      <main className="flex justify-center items-center min-h-[calc(100vh-128px)]">
        <div className="w-full max-w-5xl px-4 py-10">
          {/* Section Title */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-[#111C85]">
              Ecommerce Accessories & Fashion Item
            </h2>
            <div className="flex gap-4 items-center">
              <label className="text-sm text-gray-600">Per Page:</label>
              <input
                type="number"
                className="w-16 border rounded-md px-2 py-1 text-sm"
              />
              <label className="text-sm text-gray-600">Sort By:</label>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <label className="text-sm text-gray-600">View:</label>
              <div className="flex gap-2">
                <button className="w-8 h-8 border rounded-md flex items-center justify-center">
                  🗂
                </button>
                <button className="w-8 h-8 border rounded-md flex items-center justify-center">
                  📄
                </button>
                <input
                  type="number"
                  className="w-16 border rounded-md px-2 py-1 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="grid gap-6">
            {/* Product 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/shop1.png"
                alt="Product 1"
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex flex-row gap-26">
                  <h3 className="text-lg font-bold text-[#111C85]">
                    Accumsan tincidunt
                  </h3>
                  {/* Color Circles */}
                  <div className="flex space-x-2 mt-1 ml-16">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="text-sm font-bold">$26.00</span>
                  <span className="text-sm line-through text-pink-500 ml-2">
                    $52.00
                  </span>
                  {/* Star Ratings */}
                  <div className="flex items-center mt-0 ml-6 text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-300">⭐</span> {/* Less stars */}
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in pharetra.
                </p>
                <div className="flex mt-4 space-x-4">
                  <button className="text-gray-500 hover:text-purple-600">
                    🛒
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    🔍
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    ❤
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/shop2.png"
                alt="Product 2"
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex flex-row gap-26">
                  <h3 className="text-lg font-bold text-[#111C85]">In Nulla</h3>
                  {/* Color Circles */}
                  <div className="flex space-x-2 mt-1 ml-16">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="text-sm font-bold">$30.00</span>
                  <span className="text-sm line-through text-pink-500 ml-2">
                    $60.00
                  </span>

                  {/* Star Ratings */}
                  <div className="flex items-center mt-0 ml-6 text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-300">⭐</span> {/* Less stars */}
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in pharetra.
                </p>
                <div className="flex mt-4 space-x-4">
                  <button className="text-gray-500 hover:text-purple-600">
                    🛒
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    🔍
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    ❤
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/shop3.png"
                alt="Product 3"
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex flex-row gap-26">
                  <h3 className="text-lg font-bold text-[#111C85]">Vel Sem</h3>
                  {/* Color Circles */}
                  <div className="flex space-x-2 mt-1 ml-16">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="text-sm font-bold">$40.00</span>
                  <span className="text-sm line-through text-pink-500 ml-2">
                    $80.00
                  </span>
                  {/* Star Ratings */}
                  <div className="flex items-center mt-0 ml-6 text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-300">⭐</span> {/* Less stars */}
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in pharetra.
                </p>
                <div className="flex mt-4 space-x-4">
                  <button className="text-gray-500 hover:text-purple-600">
                    🛒
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    🔍
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    ❤
                  </button>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/shop4.png"
                alt="Product 4"
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex flex-row gap-26">
                  <h3 className="text-lg font-bold text-[#111C85]">
                    Porttitor cum
                  </h3>
                  {/* Color Circles */}
                  <div className="flex space-x-2 mt-1 ml-16">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="text-sm font-bold">$26.00</span>
                  <span className="text-sm line-through text-pink-500 ml-2">
                    $52.00
                  </span>
                  {/* Star Ratings */}
                  <div className="flex items-center mt-0 ml-6 text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-300">⭐</span> {/* Less stars */}
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in pharetra.
                </p>
                <div className="flex mt-4 space-x-4">
                  <button className="text-gray-500 hover:text-purple-600">
                    🛒
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    🔍
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    ❤
                  </button>
                </div>
              </div>
            </div>
            {/* Product 5 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/shop5.png"
                alt="Product 5"
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex flex-row gap-26">
                  <h3 className="text-lg font-bold text-[#111C85]">Nunc in</h3>
                  {/* Color Circles */}
                  <div className="flex space-x-2 mt-1 ml-16">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="text-sm font-bold">$26.00</span>
                  <span className="text-sm line-through text-pink-500 ml-2">
                    $52.00
                  </span>
                  {/* Star Ratings */}
                  <div className="flex items-center mt-0 ml-6 text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-300">⭐</span> {/* Less stars */}
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in pharetra.
                </p>
                <div className="flex mt-4 space-x-4">
                  <button className="text-gray-500 hover:text-purple-600">
                    🛒
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    🔍
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    ❤
                  </button>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/shop6.png"
                alt="Product 6"
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex flex-row gap-26">
                  <h3 className="text-lg font-bold text-[#111C85]">
                    Vitae facilisis
                  </h3>
                  {/* Color Circles */}
                  <div className="flex space-x-2 mt-1 ml-16">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="text-sm font-bold">$26.00</span>
                  <span className="text-sm line-through text-pink-500 ml-2">
                    $52.00
                  </span>
                  {/* Star Ratings */}
                  <div className="flex items-center mt-0 ml-6 text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-300">⭐</span> {/* Less stars */}
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in pharetra.
                </p>
                <div className="flex mt-4 space-x-4">
                  <button className="text-gray-500 hover:text-purple-600">
                    🛒
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    🔍
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    ❤
                  </button>
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/images/shop7.png"
                alt="Product 7"
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-4 flex-1">
                <div className="flex flex-row gap-26">
                  <h3 className="text-lg font-bold text-[#111C85]">
                    Curabitur lectus
                  </h3>
                  {/* Color Circles */}
                  <div className="flex space-x-2 mt-1 ml-16">
                    <span className="w-4 h-4 rounded-full bg-red-500"></span>
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  </div>
                </div>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="text-sm font-bold">$26.00</span>
                  <span className="text-sm line-through text-pink-500 ml-2">
                    $52.00
                  </span>
                  {/* Star Ratings */}
                  <div className="flex items-center mt-0 ml-6 text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span className="text-gray-300">⭐</span> {/* Less stars */}
                    <span className="text-gray-300">⭐</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in pharetra.
                </p>
                <div className="flex mt-4 space-x-4">
                  <button className="text-gray-500 hover:text-purple-600">
                    🛒
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    🔍
                  </button>
                  <button className="text-gray-500 hover:text-purple-600">
                    ❤
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-[200px] bg-gray-50 mt-10">
            <img
              src="/shop-list-bottom.png"
              alt="Centered Illustration"
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default ShopList;
