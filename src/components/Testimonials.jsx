import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Thabo Molefe',
      company: 'Molefe Construction Ltd',
      location: 'Johannesburg, South Africa',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Ciris Business World transformed our financial management completely. Their expertise in SME accounting helped us grow from a 5-person team to 50 employees while maintaining perfect compliance. Sarah and her team are simply exceptional.',
      results: '300% revenue growth, Zero compliance issues'
    },
    {
      name: 'Grace Mumbere',
      company: 'Kampala Tech Solutions',
      location: 'Harare, Zimbabwe',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Ciris Business World has been a game-changer for our tech startup. Their international expertise helped us navigate complex cross-border taxation when we expanded to three countries. Highly recommended!',
      results: 'Expanded to 3 countries, 40% cost savings on tax'
    },
    {
      name: 'James Ochieng',
      company: 'East African Logistics',
      location: 'Lusaka, Zambia',
      image: 'https://images.pexels.com/photos/3777900/pexels-photo-3777900.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The level of professionalism and attention to detail is outstanding. They helped us implement robust financial systems that scaled with our rapid growth. Their monthly reports give us the insights we need to make informed decisions.',
      results: 'Improved cash flow by 45%, Streamlined operations'
    },
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '50+', label: 'SMEs Served Successfully' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '4', label: 'Countries Served' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="text-teal-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Ciris Business World has helped SMEs across Southern Africa and beyond 
            achieve financial excellence and sustainable growth.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <h3 className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-6 right-6 text-teal-200">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-teal-600 font-medium text-sm">{testimonial.company}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="bg-teal-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-teal-800">
                  Key Results: {testimonial.results}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help your SME achieve the same level of financial excellence and growth. 
              Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-none hover:bg-teal-700 transition-colors duration-200">
                Schedule Free Consultation
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;