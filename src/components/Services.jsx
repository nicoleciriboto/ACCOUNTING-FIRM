import React from 'react';
import { Calculator, FileText, TrendingUp, Shield, Globe, Users, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calculator className="text-white" size={32} />,
      title: 'Bookkeeping Services',
      description: 'Comprehensive daily financial record keeping and transaction management.',
      features: ['Daily transaction recording', 'Bank reconciliation', 'Accounts payable/receivable', 'Financial statements'],
      color: 'bg-teal-600'
    },
    {
      icon: <FileText className="text-white" size={32} />,
      title: 'Tax Compliance',
      description: 'Complete tax preparation and compliance services for all business types.',
      features: ['VAT returns', 'Income tax submissions', 'Acting as clients tax public relations officer', 'Tax planning'],
      color: 'bg-amber-600'
    },
    {
      icon: <TrendingUp className="text-white" size={32} />,
      title: 'Financial Analysis',
      description: 'In-depth financial analysis and reporting to drive business decisions.',
      features: ['Financial ratios', 'Cash flow analysis', 'Budget variance reports', 'Performance metrics'],
      color: 'bg-blue-600'
    },
    {
      icon: <Shield className="text-white" size={32} />,
      title: 'Audit & Assurance',
      description: 'Independent audit services to ensure financial integrity and compliance.',
      features: ['Financial audits', 'Management letters', 'Internal control reviews', 'Risk assessments'],
      color: 'bg-green-600'
    },
    {
      icon: <Globe className="text-white" size={32} />,
      title: 'Company Secretarial Services',
      description: 'Ensuring your business meets all statutory and regulatory requirements.',
      features: ['Company registrations', 'Company formations', 'Maintenance of statutory records', 'Assistance in setting up new companies'],
      color: 'bg-purple-600'
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: 'Business Advisory',
      description: 'Strategic business advice to help you grow and optimize operations.',
      features: ['Business planning', 'Process improvement', 'Financial modeling', 'Growth strategies'],
      color: 'bg-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive accounting and financial solutions tailored specifically for 
            small and medium enterprises across Southern Africa and international markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105">
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-teal-600 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business Finances?
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let our experienced team help you streamline your accounting processes, 
              ensure compliance, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-none hover:bg-teal-700 hover:text-white transition-colors duration-200">
                Get Free Consultation
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;