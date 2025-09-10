
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    'Bookkeeping Services',
    'Tax Compliance',
    'Financial Analysis',
    'Audit & Assurance',
    'International Services',
    'Business Advisory'
  ];

  const countries = [
    'South Africa',
    'Zimbabwe',
    'Zambia',
    'United Kingdom'
  ];

  return (
    <footer className="bg-gray-900 text-white" id='footer'>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src='./cirisLogo.png' alt="Ciris Logo" className="w-10 h-10" />

              <div>
                <h3 className="text-xl font-bold">Ciris</h3>
                <p className="text-sm text-gray-400">Business World</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering SMEs across Southern Africa and beyond with comprehensive 
              accounting solutions that drive growth and ensure compliance.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200">
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Area */}
          <div>
            <h3 className="text-xl font-bold mb-6">Coverage Area</h3>
            <ul className="space-y-3">
              {countries.map((country, index) => (
                <li key={index} className="text-gray-400">
                  {country}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Suite 410, Electra House, 3rd Floor</p>
                  <p>49 Samora Machel Avenue</p>
                  <p>Harare</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-teal-400" />
                <div className="text-gray-400">
                  <p>+263 77 688 9459</p>
                  <p>+263 77 254 3139</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-teal-400" />
                <div className="text-gray-400">
                  <p>cirisfinance@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-teal-400" />
                <div className="text-gray-400">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Ciris Business World. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;