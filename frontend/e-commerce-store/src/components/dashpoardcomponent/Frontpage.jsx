import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Frontpage = () => {
  return (
    <>
      <section className="bg-gradient-to bg-gray-100 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                🔥 New Collection 2026
              </span>

              <h3 className="text-xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">


                <Typewriter
                  options={{
                    strings: ["Upgrade Your Shopping Experience."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>

              <p className="mt-6 text-gray-600 text-lg leading-8">
                Discover premium quality products at unbeatable prices. Shop the
                latest trends with fast delivery and secure payments—all in one
                place.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">
                  Shop Now
                </button>
<Link to="/product">
 <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition duration-300">
                  Explore Products
                </button>

</Link>
               
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center h-120">
              <img
                src="https://citrn.net/wp-content/uploads/2023/12/shopping-1.jpg"
                alt="Shopping"
                className="w-full max-w-md lg:max-w-lg rounded-3xl  object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frontpage;
