import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Wrench } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Services': [
      'Trouver un artisan',
      'Devenir artisan',
      'Services pro',
      'Urgences 24/7'
    ],
    'Entreprise': [
      'À propos',
      'Carrières',
      'Presse',
      'Blog'
    ],
    'Support': [
      'Centre d\'aide',
      'Contact',
      'FAQ',
      'Signaler un problème'
    ],
    'Légal': [
      'Mentions légales',
      'CGU',
      'Confidentialité',
      'Cookies'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Wrench className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold">ArtisanConnect</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La plateforme de confiance qui met en relation les particuliers avec des artisans qualifiés près de chez vous.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span>contact@artisanconnect.fr</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                <span>Paris, France</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-lg">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="font-semibold mb-4 text-lg">Restez informé</h4>
            <p className="text-gray-400 mb-4">
              Recevez nos dernières actualités et offres exclusives
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-700 focus:border-primary focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors duration-300">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ArtisanConnect. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-sm">Site sécurisé SSL</div>
            <div className="text-sm">Paiement CB sécurisé</div>
            <div className="text-sm">Garantie 5 ans</div>
            <div className="text-sm">Certification ISO 9001</div>
            <div className="text-sm">Membre de la FFB</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
