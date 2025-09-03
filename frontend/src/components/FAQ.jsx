import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { mockData } from '../data/mock';

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our coaching programs and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional FAQs */}
          <Accordion type="single" collapsible className="space-y-4 mt-4">
            <AccordionItem 
              value="item-extra-1"
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline hover:text-blue-600 transition-colors duration-200">
                What teaching methodology do you follow?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                We follow a comprehensive approach combining conceptual understanding, regular practice, 
                doubt clearing sessions, and continuous assessment. Our methods are tailored to each 
                student's learning pace and style.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-extra-2"
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline hover:text-blue-600 transition-colors duration-200">
                Do you provide study materials?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                Yes, we provide comprehensive study materials including notes, practice sheets, 
                previous year papers, and mock tests. All materials are carefully curated and 
                regularly updated according to the latest syllabus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-extra-3"
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline hover:text-blue-600 transition-colors duration-200">
                How do you track student progress?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                We conduct regular tests, maintain detailed progress reports, and have monthly 
                parent-teacher meetings. Each student receives personalized feedback and improvement 
                suggestions based on their performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Get in touch with us directly 
              and we'll be happy to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open(mockData.contact.whatsapp, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => window.open(`tel:${mockData.contact.phone}`, '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;