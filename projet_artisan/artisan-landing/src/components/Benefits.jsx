import React, { useState, useEffect, useRef } from 'react';
import { Shield, CreditCard, Headphones, Star } from 'lucide-react';

const Benefits = () => {
  const [counters, setCounters] = useState({
    satisfaction: 0,
    responseTime: 0,
    warranty: 0
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
            animateCounter('satisfaction', 98, 2000);
            animateCounter('responseTime', 24, 1800);
            animateCounter('warranty', 5, 2200);
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
      if (key === 'satisfaction') {
        currentValue = Math.floor(currentValue) + '%';
      } else if (key === 'responseTime') {
        currentValue = Math.floor(currentValue) + 'h';
      } else if (key === 'warranty') {
        currentValue = Math.floor(currentValue) + ' ans';
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

  const benefits = [
    {
      icon: Shield,
      title: 'Artisans vérifiés',
      description: 'Tous nos artisans sont soigneusement sélectionnés et leurs qualifications sont vérifiées.',
      features: ['Vérification d\'identité', 'Contrôle des qualifications', 'Assurance professionnelle']
    },
    {
      icon: CreditCard,
      title: 'Paiement sécurisé',
      description: 'Paiez en toute sécurité avec notre système de paiement protégé et garanti.',
      features: ['Paiement sécurisé SSL', 'Remboursement garanti', 'Pas de frais cachés']
    },
    {
      icon: Headphones,
      title: 'Support client',
      description: 'Notre équipe est disponible 7j/7 pour vous accompagner et répondre à vos questions.',
      features: ['Support 24/7', 'Conseils personnalisés', 'Médiation en cas de litige']
    },
    {
      icon: Star,
      title: 'Avis fiables',
      description: 'Lisez les avis authentiques de clients vérifiés pour faire le bon choix.',
      features: ['Avis vérifiés', 'Photos des réalisations', 'Commentaires détaillés']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-bg-light to-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous garantissons une expérience de confiance et de qualité pour tous vos projets
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="text-center group"
                style={{
                  animation: `fadeIn 0.5s ease-in ${index * 0.1}s both`
                }}
              >
                <div className="card p-6 h-full hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 text-left">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{hasAnimated ? counters.satisfaction : '0%'}</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{hasAnimated ? counters.responseTime : '0h'}</div>
              <div className="text-gray-600">Temps de réponse moyen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{hasAnimated ? counters.warranty : '0 ans'}</div>
              <div className="text-gray-600">Garantie sur nos travaux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
