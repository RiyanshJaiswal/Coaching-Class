import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Award, label: "15+ Years Experience", value: "Expert Teaching" },
    { icon: Users, label: "500+ Students", value: "Success Stories" },
    { icon: BookOpen, label: "All Subjects", value: "Class 1-12 & Competitive" }
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {mockData.hero.title}
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {mockData.hero.tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Empowering students from Class 1 to competitive exams with personalized coaching, 
            expert guidance, and proven teaching methods for exceptional academic results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              {mockData.hero.ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              onClick={() => window.open(mockData.contact.whatsapp, '_blank')}
            >
              Contact on WhatsApp
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;