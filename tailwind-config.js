/**
 * Configuración de Tailwind CSS para el Portafolio Profesional
 * Desarrollado por: Emmanuel Calderón
 * Descripción: Define la paleta de colores personalizada, tipografía 'Inter'
 * y efectos de sombras dinámicas para los modos claro/oscuro.
 */

tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                'accent': '#6366f1',
                'bg-light': '#fefefe',
                'text-light': '#1f2937',
                'bg-dark': '#1a202c',
                'text-dark': '#e2e8f0',
                'card-light': '#ffffff',
                'card-dark': '#2d3748',
            },
            boxShadow: {
                'dynamic': '0 8px 30px rgba(0, 0, 0, 0.08)',
                'dynamic-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
                'dynamic-dark': '0 8px 30px rgba(255, 255, 255, 0.08)',
                'dynamic-dark-hover': '0 12px 40px rgba(255, 255, 255, 0.12)',
            }
        }
    }
}