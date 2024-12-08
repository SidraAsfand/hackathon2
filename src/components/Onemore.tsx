import React from "react";

const OneMore: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Upper Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          What Shopex Offer!
        </h2>
        {/* Display the cart items in a single column */}
        <div className="flex flex-row items-center gap-8">
          {Array(4)
            .fill("Item")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-md w-full max-w-md text-center"
              >
                <div className="mb-4">
                  {/* Placeholder icon/image */}
                  <div className="w-16 h-16 mx-auto bg-orange-200 rounded-full flex items-center justify-center text-lg text-orange-600 font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  24/7 Support
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* Lower Section */}
      <section className="bg-[#F2F0FF] py-16">
        <div className="p-8 flex flex-wrap md:flex-nowrap items-center gap-10">
          <div className="flex-1">
            {/* Product Image */}
            <img
              src="/images/stylishsofa.png"
              alt="Product"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at
                corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-8">
              <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
                Add To Cart
              </button>
              <p className="mt-2 text-sm text-gray-500">
                B&B Italian Sofa - $32.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneMore;
