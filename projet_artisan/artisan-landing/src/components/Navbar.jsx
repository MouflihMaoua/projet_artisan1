import React, { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MyArtisan
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Accueil
              </a>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Trouver un artisan
              </a>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Devenir artisan
              </a>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                À propos
              </a>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">
              Se connecter
            </button>
            <button className="btn-primary">
              S'inscrire
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Accueil
            </a>
            <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Trouver un artisan
            </a>
            <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Devenir artisan
            </a>
            <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              À propos
            </a>
            <a href="#" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
              Contact
            </a>
            <div className="pt-4 pb-3 border-t">
              <div className="flex items-center space-x-3 px-3">
                <button className="btn-secondary w-full">
                  Se connecter
                </button>
                <button className="btn-primary w-full">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
