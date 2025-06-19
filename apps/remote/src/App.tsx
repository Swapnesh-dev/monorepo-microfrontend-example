export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  🚀 New Feature Launch
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Build Amazing
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Digital Products
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your ideas into reality with our cutting-edge
                  platform. Join thousands of creators who trust us to bring
                  their vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Start Free Trial
                  <span className="ml-2">→</span>
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <span className="mr-2">▶</span>
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                <img
                  src="https://img.freepik.com/free-vector/dashboard-business-user-panel_23-2148356894.jpg?ga=GA1.1.1683302644.1733807432&semt=ais_hybrid&w=740"
                  alt="Product Dashboard"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      JD
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      SM
                    </div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      AL
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">2,500+ users</div>
                    <div className="text-gray-500">joined this week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you build, launch, and scale
              your projects faster than ever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Built for speed with optimized performance that scales with your
                needs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee and data
                protection.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Work together seamlessly with real-time collaboration and
                sharing tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Trusted by innovators worldwide
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 2020, we've been helping creators, entrepreneurs, and
                businesses build exceptional digital experiences. Our platform
                has powered over 10,000 successful projects across 50+
                countries.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-gray-600">Projects Launched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/authentic-small-youthful-marketing-agency_23-2150167428.jpg?ga=GA1.1.1683302644.1733807432&semt=ais_hybrid&w=740"
                alt="Team working"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What our customers say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Brand transformed our workflow completely. We launched our
                product 3x faster than expected with their amazing platform."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  SJ
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">CEO, StartupCo</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4">
                "The best investment we made this year. The ROI has been
                incredible and the support team is outstanding."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div>
                  <div className="font-semibold">Mike Rodriguez</div>
                  <div className="text-sm text-gray-500">CTO, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Simple, powerful, and reliable. Brand has everything we need to
                build and scale our digital products."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  AL
                </div>
                <div>
                  <div className="font-semibold">Anna Lee</div>
                  <div className="text-sm text-gray-500">
                    Founder, DesignStudio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Contact
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers and transform your business
              today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">hello@Brand.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-gray-600">
                      123 Innovation St, Tech City, TC 12345
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="space-y-4 mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Start Your Free Trial
                </h3>
                <p className="text-gray-600">
                  No credit card required. Get started in minutes.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Company"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                  <span className="ml-2">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold">Brand</span>
              </div>
              <p className="text-gray-400">
                Building the future of digital products, one innovation at a
                time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © 2024 Brand. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
