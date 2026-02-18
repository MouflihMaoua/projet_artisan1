import React, { useState, useEffect, useRef } from 'react';
import { 
  Droplets, 
  Zap, 
  Hammer, 
  Paintbrush, 
  Wind, 
  Wrench,
  ArrowRight 
} from 'lucide-react';

const Categories = () => {
  const [animatedStats, setAnimatedStats] = useState({
    totalCategories: 0,
    avgProjects: 0,
    satisfaction: 0
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
            animateCounter('totalCategories', 12, 2000);
            animateCounter('avgProjects', 847, 1800);
            animateCounter('satisfaction', 96, 2200);
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
      if (key === 'totalCategories') {
        currentValue = Math.floor(currentValue) + '+';
      } else if (key === 'avgProjects') {
        currentValue = Math.floor(currentValue) + '+';
      } else if (key === 'satisfaction') {
        currentValue = Math.floor(currentValue) + '%';
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

  const categories = [
    {
      icon: Droplets,
      title: 'Plomberie',
      description: 'Fuites, installation, dépannage',
      color: 'from-primary-light to-primary'
    },
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Mise aux normes, installation',
      color: 'from-secondary to-secondary-dark'
    },
    {
      icon: Hammer,
      title: 'Menuiserie',
      description: 'Meubles sur mesure, rénovation',
      color: 'from-neutral-600 to-neutral-700'
    },
    {
      icon: Paintbrush,
      title: 'Peinture',
      description: 'Intérieur, extérieur, décoration',
      color: 'from-secondary-light to-secondary'
    },
    {
      icon: Wind,
      title: 'Climatisation',
      description: 'Installation, entretien, réparation',
      color: 'from-accent-light to-accent'
    },
    {
      icon: Wrench,
      title: 'Réparation',
      description: 'Dépannage rapide, urgence 24/7',
      color: 'from-primary-light to-primary-dark'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Catégories populaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez l'artisan parfait pour chaque type de projet
          </p>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {hasAnimated ? animatedStats.totalCategories : '0'}
              </div>
              <div className="text-gray-600">Catégories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {hasAnimated ? animatedStats.avgProjects : '0'}
              </div>
              <div className="text-gray-600">Projets/mois</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {hasAnimated ? animatedStats.satisfaction : '0'}
              </div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  animation: `fadeIn 0.5s ease-in ${index * 0.1}s both`
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-gray-50 rounded-2xl p-6 shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vous ne trouvez pas votre catégorie ?
              </h3>
              <p className="text-gray-600">
                Contactez-nous et nous vous aiderons à trouver le bon artisan
              </p>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Contacter le support
            </button>
          </div>
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

export default Categories;
