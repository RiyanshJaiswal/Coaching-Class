import React from 'react';
import { Card, CardContent } from './ui/card';
import { Users, Heart, FileCheck, Award } from 'lucide-react';
import { mockData } from '../data/mock';

const Features = () => {
  const iconMap = {
    Users: Users,
    Heart: Heart,
    FileCheck: FileCheck,
    Award: Award
  };

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Ajay Coaching Classes?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and proven teaching methods set us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {mockData.features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <Card 
                key={feature.id} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Success Stats */}
        <div className="mt-16">
          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Our Success Track Record</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Student Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">90+</div>
                <div className="text-blue-100">Average Board Marks</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Students Taught</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;