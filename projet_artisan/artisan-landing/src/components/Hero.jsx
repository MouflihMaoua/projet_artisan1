import React, { useState } from 'react';
import { Search, MapPin, Calendar, Wrench, X } from 'lucide-react';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    job: '',
    city: '',
    date: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Données d'exemple d'artisans
  const artisansData = [
    {
      id: 1,
      name: 'Marc Dubois',
      job: 'Plombier',
      city: 'Paris',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80',
      verified: true,
      responseTime: '1h',
      available: true
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
      responseTime: '2h',
      available: true
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
      responseTime: '30min',
      available: false
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
      responseTime: '1h',
      available: true
    }
  ];

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simuler une recherche
    setTimeout(() => {
      const results = artisansData.filter(artisan => {
        const matchesJob = !searchData.job || 
          artisan.job.toLowerCase().includes(searchData.job.toLowerCase()) ||
          searchData.job.toLowerCase().includes(artisan.job.toLowerCase());
        const matchesCity = !searchData.city || 
          artisan.city.toLowerCase().includes(searchData.city.toLowerCase());
        return matchesJob && matchesCity;
      });
      
      setSearchResults(results);
      setShowResults(true);
      setIsSearching(false);
    }, 1000);
  };

  const closeResults = () => {
    setShowResults(false);
    setSearchResults([]);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/30"></div>
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Artisan au travail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Trouvez un artisan
            <span className="block text-soft-pink">de confiance près de chez vous</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Des professionnels vérifiés, disponibles rapidement pour tous vos projets de rénovation et d'entretien
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Job Search */}
            <div className="relative">
              <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Métier"
                value={searchData.job}
                onChange={(e) => setSearchData({...searchData, job: e.target.value})}
                className="input-field pl-10"
              />
            </div>

            {/* City Search */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ville"
                value={searchData.city}
                onChange={(e) => setSearchData({...searchData, city: e.target.value})}
                className="input-field pl-10"
              />
            </div>

            {/* Date Search */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={searchData.date}
                onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                className="input-field pl-10"
              />
            </div>

            {/* Search Button */}
            <button 
              onClick={handleSearch}
              disabled={isSearching}
              className="btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Recherche...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Rechercher</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-gray-600">Populaire :</span>
            {['Plombier', 'Électricien', 'Menuisier', 'Peintre', 'Climatisation'].map((job) => (
              <button
                key={job}
                onClick={() => setSearchData({...searchData, job})}
                className="text-sm bg-soft-pink text-gray-700 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                {job}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">1500+</div>
            <div className="text-gray-600">Artisans vérifiés</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-gray-600">Projets réalisés</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
        </div>

        {/* Search Results Modal */}
        {showResults && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {searchResults.length} artisan{searchResults.length > 1 ? 's' : ''} trouvé{searchResults.length > 1 ? 's' : ''}
                    </h3>
                    <p className="text-white/90">
                      {searchData.job && `${searchData.job} `}{searchData.city && `à ${searchData.city}`}
                    </p>
                  </div>
                  <button
                    onClick={closeResults}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map((artisan) => (
                      <div key={artisan.id} className="border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                          <img
                            src={artisan.image}
                            alt={artisan.name}
                            className="w-16 h-16 rounded-xl object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-gray-900">{artisan.name}</h4>
                              {artisan.available ? (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  Disponible
                                </span>
                              ) : (
                                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                  Indisponible
                                </span>
                              )}
                            </div>
                            <p className="text-primary font-medium text-sm mb-1">{artisan.job}</p>
                            <p className="text-gray-600 text-sm mb-2">
                              <MapPin className="w-3 h-3 inline mr-1" />
                              {artisan.city}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-1">
                                <span className="text-sm font-medium">{artisan.rating}</span>
                                <span className="text-yellow-400">★</span>
                                <span className="text-gray-500 text-xs">({artisan.reviews})</span>
                              </div>
                              <span className="text-gray-500 text-xs">
                                Réponse {artisan.responseTime}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="w-full mt-3 bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-xl text-sm font-medium hover:shadow-md transition-shadow">
                          Contacter
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Aucun artisan trouvé
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Essayez de modifier vos critères de recherche
                    </p>
                    <button
                      onClick={closeResults}
                      className="btn-secondary"
                    >
                      Modifier ma recherche
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
