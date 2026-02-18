import React from 'react';
import { Search, Calendar, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Rechercher un artisan',
      description: 'Découvrez des artisans qualifiés près de chez vous en quelques clics. Filtrez par métier, localisation et disponibilité.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Réserver facilement',
      description: 'Contactez directement l\'artisan de votre choix, convenez d\'un rendez-vous et obtenez un devis personnalisé.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: CheckCircle,
      title: 'Profiter du service',
      description: 'Bénéficiez d\'un travail de qualité réalisé par des professionnels vérifiés et notez leur intervention.',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez et réservez un artisan en 3 étapes simples et rapides
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative"
                style={{
                  animation: `fadeIn 0.5s ease-in ${index * 0.2}s both`
                }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="card p-8 h-full bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-soft-pink to-beige rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à commencer votre projet ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez des milliers de clients satisfaits qui ont trouvé leur artisan idéal
            </p>
            <button className="btn-primary">
              Commencer ma recherche
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
