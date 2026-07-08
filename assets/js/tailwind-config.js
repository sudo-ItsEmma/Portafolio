/**
 * Configuración de Tailwind CSS para el Portafolio Profesional
 * Desarrollado por: Emmanuel Calderón
 * Descripción: Paleta y tipografía se apoyan en las variables CSS
 * definidas en assets/css/style.css (:root / .dark), para que el
 * cambio de tema claro/oscuro las actualice automáticamente.
 */

tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Atkinson Hyperlegible Next', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                'accent': 'var(--azul)',
                'teal': 'var(--teal)',
                'bg-light': 'var(--paper)',
                'text-light': 'var(--ink)',
                'bg-dark': 'var(--paper)',
                'text-dark': 'var(--ink)',
                'card-light': 'var(--paper-raised)',
                'card-dark': 'var(--paper-raised)',
            },
            borderRadius: {
                '2xl': '8px',
                '3xl': '10px',
            },
        }
    }
}
