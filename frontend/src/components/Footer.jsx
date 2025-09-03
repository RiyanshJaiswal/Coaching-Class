import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    'Class 1-10 All Subjects',
    'Class 11-12 Chemistry',
    'JEE Chemistry',
    'NEET Chemistry'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ajay Coaching</h3>
                <p className="text-sm text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students from basics to brilliance with personalized coaching, 
              expert guidance, and proven results in academics and competitive exams.
            </p>
            <div className="flex space-x-2">
              <Button 
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open(mockData.contact.whatsapp, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                onClick={() => window.open(`tel:${mockData.contact.phone}`, '_self')}
              >
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Courses</h4>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {course}
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              size="sm"
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white mt-4"
              onClick={() => scrollToSection('#contact')}
            >
              Book Demo Class
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {mockData.contact.address}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <p className="text-gray-300 text-sm">{mockData.contact.phone}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <p className="text-gray-300 text-sm">{mockData.contact.email}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <p className="text-gray-300 text-sm">{mockData.contact.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ajay Coaching Classes. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Dedicated to educational excellence and student success.
            </p>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for quality education</span>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.open(mockData.contact.whatsapp, '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;