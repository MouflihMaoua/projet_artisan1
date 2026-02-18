import React from 'react';
import { Wrench, Users, TrendingUp, Award } from 'lucide-react';

const CTA = () => {
  const stats = [
    {
      icon: Users,
      value: '1500+',
      label: 'Artisans partenaires'
    },
    {
      icon: TrendingUp,
      value: '+40%',
      label: 'Croissance mensuelle'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Satisfaction artisans'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-white/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Main Content */}
          <div className="mb-12">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous êtes artisan ?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Rejoignez notre plateforme gratuitement et développez votre activité avec des clients qualifiés
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
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&h=50&q=80"
                  alt="Artisan témoignage"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Marc Dubois</div>
                  <div className="text-white/80 text-sm">Plombier à Paris</div>
                </div>
              </div>
              <p className="text-white/90 italic">
                "Grâce à ArtisanConnect, j'ai augmenté mon chiffre d'affaires de 60% en 6 mois. Des clients sérieux et des projets intéressants !"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
