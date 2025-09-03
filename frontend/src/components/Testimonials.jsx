import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../data/mock';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from students and parents who achieved success with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockData.testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="h-full hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-blue-200" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional testimonials */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-6 h-6 text-blue-200" />
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The home tutoring service was exceptional. My daughter improved from 60% to 85% in just 6 months."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Dr. Meena Singh</h4>
                <p className="text-sm text-gray-600">Parent, Class 10 Student</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-6 h-6 text-blue-200" />
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Best chemistry teacher in Delhi! Clear concepts, regular practice, and amazing results."
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">Vikash Yadav</h4>
                <p className="text-sm text-gray-600">NEET Qualified, AIR 4502</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;