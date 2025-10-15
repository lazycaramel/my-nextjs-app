import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <header className="px-8 py-6 sm:px-20">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">GROOMED</h1>
          <div className="flex gap-6">
            <a href="#products" className="text-slate-300 hover:text-white transition-colors">Products</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Content */}
        <section className="px-8 py-20 sm:px-20 text-center">
          <h2 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
            Elevate Your Style
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Premium hair care products designed specifically for the modern man
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-lg">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="px-8 py-20 sm:px-20 bg-slate-800">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Product 1 */}
            <div className="bg-slate-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="relative h-64 bg-slate-600">
                <img
                  src="https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=400&fit=crop"
                  alt="Hair Pomade"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Classic Pomade</h4>
                <p className="text-slate-300 mb-4">Strong hold with natural shine</p>
                <p className="text-white font-bold text-xl">$24.99</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-slate-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="relative h-64 bg-slate-600">
                <img
                  src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&h=400&fit=crop"
                  alt="Hair Clay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Matte Clay</h4>
                <p className="text-slate-300 mb-4">Textured finish with flexible hold</p>
                <p className="text-white font-bold text-xl">$26.99</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-slate-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div className="relative h-64 bg-slate-600">
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=400&fit=crop"
                  alt="Hair Wax"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Styling Wax</h4>
                <p className="text-slate-300 mb-4">Maximum control for any style</p>
                <p className="text-white font-bold text-xl">$22.99</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-8 py-20 sm:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-white mb-12">Why Choose GROOMED?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl mb-4">🌿</div>
                <h4 className="text-xl font-bold text-white mb-2">Natural Ingredients</h4>
                <p className="text-slate-300">Made with premium natural ingredients for healthy hair</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">💪</div>
                <h4 className="text-xl font-bold text-white mb-2">Long-Lasting Hold</h4>
                <p className="text-slate-300">All-day hold that keeps your style intact</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-bold text-white mb-2">Easy to Wash</h4>
                <p className="text-slate-300">No residue, rinses out clean every time</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-8 py-12 sm:px-20 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 GROOMED. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
