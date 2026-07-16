const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              ShopEasy
            </h2>

            <p className="mt-3 text-sm leading-6">
              ShopEasy is a simple e-commerce website where you can
              find quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/products" className="hover:text-white transition">
                  Products
                </a>
              </li>

              <li>
                <a href="/cart" className="hover:text-white transition">
                  Cart
                </a>
              </li>

              <li>
                <a href="/orders" className="hover:text-white transition">
                  Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <p>Email: support@shopeasy.com</p>
            <p className="mt-2">Phone: +91 98765 43210</p>
            <p className="mt-2">India</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} ShopEasy. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;