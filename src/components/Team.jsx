import React from 'react';
import { Linkedin, Mail, Award, GraduationCap, User} from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Francis Ciriboto',
      position: 'Founding Director',
      icon: <User className="text-teal-600" size={24}/>,
      qualifications: 'CPA',
      experience: '15+ years',
      specialties: ['Financial Auditing', 'Tax Planning', 'SME Advisory'],
      bio: 'Francis leads our firm with extensive experience in serving SMEs across Africa. He specializes in complex financial restructuring and international compliance.'
    },
    {
      name: 'Gladys Ciriboto',
      position: 'Financial Controller',
      icon: <User className='text-teal-600' size={24} />,
      qualifications: 'Bookkeeping',
      experience: '10+ years',
      specialties: ['Bookkeeping', 'Financial Analysis', 'Process Optimization'],
      bio: 'Gladys excels at implementing robust financial systems and providing actionable insights that drive business performance and growth.'
    },
    {
      name: 'Kocketts Muringani',
      position: 'Accountant',
      icon: <User className='text-teal-600' size={24} />,
      qualifications: 'B.Acc',
      experience: '3+ years',
      specialties: ['Financial Accounting', 'Auditing', 'Business Law'],
      bio: 'Kocketts is excellent at examining financial records and ensuring compliance with regulations.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-teal-600">Brains</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of highly qualified and experienced professionals brings together 
            decades of expertise in serving SMEs across Southern Africa and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg">
                  {member.icon}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {member.experience}
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{member.position}</p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <GraduationCap size={16} />
                    <span>{member.qualifications}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-md text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">

                  <button className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Credentials */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Excellence
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team holds prestigious professional qualifications and memberships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">CMA Members</h4>
              <p className="text-gray-600">Chartered Institute of Management Accountants</p>
            </div>


            <div className="group">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">CPA Qualified</h4>
              <p className="text-gray-600">Certified Public Accountants</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">ACCA Members</h4>
              <p className="text-gray-600">Association of Chartered Certified Accountants</p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Advanced Certifications</h4>
              <p className="text-gray-600">CIMA, B.Acc qualifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;