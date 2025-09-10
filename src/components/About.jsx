
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="text-teal-600" size={24} />,
      title: 'Client-Focused',
      description: 'Fostering customer-centric approach at every point of contact.'
    },
    {
      icon: <Target className="text-amber-600" size={24} />,
      title: 'Performance Oriented',
      description: 'Capitalizing our finance intelligence through effective actions that deliver guaranteed results.'
    },
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: 'Principles',
      description: 'In all our ventures, we are mainly steered by our ethics and you will see the consideration of it at every spot.'
    },
    {
      icon: <Eye className="text-blue-600" size={24} />,
      title: 'Transparency',
      description: 'We believe in clear communication and honest reporting at all times.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">Ciris Business World</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience serving SMEs across Southern Africa and beyond, 
            we've built our reputation on delivering exceptional financial solutions that 
            drive business growth and ensure regulatory compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Providing quality services in a manner that adds value to our clients'
              business whilst giving them opportunity of having peace of mind.
          
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be leaders in innovative financial services for SMEs, 
              recognized for our expertise and commitment 
              to client success in the global marketplace.
            </p>
          </div>

          {/* Story */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-700 leading-relaxed">
              Founded by passionate accountants who understood the unique challenges 
              facing SMEs in Africa, we've grown from a small practice to a trusted 
              partner for businesses across multiple countries.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600">
              These values guide every interaction and decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;