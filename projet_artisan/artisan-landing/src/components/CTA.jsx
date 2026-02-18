import React, { useState, useEffect, useRef } from 'react';
import { Wrench, Users, TrendingUp, Award } from 'lucide-react';

const CTA = () => {
  const [counters, setCounters] = useState({
    artisans: 0,
    growth: 0,
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
            // Animation des compteurs
            animateCounter('artisans', 1500, 2000);
            animateCounter('growth', 40, 1800);
            animateCounter('satisfaction', 4.9, 2200);
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
      if (key === 'artisans') {
        currentValue = Math.floor(currentValue) + '+';
      } else if (key === 'growth') {
        currentValue = '+' + Math.floor(currentValue) + '%';
      } else if (key === 'satisfaction') {
        currentValue = currentValue.toFixed(1) + '/5';
      }
      
      setCounters(prev => ({
        ...prev,
        [key]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const stats = [
    {
      icon: Users,
      key: 'artisans',
      label: 'Artisans partenaires'
    },
    {
      icon: TrendingUp,
      key: 'growth',
      label: 'Croissance mensuelle'
    },
    {
      icon: Award,
      key: 'satisfaction',
      label: 'Satisfaction artisans'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Wrench className="w-4 h-4" />
            Rejoignez notre communauté
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Devenez artisan partenaire
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Rejoignez des milliers d'artisans qui font confiance à notre plateforme pour développer leur activité
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
                style={{
                  animation: `fadeIn 0.5s ease-in ${index * 0.1}s both`
                }}
              >
                <Icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {hasAnimated ? counters[stat.key] : '0'}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Benefits List */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <ul className="space-y-3 text-left">
              {[
                'Accès à des clients qualifiés dans votre région',
                'Pas de commission sur vos premiers projets',
                'Profil personnalisé avec photos et réalisations',
                'Calendrier intégré pour gérer vos rendez-vous',
                'Support dédié pour vous accompagner'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Devenir artisan partenaire
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300">
            En savoir plus
          </button>
        </div>

        {/* Testimonial */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="w-5 h-5 text-secondary-light fill-secondary-light" />
              ))}
            </div>
            <p className="text-white/90 italic mb-4">
              "Grâce à cette plateforme, j'ai doublé mon chiffre d'affaires en 6 mois. Les clients sont qualifiés et le support est excellent."
            </p>
            <div className="text-white font-semibold">
              Marc Dubois - Électricien
            </div>
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

export default CTA;
