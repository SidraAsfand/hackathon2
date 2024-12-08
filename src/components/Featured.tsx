import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/1featur.png",
    },
    {
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/2featur.png",
    },
    {
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/3featur.png",
    },
    {
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/4featur.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className=" container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Featured Products
        </h2>

        {/* Product Row */}
        <div className="flex flex-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64 flex-shrink-0"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </div>

              {/* Product Details */}
              <div className="bg-blue-500 text-white p-4 text-center rounded-b-lg">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <div className="w-4 h-1 bg-pink-300"></div>
                  <div className="w-4 h-1 bg-yellow-300"></div>
                  <div className="w-4 h-1 bg-purple-300"></div>
                </div>
                <p className="text-sm mt-2">Code - {product.code}</p>
                <div className="text-lg font-bold mt-2">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
