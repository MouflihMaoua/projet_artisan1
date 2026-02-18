import React from 'react';
import { Star, MapPin, Calendar, Heart } from 'lucide-react';

const Artisans = () => {
  const artisans = [
    {
      id: 1,
      name: 'Marc Dubois',
      job: 'Plombier',
      city: 'Paris',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '1h'
    },
    {
      id: 2,
      name: 'Sophie Martin',
      job: 'Électricienne',
      city: 'Lyon',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '2h'
    },
    {
      id: 3,
      name: 'Thomas Bernard',
      job: 'Menuisier',
      city: 'Marseille',
      rating: 5.0,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '30min'
    },
    {
      id: 4,
      name: 'Emma Petit',
      job: 'Peintre',
      city: 'Bordeaux',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '1h'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-pink to-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artisans recommandés
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos professionnels les mieux notés, vérifiés et recommandés par nos clients
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="card group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-48 object-cover"
                />
                
                {/* Verified Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium">Vérifié</span>
                </div>

                {/* Heart Button */}
                <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Response Time */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-xs font-medium">Réponse {artisan.responseTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {artisan.name}
                </h3>
                <p className="text-primary font-medium mb-2">{artisan.job}</p>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {artisan.city}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(artisan.rating)}
                    <span className="text-sm font-medium ml-1">{artisan.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({artisan.reviews} avis)</span>
                </div>

                {/* CTA Button */}
                <button className="w-full btn-primary text-sm">
                  Voir le profil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-soft-red to-coral text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/50">
            Découvrir tous nos artisans
          </button>
        </div>
      </div>
    </section>
  );
};

export default Artisans;
