import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Home, User, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const Services = () => {
  const iconMap = {
    Home: Home,
    User: User,
    Users: Users
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceDetails = {
    1: {
      benefits: ["Comfortable home environment", "Flexible scheduling", "One-on-one attention", "Customized pace"],
      ideal: "Perfect for students who prefer learning at home"
    },
    2: {
      benefits: ["Individual focus", "Tailored curriculum", "Immediate doubt clearing", "Progress tracking"],
      ideal: "Ideal for students needing extra attention"
    },
    3: {
      benefits: ["Peer learning", "Cost-effective", "Competitive environment", "Group discussions"],
      ideal: "Great for students who learn better in groups"
    }
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the learning format that suits your needs and learning style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            const details = serviceDetails[service.id];
            
            return (
              <Card 
                key={service.id} 
                className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {details.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-blue-700 font-medium">
                        {details.ideal}
                      </p>
                    </div>
                  </div>
                </CardContent>
                
                <div className="p-6 pt-0">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={scrollToContact}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Service is Right for You?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free consultation to discuss your learning needs and find the perfect coaching solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={scrollToContact}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => window.open(mockData.contact.whatsapp, '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;