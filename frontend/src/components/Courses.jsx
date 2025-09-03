import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BookOpen, Users, Clock, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mock';

const Courses = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching programs designed to excel in academics and competitive exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockData.courses.map((course) => (
            <Card 
              key={course.id} 
              className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600">
                    {course.subtitle}
                  </Badge>
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {course.title}
                </CardTitle>
                <p className="text-gray-600">{course.description}</p>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What's Covered:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Small Batches
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Flexible Timing
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className="p-6 pt-0">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={scrollToContact}
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Academic Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Proven track record of students achieving 90+ marks in board exams
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Competitive Success</h4>
                <p className="text-gray-600 text-sm">
                  Many students cleared JEE and NEET with top ranks
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Approach</h4>
                <p className="text-gray-600 text-sm">
                  Individual attention and customized study plans for each student
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Regular Assessment</h4>
                <p className="text-gray-600 text-sm">
                  Weekly tests and monthly progress tracking with detailed feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;