import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to streamline your finances? Contact us today for a free consultation 
            and discover how we can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-slate-600 mb-8">
                We're here to help you navigate your financial journey. Whether you need 
                bookkeeping services, tax planning, or business advisory, our team is 
                ready to provide personalized solutions for your business.
              </p>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-800">Our Office</h4>
              
              {/* Harare Office */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800">Harare (Head Office)</h5>
                    <p className="text-slate-600 mt-1">
                      Suite 410, Electra House, 3rd Floor<br />
                      49 Samora Machel Avenue<br />
                      Harare, Zimbabwe
                    </p>
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-teal-600" />
                        <span className="text-slate-600">+263 77 688 9459</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-teal-600" />
                        <span className="text-slate-600">cirisbusinessworld@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              {/* Business Hours */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800">Business Hours</h5>
                    <div className="mt-2 space-y-1 text-slate-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-teal-600 mt-2">
                        Emergency support available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Request a Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="+263 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2 cursor-pointer">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 cursor-pointer border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="bookkeeping">Bookkeeping Services</option>
                  <option value="tax">Tax Planning & Compliance</option>
                  <option value="payroll">Company Secretarial Services</option>
                  <option value="advisory">Business Advisory</option>
                  <option value="audit">Audit & Assurance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your business needs and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-sm text-teal-700">
                <strong>Quick Response Guarantee:</strong> We respond to all inquiries within 24 hours. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Ready to Transform Your Business Finances?
            </h3>
            <p className="text-slate-600 mb-6">
              Join the number of SMEs across Southern Africa who trust us with their financial success. 
              Schedule your free consultation today and discover the Ciris Business World difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+263776889459"
                className="bg-teal-600 text-white px-8 py-3 rounded-none font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:cirisbusinessworld@gmail.com"
                className="bg-white text-teal-600 px-8 py-3 rounded-none font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
