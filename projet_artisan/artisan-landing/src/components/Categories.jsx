import React from 'react';
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
  const categories = [
    {
      icon: Droplets,
      title: 'Plomberie',
      description: 'Fuites, installation, dépannage',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Mise aux normes, installation',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Hammer,
      title: 'Menuiserie',
      description: 'Meubles sur mesure, rénovation',
      color: 'from-amber-600 to-amber-800'
    },
    {
      icon: Paintbrush,
      title: 'Peinture',
      description: 'Intérieur, extérieur, décoration',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Wind,
      title: 'Climatisation',
      description: 'Installation, entretien',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Wrench,
      title: 'Multi-services',
      description: 'Petits travaux, entretien',
      color: 'from-gray-500 to-gray-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Catégories populaires
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez le professionnel parfait pour votre projet parmi nos catégories les plus demandées
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group cursor-pointer"
                style={{
                  animation: `fadeIn 0.5s ease-in ${index * 0.1}s both`
                }}
              >
                <div className="card p-8 h-full hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                    <span>Voir les artisans</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Voir toutes les catégories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
