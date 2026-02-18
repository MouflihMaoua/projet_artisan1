import React, { useState, useEffect, useRef } from 'react';
import { Star, MapPin, Calendar, Heart } from 'lucide-react';

const Artisans = () => {
  const [animatedStats, setAnimatedStats] = useState({
    totalArtisans: 0,
    avgRating: 0,
    totalReviews: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animation des statistiques
            animateCounter('totalArtisans', 150, 2000);
            animateCounter('avgRating', 4.8, 1800);
            animateCounter('totalReviews', 892, 2200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (key, target, duration) => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function pour une animation fluide
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      let currentValue = startValue + (target - startValue) * easeOutQuart;
      
      // Formatage spécial pour les différents types
      if (key === 'totalArtisans') {
        currentValue = Math.floor(currentValue) + '+';
      } else if (key === 'avgRating') {
        currentValue = currentValue.toFixed(1) + '/5';
      } else if (key === 'totalReviews') {
        currentValue = Math.floor(currentValue) + '+';
      }
      
      setAnimatedStats(prev => ({
        ...prev,
        [key]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

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
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '3h'
    },
    {
      id: 4,
      name: 'Marie Laurent',
      job: 'Peintre',
      city: 'Bordeaux',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '1h'
    },
    {
      id: 5,
      name: 'Pierre Durand',
      job: 'Couvreur',
      city: 'Lille',
      rating: 4.6,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '4h'
    },
    {
      id: 6,
      name: 'Isabelle Moreau',
      job: 'Jardinière',
      city: 'Toulouse',
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1544005173-66a20471c76fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '2h'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Artisans recommandés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos artisans vérifiés et notés par notre communauté
          </p>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {hasAnimated ? animatedStats.totalArtisans : '0'}
              </div>
              <div className="text-gray-600">Artisans actifs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {hasAnimated ? animatedStats.avgRating : '0'}
              </div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {hasAnimated ? animatedStats.totalReviews : '0'}
              </div>
              <div className="text-gray-600">Avis clients</div>
            </div>
          </div>
        </div>

        {/* Artisans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <div
              key={artisan.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{
                animation: `fadeIn 0.5s ease-in ${index * 0.1}s both`
              }}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary to-secondary">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
                {artisan.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Vérifié
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {artisan.name}
                    </h3>
                    <p className="text-gray-600">{artisan.job}</p>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {artisan.city}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(artisan.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-700 font-medium">
                      {artisan.rating}
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm">
                    {artisan.reviews} avis
                  </span>
                </div>

                {/* Response Time */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Réponse en {artisan.responseTime}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Contacter {artisan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Voir tous les artisans
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Artisans;
