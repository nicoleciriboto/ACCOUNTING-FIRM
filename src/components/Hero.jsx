
import { ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-amber-50"></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              <Globe size={16} className="mr-2" />
              Serving SMEs Across Southern Africa & Beyond
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Unlock Your 
              <span className="block text-teal-600">Financial Potential</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
              We help businesses innovate and grow. We provide highly professional services in the areas of book-keeping, accounting, tax compliance, financial and management consultations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#services" className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-none hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a href='#footer' className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-none hover:bg-gray-50 transition-colors duration-200">
                Schedule Consultation
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mb-3">
                  <TrendingUp className="text-teal-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600 text-sm">SMEs Served</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-3">
                  <Users className="text-amber-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                  <Globe className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">4</h3>
                <p className="text-gray-600 text-sm">Countries</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/6863260/pexels-photo-6863260.jpeg"
                alt="Professional accounting team working"
                className="w-full h-90 rounded-none shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-teal-200 to-amber-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;