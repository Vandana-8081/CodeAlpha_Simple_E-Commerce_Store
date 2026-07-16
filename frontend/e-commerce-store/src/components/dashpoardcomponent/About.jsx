import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="bg-blue-600 px-8 py-3 rounded-full text-lg font-semibold">
              About Us
            </span>

            <h1 className="text-5xl font-bold mt-8 leading-tight">
              Your Trusted
              <span className="text-blue-600"> Online Shopping</span>
              <br />
              Destination
            </h1>

            <p className="text-black mt-8 text-lg leading-8">
              ShopSmart provides high-quality products with secure
              payments, fast delivery, and an excellent shopping
              experience. We aim to make online shopping simple,
              affordable, and enjoyable for everyone.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-3">
                <span className="text-indigo-600 text-2xl">✓</span>
                <p>Premium Quality Products</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-indigo-600 text-2xl">✓</span>
                <p>Fast & Secure Delivery</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-indigo-600 text-2xl">✓</span>
                <p>Easy Returns & Refunds</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-indigo-600 text-2xl">✓</span>
                <p>24/7 Customer Support</p>
              </div>

            </div>

            {/* Features */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400"
                  className="rounded-xl h-28 w-full object-cover"
                  alt=""
                />
                <h3 className="mt-3 font-semibold">
                  10K+
                  <br />
                  Products
                </h3>
              </div>

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400"
                  className="rounded-xl h-28 w-full object-cover"
                  alt=""
                />
                <h3 className="mt-3 font-semibold">
                  Top
                  <br />
                  Brands
                </h3>
              </div>

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
                  className="rounded-xl h-28 w-full object-cover"
                  alt=""
                />
                <h3 className="mt-3 font-semibold">
                  Secure
                  <br />
                  Payment
                </h3>
              </div>

              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400"
                  className="rounded-xl h-28 w-full object-cover"
                  alt=""
                />
                <h3 className="mt-3 font-semibold">
                  Fast
                  <br />
                  Delivery
                </h3>
              </div>

            </div>

          </div>

          {/* Right Images */}

          <div className="grid grid-cols-2 gap-4">

            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700"
              className="rounded-xl object-cover h-\[620px]"
              alt=""
            />
            

            <div className="space-y-4">

              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700"
                className="rounded-xl object-cover h-\[300px]"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=700"
                className="rounded-xl object-cover h-\[300px]"
                alt=""
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;