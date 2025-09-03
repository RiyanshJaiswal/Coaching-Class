import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Modern Classroom",
      description: "Well-equipped classroom with latest teaching aids",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Interactive Learning",
      description: "Students engaged in interactive problem-solving sessions",
      category: "Teaching",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Study Materials",
      description: "Comprehensive study materials and practice sheets",
      category: "Resources",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Small Batch Classes",
      description: "Personalized attention in small group settings",
      category: "Teaching",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Achievement Board",
      description: "Board showing top performers and success stories",
      category: "Results",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Chemistry Lab",
      description: "Practical sessions for better understanding of concepts",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
    }
  ];

  const categoryColors = {
    "Facilities": "bg-blue-100 text-blue-600",
    "Teaching": "bg-green-100 text-green-600",
    "Resources": "bg-purple-100 text-purple-600",
    "Results": "bg-orange-100 text-orange-600"
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Learning Environment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our facilities, teaching methods, and successful learning atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={categoryColors[item.category]}>
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Visit Our Center
            </h3>
            <p className="text-gray-600 mb-6">
              Experience our learning environment firsthand. Schedule a visit to see our facilities 
              and meet our experienced faculty members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule a Visit
              </button>
              <button 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://wa.me/9999635215?text=I%20want%20to%20visit%20Ajay%20Coaching%20Classes', '_blank')}
              >
                WhatsApp for Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;