/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales - Palette professionnelle
        'primary': '#2563EB',      // Bleu vif moderne
        'primary-dark': '#1E40AF',  // Bleu foncé
        'primary-light': '#3B82F6', // Bleu clair
        'secondary': '#F59E0B',     // Orange ambre
        'secondary-dark': '#D97706', // Orange foncé
        'secondary-light': '#FCD34D', // Orange clair
        
        // Couleurs d'accent - Palette bleue
        'accent': '#3B82F6',        // Bleu clair
        'accent-dark': '#2563EB',   // Bleu primaire
        'accent-light': '#60A5FA',  // Bleu très clair
        
        // Couleurs neutres - Palette grise
        'neutral-50': '#F9FAFB',
        'neutral-100': '#F3F4F6',
        'neutral-200': '#E5E7EB',
        'neutral-300': '#D1D5DB',
        'neutral-400': '#9CA3AF',
        'neutral-500': '#6B7280',
        'neutral-600': '#4B5563',
        'neutral-700': '#374151',
        'neutral-800': '#1F2937',
        'neutral-900': '#111827',
        
        // Couleurs de fond - Palette douce
        'bg-light': '#FAFBFC',      // Fond très clair
        'bg-medium': '#F8FAFC',      // Fond moyen
        'bg-dark': '#0F172A',       // Fond sombre
        
        // Couleurs de statut
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
